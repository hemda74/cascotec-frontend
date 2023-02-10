import React from 'react';
import Image from 'next/image';
import HolidaysLandingImage from '../public/images/holidays-landing-image.svg';
import styles from '../styles/HolidaysLanding.module.css';
import PlusIcon from '../public/icons/plus-icon.svg';

type Props = {};

// operational hours landing page component used in tenant admin org details => operational hours page
const HolidaysLanding = (props: Props) => {
  return (
    <div className="d-flex flex-column w-100 h-100 mt-4">
      <div className="card border-light mb-3">
        <div className={`card-body pe-5 ps-5 pb-4 ${styles.cardBodyContainer}`}>
          <div className="d-flex flex-column align-items-center">
            <Image
              src={HolidaysLandingImage}
              alt="operational-hours-landing-image"
              width={365}
              height={365}
            />
            <span className={`mt-4 ${styles.landingPageHeader}`} data-trans="">
              Create A Holidays Group
            </span>
            <div className={styles.newHolidayBtn}>
              <a
                data-bs-toggle="modal"
                data-bs-target="#CreateNewHolidayModal"
                type="button"
                className={`btn myPrimary d-flex align-items-center justify-content-center ${styles.newHolidayGroupBtn}`}>
                <Image src={PlusIcon} alt="plus icon" width={22} height={22} />
                <span
                  className={`ps-1 pe-1 text-white fw-semibold ${styles.newWord}`}
                  data-trans="new">
                  New
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HolidaysLanding;
