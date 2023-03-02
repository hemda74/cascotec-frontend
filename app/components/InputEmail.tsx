import React from 'react';
import Image from 'next/image';
import EmailIcon from '../public/icons/email-icon.svg';
import { useState } from 'react';
import validateEmail from '../helper/validateEmail';
import { useAppDispatch } from '../app/hooks';
// import { userDataEdit } from '../features/user';

// props alias
type Props = {
  [key: string]: any;
};

// This Email input component used across the app.
const InputEmail = (props: Props) => {
  const [isValid, setIsValid] = useState(true);
  const dispatch = useAppDispatch();
  // handle error on email change.
  const handleEmailChange = (): void => {
    let email = document.getElementById('emailInput') as HTMLInputElement;
    let emailVal = email.value;
    if (!validateEmail(emailVal)) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  };

  return (
    <div className={`form-floating ${isValid ? '' : 'has-danger'}`}>
      <input
        type="email"
        className={`form-control ${isValid ? '' : 'is-invalid'}`}
        id={props.inputId ? props.inputId : 'emailInput'}
        placeholder="user@admin.com"
        defaultValue={props.userEmail !== undefined ? props.userEmail : ''}
        onChange={() => {
          handleEmailChange();
          // if (props.editable) dispatch(userDataEdit());
        }}
        disabled={props.disabled}
      />
      <label
        htmlFor={props.inputId ? props.inputId : 'emailInput'}
        className="d-flex w-auto fs-6 left-none myText-gray">
        <Image src={EmailIcon} alt="user icon" width={20} height={20} />
        &nbsp;{props.placeholder && <>user@admin.com</>}
      </label>
    </div>
  );
};

export default InputEmail;
