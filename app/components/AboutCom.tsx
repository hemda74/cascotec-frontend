import Image from 'next/image'
import React from 'react'
import styles from '../styles/About.module.css'
import logo from '../public/logo.png'
const About  = () => {
  return (
    <>
        <div className={`${styles.aboutHeader} d-flex `}>
            <span className='fs-2 text-light m-auto '>About Us</span>
        </div>
        {/* objective card */}
        <div className={`card d-flex align-items-center  ${styles.objectiveCard}`}>
            <Image className="mt-3" width={250} height={250} src={logo} alt="objective image"/>
            <div className="card-body text-center mb-5">
                <span className='fs-2 fw-bold'>Our objective</span>
                <p className="card-text mt-3">The CASCO Group aims to enhance its standing, accomplish its objectives, and reinforce its infrastructure by adopting best practices recognized globally and partnering with international entities in the accreditation sector.</p>
            </div>
        </div>
        <div className="row mx-0 mt-5 d-flex justify-content-around align-items-center ">
            <div className={`card-body col-xl-6 col-lg-6 col-md-6 col-sm-12 ${styles.visionCard}`}>
                <span className='fs-4'>Our vision</span>
                <p className='mt-3'>Creating a Safer World Together Committed to ensuring project integrity, managing risks, and maximizing client performance to build a better and safer world for all.</p>
            </div>
            <div className={`card-body col-xl-6 col-lg-6 col-md-6 col-sm-12 ${styles.visionCard}`}>
                <span className='fs-4'>Our Mission </span>
                <p className='mt-3' >Comprehensive Project Consultation Our expert team identifies, evaluates, and controls risks related to quality, health and safety, and the environment throughout the entire project life cycle.</p>
            </div>
        </div>
        <div className={`card d-flex align-items-center pb-5 rounded ${styles.objectiveCard}`}>
            <Image className="mt-3" width={250} height={250} src={logo} alt="objective image"/>
            <div className="card-body text-center mb-5">
                <span className='fs-2 fw-bold'>Our objective</span>
                <p className="card-text mt-3">The CASCO Group aims to enhance its standing, accomplish its objectives, and reinforce its infrastructure by adopting best practices recognized globally and partnering with international entities in the accreditation sector.</p>
            </div>
        </div>
    </>
  )
}

export default About 