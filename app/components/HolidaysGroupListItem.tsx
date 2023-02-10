import React from 'react';
import styles from '../styles/HolidaysGroupListItem.module.css';
import Image from 'next/image';
import HolidayGroupItemIcon from '../public/icons/holiday-group-item-icon.svg';
import Link from 'next/link';

type Props = {
  holidays_group_name: string;
  holidays_group_id: number;
};

// Holidays Group List Item component
const HolidaysGroupListItem = (props: Props) => {
  return (
    <div
      className={`d-flex justify-content-between align-items-center w-100 myShadow-lg mt-4 ${styles.mainContainer}`}>
      <div className={`d-flex align-items-center ${styles.subContainer}`}>
        <div className="d-flex">
          <Image
            alt="Holiday Group Item Icon"
            src={HolidayGroupItemIcon}
            width={90}
            height={90}
          />
        </div>
        <div className="d-flex flex-column me-4 ms-4">
          <span className={`${styles.holidaysGroupText}`} data-trans="">
            Holidays Group
          </span>
          <span className={`fw-semibold ${styles.holidaysGroupNameText}`}>
            {props.holidays_group_name}
          </span>
        </div>
      </div>
      <Link href="">
        <a type="button" className="text-decoration-none">
          <div
            className={`d-flex justify-content-center align-items-center myInfo-bg ${styles.viewEventsContainer}`}>
            <span className="text-white" data-trans="">
              View Events
            </span>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default HolidaysGroupListItem;
