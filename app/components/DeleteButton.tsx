import React from 'react';
import DeleteIcon from '../public/icons/delete-icon.svg'
import Image from 'next/image';
import styles from '../styles/DeleteButton.module.css';
import Link from 'next/link';

type Props = {
  href: string;
  imageWidth: number; // in Pxiels
  imageHeigth: number; // in Pxiels
};

// New Button Component takes {href, imageWidth, imageHeigth}
const NewBtn = (props: Props) => {
  return (
    <Link href={props.href}>
      <a
        type="button"
        className={`btn d-flex align-items-center justify-content-center m-0 b-0 ${styles.newOpHourBtn}`}>
        <Image
          src={DeleteIcon}
          alt="Delete icon"
          width={props.imageWidth}
          height={props.imageHeigth}
        />
        <span
          className={`p-0 m-0 ms-1  fw-bold ${styles.newWord}`}
          data-trans="delete">
           Delete
        </span>
      </a>
    </Link>
  );
};

export default NewBtn;
