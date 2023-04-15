import React from 'react'
import styles from '../styles/CourseCard.module.css'
import Image from 'next/image'
import courseimage from '../public/imagess/coursesimage.png'
import { useEffect, useState } from "react";
const CourseCard = () => {
  const [partyTime, setPartyTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("06/01/2023 09:00:00");

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
    <div className={`text-center row ${styles.titleWord}`}>
        <h6 className="text-white col-12 fw-semibold mb-4" >{`Home > Courses`}</h6>
        <h3 className={`text-white col-lg-5 m-auto fw-bold mb-4 `} >An Internal Auditor For Management Systems According To ISO 19011 For The Accreditation Requirement Requirements For Bodies Certifying Halal In Accordance With: GSO 2055-2</h3>
        <div className={'mb-3'}>
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
                            <small className="text-white fw-senibold">Days</small>
                          </div>
                          <div className={`${styles.timeSegment}`}>
                            <small className="text-white fw-senibold">{hours}</small>
                            <small className="text-white fw-senibold">Hrs</small>
                          </div>
                          <div className={`${styles.timeSegment}`}>
                            <small className="text-white fw-senibold">{minutes}</small>
                            <small className="text-white fw-senibold">Mins</small>
                          </div>
                          <div className={`${styles.timeSegment}`}>
                            <small className="text-white fw-senibold">{seconds}</small>
                            <small className="text-white fw-senibold">Secs</small>
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
            <div className="col-lg-8 col-md-12 p-3">
            <Image src={courseimage} className="img-fluid" alt=""/>
            <div className="description" id='description'>
                  <span className='fs-5 fw-bold'>Description</span>
                  <p className='mt-4 mb-3 text-black-50'>TRAINING PROGRAM INTRODUCTION:</p>
                  <small className='text-black-50 mt-3 d-inline-block'>{`The standard ISO/IEC 17020:2012 is the international criterion recognized all around the world. It is made for inspection bodies to follow a quality system that aims to provide confidence in inspection procedures. It also improves the body’s ability to produce inspection reports in accordance with the international standards.`}</small>
                  <small className='text-black-50 mt-3 d-inline-block'>{`The standard is also considered the basic criterion for international accreditation bodies. It is used to accredit inspection bodies and ensure their technical efficiency, which allows the inspection reports to be accepted among different bodies`}</small>
                  <small className='text-black-50 mt-3 d-inline-block'>{`This training program is organized in keeping with GAC’s role in accrediting inspection bodies, raising awareness about the importance of accreditation and providing knowledge about the accreditation requirements for inspection bodies according to ISO/IEC 17020:2012 and ILAC’s requirements.`}</small>
                  <small className='text-black-50 mt-3 d-inline-block'>{`The training program will , which will include lectures, group discussions and case studies. GCC Accreditation Center provides participants with the program’s material and grants them certificates of participation`}</small>
            </div>
            <div className="outline mt-4" id='outline'>
                <span className='fs-5 fw-bold d-block'>Outline</span>
                <small className='text-black-50 mt-3 d-inline-block'>{`1.Introducing the concept of inspection and its different classifications.`}</small>
                <small className='text-black-50 mt-3 d-inline-block'>{`2.Preparing workers in inspection bodies and increasing their abilities to meet the requirements of ISO/IEC 17020:2012.`}</small>
                <small className='text-black-50 mt-3 d-inline-block'>{`3.Understanding the international requirements for inspection bodies.`}</small>
                <small className='text-black-50 mt-3 d-inline-block'>{`4.Providing participants with knowledge and skills to establish a system for quality management that is in accordance with the international requirements.`}</small>
                <small className='text-black-50 mt-3 d-inline-block'>{`5.Providing participants with the opportunity to exchange skills and knowledge and getting to know the latest international standards and modifications through case  studies and discussions`}</small>
             </div>
             <div className="audience mt-4" id='audience'>
                <span className='fs-5 fw-bold d-block'>Audience</span>
                <ul>
                  <li className='text-black-50'>
                      <small className='text-black-50 mt-3 d-inline-block'>{`Those who work in different inspection bodies.`}</small>
                  </li>
                  <li className='text-black-50'>
                      <small className='text-black-50 mt-3 d-inline-block'>{`Those who carry out inspection procedures for inspection bodies.`}</small>
                  </li>
                  <li className='text-black-50'>
                      <small className='text-black-50 mt-3 d-inline-block'>{`Inspection officials in governmental or private bodies concerned with inspection.`}</small>
                  </li>
                  <li className='text-black-50'>
                      <small className='text-black-50 mt-3 d-inline-block'>{`All bodies concerned with inspection services.`}</small>
                  </li>
                </ul>
            </div>
        </div>
             <div className="col-xl-3 col-lg-3 col-md-8 col-sm-12 offset-xl-1 offset-lg-1 offset-md-0">
                            <div className={`${styles.courseDetailes}`}>
                                <ul className="list_wideger_desc list-unstyled p-0 ">
                                <li className={`d-flex mt-2 ${styles.liDiv}`}>
                                          <div className={`${styles.iconHolder}`}>
                                                <img src="/images/courses_section/calendar.svg" alt=""/>
                                            </div>
                                          <div className="row">
                                              <small className="text-black-50">Schedule</small>
                                              <small className="fw-bold mt-1">22 - 24 May, 2023</small>
                                          </div>
                                      </li>					<li className={`d-flex mt-2 ${styles.liDiv}`}>
                                          <div className={`${styles.iconHolder}`}>
                                          <img src="/images/courses_section/clock-fill2.svg" alt=""/>
                                          </div>
                                          <div className="row">
                                            <small className="text-black-50">Estimated Time</small>
                                            <small className="fw-bold mt-1">216 Hour</small>
                                          </div>
                                    </li>
																		
                                    <li className={`d-flex mt-2 ${styles.liDiv}`}>
                                        <div className={`${styles.iconHolder}`}>
                                        <img src="/images/courses_section/pin-2.svg" alt=""/>
                                        </div>
                                        <div className="row">
                                            <small className="text-black-50">Venue</small>
                                            <small className="fw-bold mt-1">Muscat</small>
                                        </div>
                                    </li>					
									                                    <li className={`d-flex mt-2 ${styles.liDiv}`}>
                                        <div className={`${styles.iconHolder}`}>
                                        <img src="/images/courses_section/online_ic.svg" alt=""/>
                                        </div>
                                        <div className="row ">
                                            <small className="text-black-50">Training Language</small>
                                            <small className="fw-bold mt-1">Arabic</small>
                                        </div>
                                    </li>
																		
                                </ul>
                            </div>
             </div>
        </div>
    </div>   

    </>
  )
}

export default CourseCard