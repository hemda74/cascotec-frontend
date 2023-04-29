import React, { ReactElement } from 'react'
import Head from 'next/head';
import ViewerLayout from '../../layouts/ViewerLayout8';
import { NextPageWithLayout } from '../_app';
import OurValues from '../../components/OurValues';
type Props = {};
// dymmy data for ui till handle working with api
const ourvalues:NextPageWithLayout = (props:Props) => {
  return (
    <>
    <Head>
        <title>Our Values | CASCO</title>
    </Head>
    <main>
      <OurValues/>
    </main>
    </>
  )
}
// adding Layout
ourvalues.getLayout = function getLayout(ourvalues: ReactElement) {
return <ViewerLayout childern={ourvalues}></ViewerLayout>;}
export default ourvalues;