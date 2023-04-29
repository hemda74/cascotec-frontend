import React, { ReactElement } from 'react'
import Head from 'next/head';
import ViewerLayout from './../layouts/ViewerLayout4';
import { NextPageWithLayout } from './_app';
import ContactUs from '../components/ContactUs';
type Props = {};
// dymmy data for ui till handle working with api
const contactus:NextPageWithLayout = (props:Props) => {
  return (
    <>
    <Head>
        <title>Contact Us | CASCO</title>
    </Head>
    <main>
      <ContactUs/>
    </main>
    </>
  )
}
// adding Layout
contactus.getLayout = function getLayout(contactus: ReactElement) {
return <ViewerLayout childern={contactus}></ViewerLayout>;}
export default contactus;