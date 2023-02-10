import { ReactElement } from 'react';
import type { NextPageWithLayout } from '../../../_app';
import OrgDetailsLayout from '../../../../layouts/OrgDetailsLayout';
import Head from 'next/head';
import styles from '../../../../styles/OperationalHours.module.css';
import OperHoursLanding from '../../../../components/OperHoursLanding';
import SitesLanding from '../../../../components/SitesLanding'
import SitesLandingWithData from '../../../../components/SitesLandingWithData';
import React,{useState,useEffect} from 'react';
// index (landing page for sites section )
type Props = {};
 const dummyData={
  conutry:'Egypt',city:"Cairo"
 }

 const Sites: NextPageWithLayout = (props: Props) => {

  return (
    <>
      <Head>
        <title>TicoSys | Organization Info</title>
      </Head>
      {/* check if is that data in sites or not then call comps land without data or with data  */}
      {Object.entries(dummyData).length === 0 ? (
        <SitesLanding />
      ):(<SitesLandingWithData />)}
    </>
  );}
  

// tenant admin orgnaizations details pages shares an OrgDetails layout which includes navbar and site nav.
Sites.getLayout = function getLayout(index: ReactElement) {
  return <OrgDetailsLayout childern={index}></OrgDetailsLayout>;
};

export default Sites;
  