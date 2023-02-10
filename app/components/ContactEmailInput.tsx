import React from 'react';
import Image from 'next/image';
import EmailIcon from '../public/icons/email-icon.svg';
import { useState } from 'react';
import validateEmail from '../helper/validateEmail';

// props alias
type Props = {
  [key: string]: any;
};

// This Contact Email input component used across the app.
const ContactEmailInput = (props: Props) => {
  const [isValid, setIsValid] = useState(true);

  // handle error on email change.
  const handleEmailChange = (): void => {
    const email = document.getElementById('emailInput') as HTMLInputElement;
    const emailVal = email.value;
    if (!validateEmail(emailVal)) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  };

  return (
    <div className="input-group border border-2 rounded">
      <span
        className={`input-group-text border-0 rounded-0 myBoxShadow-none ${
          props.disabled ? 'myDisabled-bg' : ''
        }`}>
        <Image src={EmailIcon} alt="user icon" width={20} height={20} />
      </span>
      <input
        type="email"
        className={`form-control border-0 rounded-0 myBoxShadow-none ${
          isValid ? '' : 'is-invalid'
        }`}
        id="contactEmail"
        placeholder="user@admin.com"
        defaultValue={props.contactEmail}
        onChange={() => handleEmailChange()}
        disabled={props.disabled}
      />
    </div>
  );
};

export default ContactEmailInput;
