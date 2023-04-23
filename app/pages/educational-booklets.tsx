import React, { ReactElement } from 'react'
import Head from 'next/head';
import ViewerLayout from '../layouts/ViewerLayout';
import { NextPageWithLayout } from './_app';
import EducationalBooklets from '../components/EducationalBooklets';
import OpeningSoon from '../components/OpeningSoon';
type Props = {};
// dymmy data for ui till handle working with api
const ed:NextPageWithLayout = (props:Props) => {
  return (
    <>
    <Head>
        <title>Educational Booklets | CASCO</title>
    </Head>
    <main>
      {/* <EducationalBooklets/> */}
      <OpeningSoon/>
    </main>
    </>
  )
}
// adding Layout
// ed.getLayout = function getLayout(ed: ReactElement) {
// return <ViewerLayout childern={ed}></ViewerLayout>;}
export default ed;