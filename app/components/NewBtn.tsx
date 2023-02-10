import React from 'react';
import PlusIcon from '../public/icons/plus-icon.svg';
import Image from 'next/image';
import styles from '../styles/NewBtn.module.css';
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
        className={`btn myPrimary d-flex align-items-center justify-content-center ${styles.newOpHourBtn}`}>
        <Image
          src={PlusIcon}
          alt="plus icon"
          width={props.imageWidth}
          height={props.imageHeigth}
        />
        <span
          className={`ps-1 pe-1 text-white fw-semibold ${styles.newWord}`}
          data-trans="new">
          New
        </span>
      </a>
    </Link>
  );
};

export default NewBtn;
