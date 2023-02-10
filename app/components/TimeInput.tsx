import Image from 'next/image';
import React, { useState } from 'react';
import ClockIcon from '../public/icons/clock-icon.svg';

type Props = {
  inputId: string;
  defaultValue?: string;
};
// Time Input component
const TimeInput = (props: Props) => {
  // setting a logical state.
  //   const [isValid, setIsValid] = useState(true);
  // handle error on date change.
  //   const handleTimeChange = (): void => {
  //     let name = document.getElementById(props.inputId) as HTMLInputElement;
  //     let nameVal = name.value;
  //     if (!nameVal) {
  //       setIsValid(false);
  //     } else {
  //       setIsValid(true);
  //     }
  //   };
  return (
    <div className="input-group border border-2 rounded ps-2 pe-2">
      <span
        className={`input-group-text border-0 rounded-0 myBoxShadow-none pe-0 ps-0 bg-white `}>
        <Image src={ClockIcon} alt="clock icon" width={18} height={18} />
      </span>
      <input
        type="time"
        className={`form-control border-0 rounded-0 myBoxShadow-none pe-0 ps-0 ms-1 me-1`}
        id={props.inputId}
        placeholder=""
        defaultValue={props.defaultValue}
      />
    </div>
  );
};

export default TimeInput;
