import React from 'react';
import Head from 'next/head';
import styles from '../styles/HolidaysGroupsList.module.css';
import Image from 'next/image';
import PlusIcon from '../public/icons/plus-icon.svg';
import HolidaysGroupListItem from './HolidaysGroupListItem';
import Pagination from './Pagination';

type Props = {
  [key: string]: any;
};

type GroupItem = {
  [key: string]: any;
};

// Holidays Groups List component used as Holidays landing page if there are Holidays Groups.
const HolidaysGroupsList = (props: Props) => {
  return (
    <>
      <Head>
        <title>TicoSys | Departments</title>
      </Head>
      <div className="d-flex flex-column w-100 h-100 mt-4">
        <div className="card border-light mb-3">
          <div className={`card-body pe-5 ps-5 pb-4`}>
            <div className="d-flex flex-column">
              <span className={`fs-3 myPrimary-Text`} data-trans="">
                Holidays Groups
              </span>
              <hr className={`${styles.mainHeadingUnderLine} m-0`} />
              <div className="d-flex justify-content-end">
                <div className={styles.newHolidayBtn}>
                  <a
                    data-bs-toggle="modal"
                    data-bs-target="#CreateNewHolidayModal"
                    type="button"
                    className={`btn myPrimary d-flex align-items-center justify-content-center ${styles.newHolidayGroupBtn}`}>
                    <Image
                      src={PlusIcon}
                      alt="plus icon"
                      width={22}
                      height={22}
                    />
                    <span
                      className={`ps-1 pe-1 text-white fw-semibold ${styles.newWord}`}
                      data-trans="new">
                      New
                    </span>
                  </a>
                </div>
              </div>
              {props.holidays_groups.map(
                (groupItem: GroupItem, index: number) => (
                  <HolidaysGroupListItem
                    key={index}
                    holidays_group_name={groupItem.holidays_group_name}
                    holidays_group_id={groupItem.holidays_group_id}
                  />
                )
              )}
            </div>
            <div
              className={`d-flex justify-content-center ${styles.paginationContainer}`}>
              <Pagination
                paginationCount={10}
                pagiBaseUrl={'/tenant-admin/organization_details/holidays'}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HolidaysGroupsList;
