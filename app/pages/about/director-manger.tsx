
import React, { ReactElement } from 'react'
import Head from 'next/head';
import ViewerLayout from '../../layouts/ViewerLayout';
import { NextPageWithLayout } from '../_app';
import BoardOfDirectors from '../../components/BoardOfDirectors';
import Book from '../../components/Book';
type Props = {};
// dymmy data for ui till handle working with api

const directormanger:NextPageWithLayout = (props:Props) => {
  return (
    <>
    <Head>
        <title>CASCO | Director Manger</title>
    </Head>
    <Book/>
    </>
  )
}
// adding Layout
directormanger.getLayout = function getLayout(directormanger: ReactElement) {
return <ViewerLayout childern={directormanger}></ViewerLayout>;}
export default directormanger;