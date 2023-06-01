import React, { ReactElement,useEffect, useState } from 'react'
import Head from 'next/head';
import Image from 'next/image'
import styles from '../../styles/CourseCard.module.css'
import CourseLayout from '../../layouts/CourseLayout';
import Link from "next/link"
import { NextPageWithLayout } from '../_app';
import courseimage from '../../public/images/courses_section/courses_images/Measurement-Uncertainty-and-ISO-IEC-17025-2017-Compliance-for-Laboratories.png'
import ContactUs from '../../components/Courses Forms/Course11Email';

type Props = {};
// dymmy data for ui till handle working with api
const Course:NextPageWithLayout = (props:Props) => {
  const [partyTime, setPartyTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
/////////////// add counter section ///////////////////////
  useEffect(() => {
    const target = new Date("12/30/2023 09:00:00");
    const interval = setInterval(() => {
      const now = new Date();
      var difference = target.getTime() - now.getTime();

      var d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      var h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      var m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      var s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setPartyTime(true)
        ;
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
<>
    <Head>
        <title>Course Details | CASCO</title>
    </Head>
    <main className={`${styles.bodyContainer}`}>
    <div className={`text-center row ${styles.titleWord2}`}>
        <div className={`container mb-4`}>
            <Link href={"/"}><a className="text-white fw-semibold mb-4" data-trans="HomeNav">{`Home`}</a></Link>
            <Link href={"/courses"}><a className="text-white fw-semibold mb-4" data-trans="CourseNav2">{` > Courses`}</a></Link>
        </div>
        <h3 className={`text-white col-lg-5 m-auto fw-bold mb-5`} data-trans="course11">{``}</h3>
        <div className={''}>
            {partyTime ? 
            (
                <>
                  <div className="d-flex m-auto">
                      <div className="d-flex m-auto">
                        <div className={`${styles.timeSegment}`}>
                          <small className="text-white fw-senibold">0</small>
                          <small className="text-white fw-senibold">Days</small>
                        </div>
                        <div className={`${styles.timeSegment}`}>
                          <small className="text-white fw-senibold">0</small>
                          <small className="text-white fw-senibold">Hrs</small>
                        </div>
                        <div className={`${styles.timeSegment}`}>
                          <small className="text-white fw-senibold">0</small>
                          <small className="text-white fw-senibold">Mins</small>
                        </div>
                        <div className={`${styles.timeSegment}`}>
                          <small className="text-white fw-senibold">0</small>
                          <small className="text-white fw-senibold">Secs</small>
                        </div>
                      </div>
                  </div>  
                </>
            ) : 
            (
                <>
                    <div className="d-flex m-auto">
                        <div className="d-flex m-auto">
                          <div className={`${styles.timeSegment}`}>
                            <small className="text-white fw-senibold">{days}</small>
                            <small className="text-white fw-senibold" data-trans="Days">Days</small>
                          </div>
                          <div className={`${styles.timeSegment}`}>
                            <small className="text-white fw-senibold">{hours}</small>
                            <small className="text-white fw-senibold" data-trans="Hrs">Hrs</small>
                          </div>
                          <div className={`${styles.timeSegment}`}>
                            <small className="text-white fw-senibold">{minutes}</small>
                            <small className="text-white fw-senibold" data-trans="Mins">Mins</small>
                          </div>
                          <div className={`${styles.timeSegment}`}>
                            <small className="text-white fw-senibold">{seconds}</small>
                            <small className="text-white fw-senibold" data-trans="Secs">Secs</small>
                          </div>
                        </div>
                    </div>
                </>
      )}
    </div>
    {/* <div className={`${styles.enrollDiv} d-flex m-auto `}>
        <button className={`mySuccess rounded fw-bold ${styles.enrollButton}`} type="submit">Enroll Now</button>
        <div className='d-flex me-4 ms-4'>
            <span className='fw-bold fs-4'>4500</span>
            <span className=' me-2 ms-2'>SAR</span>
        </div>
      </div> */}
    </div>
    <div className="container col-xl-8 col-lg-8 col-md-12 mb-5">
        <div className="row pt-4">
            <div className={`col-lg-7 col-md-12 p-3 ${styles.courseDetailesMain}`}>
                <Image src={courseimage} className="img-fluid" alt=""/>
                <div className="description" id='description'>
                    <span className='fs-5 fw-bold' data-trans="Description">Description</span>
                    <p className='mt-4 mb-2 text-black-50' data-trans="TRAININGPROGRAM">TRAINING PROGRAM INTRODUCTION:</p>
                    <small className='text-black-50 mt-2 d-inline-block' data-trans="course11Desc">{``}</small>
                </div>
                <div className="outline mt-4" id='outline'>
                    <span className='fs-5 fw-bold d-block' data-trans="OutLine">Course Outlines:</span>
                    <small className='text-black-50 mt-3 d-block' data-trans="course11outline1">{``}</small>
                    <small className='text-black-50 mt-3 d-block' data-trans="course11outline2">{``}</small>
                    <small className='text-black-50 mt-3 d-block' data-trans="course11outline3">{``}</small>
                    <small className='text-black-50 mt-3 d-block' data-trans="course11outline4">{``}</small>
                    <small className='text-black-50 mt-3 d-block' data-trans="course11outline5">{``}</small>
                   
                </div>
                <div className="objective mt-4" id='objective'>
                    <span className='fs-5 fw-bold d-block' data-trans="CourseObjectives">Course Objectives:</span>
                    <small className='text-black-50 mt-3 d-block' data-trans="course11objctive1">{``}</small>
                    <small className='text-black-50 mt-3 d-block' data-trans="course11objctive2">{``}</small>
                    <small className='text-black-50 mt-3 d-block' data-trans="course11objctive3">{``}</small>
                    <small className='text-black-50 mt-3 d-block' data-trans="course11objctive4">{``}</small>
                    <small className='text-black-50 mt-3 d-block' data-trans="course11objctive5">{``}</small>
                    <small className='text-black-50 mt-3 d-block' data-trans="course11objctive6">{``}</small>
                </div>
                <div className="audience mt-4" id='audience'>
                    <span className='fs-5 fw-bold d-block' data-trans="Audience">Audience</span>
                        <small className='text-black-50 mt-3 d-block' data-trans="course1audiance1">{``}</small>
                </div>
                <div className="estimated-time mt-4" id='estimated-time'>
                    <span className='fs-5 fw-bold d-block' data-trans="EstimatedTime">Estimated Time</span>
                         <small className="text-black-50 mt-3 d-block" data-trans="Days2"></small>
                </div>
            </div>
            <div className={`col-xl-4 col-lg-4 col-md-8 col-sm-12 offset-xl-1 offset-lg-1 offset-md-0 ${styles.courseDetailesMain}`}>
                <div className={`${styles.courseDetailes}`}>
                    <ul className="list_wideger_desc list-unstyled p-0 ">
                        <li className={`d-flex mt-2 ${styles.liDiv}`}>
                              <div className={`${styles.iconHolder}`}>
                                    <img src="/images/courses_section/calendar.svg" alt=""/>
                                </div>
                              <div className="row">
                                  <small className="text-black-50" data-trans="Schedule">Schedule</small>
                                  <small className="fw-bold mt-1" data-trans="coursedate1jun">01-Jun-2023</small>
                              </div>
                        </li>
                        {/* <li className={`d-flex mt-2 ${styles.liDiv}`}>
                            <div className={`${styles.iconHolder}`}>
                                <img src="/images/courses_section/clock-fill2.svg" alt=""/>
                            </div>
                            <div className="row">
                                <small className="text-black-50" data-trans="EstimatedTime">Estimated Time</small>
                                <small className="fw-bold mt-1" data-trans="Days2">2 Days</small>
                            </div>
                        </li> */}
                        <li className={`d-flex mt-2 ${styles.liDiv}`}>
                            <div className={`${styles.iconHolder}`}>
                                <img src="/images/courses_section/pin-2.svg" alt=""/>
                            </div>
                            <div className="row">
                                <small className="text-black-50" data-trans="Venue">Venue</small>
                                <small className="fw-bold mt-1" data-trans="Egypt">Egypt</small>
                            </div>
                        </li>					
                        <li className={`d-flex mt-2 ${styles.liDiv}`}>
                            <div className={`${styles.iconHolder}`}>
                                <img src="/images/courses_section/online_ic.svg" alt=""/>
                            </div>
                            <div className="row ">
                                <small className="text-black-50" data-trans="TrainingLanguage">Training Language</small>
                                <small className="fw-bold mt-1" data-trans="Arabic">Arabic</small>
                            </div>
                        </li>
                    </ul>
                </div>
               <ContactUs/>
            </div>
        </div>
    </div> 
    </main>  
  </>
  )
}
// adding Layout
Course.getLayout = function getLayout(Course: ReactElement) {
return <CourseLayout childern={Course}></CourseLayout>;}
export default Course;
