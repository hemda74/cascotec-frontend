import React from 'react';
import styles from '../styles/OrgDetailsSiteNav.module.css';
import OrgDetailsSiteNavLink from '../components/OrgDetailsSiteNavLink';
// import Image from 'next/image';
// import ArrowRightIcon from '../public/icons/arrow-right.svg';
// import ArrowLeftIcon from '../public/icons/arrow-left.svg';

type Props = {};

// ---------------!! all Commented code will be used when scaling up ------------------

// Orgnaization details Site Nav.
const OrgDetailsSiteNav = (props: Props) => {
  return (
    <div className={`overflow-hidden mw-100 ${styles.mainContainer}`}>
      <div
        className={`d-flex bg-white rounded align-items-center justify-content-around ${styles.siteNavContainer}`}>
        {/* <a type="button" className="d-flex align-items-center ps-3 pe-3">
          <Image
            src={ArrowLeftIcon}
            width={18}
            height={18}
            alt="ArrowLeftIcon"
          />
        </a> */}
        <OrgDetailsSiteNavLink
          href={'/tenant-admin/organization_details/organization_info'}
          linkName={'Orgnaization Info'}
          unique={'organization_info'}
        />
        <OrgDetailsSiteNavLink
          href={'/tenant-admin/organization_details/license_info'}
          linkName={'License Info'}
          unique={'license_info'}
        />
        <OrgDetailsSiteNavLink
          href={'/tenant-admin/organization_details/operational_hours'}
          linkName={'Operational Hours'}
          unique={'operational_hours'}
        />
        <OrgDetailsSiteNavLink
          href={'/tenant-admin/organization_details/holidays'}
          linkName={'Holidays'}
          unique={'holidays'}
        />
        <OrgDetailsSiteNavLink href={'/'} linkName={'Sites'} />
        <OrgDetailsSiteNavLink
          href={'/tenant-admin/organization_details/departments'}
          linkName={'Departments'}
          unique={'departments'}
        />
        {/* <a type="button" className="d-flex align-items-center ps-3 pe-3">
          <Image
            src={ArrowRightIcon}
            width={18}
            height={18}
            alt="ArrowLeftIcon"
          />
        </a> */}
      </div>
    </div>
  );
};

export default OrgDetailsSiteNav;
