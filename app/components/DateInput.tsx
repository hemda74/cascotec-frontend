import React, { useState } from 'react';
import Image from 'next/image';
import CalendarIcon from '../public/icons/calendar-icon.svg';

type Props = {
  inputId: string;
  defaultValue?: string;
};

// Date Input Component.
const DateInput = (props: Props) => {
  // setting a logical state.
  const [isValid, setIsValid] = useState(true);
  // handle error on date change.
  const handleDateChange = (): void => {
    let name = document.getElementById(props.inputId) as HTMLInputElement;
    let nameVal = name.value;
    if (!nameVal) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  };
  return (
    <div className="input-group border border-2 rounded ps-2 pe-2">
      <span
        className={`input-group-text border-0 rounded-0 myBoxShadow-none pe-0 ps-0 bg-white `}>
        <Image src={CalendarIcon} alt="calendar icon" width={18} height={18} />
      </span>
      <input
        type="date"
        className={`form-control border-0 rounded-0 myBoxShadow-none pe-0 ps-0 ms-1 me-1 ${
          isValid ? '' : 'is-invalid'
        }`}
        id={props.inputId}
        placeholder="Tenant Name"
        defaultValue={props.defaultValue}
        onChange={() => {
          handleDateChange();
        }}
      />
    </div>
  );
};

export default DateInput;
