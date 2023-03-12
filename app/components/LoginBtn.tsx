import Link from 'next/link';
import React from 'react';
import styles from '../styles/LoginBtn.module.css' 
type Props = {};

// Login btn component which changes the reading only state to select state.
const LoginBtn = (props: Props) => {
  return (
    <Link
      type="button"
      className={`btn d-flex align-items-center justify-content-center `} href={'/login'}>
      <span className={` myPrimary d-flex rounded fw-semibold align-items-center justify-content-center ${styles.newWord} ${styles.newOpHourBtn}` } data-trans="login">
        Login
      </span>
    </Link>
  );
};

export default LoginBtn;
