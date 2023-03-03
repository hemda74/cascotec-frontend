import React from 'react';
import Image from 'next/image';
import MfaEmailIcon from '../public/icons/email-icon.svg';
import { useState } from 'react';
import validateEmail from '../helper/validateEmail';

// props alias
type Props = {
  [key: string]: string;
};

const MfaEmailInput = (props: Props) => {
  const [isValid, setIsValid] = useState(true);
  // handle error on email change.
  const handleEmailChange = (): void => {
    let email = document.getElementById('mfaEmailInput') as HTMLInputElement;
    let emailVal = email.value;
    if (!validateEmail(emailVal)) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  };

  // Mfa email input component used in itr amdin multi factor authentication.
  return (
    <>
      <label className="form-label myText-gray" data-trans="email">
        Email
      </label>
      <div className={`form-floating ${isValid ? '' : 'has-danger'}`}>
        <input
          type="email"
          className={`form-control ${isValid ? '' : 'is-invalid'}`}
          id="mfaEmailInput"
          placeholder="user@admin.com"
          onChange={() => handleEmailChange()}
        />
        <label
          htmlFor="mfaEmailInput"
          className="d-flex w-auto fs-6 left-none myText-gray">
          <Image src={MfaEmailIcon} alt="user icon" width={20} height={20} />
        </label>
      </div>
    </>
  );
};

export default MfaEmailInput;
