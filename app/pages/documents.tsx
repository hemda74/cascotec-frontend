import React, { ReactElement } from 'react'
import Head from 'next/head';
import ViewerLayout from '../layouts/ViewerLayout';
import { NextPageWithLayout } from './_app';
import Documents from '../components/Documents';
import OpeningSoon from '../components/OpeningSoon';
type Props = {};
// dymmy data for ui till handle working with api
const dummyData = {
  ducoments: [
    {
      document_name:'AC 2.0 Applications For Accreditation',
      document_pdf:'../HPC 0069.pdf', 
      document_id: 0,
      document_version:'7.2',
      document_issued_date:'02 Feb 2023',
      document_category:'Internal Document',
      document_sub_category:'Procedures',
      document_accrediation_type:'Calibration Lab,Halal Product Certification ,Inspection Body ,Management System Certification ,Medical Lab ,Personnel Certification Body ,Product Certification ,Prof Testing Provider ,Reference Material Producer,Testing Lab',
      document_changelog:'Minor update in relation to internal audit finding 2021 to add a sentence that the CAB is "(normally those Conformity Assessment Bodies covered by IAF MLA)"',
      document_for_Code:'flush-collapseOne'
    },
    {
      document_name:'AC 2.1 Application form and Accreditation Agreement',
      document_pdf:'../HPC 0069.pdf', 
      document_id: 1,
      document_version:'5.2',
      document_issued_date:'02 Feb 2023',
      document_category:'Internal Document',
      document_sub_category:'Procedures',
      document_accrediation_type:'Calibration Lab,Halal Product Certification ,Inspection Body ,Management System Certification ,Medical Lab ,Personnel Certification Body ,Product Certification ,Prof Testing Provider ,Reference Material Producer,Testing Lab',
      document_changelog:'Minor update in relation to internal audit finding 2021 to add a sentence that the CAB is "(normally those Conformity Assessment Bodies covered by IAF MLA)"',
      document_for_Code:'panelsStayOpen-collapseTwo'
    },
    {
      document_name:'EXT 6.0 ILAC-R7 : Rules For The Use Of The ILAC MRA Mark',
      document_pdf:'../HPC 0069.pdf', 
      document_id: 2,
      document_version:'3.2',
      document_issued_date:'02 Feb 2023',
      document_category:'Internal Document',
      document_sub_category:'Procedures',
      document_accrediation_type:'Calibration Lab,Halal Product Certification ,Inspection Body ,Management System Certification ,Medical Lab ,Personnel Certification Body ,Product Certification ,Prof Testing Provider ,Reference Material Producer,Testing Lab',
      document_changelog:'Minor update in relation to internal audit finding 2021 to add a sentence that the CAB is "(normally those Conformity Assessment Bodies covered by IAF MLA)"',
      document_for_Code:'panelsStayOpen-collapseThree'
    },
    {
      document_name:'AC 4.0 Document Review',
      document_pdf:'../HPC 0069.pdf', 
      document_id: 3,
      document_version:'8.1',
      document_issued_date:'02 Feb 2023',
      document_category:'Internal Document',
      document_sub_category:'Procedures',
      document_accrediation_type:'Calibration Lab,Halal Product Certification ,Inspection Body ,Management System Certification ,Medical Lab ,Personnel Certification Body ,Product Certification ,Prof Testing Provider ,Reference Material Producer,Testing Lab',
      document_changelog:'Minor update in relation to internal audit finding 2021 to add a sentence that the CAB is "(normally those Conformity Assessment Bodies covered by IAF MLA)"',
      document_for_Code:'panelsStayOpen-collapseFour'
    },
    {
      document_name:'AC 5.0 Assessment preparation and team selection',
      document_pdf:'../HPC 0069.pdf', 
      document_id: 4,
      document_version:'1.6',
      document_issued_date:'02 Feb 2023',
      document_category:'Internal Document',
      document_sub_category:'Procedures',
      document_accrediation_type:'Calibration Lab,Halal Product Certification ,Inspection Body ,Management System Certification ,Medical Lab ,Personnel Certification Body ,Product Certification ,Prof Testing Provider ,Reference Material Producer,Testing Lab',
      document_changelog:'Minor update in relation to internal audit finding 2021 to add a sentence that the CAB is "(normally those Conformity Assessment Bodies covered by IAF MLA)"',
      document_for_Code:'panelsStayOpen-collapseFive'
    },
  ],
};
const services:NextPageWithLayout = (props:Props) => {
  return (
    <>
    <Head>
        <title>Documents | CASCO</title>
    </Head>
    <main>
       <Documents ducoments={dummyData.ducoments} /> 
      {/* <OpeningSoon/> */}
    </main>
    </>
  )
}
// adding Layout
// services.getLayout = function getLayout(contactus: ReactElement) {
// return <ViewerLayout childern={contactus}></ViewerLayout>;}
export default services;


