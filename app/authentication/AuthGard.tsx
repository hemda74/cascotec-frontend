import React, { ReactNode, useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import {
  isAdminAuth,
  isSuperUser,
  userDataSelector,
  userTokenFetchData,
  userTokens,
  userIsRouting,
  userIsNotRouting,
} from '../features/user';
import { useRouter } from 'next/router';
import { publicRoutes, adminRoutes } from '../helper/routesHelper';
import getCookie from '../helper/getCookie';
import deleteCookie from '../helper/deleteCookie';
import UserService from '../servcies/UserService';

// a alias type for auth gard props.
type AuthGardProps = {
  children?: ReactNode;
};

// auth gard is used for user authentication depending on the current url.
const AuthGard = ({ children }: AuthGardProps) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  // importing data from store.
  const { userData, isAdmin, mfaLogin, accessToken, refreshToken, isRouting } =
    useAppSelector(userDataSelector);
  const dispatch = useAppDispatch();
  // using Next router to navigate.
  const router = useRouter();

  // a logical funtion to handle token refresh if the access token expired.
  const handleRefreshToken = async () => {
    const token = {
      refresh: getCookie('refresh_token'),
    };
    await UserService.userRefreshToken(token)
      .then(response => {
        if (response.status === 200) {
          // we delete the old one and set the new token. and activate a refresh loob every day.
          // to ensure that the token will alwayes be valid as long as the user did not logout.
          deleteCookie('access_token', '/', '');
          deleteCookie('refresh_token', '/', '');
          document.cookie = `access_token=${response.data.access}; path=/`;
          document.cookie = `refresh_token=${response.data.refresh}; path=/`;
          const tokensObj = {
            accessToken: response.data.access,
            refreshToken: response.data.refresh,
          };
          dispatch(userTokens(tokensObj));
          dispatch(userIsNotRouting());
          setTimeout(handleRefreshToken, 1000 * 60 * 59 * 24);
        }
      })
      .catch(err => {
        // if the refresh token is expired then we will delte the access and refesh token
        // then we will redirect the user to the login page.
        deleteCookie('access_token', '/', '');
        deleteCookie('refresh_token', '/', '');
        router.replace('/');
        const tokensObj = {
          accessToken: undefined,
          refreshToken: undefined,
        };
        dispatch(userTokens(tokensObj));
        dispatch(userIsNotRouting());
      });
  };

  // here is a funtion to handle user routes check depending on his role.
  const handleRoutesChecks = () => {
    // here we need changes =========================================>>>>>>>>>>>>>>>>>
    if (adminRoutes.includes(router.asPath) && !isAdmin) {
      router.replace('/');
    }
  };
  // a handle funtion to handle user auth depend on his role.
  const handleUserAuthes = () => {
    if (Object.entries(userData).length !== 0) {
      if (
        userData.user.user_rule === 'is_it_ranks_admin' ||
        userData.user.user_rule === 'is_tico_sys_staff'
      ) {
        dispatch(isAdminAuth());
        if (userData.user.is_superuser === true) {
          dispatch(isSuperUser());
        }
      }
    }
  };

  const handleUserDataAndRoutes = async () => {
    // if router path is not public then we go throw some checks.
    if (!publicRoutes.includes(router.asPath)) {
      // whenever the app is accessed if there is token then w fetch the data.
      if (accessToken) {
        const tokenObj: object = {
          token: accessToken,
        };
        console.log(7);

        await dispatch(userTokenFetchData(tokenObj));
        handleUserAuthes();
      } else {
        // handleRoutesChecks();
      }
    }
  };
  // an effect runs on every time the user data changes.
  useEffect(() => {
    handleUserAuthes();
  }, [Object.entries(userData).length]);

  // here is a effect hook will run on every route as router pathename is the dependancie.
  // all the logics are going to be checked before any children component renders.
  useEffect(() => {
    if (!accessToken || !refreshToken) {
      setIsLoading(true);
      if (getCookie('access_token') && getCookie('refresh_token')) {
        const tokensObj = {
          accessToken: getCookie('access_token'),
          refreshToken: getCookie('refresh_token'),
        };
        const tokenObj: object = {
          token: getCookie('access_token'),
        };
        dispatch(userTokens(tokensObj)).unwrap();
        dispatch(userTokenFetchData(tokenObj));

        console.log(1);
      } else {
        if (getCookie('mfa_token')) {
          router.replace('/mfa_login');
          setIsLoading(false);
        } else if (
          !getCookie('mfa_token') &&
          router.pathname === '/mfa_login'
        ) {
          router.replace('/');
          setIsLoading(false);
        } else if (!publicRoutes.includes(router.asPath)) {
          if (router.pathname !== '/404') {
            router.replace('/');
            setIsLoading(false);
          }
        }
      }
    }
    if (accessToken) {
      const token = {
        token: accessToken,
      };
      UserService.userTokenVerfiy(token)
        .then(response => {
          if ((response.status = 200)) {
            if (isRouting) handleRefreshToken();
            handleUserDataAndRoutes();
            setIsLoading(false);
            console.log(2);
          }
        })
        .catch(err => {
          if (refreshToken && isRouting) {
            handleRefreshToken();
            handleUserDataAndRoutes();
            setIsLoading(false);
            console.log(3);
          } else {
            deleteCookie('access_token', '/', '');
            const tokensObj = {
              accessToken: undefined,
              refreshToken: undefined,
            };
            dispatch(userTokens(tokensObj));
            console.log(4);

            router.replace('/');
            setIsLoading(false);
          }
        });
    }
    setIsLoading(false);
  }, [router.asPath]);

  if (isLoading) {
    return <div>Loading..</div>;
  }

  return <>{children}</>;
};

export default AuthGard;
