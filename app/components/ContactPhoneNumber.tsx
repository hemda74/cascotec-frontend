import React from 'react';
import PhoneIcon from '../public/icons/phone-icon.svg';
import Image from 'next/image';

// props alias
type Props = {
  [key: string]: any;
};

const ContactPhoneNumber = (props: Props) => {
  return (
    <div className="input-group border border-2 rounded">
      <span
        className={`input-group-text border-0 rounded-0 myBoxShadow-none ${
          props.disabled ? 'myDisabled-bg' : ''
        }`}>
        <Image src={PhoneIcon} alt="user icon" width={20} height={20} />
      </span>
      <input
        type="text"
        className="form-control border-0 rounded-0 myBoxShadow-none"
        id="contactPhoneNo"
        placeholder="+201000000"
        defaultValue={props.contactPhoneNumber}
        disabled={props.disabled}
      />
    </div>
  );
};

export default ContactPhoneNumber;
