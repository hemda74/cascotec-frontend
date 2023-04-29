
import React, { ReactElement } from 'react'
import Head from 'next/head';
import ViewerLayout from '../../layouts/ViewerLayout6';
import { NextPageWithLayout } from '../_app';
import DriectorGeneral from '../../components/DriectorGeneral';
type Props = {};
// dymmy data for ui till handle working with api

const directormanger:NextPageWithLayout = (props:Props) => {
  return (
    <>
    <Head>
        <title>CASCO | Director General</title>
    </Head>
    <DriectorGeneral/>
    </>
  )
}
// adding Layout
directormanger.getLayout = function getLayout(directormanger: ReactElement) {
return <ViewerLayout childern={directormanger}></ViewerLayout>;}
export default directormanger;