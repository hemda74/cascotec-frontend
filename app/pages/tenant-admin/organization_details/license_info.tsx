import { ReactElement } from 'react';
import type { NextPageWithLayout } from '../../_app';
import styles from '../../../styles/LicenseInfo.module.css';
import OrgDetailsLayout from '../../../layouts/OrgDetailsLayout';
import Head from 'next/head';
import Image from 'next/image';
import Logo from '../../../public/logo.svg';
import InfoIcon from '../../../public/icons/info-icon.svg';
import LicenseStatistics from '../../../components/LicenseStatistics';
import LicenseAnalytics from '../../../components/LicenseAnalytics';

type Props = {};

// this dumy data will be replaced with api call then store it in redux.
const dummyData = {
  tenant_image: Logo,
  tenant_name: 'Elraghy Steel',
  license_type: 'Pro',
  total_num_of_users: 2000,
  total_num_of_technicians: 400,
  current_num_of_users: 120,
  current_num_of_technicians: 102,
};

// tenant admin orgnaization details => license info page
const license_info: NextPageWithLayout = (props: Props) => {
  return (
    <>
      <Head>
        <title>TicoSys | License Info</title>
      </Head>
      <div className="d-flex flex-column w-100 h-100 mt-4">
        <div className="card border-light mb-3">
          <div className="card-body pe-5 ps-5 pt-4 pb-4">
            <div className="d-flex flex-row justify-content-between">
              <div className="d-flex flex-column align-items-center">
                <div
                  className={`d-flex justify-content-center align-items-center border rounded-circle p-3 ${styles.logoContainer}`}>
                  <Image
                    alt="dummyData.tenant_image"
                    className=""
                    src={dummyData.tenant_image}
                    width={75}
                    height={75}
                  />
                </div>
                <div className={`d-flex ${styles.tenantNameContainer}`}>
                  <div className="fw-semibold">
                    <p>{dummyData.tenant_name}</p>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column">
                <div className="d-flex align-items-start">
                  <Image alt="InfoIcon" src={InfoIcon} width={26} height={26} />
                  <span className="myPrimary-Text pe-2 ps-2" data-trans="">
                    Total Number Of Users Are The Total Users That Can
                    <br />
                    Access The System.
                  </span>
                </div>
                <div className="d-flex mt-4">
                  <Image alt="InfoIcon" src={InfoIcon} width={26} height={26} />
                  <span className="myPrimary-Text pe-2 ps-2" data-trans="">
                    Technicains Are Part Of The Total Number Of Users.
                  </span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <LicenseStatistics
                  license_type={dummyData.license_type}
                  total_num_of_users={dummyData.total_num_of_users}
                  total_num_of_technicians={dummyData.total_num_of_technicians}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-5">
                <LicenseAnalytics
                  total_num_of_users={dummyData.total_num_of_users}
                  total_num_of_technicians={dummyData.total_num_of_technicians}
                  current_num_of_users={dummyData.current_num_of_users}
                  current_num_of_technicians={
                    dummyData.current_num_of_technicians
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// tenant admin orgnaizations details pages shares an OrgDetails layout which includes navbar and site nav.
license_info.getLayout = function getLayout(index: ReactElement) {
  return <OrgDetailsLayout childern={index}></OrgDetailsLayout>;
};

export default license_info;
