import React, { ReactElement } from 'react'
import Head from 'next/head';
import ViewerLayout from './../layouts/ViewerLayout';
import { NextPageWithLayout } from './_app';
import AccretiedBodies from '../components/AccrediedsBodies';
type Props = {};
// dymmy data for ui till handle working with api
const Accredtied:NextPageWithLayout = (props:Props) => {
  return (
    <>
    <Head>
        <title>Accredtied Bodies | CASCO</title>
    </Head>
    <main>
      <AccretiedBodies/>
    </main>
    </>
  )
}
// adding Layout
Accredtied.getLayout = function getLayout(Accredtied: ReactElement) {
return <ViewerLayout childern={Accredtied}></ViewerLayout>;}
export default Accredtied;