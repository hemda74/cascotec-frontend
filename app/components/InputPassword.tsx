import React from 'react';
import Image from 'next/image';
import KeyIcon from '../public/icons/key.svg';

// props alias
type Props = {
  [key: string]: any;
};
// This Password input component used across the app.
const InputPassword = (props: Props) => {
  return (
    <div className="form-floating">
      <input
        type="password"
        className="form-control"
        id={props.inputId ? props.inputId : 'passwordInput'}
        placeholder="*********"
        disabled={props.disabled}
      />
      <label
        htmlFor={props.inputId ? props.inputId : 'passwordInput'}
        className="d-flex fs-6 left-none myText-gray">
        <Image src={KeyIcon} alt="key icon" width={20} height={20} />
        &nbsp;*********
      </label>
    </div>
  );
};

export default InputPassword;
