import React from 'react';
import Image from 'next/image';
import LicenseGoldIcon from '../public/icons/license-gold-icon.svg';
import UsersIcon from '../public/icons/users-icon.svg';
import UserCircleIcon from '../public/icons/user-circle-icon.svg';
import styles from '../styles/LicenseStatistics.module.css';

type Props = {
  [key: string]: any;
};

// license Statistics component used in license info page.
const LicenseStatistics = (props: Props) => {
  return (
    <div className={`card border-dark ${styles.cardContainer}`}>
      <div className={`card-body ${styles.cardBodyContainer}`}>
        <div
          className={`d-flex justify-content-between align-items-center ${styles.contentContainer}`}>
          <div className="d-flex">
            <Image
              alt="License Gold Icon"
              src={LicenseGoldIcon}
              width={60}
              height={60}
            />
            <div className="d-flex flex-column pe-4 ps-4">
              <span>Your License</span>
              <span className="fw-semibold fs-5">{props.license_type}</span>
            </div>
          </div>
          <hr className={styles.verticalLine} />
          <div className={'d-flex'}>
            <Image
              alt="User Circle Icon"
              src={UserCircleIcon}
              width={60}
              height={60}
            />
            <div className="d-flex flex-column pe-4 ps-4">
              <span>Num Of Users</span>
              <span className="fw-semibold fs-5">
                {props.total_num_of_users} <span data-trans="">users</span>
              </span>
            </div>
          </div>
          <hr className={styles.verticalLine} />
          <div className="d-flex">
            <Image alt="Users Icon" src={UsersIcon} width={60} height={60} />
            <div className="d-flex flex-column pe-4 ps-4">
              <span>Num Of Technicians</span>
              <span className="fw-semibold fs-5">
                {props.total_num_of_technicians}{' '}
                <span data-trans="">technicians</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LicenseStatistics;
