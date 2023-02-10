import React from 'react';
import { useState } from 'react';
import UserIcon from '../public/icons/user.svg';
import Image from 'next/image';
import { useAppDispatch } from '../app/hooks';
// import { userDataEdit } from '../features/user';

type Props = {
  [key: string]: any;
};

const FirstNdLastNames = (props: Props) => {
  // two states used in first name and last name validation.
  const [isFirstValid, setIsFirstValid] = useState(true);
  const [isLastValid, setIsLastValid] = useState(true);

  const dispatch = useAppDispatch();
  // a handle funtion to validate first and last Name values.
  const handleNameChange = () => {
    let firstName = document.getElementById(
      'firstNameInput'
    ) as HTMLInputElement;
    let firstNameVal = firstName.value;
    let lastName = document.getElementById('lastNameInput') as HTMLInputElement;
    let lastNameVal = lastName.value;
    if (
      firstNameVal.trim() == '' ||
      firstNameVal == null ||
      firstNameVal == undefined
    ) {
      setIsFirstValid(false);
    } else {
      setIsFirstValid(true);
    }
    if (
      lastNameVal.trim() == '' ||
      lastNameVal == null ||
      lastNameVal == undefined
    ) {
      setIsLastValid(false);
    } else {
      setIsLastValid(true);
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-6">
          <label className="form-label myText-gray" data-trans="firstName">
            First Name
          </label>
          <div className={`form-floating ${isFirstValid ? '' : 'has-danger'}`}>
            <input
              type="text"
              className={`form-control ${isFirstValid ? '' : 'is-invalid'}`}
              id="firstNameInput"
              placeholder="John"
              defaultValue={props.firstName}
              onChange={() => {
                handleNameChange();
                // if (props.editable) dispatch(userDataEdit());
              }}
            />
            <label
              htmlFor="firstNameInput"
              className="d-flex w-auto fs-6 left-none myText-gray">
              <Image src={UserIcon} alt="user icon" width={20} height={20} />
            </label>
          </div>
        </div>
        <div className="col-6">
          <label className="form-label myText-gray" data-trans="lastName">
            Last Name
          </label>
          <div className={`form-floating ${isLastValid ? '' : 'has-danger'}`}>
            <input
              type="text"
              className={`form-control ${isLastValid ? '' : 'is-invalid'}`}
              id="lastNameInput"
              placeholder="Doe"
              defaultValue={props.lastName}
              onChange={() => {
                handleNameChange();
                // if (props.editable) dispatch(userDataEdit());
              }}
            />
            <label
              htmlFor="lastNameInput"
              className="d-flex w-auto fs-6 left-none myText-gray">
              <Image src={UserIcon} alt="user icon" width={20} height={20} />
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstNdLastNames;
