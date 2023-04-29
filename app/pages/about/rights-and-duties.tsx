import React, { ReactElement } from 'react'
import Head from 'next/head';
import ViewerLayout from '../../layouts/ViewerLayout3';
import { NextPageWithLayout } from '../_app';
import RightsAndDuties from '../../components/RightsAndDuties';
type Props = {};
// dymmy data for ui till handle working with api
const rad:NextPageWithLayout = (props:Props) => {
  return (
    <>
    <Head>
        <title>{`CASCO's Rights And Duties | CASCO`}</title>
    </Head>
    <main>
      <RightsAndDuties/>
    </main>
    </>
  )
}
// adding Layout
rad.getLayout = function getLayout(rad: ReactElement) {
return <ViewerLayout childern={rad}></ViewerLayout>;}
export default rad;