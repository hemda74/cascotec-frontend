import React, { ReactElement } from 'react'
import Head from 'next/head';
import ViewerLayout from '../../layouts/ViewerLayout';
import { NextPageWithLayout } from '../_app';
import AccretiedBodies from '../../components/AccrediedsBodies';
import OpeningSoon from '../../components/OpeningSoon';
type Props = {};
// dymmy data for ui till handle working with api
const dummyData = {
  accredtied_bodies: [
    {
      accredtied_body_name:'Motabaqah Europe for Certification Services Societe Anonyme',
      accredtied_body_image:'/images/accretied_bodies/first_images/1.png', 
      accredtied_body_id: 0,
      accredtied_body_code:"HPC 0069",
      accredtied_body_Country:'Egypt',
      accredtied_body_From:'02 Feb 2033',
      accredtied_body_To:'02 Jan 2028',
      accredtied_body_country_image:'/images/accretied_bodies/accretied_flags/egypt.png',
    },
    {
      accredtied_body_name:'Tatweer Transportation Services Company Rafed',
      accredtied_body_image:'/images/accretied_bodies/first_images/4.png',  
      accredtied_body_id: 1,
      accredtied_body_Country:'KSA',
      accredtied_body_From:'02 Feb 2023',
      accredtied_body_To:'02 Jan 2028',
      accredtied_body_country_image:'/images/accretied_bodies/accretied_flags/ksa.png',
    },
    {
      accredtied_body_name:'INTERTEK INTERNATIONAL INC',
      accredtied_body_image:'/images/accretied_bodies/first_images/3.jpg',
      accredtied_body_id: 2,
      accredtied_body_Country:'Qater',
      accredtied_body_From:'02 Feb 2023',
      accredtied_body_To:'02 Jan 2028',
      accredtied_body_country_image:'/images/accretied_bodies/accretied_flags/qater.png',
    },
    {
      accredtied_body_name:'Intertek ETL SEMKO Korea Limited',
      accredtied_body_image:'/images/accretied_bodies/first_images/4.png',
      accredtied_body_id:4 ,
      accredtied_body_Country:'Bahreen',
      accredtied_body_From:'02 Feb 2023',
      accredtied_body_To:'02 Jan 2028',
      accredtied_body_country_image:'/images/accretied_bodies/accretied_flags/bahreen.png',
    },
    {
      accredtied_body_name:'Tubestar Oil and Gas Inspection and Maintenance WLL',
      accredtied_body_image:'/images/accretied_bodies/first_images/4.png',
      accredtied_body_id: 5,
      accredtied_body_Country:'Bahreen',
      accredtied_body_From:'02 Feb 2023',
      accredtied_body_To:'02 Jan 2028',
      accredtied_body_country_image:'/images/accretied_bodies/accretied_flags/bahreen.png',
    },
    {
      accredtied_body_name:'Fahes Company',
      accredtied_body_image:'/images/accretied_bodies/first_images/14.png',
      accredtied_body_id: 6,
      accredtied_body_Country:'Bahreen',
      accredtied_body_From:'02 Feb 2023',
      accredtied_body_To:'02 Jan 2028',
      accredtied_body_country_image:'/images/accretied_bodies/accretied_flags/bahreen.png',
    },
    {
      accredtied_body_name:'Laboratories of the National Center for Palm and Dates in AIAhsa',
      accredtied_body_image:'/images/accretied_bodies/first_images/13.jpg',
      accredtied_body_id: 7,
      accredtied_body_Country:'Bahreen',
      accredtied_body_From:'02 Feb 2023',
      accredtied_body_To:'02 Jan 2028',
      accredtied_body_country_image:'/images/accretied_bodies/accretied_flags/bahreen.png',
    },
    {
      accredtied_body_name:'LCIE China Company Limit',
      accredtied_body_image:'/images/accretied_bodies/first_images/8.jpg',
      accredtied_body_id: 8,
      accredtied_body_Country:'Bahreen',
      accredtied_body_From:'02 Feb 2023',
      accredtied_body_To:'02 Jan 2028',
      accredtied_body_country_image:'/images/accretied_bodies/accretied_flags/bahreen.png',
    },
    {
      accredtied_body_name:'SGS Gulf Limited',
      accredtied_body_image:'/images/accretied_bodies/first_images/5.jpg',
      accredtied_body_id: 9,
      accredtied_body_Country:'Bahreen',
      accredtied_body_From:'02 Feb 2023',
      accredtied_body_To:'02 Jan 2028',
      accredtied_body_country_image:'/images/accretied_bodies/accretied_flags/bahreen.png',
    },
    {
      accredtied_body_name:'HAN RISE QUALITY AND CERTIFICATION SERVICES CO LTD',
      accredtied_body_image:'/images/accretied_bodies/first_images/5.jpg',
      accredtied_body_id: 10,
      accredtied_body_Country:'Bahreen',
      accredtied_body_From:'02 Feb 2023',
      accredtied_body_To:'02 Jan 2028',
      accredtied_body_country_image:'/images/accretied_bodies/accretied_flags/bahreen.png',
    },
  ],
};
const Accredtied = (props:Props) => {
  return (
    <>
    <Head>
        <title>Accredtied Bodies | CASCO</title>
    </Head>
    <main>
      {/* <AccretiedBodies accredtied_bodies={dummyData.accredtied_bodies} /> */}
      <OpeningSoon/>
    </main>
    </>
  )
}
// adding Layout
// Accredtied.getLayout = function getLayout(Accredtied: ReactElement) {
// return <ViewerLayout childern={Accredtied}></ViewerLayout>;}
export default Accredtied;