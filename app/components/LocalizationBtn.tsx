import React from 'react';
import changeLang from '../helper/changeLang';
import styles from '../styles/Localizationbtn.module.css';

// Define styles as props alias.
type Props = {
  readonly [key: string]: string;
};
// localization button is used in loginpage, forgetpass ..etc.
const LocalizationBtn = (props: Props) => {
  return (
    <div className="mt-4">
      <button
        className={`btn btn-lg btn-outline-light ${styles.localizationBtn}`}
        onClick={() => {
          // Changing language function.
          changeLang();
        }}>
        <span data-trans="langs">AR</span>
      </button>
    </div>
  );
};

export default LocalizationBtn;
