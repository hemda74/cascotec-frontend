import React from 'react';
import KeyIcon from '../public/icons/key.svg';
import Image from 'next/image';

// Reset Password component used in forget password process
// and when user want to change his password inside the app.
const InputResetPassword = () => {
  return (
    <div className="form-group">
      <label className="form-label" data-trans="newPassword">
        New Password
      </label>
      <div className="form-floating mb-3">
        <input
          type="password"
          className="form-control"
          id="newPasswordInput"
          placeholder="*********"
        />
        <label
          htmlFor="newPasswordInput"
          className="d-flex fs-6 left-none myText-gray">
          <Image src={KeyIcon} alt="key icon" width={20} height={20} />
          &nbsp;*********
        </label>
      </div>
      <label className="form-label" data-trans="confirmNewPassword">
        Confirm New Password
      </label>
      <div className="form-floating">
        <input
          type="password"
          className="form-control"
          id="confirmNewPasswordInput"
          placeholder="*********"
        />
        <label
          htmlFor="confirmNewPasswordInput"
          className="d-flex fs-6 left-none myText-gray">
          <Image src={KeyIcon} alt="key icon" width={20} height={20} />
          &nbsp;*********
        </label>
      </div>
    </div>
  );
};

export default InputResetPassword;
