import React, { ReactElement } from 'react'
import Head from 'next/head';
import ViewerLayout from '../../layouts/ViewerLayout';
import { NextPageWithLayout } from '../_app';
import Gallery from '../../components/Gallery';
import OpeningSoon from '../../components/OpeningSoon';
type Props = {};
// dymmy data for ui till handle working with api
const gallery:NextPageWithLayout = (props:Props) => {
  return (
    <>
    <Head>
        <title>Gallery | CASCO</title>
    </Head>
    <main>
      {/* <Gallery/> */}
      <OpeningSoon/>
    </main>
    </>
  )
}
// adding Layout
// gallery.getLayout = function getLayout(gallery: ReactElement) {
// return <ViewerLayout childern={gallery}></ViewerLayout>;}
export default gallery;