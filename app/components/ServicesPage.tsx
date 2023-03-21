import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import styles from '../styles/ServicesPage.module.css'
import servicesimage from '../public/imagess/servicesimage.jpg'
const ServicesPage = () => {
  return (
<>
    <div className={`text-center ${styles.titleWord}`}>
        <h6 className="text-white fw-semibold mb-4">{`Home > Services`}</h6>
        <h2 className={`text-white fw-bold mb-5 `}>Services</h2>
    </div>
    <div className="container col-xl-8 col-lg-10 col-md-12 mb-5">
        <span className={`fw-bold`}>SERVICES</span>
        <p className={`fs-3 fw-bold ${styles.subtitleWord}`}>Accreditation made simple for you</p>
        <span className='fw-semibold'>The services we offer foster mutual confidence between service providers and consumers.</span>
    </div>
    <div className="container col-xl-7 col-lg-8 col-md-12 col-sm-12 col-xs-12 mb-5">
        <div className={`${styles.cardccreditation} d-flex mt-5 mb-5`}>
            <div className={` mt-5  ${styles.accreditationThumbnail2div}`}>
                <Image className={`${styles.accreditationThumbnailImage}`}src={servicesimage} width={450} height={450} alt=""/>
            </div>
            <div className={`${styles.accreditationThumbnailFirst}`}>
                <span className='fs-4  fw-bold '>Accreditation of Testing Laboratories</span>
                <p className='mb-5 pb-5 mt-4'>GCC Accreditation Center provides accreditation services in the scheme of Testing Laboratories according to ISO/IEC 17025:2017 General requirements for the competence of testing and calibration laboratories. </p>
                <Link href="/login" target="_blank" className='mt-5'><span className={`${styles.btnContainer}`}>Apply now</span></Link>
            </div>
        </div>
        <div className={`${styles.cardccreditation2} d-flex mt-5 mb-5`}>
            <div className={`${styles.accreditationThumbnailSecond} `}>
                <span className='fs-4  fw-bold '>Accreditation of Testing Laboratories</span>
                <p className='mb-5 pb-5 mt-4'>GCC Accreditation Center provides accreditation services in the scheme of Testing Laboratories according to ISO/IEC 17025:2017 General requirements for the competence of testing and calibration laboratories. </p>
                <Link href="/login" target="_blank" className='mt-5'><span className={`${styles.btnContainer} `}>Apply now</span></Link>
            </div>
            <div className={` mt-5 ${styles.accreditationThumbnail2div}`}>
                <Image className={`${styles.accreditationThumbnailImage}`}src={servicesimage} width={400} height={400} alt=""/>
            </div>
        </div>
   </div>
</>
    )
}

export default ServicesPage