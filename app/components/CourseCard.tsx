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
    const target = new Date("12/31/2024 23:59:59");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setPartyTime(true);
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
      {partyTime ? (
        <>
          <h1>Happy new year!</h1>
        </>
      ) : (
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
    <div className={`${styles.enrollDiv} d-flex m-auto `}>
      <button className={`mySuccess rounded fw-bold ${styles.enrollButton}`} type="submit">Enroll Now</button>
      
      <div className='d-flex me-4 ms-4'>
        <span className='fw-bold fs-4'>4500</span>
        <span className=' me-2 ms-2'>SAR</span>
      </div>
      </div>
    </div>
    {/* <div className="container col-xl-2 col-lg-2 col-md-2 m-0 p-0  ">
    <div className="navbar m-0 p-0 ">
  <div className="container m-0 p-0 ">
    <a className="nav-link m-0 p-0" href="#">Navbar</a>
    <a className="nav-link" href="#">Features</a>
        <a className="nav-link" href="#">Pricing</a>
        </div>
          </div>
            </div>
            <hr/> */}
    <div className="container col-xl-8 col-lg-8 col-md-12 mb-5">
        <div className="row">
            <div className="col-lg-8 col-md-6 p-3">
            <Image src={courseimage} className="img-fluid" alt=""/>
             </div>
             <div className="col-lg-1 col-md-6 p-3">
             </div>
             <div className="col-lg-3 col-md-6 p-3">
             </div>
        </div>
    </div>   

    </>
  )
}

export default CourseCard