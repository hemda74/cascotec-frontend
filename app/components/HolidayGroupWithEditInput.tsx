import Image from 'next/image';
import React, { useState } from 'react';
import EditIcon from '../public/icons/edit-white-icon.svg';
import XIcon from '../public/icons/x-shape.svg';
import TicWhiteIcon from '../public/icons/tic-white-icon.svg';

type Props = {
  inputId: string;
  defaultValue?: string;
  disabled?: boolean;
};

const HolidayGroupWithEditInput = (props: Props) => {
  // setting a logical state.
  const [isValid, setIsValid] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);
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
  // logical funtion to enter editting phase
  const handleEditChange = () => {
    setIsDisabled(false);
  };
  // logical funtion to return to readonly phase.
  const handleNormalPhase = () => {
    setIsDisabled(true);
  };

  return (
    <div className="input-group border border-1 rounded">
      <input
        type="text"
        className={`form-control border-0 rounded-0 myBoxShadow-none pe-2 ps-2  ${
          isValid ? '' : 'is-invalid'
        }`}
        id={props.inputId}
        placeholder="Ciro Holidays"
        defaultValue={props.defaultValue}
        onChange={() => {
          handleDateChange();
        }}
        disabled={isDisabled}
      />
      <span className={`border-0 rounded-0 myBoxShadow-none p-0`}>
        {isDisabled && (
          <a
            type="button"
            id={`${props.inputId}Edit`}
            className="text-decoration-none btn myPrimary"
            onClick={() => handleEditChange()}>
            <div className="d-flex algin-items-center">
              <Image
                src={EditIcon}
                alt="calendar icon"
                width={24}
                height={24}
              />
            </div>
          </a>
        )}
        {!isDisabled && (
          <>
            <a
              type="button"
              id={`${props.inputId}Edit`}
              className="text-decoration-none btn btn-light rounded-0 "
              onClick={() => handleNormalPhase()}>
              <div className="d-flex algin-items-center">
                <Image src={XIcon} alt="X icon" width={24} height={24} />
              </div>
            </a>
            <a
              type="button"
              id={`${props.inputId}Edit`}
              className="text-decoration-none btn myPrimary rounded-0 "
              onClick={() => handleEditChange()}>
              <div className="d-flex algin-items-center">
                <Image
                  src={TicWhiteIcon}
                  alt="calendar icon"
                  width={24}
                  height={24}
                />
              </div>
            </a>
          </>
        )}
      </span>
    </div>
  );
};

export default HolidayGroupWithEditInput;
