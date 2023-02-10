import React from 'react';
import Image from 'next/image';
import MfaIcon from '../public/icons/mfa-icon.svg';
import SuccessIcon from '../public/icons/success-tic.svg';
import MfaEmailInput from './MfaEmailInput';
import MfaPasswordInput from './MfaPasswordInput';
import styles from '../styles/MfaModal.module.css';
import { useState } from 'react';
import UserService from '../servcies/UserService';
import getCookie from '../helper/getCookie';
import MfaCodeInput from './MfaCodeInput';
import { useAppDispatch } from '../app/hooks';
// import { activateMfa } from '../features/user';

// changePassObject Alias, this will be passed to api post request.
type useInputs = {
  [key: string]: string;
};
// Multi Factor Authentication Modal Component.
const MfaModal = () => {
  // some intial state to handle mfa logic steps.
  const [isPending, setIsPending] = useState(false);
  const [isMfaEnabled, setIsMfaEnabled] = useState(false);
  const [isMfaUserChecked, setIsMfaUserChecked] = useState(false);
  const [isMfaRequest, setIsMfaRequest] = useState(true);
  // declaring dispatch hoook in a variable to use it inside mfa logic.
  const dispatch = useAppDispatch();
  // handle mfa Request.
  const handleCreateMfa = () => {
    // getting token from cookies.
    const token: string = getCookie('access_token');

    setIsPending(true);
    const email = document.getElementById('mfaEmailInput') as HTMLInputElement;
    const password = document.getElementById(
      'mfaPasswordInput'
    ) as HTMLInputElement;
    const userInputs: useInputs = {
      email: email.value,
      password: password.value,
    };
    // we check user credintialsfirst.
    UserService.userCheckForMfa(userInputs, token).then(response => {
      if (response.data) {
        setIsMfaUserChecked(true);
        setIsMfaRequest(false);
        // then we enable Mfa if user is check correctly.
        UserService.userEnableMfa(token).then(response => {
          let qrCode = response.data;
          const mfaQrCodeHolder = document.getElementById(
            'mfaQrCodeHolder'
          ) as HTMLDivElement;
          // append qr code svg to the container.
          mfaQrCodeHolder.innerHTML = qrCode;
        });
        setIsPending(false);
      }
    });
  };
  // handle Mfa Code after scaning qr code.
  const handleMfaCode = () => {
    setIsPending(true);
    const token: string = getCookie('access_token');
    const mfaCode = document.getElementById('mfaCodeInput') as HTMLInputElement;
    UserService.userMfaCodeSend(mfaCode.value, token).then(response => {
      if (response.status === 200) {
        // dispatch(activateMfa());
        setIsPending(false);
        setIsMfaUserChecked(false);
        setIsMfaEnabled(true);
        setIsMfaRequest(false);
      }
    });
  };

  return (
    <div
      className="modal fade"
      id="userMfa"
      data-bs-keyboard="false"
      tabIndex={-1}
      aria-labelledby="userMfaLabel"
      aria-hidden="true">
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content border-0 clipOne pt-3">
          <div className="modal-body pt-1">
            <div className="d-flex flex-column align-items-center pe-5 ps-5">
              <h1
                className="myPrimary-Text fw-semibold"
                data-trans="multiFactoAuthentication">
                Multi Factor Authentication
              </h1>
              {isMfaRequest && (
                <div className="d-flex flex-column align-items-center w-100">
                  <span
                    className="pt-2 fs-4 myText-gray"
                    data-trans="infoFirstPart">
                    Please We Need Your Email And Password
                  </span>
                  <span
                    className="pt-2 fs-4 myText-gray"
                    data-trans="infoSecondPart">
                    To Enable Multi Factor Authentication
                  </span>
                  <div className="pt-3">
                    <Image
                      src={MfaIcon}
                      alt="Mfa Icon"
                      width={180}
                      height={180}
                    />
                  </div>
                  <div className="pt-3 w-100">
                    <div>
                      <MfaEmailInput />
                    </div>
                    <div className="pt-2">
                      <MfaPasswordInput />
                    </div>
                  </div>
                  <div className="d-grid gap-2 w-100 pt-3 pb-3">
                    <button
                      className={`btn btn-lg myPrimary ${styles.confirmBtn}`}
                      type="button"
                      onClick={() => handleCreateMfa()}
                      disabled={isPending}>
                      {!isPending && (
                        <span className="fs-5 fw-semibold" data-trans="confirm">
                          Confirm
                        </span>
                      )}
                      {isPending && (
                        <span className="fs-5 fw-semibold">Loading...</span>
                      )}
                    </button>
                  </div>
                </div>
              )}
              {isMfaUserChecked && (
                <div className="d-flex flex-column align-items-center w-100">
                  <div className="pt-5">
                    <div id="mfaQrCodeHolder"></div>
                  </div>
                  <div className="pt-5 w-100">
                    <div>
                      <MfaCodeInput />
                    </div>
                  </div>
                  <div className="d-grid gap-2 w-100 pt-3 pb-3">
                    <button
                      className={`btn btn-lg myPrimary ${styles.confirmBtn}`}
                      type="button"
                      onClick={() => handleMfaCode()}
                      disabled={isPending}>
                      {!isPending && (
                        <span className="fs-5 fw-semibold" data-trans="confirm">
                          Confirm
                        </span>
                      )}
                      {isPending && (
                        <span className="fs-5 fw-semibold">Loading...</span>
                      )}
                    </button>
                  </div>
                </div>
              )}
              {isMfaEnabled && (
                <div className="d-flex flex-column align-items-center w-100">
                  <div className="pt-5">
                    <Image
                      src={SuccessIcon}
                      alt="Mfa Icon"
                      width={180}
                      height={180}
                    />
                  </div>
                  <div className="d-flex flex-column align-items-center pt-5 w-100">
                    <span className="fs-2" data-trans="mfaIsDoneMsg">
                      Successfully Done
                    </span>
                  </div>
                  <div className="d-grid gap-2 w-100 pt-3 pb-3">
                    <button
                      className={`btn btn-lg myPrimary ${styles.confirmBtn}`}
                      type="button"
                      data-bs-dismiss="modal">
                      <span className="fs-5 fw-semibold" data-trans="confirm">
                        Confirm
                      </span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MfaModal;
