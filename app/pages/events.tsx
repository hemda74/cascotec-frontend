import React, { ReactElement } from 'react'
import Head from 'next/head';
import ViewerLayout from '../layouts/ViewerLayout';
import { NextPageWithLayout } from './_app';
import Events from '../components/Events';
type Props = {};
// dymmy data for ui till handle working with api
const events:NextPageWithLayout = (props:Props) => {
  return (
    <>
    <Head>
        <title>Events | CASCO</title>
    </Head>
    <main>
      <Events/>
    </main>
    </>
  )
}
// adding Layout
events.getLayout = function getLayout(events: ReactElement) {
return <ViewerLayout childern={events}></ViewerLayout>;}
export default events;