import React from 'react';
import Image from 'next/image';
import OperationalHoursLandingImage from '../public/images/operational-hours-landing-image.svg';
import styles from '../styles/OperHoursLanding.module.css';
import NewBtn from './NewBtn';

type Props = {};

// operational hours landing page component used in tenant admin org details => operational hours page
const OperHoursLanding = (props: Props) => {
  return (
    <div className="d-flex flex-column w-100 h-100 mt-4">
      <div className="card border-light mb-3">
        <div className={`card-body pe-5 ps-5 pb-4 ${styles.cardBodyContainer}`}>
          <div className="d-flex flex-column align-items-center">
            <Image
              src={OperationalHoursLandingImage}
              alt="operational-hours-landing-image"
              width={365}
              height={365}
            />
            <span className={`mt-4 ${styles.landingPageHeader}`} data-trans="">
              Create Operational Hours For A Site
            </span>
            <div className={styles.newOpHourBtn}>
              <NewBtn
                href="/tenant-admin/organization_details/operational_hours/create_new"
                imageWidth={22}
                imageHeigth={22}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OperHoursLanding;
