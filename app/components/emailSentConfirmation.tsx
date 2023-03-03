import type { NextPage } from 'next';
import styles from '../styles/Otp.module.css';
import Head from 'next/head';
import Image from 'next/image';
import Logo from '../components/Logo';
import EmailSentTic from '../public/icons/success-tic.svg';
import { useState } from 'react';

// Otp page is used when user ente his email to reset his password where OTP
// code can be found in his email address.
const emailSentConfirmation: NextPage = () => {
  // decalring a counter state used en resend btn logic.
  const [counter, setCounter] = useState(0);

  // conuter function to make resend rmail is accessed every 60 sec.
  const handleReSend = (): void => {
    let i: number = 29;
    const myloop = () => {
      setTimeout(() => {
        setCounter(i);
        i--;
        if (i >= 0) {
          myloop();
        }
      }, 1000);
    };
    myloop();
  };

  return (
    <>
      <Head>
        <title>TicoSys | OTP</title>
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
                    <span className="fw-semibold fs-3 text-center mt-4 mb-5">
                      Please Check Your Email
                    </span>
                    <div className="mb-5 mt-4 text-center">
                      <Image
                        src={EmailSentTic}
                        alt="Tic Icon"
                        width={200}
                        height={200}
                      />
                    </div>
                    <div className=" mb-3 text-center">
                      <span className="fw-semibold">An Email Is Sent To</span>
                      <br />
                      <span className="fw-semibold myInfo-Text">
                        (User@admin.com)
                      </span>
                    </div>
                    <div className="mt-3 mb-3 d-flex justify-content-center align-items-center">
                      <span>Didn’t get the email?</span>
                      &nbsp;
                      {counter === 0 && (
                        <button
                          onClick={() => handleReSend()}
                          className="btn btn-link myInfo-Text">
                          Resend
                        </button>
                      )}
                      {counter > 0 && counter}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-2 d-block"></div>
            <div className="col-2 d-flex justify-content-center vh-100">
              <div className="mt-4">
                <button
                  className={`btn btn-lg btn-outline-light ${styles.localizationBtn}`}>
                  <span>AR</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default emailSentConfirmation;
