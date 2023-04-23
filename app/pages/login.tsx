import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Login.module.css';
import Logo from '../components/Logo';
import InputEmail from '../components/InputEmail';
import InputPassword from '../components/InputPassword';
import Link from 'next/link';
import DomainSelect from '../components/DomainSelect';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { userLogin, userDataSelector } from '../features/user';
import LocalizationBtn from '../components/LocalizationBtn';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import deleteCookie from '../helper/deleteCookie';
import getCookie from '../helper/getCookie';
import OpeningSoon from '../components/OpeningSoon';

const Login: NextPage = () => {
  // binding useDispatch to dispatch.
  const dispatch = useAppDispatch();
  // graping user data from the store.
  const { userData, pending, error } = useAppSelector(userDataSelector);

  // declaring next/router in variable to use it in the component.
  const router = useRouter();

  // a function to grap user email an password and pass it to userlogin action.
  const handleUserInputs = () => {
    let userEmail = document.getElementById('emailInput') as HTMLInputElement;
    let userPassword = document.getElementById(
      'passwordInput'
    ) as HTMLInputElement;
    let userInputs: object = {
      email: userEmail.value,
      password: userPassword.value,
    };
    return userInputs;
  };

  // a handle function to redirect user based on his role.
  const handleUserRedirect = () => {
    router.push('/tenant-admin');
  };
  // a UseEffect hook watchs when the userData state changes it invokes handleUserRedirect func.
  useEffect(() => {
    // checking if userData object is not empty.
    // if (Object.entries(userData).length !== 0) {
    // handleUserRedirect();
    // }
  }, [userData]);

  return (
    <>
      <Head>
        <title>CASCO | Login</title>
      </Head>
      {/* <div
        id="login-holder"
        className={`container-fluid d-flex align-items-center justify-content-center vh-100  ${styles.containerLogin}`}> 
        <div
          id="login-holder-backdrop"
          className=" container d-flex align-items-center justify-content-center mt-5 ">
          <div className="col-xl-5 col-lg-5 col-md-8 col-sm-12 col-xs-12">
            <div className="card border-primary">
              <div className="card-body p-0">
              <div className="d-flex align-items-center justify-content-between mt-3 me-5 ms-5">
                  {/* width and height 
                  {Logo(200, 100)}
                <div className={``}>
                 <LocalizationBtn />
                 </div>
                 </div>
                <div className="d-flex flex-column pe-5 ps-5 pt-3">
                  <span className="fs-6" >
                    Welcome back
                  </span>
                  <span
                    className="fw-bold fs-4"
                    >
                    Login To Your Account
                  </span>
                  <div className="form-group">
                    <label className="form-label mt-3" >
                      Email
                    </label>
                    <div>{InputEmail({ placeholder: true })}</div>
                    <label className="form-label mt-3" >
                      Password
                    </label>
                    <div>
                      <InputPassword />
                    </div>
                  </div>
                  <div className="d-flex justify-content-between flex-wrap">
                    <Link className='' href="forgetpassword">
                      <a>
                        <span >
                          forget password?
                        </span>
                      </a>
                    </Link>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="rememberMeCheckBox"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="rememberMeCheckBox"
                        >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label mt-3" >
                      Domain Name
                    </label>
                    <DomainSelect />
                  </div>
                  {error && (
                    <span
                      className="myDanger-Text text-center mt-2"
                      >
                      Email or password is incorrect!
                    </span>
                  )}
                  <div className="d-grid gap-2 mt-2 mb-5">
                    <button
                      className={`btn btn-lg myPrimary fw-semibold ${styles.loginBtn}`}
                      type="button"
                      onClick={() => {
                        dispatch(userLogin(handleUserInputs()));
                        handleUserRedirect();
                      }}
                      disabled={pending}>
                      {!pending && <span className='text-white' >Login Now</span>}
                      {pending && <span className='text-white'>Loading...</span>}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <OpeningSoon/>
    </>
  );
};

export default Login;
