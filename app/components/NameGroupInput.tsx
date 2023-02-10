import React, { useState } from 'react';

type Props = {
  inputId: string;
  placeholder: string;
  default_value?: string;
  disabled?: boolean;
};

// Holiday Name Group Input Component
const NameGroupInput = (props: Props) => {
  // setting a logical state.
  const [isValid, setIsValid] = useState(true);
  // handle error on name change.
  const handleNameChange = (): void => {
    let name = document.getElementById(props.inputId) as HTMLInputElement;
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
        id={props.inputId ? props.inputId : 'HolidayNameGroupInput'}
        placeholder={props.placeholder}
        defaultValue={props.default_value}
        onChange={() => {
          handleNameChange();
        }}
        disabled={props.disabled}
      />
    </div>
  );
};

export default NameGroupInput;
