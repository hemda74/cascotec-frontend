import React from 'react';
import Image from 'next/image';
import UserIcon from '../public/icons/user.svg';
import { useState } from 'react';
import validateEmail from '../helper/validateEmail';
import { useAppDispatch } from '../app/hooks';
// import { userDataEdit } from '../features/user';

// props alias
type Props = {
  [key: string]: any;
};

// This Name input component used across the app.
const NameInput = (props: Props) => {
  const [isName, setIsName] = useState('');

  const [isValid, setIsValid] = useState(true);

  const dispatch = useAppDispatch();

  // handle error on name change.
  const handleNameChange = (): void => {
    let name = document.getElementById('nameInput') as HTMLInputElement;
    let nameVal = name.value;
    if (!nameVal) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  };
  // a handle function for name change to async avatar if needed.
  const handleNameValueChange = () => {
    const nameInput = document.getElementById('nameInput') as HTMLInputElement;
    const nameInputVal = nameInput.value;
    setIsName(nameInputVal);
    props.handleNameValChange(isName);
  };

  return (
    <div className={`form-floating ${isValid ? '' : 'has-danger'}`}>
      <input
        type="text"
        className={`form-control ${isValid ? '' : 'is-invalid'}`}
        id="nameInput"
        placeholder="User Name"
        defaultValue={props.name}
        onChange={() => {
          handleNameChange();
          if (props.handleNameValChange) handleNameValueChange();
          // if (props.editable) dispatch(userDataEdit());
        }}
        disabled={props.disabled}
      />
      <label
        htmlFor="nameInput"
        className="d-flex w-auto fs-6 left-none myText-gray">
        <Image src={UserIcon} alt="user icon" width={20} height={20} />
      </label>
    </div>
  );
};

export default NameInput;
