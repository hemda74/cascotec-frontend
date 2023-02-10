import React from 'react';
import Image from 'next/image';
import DisableIcon from '../public/icons/disable-icon.svg';
import SuccessIcon from '../public/icons/success-tic.svg';
import MfaIcon from '../public/icons/mfa-icon.svg';
import styles from '../styles/Enabledisablemodal.module.css';
import { useState } from 'react';
// import ITRAdminService from '../servcies/ITRAdminService';
import getCookie from '../helper/getCookie';
import { useAppDispatch } from '../app/hooks';
// import { changeTicosysActiveStatus } from '../features/ticoSysAdmins';
// import { changeTenantActiveStatus } from '../features/tenants';
import CheckNameInput from './CheckNameInput';
import InputEmail from './InputEmail';
import InputPassword from './InputPassword';
import TenantNameInput from './TenantNameInput';

// changePassObject Alias, this will be passed to api post request.
type useInputs = {
  [key: string]: string;
};

// props alias
type Props = {
  [key: string]: any;
};
// diable/enable proccess Modal Component.
const EnableDisableModal = (props: Props) => {
  // some intial state to handle diable/enable proccess logic steps.
  const [isPending, setIsPending] = useState(false);
  const [isNameErr, setIsNameErr] = useState(false);
  const [isVerifErr, setIsVerifErr] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isAccountVerf, setIsAccountVerf] = useState(false);
  const [isDisbleRequest, setIsDisbleRequest] = useState(true);
  // declaring dispatch hoook in a variable to use it inside diable/enable proccess logic.
  const dispatch = useAppDispatch();

  // handle diable/enable proccess Request starter to check nam first.
  const handleConfirmNameBtn = () => {
    setIsPending(true);
    const disableName = props.disableName;
    const givenNameInput = document.getElementById(
      `${props.inputId ? props.inputId : 'checkNameInput'}`
    ) as HTMLInputElement;
    const givenName = givenNameInput.value;
    if (disableName !== givenName) {
      setIsNameErr(true);
      setIsPending(false);
    } else {
      setIsNameErr(false);
      setIsPending(false);
      setIsDisbleRequest(false);
      setIsAccountVerf(true);
    }
  };
  // handle account verification after checking Name.
  const handleConfirmVerifBtn = () => {
    // setIsPending(true);
    // const token: string = getCookie('access_token');
    // const emailInput = document.getElementById(
    //   'accountVerifyEmail'
    // ) as HTMLInputElement;
    // const email = emailInput.value;
    // const passwordInput = document.getElementById(
    //   'accountVerifyPassword'
    // ) as HTMLInputElement;
    // const password = passwordInput.value;
    // const inputsObj = {
    //   email: email,
    //   password: password,
    // };
    // ITRAdminService.verifiyAccount(inputsObj, token)
    //   .then(response => {
    //     if (response.status === 200) {
    //       setIsPending(false);
    //       setIsVerifErr(false);
    //       const activeObj: object = {
    //         is_active: false,
    //       };
    //       ITRAdminService.disableTicosysAdmin(
    //         activeObj,
    //         props.adminId,
    //         token
    //       ).then(response => {
    //         if (response.status === 200) {
    //           dispatch(changeTicosysActiveStatus());
    //           setIsAccountVerf(false);
    //           setIsSuccess(true);
    //         }
    //       });
    //     }
    //   })
    //   .catch(err => {
    //     setIsVerifErr(true);
    //     setIsPending(false);
    //   });
  };

  // handle account verification after checking Name.
  const handleConfirmVerifBtnTenant = () => {
    // setIsPending(true);
    // const token: string = getCookie('access_token');
    // const emailInput = document.getElementById(
    //   'accountVerifyEmail'
    // ) as HTMLInputElement;
    // const email = emailInput.value;
    // const passwordInput = document.getElementById(
    //   'accountVerifyPassword'
    // ) as HTMLInputElement;
    // const password = passwordInput.value;
    // const inputsObj = {
    //   email: email,
    //   password: password,
    // };
    // ITRAdminService.verifiyAccount(inputsObj, token).then(response => {
    //   if (response.status === 200) {
    //     setIsPending(false);
    //     setIsVerifErr(false);
    //     const activeObj: object = {
    //       is_active: false,
    //     };
    //     ITRAdminService.disableTenant(activeObj, props.id, token).then(
    //       response => {
    //         if (response.status === 200) {
    //           dispatch(changeTenantActiveStatus());
    //           setIsAccountVerf(false);
    //           setIsSuccess(true);
    //         }
    //       }
    //     );
    //   }
    // });
    // // .catch(err => {
    // //   setIsVerifErr(true);
    // //   setIsPending(false);
    // // });
  };

  // a handle funtion for success diable/enable proccess.
  const handleSuccessConfirmBtn = () => {
    setIsDisbleRequest(true);
    setIsAccountVerf(false);
    setIsSuccess(false);
    setIsVerifErr(false);
    setIsNameErr(false);
    setIsPending(false);
  };

  return (
    <div
      className="modal fade"
      id="enableDisableModal"
      data-bs-keyboard="false"
      tabIndex={-1}
      aria-labelledby="enableDisableModalLabel"
      aria-hidden="true">
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content border-0 clipOne pt-3">
          <div className="modal-body pt-1">
            <div className="d-flex flex-column align-items-center pe-5 ps-5">
              {isDisbleRequest && (
                <>
                  {props.tenant && (
                    <h1
                      className="myPrimary-Text fw-semibold"
                      data-trans="disabledTenant">
                      Disabled Tenant !
                    </h1>
                  )}
                  {props.ticosys && (
                    <h1
                      className="myPrimary-Text fw-semibold"
                      data-trans="disabledTicosysAdmin">
                      Disabled Ticosys Admin
                    </h1>
                  )}
                  <div className="d-flex flex-column align-items-center w-100">
                    {props.tenant && (
                      <>
                        <span
                          className="pt-2 fs-4 myText-gray"
                          data-trans="tenantDisableMsgFirst">
                          If The Tenant Disabled, No One Will
                        </span>
                        <span
                          className="pt-2 fs-4 myText-gray"
                          data-trans="tenantDisableMsgSecond">
                          Be Able To Access It !
                        </span>
                      </>
                    )}
                    {props.ticosys && (
                      <>
                        <span
                          className="pt-2 fs-4 myText-gray"
                          data-trans="ticosysAdminDisableMsgFirst">
                          If The Ticosys Admin is Disabled, He Will Not
                        </span>
                        <span
                          className="pt-2 fs-4 myText-gray"
                          data-trans="ticosysAdminDisableMsgSecond">
                          Be Able To Login Anymore.
                        </span>
                      </>
                    )}
                    <div className="pt-3">
                      <Image
                        src={DisableIcon}
                        alt="Mfa Icon"
                        width={180}
                        height={180}
                      />
                    </div>
                    <div className="d-flex flex-column align-items-center w-100 pt-3">
                      <span className="fw-bold fs-4">
                        <span data-trans="pleaseConfirmThe">
                          Please Confirm that
                        </span>
                        {` `}
                        {props.ticosys && (
                          <span className="myPrimary-Text">{`(Ticosys Admin-Name)`}</span>
                        )}
                        {props.tenant && (
                          <span className="myPrimary-Text">{`(Tenant-Name)`}</span>
                        )}
                      </span>
                      <span
                        className="fw-bold fs-4"
                        data-trans="willBeDisabled">
                        Will Be Disabled !
                      </span>
                    </div>
                    <div className="w-100">
                      {props.ticosys && (
                        <div className="pt-2">
                          <label
                            className="myText-gray"
                            data-trans="ticosysAdminName">
                            Ticosys Admin Name
                          </label>
                          <CheckNameInput />
                        </div>
                      )}
                      {props.tenant && (
                        <div className="pt-2">
                          <label
                            className="myText-gray"
                            data-trans="tenantName">
                            Tenant Name
                          </label>
                          <TenantNameInput inputId={props.inputId} />
                        </div>
                      )}
                    </div>
                    {isNameErr && (
                      <div className="text-center pt-2">
                        {props.ticosys && (
                          <span
                            className="myDanger-Text"
                            data-trans="ticosysAdminNameIsIncorrect">
                            Ticosys Admin's Name Is Incorrect!
                          </span>
                        )}
                        {props.tenant && (
                          <span
                            className="myDanger-Text"
                            data-trans="tenantNameIsIncorrect">
                            Tenant Name Is Incorrect!
                          </span>
                        )}
                      </div>
                    )}
                    <div className="d-grid gap-2 w-100 pt-3 pb-3">
                      <button
                        className={`btn btn-lg myPrimary ${styles.confirmBtn}`}
                        type="button"
                        onClick={() => handleConfirmNameBtn()}
                        disabled={isPending}>
                        {!isPending && (
                          <span
                            className="fs-5 fw-semibold"
                            data-trans="confirm">
                            Confirm
                          </span>
                        )}
                        {isPending && (
                          <span className="fs-5 fw-semibold">Loading...</span>
                        )}
                      </button>
                    </div>
                  </div>
                </>
              )}
              {isAccountVerf && (
                <>
                  <h1
                    className="myPrimary-Text fw-semibold"
                    data-trans="accountVerification">
                    Account Verification
                  </h1>
                  <div className="d-flex flex-column align-items-center w-100">
                    <span
                      className="pt-2 fs-4 myText-gray"
                      data-trans="infoFirstPart">
                      Please We Need Your Email And Password
                    </span>
                    {props.ticosys && (
                      <span
                        className="pt-2 fs-4 myText-gray"
                        data-trans="toDisableTicosysAdmin">
                        To Disable Ticosys Admin.
                      </span>
                    )}
                    {props.tenant && (
                      <span
                        className="pt-2 fs-4 myText-gray"
                        data-trans="toDisableTenant">
                        To Disable Tenant.
                      </span>
                    )}
                    <div className="pt-3">
                      <Image
                        src={MfaIcon}
                        alt="Mfa Icon"
                        width={180}
                        height={180}
                      />
                    </div>
                    <div className="w-100">
                      <div className="pt-2">
                        <label data-trans="email">Email</label>
                        <InputEmail inputId={'accountVerifyEmail'} />
                      </div>
                      <div className="pt-2">
                        <label data-trans="password">Password</label>
                        <InputPassword inputId={'accountVerifyPassword'} />
                      </div>
                    </div>
                    {isVerifErr && (
                      <div className="text-center pt-2">
                        <span
                          className="myDanger-Text"
                          data-trans="emailOrPassError">
                          Email or Password is incorrect!
                        </span>
                      </div>
                    )}
                    <div className="d-grid gap-2 w-100 pt-3 pb-3">
                      {props.ticosys && (
                        <button
                          className={`btn btn-lg myPrimary ${styles.confirmBtn}`}
                          type="button"
                          onClick={() => handleConfirmVerifBtn()}
                          disabled={isPending}>
                          {!isPending && (
                            <span
                              className="fs-5 fw-semibold"
                              data-trans="confirm">
                              Confirm
                            </span>
                          )}
                          {isPending && (
                            <span className="fs-5 fw-semibold">Loading...</span>
                          )}
                        </button>
                      )}
                      {props.tenant && (
                        <button
                          className={`btn btn-lg myPrimary ${styles.confirmBtn}`}
                          type="button"
                          onClick={() => handleConfirmVerifBtnTenant()}
                          disabled={isPending}>
                          {!isPending && (
                            <span
                              className="fs-5 fw-semibold"
                              data-trans="confirm">
                              Confirm
                            </span>
                          )}
                          {isPending && (
                            <span className="fs-5 fw-semibold">Loading...</span>
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                </>
              )}
              {isSuccess && (
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
                      onClick={() => handleSuccessConfirmBtn()}
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

export default EnableDisableModal;
