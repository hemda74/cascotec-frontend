import React, { ReactElement } from 'react'
import Head from 'next/head';
import CourseLayout from '../../layouts/CourseLayout';
import { NextPageWithLayout } from '../_app';
import CourseCard from '../../components/CourseCard';
type Props = {};
// dymmy data for ui till handle working with api
const Course:NextPageWithLayout = (props:Props) => {
  return (
    <>
    <Head>
        <title>Course Details | CASCO</title>
    </Head>
    <main>
      <CourseCard/>
    </main>
    </>
  )
}
// adding Layout
Course.getLayout = function getLayout(Course: ReactElement) {
return <CourseLayout childern={Course}></CourseLayout>;}
export default Course;
