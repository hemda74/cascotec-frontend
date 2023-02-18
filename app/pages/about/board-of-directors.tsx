import React, { ReactElement } from 'react'
import Head from 'next/head';
import ViewerLayout from '../../layouts/ViewerLayout';
import { NextPageWithLayout } from '../_app';
import BoardOfDirectors from '../../components/BoardOfDirectors';
type Props = {};
// dymmy data for ui till handle working with api


const boardofdirectors:NextPageWithLayout = (props:Props) => {
  return (
   <>
   <Head>
    <title>CASCO | B O D</title>
   </Head>
   <BoardOfDirectors/>
   </>
  )
}
// adding Layout
boardofdirectors.getLayout = function getLayout(boardofdirectors: ReactElement) {
    return <ViewerLayout childern={boardofdirectors}></ViewerLayout>;}
export default boardofdirectors;