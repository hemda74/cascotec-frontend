import React, { ReactElement } from 'react'
import Head from 'next/head';
import ViewerLayout from '../layouts/ViewerLayout';
import { NextPageWithLayout } from './_app';
import VisualPresentations from '../components/VisualPresentations';
import OpeningSoon from '../components/OpeningSoon';
type Props = {};
// dymmy data for ui till handle working with api
const vp:NextPageWithLayout = (props:Props) => {
  return (
    <>
    <Head>
        <title>Visual Presentations | CASCO</title>
    </Head>
    <main>
      {/* <VisualPresentations/> */}
      <OpeningSoon/>
    </main>
    </>
  )
}
// adding Layout
// vp.getLayout = function getLayout(vp: ReactElement) {
// return <ViewerLayout childern={vp}></ViewerLayout>;}
export default vp;