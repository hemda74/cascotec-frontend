import React, { ReactElement } from 'react'
import Head from 'next/head';
import ViewerLayout from '../../../layouts/ViewerLayout';
import { NextPageWithLayout } from '../../_app';
import BoardOfDirectors from '../../../components/BoardOfDirectors';
type Props = {};
const boardofdirectors:NextPageWithLayout = (props:Props) => {
  return (
   <>
   <Head>
    <title>CASCO | Our Team</title>
   </Head>
   <BoardOfDirectors/>
   </>
  )
}
// adding Layout
boardofdirectors.getLayout = function getLayout(boardofdirectors: ReactElement) {
    return <ViewerLayout childern={boardofdirectors}></ViewerLayout>;}
export default boardofdirectors;