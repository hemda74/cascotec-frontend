import type { NextPage } from 'next';
import styles from '../styles/Forgetpassword.module.css';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../components/Logo';
import InputEmail from '../components/InputEmail';
import keyIcon from '../public/icons/key-icon.svg';
import UserService from '../servcies/UserService';
import LocalizationBtn from '../components/LocalizationBtn';
import { useState } from 'react';
import { useRouter } from 'next/router';
import validateEmail from '../helper/validateEmail';

const forgetpassword: NextPage = () => {
  // Assigning useRouter to a variable to use it.
  const router = useRouter();
  // declaring 2 states to handle post request responses.
  const [isPending, setIsPending] = useState(false);
  const [isError, setIsError] = useState(false);

  // handel function to send a verfication code
  const handleSendVerfCode = (): void => {
    let email = document.getElementById('emailInput') as HTMLInputElement;
    let emailVal: string = email.value;
    if (
      emailVal == null ||
      emailVal == undefined ||
      emailVal.trim() === '' ||
      !validateEmail(emailVal)
    ) {
      setIsError(true);
      setIsPending(false);
    } else {
      setIsError(false);
      UserService.userForgetPass(emailVal);
      setIsPending(false);
      router.push('/emailSentConfirmation'); // we have to send email with the url.
    }
  };

  return (
    <>
      <Head>
        <title>TicoSys | Forget Password</title>
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
                      data-trans="forgotYourPassword">
                      Forgot Your Password ?
                    </span>
                    <div className="mb-4 mt-4 text-center">
                      <Image
                        src={keyIcon}
                        alt="key icon"
                        width={150}
                        height={150}
                      />
                    </div>
                    <span
                      className="text-center fw-semibold mb-3"
                      data-trans="enterYourEmailAddress">
                      Enter Your Email Address
                    </span>
                    <div className="form-group mb-5">
                      <div>{InputEmail({ placeholder: true })}</div>
                      {isError && (
                        <span
                          className="myDanger-Text"
                          data-trans="emailErrorMsg">
                          Enter a valid email address!
                        </span>
                      )}
                    </div>
                    <div className="d-grid gap-2 mt-4">
                      <button
                        className={`btn btn-lg myPrimary fw-semibold ${styles.verficationCodeBtn}`}
                        type="button"
                        onClick={() => handleSendVerfCode()}
                        disabled={isPending}>
                        {!isPending && (
                          <span data-trans="sendVerficationCode">
                            Send Verfication Code
                          </span>
                        )}
                        {isPending && <span>Loading...</span>}
                      </button>
                    </div>
                    <div className="mt-3 mb-3 text-center myInfo-Text">
                      <Link href="/">
                        <a>
                          <span data-trans="signInToYourAccount">
                            Sign In To Your Account
                          </span>
                        </a>
                      </Link>
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

export default forgetpassword;
