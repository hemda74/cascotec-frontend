import type { NextPage } from 'next';
import styles from '../styles/MfaLogin.module.css';
import Head from 'next/head';
import Image from 'next/image';
import Logo from '../components/Logo';
import MfaCodeInput from '../components/MfaCodeInput';
import MfaIconPrime from '../public/icons/mfa-icon-primary.svg';
import LocalizationBtn from '../components/LocalizationBtn';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAppDispatch } from '../app/hooks';
// import { disableMfaLogin } from '../features/user';
import UserService from '../servcies/UserService';
import getCookie from '../helper/getCookie';
import deleteCookie from '../helper/deleteCookie';

const mfa_login: NextPage = () => {
  // Assigning useRouter to a variable to use it.
  const router = useRouter();
  // declaring 2 states to handle post request responses.
  const [isPending, setIsPending] = useState(false);
  const [isError, setIsError] = useState(false);
  // declaring dispatch hook in a variable.
  const dispatch = useAppDispatch();
  //  a handle funtion to handle mfa login.
  const handleMfaLogin = () => {
    setIsPending(true);
    setIsError(false);
    const mfaToken = getCookie('mfa_token');
    const mfaCode = document.getElementById('mfaCodeInput') as HTMLInputElement;
    UserService.userMfaCodeSend(mfaCode.value, mfaToken)
      .then(response => {
        if (response.status === 200) {
          setIsPending(false);
          // after successful mfa code request we set mfa login state to false
          // and redirect user to it's distination.
          // dispatch(disableMfaLogin());
          deleteCookie('mfa_token', '/', '');
          document.cookie = `access_token=${response.data.token.access}; path=/`;
          document.cookie = `refresh_token=${response.data.token.refresh}; path=/`;
          router.push('/itr-admin');
          console.log(response.data);
        } else {
          setIsPending(false);
          setIsError(true);
        }
      })
      .catch(err => {
        setIsPending(false);
        setIsError(true);
      });
  };

  // a logical funtion to handle mfa token expireies.
  const handleMfaToken = () => {
    setTimeout(() => {
      deleteCookie('mfa_token', '/', '');
    }, 30 * 1000);
  };
  // on first render we will activate the handleMfaToken func.
  useEffect(() => {
    handleMfaToken();
  }, []);

  return (
    <>
      <Head>
        <title>TicoSys | MFA Login</title>
      </Head>
      <div>
        <div
          id="login-holder"
          className="container-fluid vh-100 overflow-hidden p-0">
          <div
            id="login-holder-backdrop"
            className="row align-items-center vh-100">
            <div className="col-4 d-block"></div>
            <div className="col-4">
              <div className="card border-primary">
                <div className="card-body p-0">
                  <div className="d-flex align-items-center justify-content-center mt-3">
                    {/* width and height */}
                    {Logo(164.08, 66.86)}
                  </div>
                  <div className="d-flex flex-column pe-5 ps-5 pt-3">
                    <span
                      className="fw-semibold fs-3 text-center mt-4"
                      data-trans="multiFactoAuthentication">
                      Multi Factor Authentication
                    </span>
                    <div className="mb-4 mt-4 text-center">
                      <Image
                        src={MfaIconPrime}
                        alt="key icon"
                        width={150}
                        height={150}
                      />
                    </div>
                    <div className="form-group mt-5">
                      <div>{MfaCodeInput()}</div>
                      {isError && (
                        <span className="myDanger-Text">
                          Multi Factor Authentication code is incorrect
                        </span>
                      )}
                    </div>
                    <div className="d-grid gap-2 mt-4 mb-5">
                      <button
                        className={`btn btn-lg myPrimary fw-semibold ${styles.loginBtn}`}
                        type="button"
                        onClick={() => handleMfaLogin()}
                        disabled={isPending}>
                        {!isPending && (
                          <span data-trans="loginNow">Login Now</span>
                        )}
                        {isPending && <span>Loading...</span>}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-2 d-block"></div>
            <div className="col-2 d-flex justify-content-center vh-100">
              <LocalizationBtn />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default mfa_login;
