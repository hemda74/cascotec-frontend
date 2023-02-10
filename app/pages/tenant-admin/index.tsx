import { ReactElement } from 'react';
import type { NextPageWithLayout } from '../_app';
import TALayout from '../../layouts/TALayout';
import styles from '../../styles/TenantAdminHome.module.css';
import TALinkCard from '../../components/TALinkCard';
import Head from 'next/head';

type Props = {};

// tenant admen pannel homepage.
 const TenantAdminHome: NextPageWithLayout = (props: Props)=> {
  return (
    <>
      <Head>
        <title>TicoSys | Admin Pannel</title>
      </Head>
      <div className="row ps-3 pe-3 ">
        <div className={`col-12 ${styles.mainHeading}`}>
          <h5 className="fw-semibold" data-trans="">
            All Configuration
          </h5>
        </div>
      </div>
      <div className="row ps-3 pe-3 mt-2">
        <div className="col-3">
          <TALinkCard
            cardName={'Organization Details'}
            onClickRoute={
              '/tenant-admin/organization_details/organization_info'
            }
          />
        </div>
        <div className="col-3">
          <TALinkCard
            cardName={'User Managements'}
            onClickRoute={'/tenant-admin/'}
          />
        </div>
        <div className="col-3">
          <TALinkCard
            cardName={'Mail Server Settings'}
            onClickRoute={'/tenant-admin/'}
          />
        </div>
      </div>
    </>
  );
};

// tenant admin pages shares an TA layout which includes navbar.
TenantAdminHome.getLayout = function getLayout(index: ReactElement) {
  return <TALayout childern={index}></TALayout>;
};

export default TenantAdminHome;
