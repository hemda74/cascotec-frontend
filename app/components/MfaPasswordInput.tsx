import React from 'react';
import Image from 'next/image';
import MfaPasswordIcon from '../public/icons/mfa-password-icon.svg';

type Props = {
  [key: string]: string;
};

// Mfa password input component used in itr amdin multi factor authentication.
const MfaPasswordInput = (props: Props) => {
  return (
    <>
      <label className="form-label myText-gray" data-trans="password">
        Password
      </label>
      <div className="form-floating">
        <input
          type="password"
          className="form-control"
          id="mfaPasswordInput"
          placeholder="*********"
        />
        <label
          htmlFor="mfaPasswordInput"
          className="d-flex fs-6 left-none myText-gray">
          <Image src={MfaPasswordIcon} alt="key icon" width={20} height={20} />
        </label>
      </div>
    </>
  );
};

export default MfaPasswordInput;
