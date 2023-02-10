import React from 'react';
import Image from 'next/image';
import UserIcon from '../public/icons/user.svg';

// props alias
type Props = {
  [key: string]: any;
};

// This Check Name input component used in all disable proccesses.
const CheckNameInput = (props: Props) => {
  return (
    <div className={`form-floating `}>
      <input
        type="text"
        className={`form-control `}
        id="checkNameInput"
        placeholder="User Name"
      />
      <label
        htmlFor="checkNameInput"
        className="d-flex w-auto fs-6 left-none myText-gray">
        <Image src={UserIcon} alt="user icon" width={20} height={20} />
      </label>
    </div>
  );
};

export default CheckNameInput;
