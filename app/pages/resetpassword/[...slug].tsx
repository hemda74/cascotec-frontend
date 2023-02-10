import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import ResetIcon from '../../public/icons/reset-icon.svg';
import Logo from '../../components/Logo';
import InputResetPassword from '../../components/InputResetPassword';
import styles from '../../styles/ResetPassword.module.css';
import { useRouter } from 'next/router';
import LocalizationBtn from '../../components/LocalizationBtn';
import UserService from '../../servcies/UserService';
import validatePassword from '../../helper/validatePassword';
import { useState, useEffect } from 'react';
import transScript from '../../helper/transScript';
import indexTrans from '../../localization/index.trans';

const resetpassword: NextPage = () => {
  // on every render make sure that web app is localized.
  useEffect(() => {
    let lang = localStorage.getItem('lang');
    if (lang === null || lang === undefined) {
      localStorage.setItem('lang', 'en');
    } else {
      transScript(indexTrans);
    }
  });

  const [isPassError, setIsPassError] = useState(false);
  const [isPassMatchError, setIsPassMatchError] = useState(false);
  const [isPending, setIsPending] = useState(false);
  // declaring next/router in variable to use it in the component.
  const router = useRouter();
  // resetPassObject Alias, this will be passed to api post request.
  type resetPassObj = {
    [key: string]: string;
  };

  const handleResetPass = (): void => {
    setIsPending(true);
    // catching the url params "/resetpassword/uid/token".
    const slug: any = router.query.slug;
    // first part of the slug is the uid.
    const uid: string = slug[0];
    // second part of the slug is the token.
    const token: string = slug[1];
    // getting new password and confim password from InputResetPassword component.
    const new_password1 = document.getElementById(
      'newPasswordInput'
    ) as HTMLInputElement;
    const new_password2 = document.getElementById(
      'confirmNewPasswordInput'
    ) as HTMLInputElement;
    // if password dosen't match the password criteria or new password donsn't
    // match password confirmation throw an error then.
    if (!validatePassword(new_password1.value)) {
      setIsPassMatchError(false);
      setIsPassError(true);
      setIsPending(false);
    } else if (new_password1.value !== new_password2.value) {
      setIsPassError(false);
      setIsPassMatchError(true);
      setIsPending(false);
    } else {
      // Reset Password Post request takes urlPath "{uid}/{token}" and
      // {uid, token, new_password1, new_password2: as password confirmation}.
      setIsPassError(false);
      setIsPassMatchError(false);
      const resetPassObj: resetPassObj = {
        new_password1: new_password1.value,
        new_password2: new_password2.value,
        uid: uid,
        token: token,
      };
      UserService.userResetPass(
        `${resetPassObj.uid}/${resetPassObj.token}/`,
        resetPassObj
      );
      setIsPending(false);
      setTimeout(() => {
        router.replace('/');
      }, 2000);
    }
  };

  return (
    <>
      <Head>
        <title>TicoSys | Reset Password</title>
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
                      className="fw-semibold fs-3 text-center mt-3"
                      data-trans="resetYourPassword">
                      Reset Your Password
                    </span>
                    <div className="mb-3 mt-4 text-center">
                      <Image
                        src={ResetIcon}
                        alt="key icon"
                        width={124.2}
                        height={144.4}
                      />
                    </div>
                    {InputResetPassword()}
                    {isPassError && (
                      <small
                        className="text-danger"
                        data-trans="passwordCriteriaError">
                        Password should contain at least one uppercase letter,
                        one lowercase letter, one digit, one special symbol and
                        should be more than 8 character.
                      </small>
                    )}
                    {isPassMatchError && (
                      <small
                        className="text-danger"
                        data-trans="passwordsMatchError">
                        Passwords should match!!
                      </small>
                    )}
                    <div className="d-grid gap-2 mt-4 mb-5">
                      <button
                        className={`btn btn-lg myPrimary fw-semibold ${styles.submitResetPwdBtn}`}
                        onClick={handleResetPass}
                        type="button">
                        {!isPending && <span data-trans="submit">Submit</span>}
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

export default resetpassword;
