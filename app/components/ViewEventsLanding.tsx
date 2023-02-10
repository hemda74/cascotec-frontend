import React, { useState, useEffect } from 'react';
import styles from '../styles/ViewEventsLanding.module.css';
import Image from 'next/image';
import PlusIcon from '../public/icons/plus-icon.svg';
import ViewEventsLandingImage from '../public/images/view-events-landing-image.svg';
import HolidayGroupWithEditInput from './HolidayGroupWithEditInput';
import Link from 'next/link';
import TrashIcon from '../public/icons/trash-red-icon.svg';

type Props = {};

// View Holidays group Events landing component as a landing page if there is no events created.
const ViewEventsLanding = (props: Props) => {
  return (
    <div className="d-flex flex-column w-100 h-100 mt-4">
      <div className="card border-light mb-3">
        <div className={`card-body pe-5 ps-5 pb-4 ${styles.cardBodyContainer}`}>
          <div className="d-flex flex-column align-items-center">
            <div
              className={`d-flex justify-content-between align-items-center w-100`}>
              <div className={`${styles.holidaysNameGroup}`}>
                <span className="fs-4 fw-semibold text-black" data-trans="">
                  Holidays Group Name
                </span>
                <div className="mt-2">
                  <HolidayGroupWithEditInput
                    inputId="holidayGroupName"
                    defaultValue="Paris Holiday"
                  />
                </div>
              </div>
              <div className="d-flex align-items-center">
                <a
                  type="button"
                  className={`text-decoration-none btn btn-link`}>
                  <div className="d-flex align-items-center">
                    <Image
                      alt="trash icon"
                      src={TrashIcon}
                      width={18}
                      height={18}
                    />
                    <span
                      className="fw-bold myWarning-Text me-1 ms-1"
                      data-trans="">
                      Delete
                    </span>
                  </div>
                </a>
                <Link href="/tenant-admin/organization_details/holidays">
                  <a
                    type="button"
                    className={`text-decoration-none btn myPrimary-outline ${styles.confirmBtn}`}>
                    <span className="fw-bold" data-trans="">
                      Back
                    </span>
                  </a>
                </Link>
              </div>
            </div>
            <Image
              src={ViewEventsLandingImage}
              alt="operational-hours-landing-image"
              width={365}
              height={365}
            />
            <span className={`mt-4 ${styles.landingPageHeader}`} data-trans="">
              Create An For This Holidays Group
            </span>
            <div className={styles.newHolidayBtn}>
              <a
                data-bs-toggle="modal"
                data-bs-target="#CreateNewHolidayEventModal"
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

export default ViewEventsLanding;
