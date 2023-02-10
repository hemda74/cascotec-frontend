import React from 'react';
import { useState } from 'react';
import BulidingIcon from '../public/icons/building.svg';
import Image from 'next/image';

type Props = {
  [key: string]: any;
};
// tenant name input component
const TenantNameInput = (props: Props) => {
  // setting a logical state.
  const [isValid, setIsValid] = useState(true);
  // handle error on name change.
  const handleNameChange = (): void => {
    let name = document.getElementById('tenantNameInput') as HTMLInputElement;
    let nameVal = name.value;
    if (!nameVal) {
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
        <Image src={BulidingIcon} alt="user icon" width={20} height={20} />
      </span>
      <input
        type="text"
        className={`form-control border-0 rounded-0 myBoxShadow-none ${
          isValid ? '' : 'is-invalid'
        }`}
        id={props.inputId ? props.inputId : 'tenantNameInput'}
        placeholder="Tenant Name"
        defaultValue={props.name}
        onChange={() => {
          handleNameChange();
        }}
        disabled={props.disabled}
      />
    </div>
  );
};

export default TenantNameInput;
