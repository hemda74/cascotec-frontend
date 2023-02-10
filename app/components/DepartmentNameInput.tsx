import React, { useState } from 'react';
import Image from 'next/image';
import ClockIcon from '../public/icons/clock-icon.svg';

type Props = {
  [key: string]: any;
};

// Department Name Input component.
const DepartmentNameInput = (props: Props) => {
  // setting a logical state.
  const [isValid, setIsValid] = useState(true);
  // handle error on name change.
  const handleNameChange = (): void => {
    let name = document.getElementById(
      'DepartmentNameInput'
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
      <input
        type="text"
        className={`form-control border-0 rounded-0 myBoxShadow-none ${
          isValid ? '' : 'is-invalid'
        }`}
        id={props.inputId ? props.inputId : 'DepartmentNameInput'}
        placeholder="Design"
        defaultValue={props.departmen_name}
        onChange={() => {
          handleNameChange();
        }}
        disabled={props.disabled}
      />
    </div>
  );
};

export default DepartmentNameInput;
