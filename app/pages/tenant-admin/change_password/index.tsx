import { ReactElement, useState } from 'react';
import type { NextPageWithLayout } from '../../_app';
import TALayout from '../../../layouts/TALayout';
import Head from 'next/head';
import InputPassword from '../../../components/InputPassword';
import InputResetPassword from '../../../components/InputResetPassword';
import { useRouter } from 'next/router';
import validatePassword from '../../../helper/validatePassword';
import UserService from '../../../servcies/UserService';
import getCookie from '../../../helper/getCookie';
import styles from '../../../styles/ChangePassword.module.css';

// changePassObject Alias, this will be passed to api post request.
type changePassObj = {
  [key: string]: string;
};

type Props = {};

// tenant admin Change password page.
const ChangePassword: NextPageWithLayout = (props: Props) => {
  const [isPassError, setIsPassError] = useState(false);
  const [isPassMatchError, setIsPassMatchError] = useState(false);
  const [isOldPassError, setIsOldPassError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isPending, setIsPending] = useState(false);
  // declaring next router in a variable.
  const router = useRouter();

  // a handle change password function and it's logical validation.
  const handleChangePass = (): void => {
    setIsPending(true);
    let oldPass = document.getElementById('passwordInput') as HTMLInputElement;
    let newPass = document.getElementById(
      'newPasswordInput'
    ) as HTMLInputElement;
    let newMatchPass = document.getElementById(
      'confirmNewPasswordInput'
    ) as HTMLInputElement;
    if (!validatePassword(newPass.value)) {
      setIsPassMatchError(false);
      setIsPassError(true);
      setIsPending(false);
      setIsOldPassError(false);
      setIsSuccess(false);
    } else if (newPass.value !== newMatchPass.value) {
      setIsPassError(false);
      setIsPassMatchError(true);
      setIsPending(false);
      setIsOldPassError(false);
      setIsSuccess(false);
    } else {
      // Change Password Post request takes
      // {old_password, new_password1, new_password2: as password confirmation}.
      setIsPassError(false);
      setIsPassMatchError(false);
      const changePassObj: changePassObj = {
        old_password: oldPass.value,
        new_password1: newPass.value,
        new_password2: newMatchPass.value,
      };
      const token: string = getCookie('access_token');
      UserService.userChangePass(changePassObj, token)
        .then(response => {
          if (response.status === 200) {
            setIsPending(false);
            setIsSuccess(true);
            router.replace('/itr-admin');
          }
        })
        .catch(error => {
          setIsPending(false);
          setIsOldPassError(true);
        });
    }
  };

  const handleCancelBtn = () => {
    router.push('/tenant-admin');
  };

  return (
    <>
      <Head>
        <title>TicoSys | Change Password</title>
      </Head>
      <div
        className={`d-flex flex-column pt-5 justify-content-center align-items-center`}>
        <div className={`card border-light mb-3 ${styles.cardContainer}`}>
          <div className="card-body p-5 ">
            <span className="card-title myPrimary-Text fs-3">
              <span
                className="border-bottom border-2 myPrimary-border"
                data-trans="change">
                Change
              </span>
              &nbsp;
              <span data-trans="password">Password</span>
            </span>
            <div className="row mt-4 pt-4">
              <div className="col-5">
                <label className="form-label" data-trans="currentPassword">
                  Current Password
                </label>
                <div className="mb-3">
                  <InputPassword />
                </div>
                <InputResetPassword />
              </div>
            </div>
            <div className="row">
              <div className="col-12 align-self-end">
                {isPassError && (
                  <small
                    className="text-danger"
                    data-trans="passwordCriteriaError">
                    Password should contain at least one uppercase letter, one
                    lowercase letter, one digit, one special symbol and should
                    be more than 8 character.
                  </small>
                )}
                {isPassMatchError && (
                  <small
                    className="text-danger"
                    data-trans="passwordsMatchError">
                    Passwords should match!!
                  </small>
                )}
                {isOldPassError && (
                  <small className="text-danger" data-trans="oldPassError">
                    Old password is incorrect.
                  </small>
                )}
                {isSuccess && (
                  <small className="text-success" data-trans="newPassMsg">
                    A new password has been set.
                  </small>
                )}
                <div className="d-flex justify-content-end">
                  <button
                    type="button"
                    className={`btn myPrimary-outline ${styles.confirmBtn} me-2 ms-2`}
                    onClick={() => handleCancelBtn()}
                    disabled={isPending}>
                    <span className="fs-5 fw-semibold" data-trans="cancel">
                      Cancel
                    </span>
                  </button>
                  <button
                    type="button"
                    className={`btn myPrimary ${styles.confirmBtn}`}
                    disabled={isPending}>
                    {!isPending && (
                      <span className="fs-5 fw-semibold" data-trans="confirm">
                        Confirm
                      </span>
                    )}
                    {isPending && <span>Loading...</span>}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// tenant admin pages shares an TA layout which includes navbar.
ChangePassword.getLayout = function getLayout(index: ReactElement) {
  return <TALayout childern={index}></TALayout>;
};

export default ChangePassword;
