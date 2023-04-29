import StackHolders from '../../components/StackHolders'
import React, { ReactElement } from 'react'
import Head from 'next/head';
import ViewerLayout from '../../layouts/ViewerLayout10';
import { NextPageWithLayout } from '../_app';
import styles from '../../styles/Main.module.css'
type Props = {};
// dymmy data for ui till handle working with api
const stakeholdersadvisorycommittee:NextPageWithLayout = (props:Props) => {
  return (
    <>
    <Head>
        <title>stakeholders advisory committee | CASCO</title>
    </Head>
    <main >
       <StackHolders /> 
    </main>
    </>
  )
}
// adding Layout
stakeholdersadvisorycommittee.getLayout = function getLayout(stakeholdersadvisorycommittee: ReactElement) {
return <ViewerLayout childern={stakeholdersadvisorycommittee}></ViewerLayout>;}
export default stakeholdersadvisorycommittee;