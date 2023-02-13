import React from 'react';
import halal from '../public/imagess/halal.jpg';
import Image from 'next/image';
import styles  from '../styles/Services.module.css';
import {BiStore} from 'react-icons/bi';
import{BsBookFill} from'react-icons/bs';
const Services = () => {
  return (
    <>
    <section className={`text-center ${styles.aboutSectoin}`} >
            <span className={`${styles.servicesTitle}`} data-trans='servicesTitle'>SERVICES</span>
                <span className={`fs-4 fw-bold`} data-trans='servicesSubTitle'>Accreditation made simple for you</span>
                     <p className="text-black-50 mt-2" data-trans='servicesbrief'>
                     The services we offer foster mutual confidence between service providers and consumers
                    </p>
        <div className={`container ${styles.aboutCont}`} >
            <div className="row mt-3 d-flex justify-content-center">
                <div className="col-lg-5 pt-4 me-0 content d-flex flex-column justify-content-center">
                <p className={`fs-5 fw-bold`} data-trans='servicesHalal'>Accreditation of HALAL Certification Bodies</p>
                <p className="text-black-50 " data-trans='servicesHalalbrief'>
                     CASCO Accreditation Center provides accreditation services in the scheme of Halal Certification according to the standard GSO 2055-2:2015.
                    </p>
                 </div>
                 <div className="col-1"></div>
                 <div className="col-lg-5">
                    <Image src={halal} className="img-fluid" alt=""/>
                </div>
            </div>
        </div>
  </section>
  </>
  )
}
export default Services;