import React, { ReactElement } from 'react'
import Head from 'next/head';
import ViewerLayout from './../layouts/ViewerLayout';
import { NextPageWithLayout } from './_app';
import AccretiedBodies from '../components/AccrediedsBodies';
type Props = {};
// dymmy data for ui till handle working with api
const dummyData = {
  accredtied_bodies: [
    {
      accredtied_body_image:'/images/accretied_bodies/first_images/1.png', 
      accredtied_body_id: 0,
      accredtied_body_Country:'Egypt',
      accredtied_body_From:'02/Feb/2023',
      accredtied_body_To:'02/Jan/2028',
      accredtied_body_country_image:'/images/accretied_bodies/accretied_flags/egypt.png',
    },
    {
      accredtied_body_image:'/images/accretied_bodies/first_images/4.png',  
      accredtied_body_id: 1,
      accredtied_body_Country:'KSA',
      accredtied_body_From:'02/Feb/2023',
      accredtied_body_To:'02/Jan/2028',
      accredtied_body_country_image:'/images/accretied_bodies/accretied_flags/ksa.png',
    },
    {
      accredtied_body_image:'/images/accretied_bodies/first_images/3.jpg',
      accredtied_body_id: 2,
      accredtied_body_Country:'Qater',
      accredtied_body_From:'02/Feb/2023',
      accredtied_body_To:'02/Jan/2028',
      accredtied_body_country_image:'/images/accretied_bodies/accretied_flags/qater.png',
    },
    {
      accredtied_body_image:'/images/accretied_bodies/first_images/4.png',
      accredtied_body_id: 3,
      accredtied_body_Country:'Bahreen',
      accredtied_body_From:'02/Feb/2023',
      accredtied_body_To:'02/Jan/2028',
      accredtied_body_country_image:'/images/accretied_bodies/accretied_flags/bahreen.png',
    },
    {
      accredtied_body_image:'/images/accretied_bodies/first_images/4.png',
      accredtied_body_id: 3,
      accredtied_body_Country:'Bahreen',
      accredtied_body_From:'02/Feb/2023',
      accredtied_body_To:'02/Jan/2028',
      accredtied_body_country_image:'/images/accretied_bodies/accretied_flags/bahreen.png',
    },
    {
      accredtied_body_image:'/images/accretied_bodies/first_images/14.png',
      accredtied_body_id: 3,
      accredtied_body_Country:'Bahreen',
      accredtied_body_From:'02/Feb/2023',
      accredtied_body_To:'02/Jan/2028',
      accredtied_body_country_image:'/images/accretied_bodies/accretied_flags/bahreen.png',
    },
    {
      accredtied_body_image:'/images/accretied_bodies/first_images/13.jpg',
      accredtied_body_id: 3,
      accredtied_body_Country:'Bahreen',
      accredtied_body_From:'02/Feb/2023',
      accredtied_body_To:'02/Jan/2028',
      accredtied_body_country_image:'/images/accretied_bodies/accretied_flags/bahreen.png',
    },
    {
      accredtied_body_image:'/images/accretied_bodies/first_images/8.jpg',
      accredtied_body_id: 3,
      accredtied_body_Country:'Bahreen',
      accredtied_body_From:'02/Feb/2023',
      accredtied_body_To:'02/Jan/2028',
      accredtied_body_country_image:'/images/accretied_bodies/accretied_flags/bahreen.png',
    },
    {
      accredtied_body_image:'/images/accretied_bodies/first_images/5.jpg',
      accredtied_body_id: 3,
      accredtied_body_Country:'Bahreen',
      accredtied_body_From:'02/Feb/2023',
      accredtied_body_To:'02/Jan/2028',
      accredtied_body_country_image:'/images/accretied_bodies/accretied_flags/bahreen.png',
    },
    {
      accredtied_body_image:'/images/accretied_bodies/first_images/5.jpg',
      accredtied_body_id: 3,
      accredtied_body_Country:'Bahreen',
      accredtied_body_From:'02/Feb/2023',
      accredtied_body_To:'02/Jan/2028',
      accredtied_body_country_image:'/images/accretied_bodies/accretied_flags/bahreen.png',
    },
  ],
};
const Accredtied:NextPageWithLayout = (props:Props) => {
  return (
    <>
    <Head>
        <title>Accredtied Bodies | CASCO</title>
    </Head>
    <main>
      <AccretiedBodies accredtied_bodies={dummyData.accredtied_bodies} />
    </main>
    </>
  )
}
// adding Layout
Accredtied.getLayout = function getLayout(Accredtied: ReactElement) {
return <ViewerLayout childern={Accredtied}></ViewerLayout>;}
export default Accredtied;