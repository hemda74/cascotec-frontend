import React, { useState } from 'react';
import Image from 'next/image';
import ClockIcon from '../public/icons/clock-icon.svg';

type Props = {
  [key: string]: any;
};

const OperHoursNameInput = (props: Props) => {
  // setting a logical state.
  const [isValid, setIsValid] = useState(true);
  // handle error on name change.
  const handleNameChange = (): void => {
    let name = document.getElementById(
      'OperHoursNameInput'
    ) as HTMLInputElement;
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
          props.disabled ? 'myDisabled-bg' : 'bg-white'
        }`}>
        <Image src={ClockIcon} alt="clock icon" width={20} height={20} />
      </span>
      <input
        type="text"
        className={`form-control border-0 rounded-0 myBoxShadow-none ${
          isValid ? '' : 'is-invalid'
        }`}
        id={props.inputId ? props.inputId : 'OperHoursNameInput'}
        placeholder="Cairo Working Hours"
        defaultValue={props.name}
        onChange={() => {
          handleNameChange();
        }}
        disabled={props.disabled}
      />
    </div>
  );
};

export default OperHoursNameInput;
