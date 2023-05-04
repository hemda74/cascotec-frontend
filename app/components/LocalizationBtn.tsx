import Image from 'next/image';
import React from 'react';
import changeLang from '../helper/changeLang';
import styles from '../styles/Localizationbtn.module.css';
import ar from '../public/ar.svg'

// Define styles as props alias.
type Props = {
  readonly [key: string]: string;
};
// localization button is used in loginpage, forgetpass ..etc.
const LocalizationBtn = (props: Props) => {
  return (
    <div className="mt-4">
      <button
        className={`btn ${styles.localizationBtn}`}
        onClick={() => {
          // Changing language function.
          changeLang();
        }}>
        <span data-trans="langs">
          E
        </span>
      </button>
    </div>
  );
};

export default LocalizationBtn;
