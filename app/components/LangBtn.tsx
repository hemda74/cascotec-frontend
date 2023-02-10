import Link from 'next/link';
import React from 'react';
import styles from '../styles/LoginBtn.module.css'; 
type Props = {};

// Login btn component which changes the reading only state to select state.
const LoginBtn = (props: Props) => {
  return (
    <Link
      type="button"
      className={`btn myDanger-outline text-decoration-none d-flex align-items-center justify-content-center ${styles.newOpHourBtn}`} href={''}>
      <span className={`ps-1 pe-1 fw-semibold ${styles.newWord}`} data-trans="">
        AR
      </span>
    </Link>
  );
};

export default LoginBtn;
