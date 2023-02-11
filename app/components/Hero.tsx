import Link from 'next/link';
import React from 'react'
import styles from'../styles/Hero.module.css'
const Hero = () => {
  return (
<>
<div className={`d-flex align-items-center justify-content-center ${styles.landHead}`}>
      <div className={`container ${styles.landCont}`}>
            <span className={`fs-1 text-center fw-bold ${styles.landQuet1}`} data-trans="CompanyName">
                Welcome to CASCO 
            </span>
            <span className={`fs-2  mt-4 fw-semibold ${styles.landQuet2}`}data-trans="CompanyNamesubtitle">
            For Accreditation Certificates
            </span>
      </div>
  </div>
</>  
)
}

export default Hero;