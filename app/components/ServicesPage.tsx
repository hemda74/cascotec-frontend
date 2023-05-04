import Link from 'next/link'
import React from 'react'
import Ser1Modal from './Services Forms/Ser1Modal'
import Ser2Modal from './Services Forms/Ser2Modal'
import Ser3Modal from './Services Forms/Ser3Modal'
import Ser4Modal from './Services Forms/Ser4Modal'
import Ser5Modal from './Services Forms/Ser5Modal'
import Ser6Modal from './Services Forms/Ser6Modal'
import Ser7Modal from './Services Forms/Ser7Modal'
import Ser8Modal from './Services Forms/Ser8Modal'
import Ser9Modal from './Services Forms/Ser9Modal'
import Ser10Modal from './Services Forms/Ser10Modal'
import Ser11Modal from './Services Forms/Ser11Modal'
import Ser12Modal from './Services Forms/Ser12Modal'
import Ser13Modal from './Services Forms/Ser13Modal'
import Ser14Modal from './Services Forms/Ser14Modal'
import styles from '../styles/ServicesPage.module.css'

type Props = {
    [key: string]: any;
  };
  type Service = {
    [key: string]: any;
  };
const ServicesPage = (props:Props) => {
  return (
<>
    <div className={`text-center ${styles.titleWord}`}>
        <div className={`container mb-4`}>
            <Link href={"/"}><a className="text-white fw-semibold mb-4" data-trans="HomeNav">{`Home`}</a></Link>
            <Link href={"/services"}><a className="text-white fw-semibold mb-4" data-trans="ServicesNav2">{` > Services`}</a></Link>
        </div>
        <h2 className={`text-white fw-bold mb-5`} data-trans="ServicesNav"></h2>
    </div>
    <div className="container col-xl-8 col-lg-10 col-md-12 mb-5">
        <span className={`fw-bold`} data-trans="ServicesNav"></span>
        <p className={` mt-2 fw-bold ${styles.subtitleWord}`} data-trans="servicesSubTitle">{`Professionalism in providing technical consulting services for obtaining accreditations and upgrading quality infrastructure to comply with legislative, mandatory, and technical regulations is crucial.`}</p>
        <span className='fw-semibold fs-6' data-trans="servicesbrief">{`Our services aim to enhance mutual trust between conformity assessment providers and consumers, as well as raise awareness of the importance of accreditation in strengthening the quality infrastructure worldwide.`}</span>
    </div>
    <div className="container col-xl-7 col-lg-8 col-md-12 col-sm-12 col-xs-12 mb-5">
         <div className={`${styles.cardccreditation} d-flex mb-5 mb-5`}>
            <div className= {`mt-3 mb-3 ${styles.accreditationThumbnail2div}`}>
                <img src="/images/services_images/1.png" className='rounded' alt=""/>
            </div>
            <div className={`${styles.accreditationThumbnailFirst}`}>
                <span className={`${styles.serviceTitle}`} data-trans='Services1'>Laboratory Testing Consultation</span>
                <p className={`${styles.servicepargraph}`} data-trans="ServicesBrief1">{`At CASCO, we provide consultation services in the field of testing laboratories, in accordance with the international standard ISO/IEC 17025:2017.`}</p>
                <a data-bs-toggle="modal" data-bs-target="#Ser1Modal">
                    <span className={`${styles.btnContainer}`} data-trans="Applynow">Apply now</span>
                </a>
            </div>
        </div>
        <div className={`${styles.cardccreditation2} d-flex mb-5`}>
            <div className={`${styles.accreditationThumbnailSecond}`}>
                <span className={`${styles.serviceTitle}`} data-trans='Services2'>Calibration Laboratory Consultation</span>
                <p className={`${styles.servicepargraph}`} data-trans="ServicesBrief2">{`At CASCO, we provide consultation services in the field of calibration laboratories, in accordance with the international standard ISO/IEC 17025:2017.`}</p>
                <a data-bs-toggle="modal" data-bs-target="#Ser2Modal">
                    <span className={`${styles.btnContainer}`} data-trans="Applynow">Apply now</span>
                </a>
            </div>
            <div className= {`mt-3 mb-3 ${styles.accreditationThumbnail2div}`}>
                <img src="/images/services_images/2.png" className='rounded' alt=""/>
            </div>
        </div>
        <div className={`${styles.cardccreditation} d-flex mb-5`}>
            <div className= {`mt-3 mb-3 ${styles.accreditationThumbnail2div}`}>
                <img src="/images/services_images/3.png" className='rounded' alt=""/>
            </div>
            <div className={`${styles.accreditationThumbnailFirst}`}>
                <span className={`${styles.serviceTitle}`} data-trans='Services3'>Inspection Certification Body Consultation</span>
                <p className={`${styles.servicepargraph}`} data-trans="ServicesBrief3">{`At CASCO, we provide consultation services in the field of inspection body accreditation, in accordance with the international standard ISO/IEC 17020:2012.`}</p>
                <a data-bs-toggle="modal" data-bs-target="#Ser3Modal">
                    <span className={`${styles.btnContainer}`} data-trans="Applynow">Apply now</span>
                </a>
            </div>
        </div>
        <div className={`${styles.cardccreditation2} d-flex mb-5`}>
            <div className={`${styles.accreditationThumbnailSecond} `}>
                <span className={`${styles.serviceTitle}`} data-trans='Services4'>Product Certification Body Consultation</span>
                <p className={`${styles.servicepargraph}`} data-trans="ServicesBrief4">{`At CASCO, we provide consultation services in the field of product certification body accreditation, in accordance with the international standard ISO/IEC 17065:2012.`} </p>
                <a data-bs-toggle="modal" data-bs-target="#Ser4Modal">
                    <span className={`${styles.btnContainer}`} data-trans="Applynow">Apply now</span>
                </a>
            </div>
            <div className= {`mt-3 mb-3 ${styles.accreditationThumbnail2div}`}>
                <img src="/images/services_images/4.png" className='rounded' alt=""/>
            </div>
        </div>
        <div className={`${styles.cardccreditation} d-flex mb-5`}>
            <div className= {`mt-3 mb-3 ${styles.accreditationThumbnail2div}`}>
                <img src="/images/services_images/5.png" className='rounded' alt=""/>
            </div>
            <div className={`${styles.accreditationThumbnailFirst}`}>
                <span className={`${styles.serviceTitle}`} data-trans='Services5'>Management System Certification Body Consultation</span>
                <p className={`${styles.servicepargraph}`} data-trans="ServicesBrief5">{`At CASCO, we provide consultation services in the field of management system certification body accreditation, in accordance with the international standard ISO/IEC 17021-1:2015.`}</p> 
                <a data-bs-toggle="modal" data-bs-target="#Ser5Modal">
                    <span className={`${styles.btnContainer}`} data-trans="Applynow">Apply now</span>
                </a>
            </div>
        </div>
        <div className={`${styles.cardccreditation2} d-flex mb-5 `}>
            <div className={`${styles.accreditationThumbnailSecond} `}>
                <span className={`${styles.serviceTitle}`} data-trans='Services6'>Medical Laboratory Consultation</span>
                <p className={`${styles.servicepargraph}`} data-trans="ServicesBrief6">{`At CASCO, we provide consultation services in the field of medical laboratories, in accordance with the international standard ISO 15189:2012.`} </p> 
                <a data-bs-toggle="modal" data-bs-target="#Ser6Modal">
                    <span className={`${styles.btnContainer}`} data-trans="Applynow">Apply now</span>
                </a>
            </div>
            <div className= {`mt-3 mb-3 ${styles.accreditationThumbnail2div}`}>
                <img src="/images/services_images/6.png" className='rounded' alt=""/>
            </div>
        </div>
        <div className={`${styles.cardccreditation} d-flex mb-5`}>
            <div className= {`mt-3 mb-3 ${styles.accreditationThumbnail2div}`}>
                <img src="/images/services_images/7.png" className='rounded' alt=""/>
            </div>
            <div className={`${styles.accreditationThumbnailFirst}`}>
                <span className={`${styles.serviceTitle}`} data-trans='Services7'>Halal Certification Consultation</span>
                <p className={`${styles.servicepargraph}`} data-trans="ServicesBrief7">{`At CASCO, we provide consultation services in the field of halal certification, in accordance with the international standard GSO 2055-2:2021.`} </p>
                <a data-bs-toggle="modal" data-bs-target="#Ser7Modal">
                    <span className={`${styles.btnContainer}`} data-trans="Applynow">Apply now</span>
                </a>
            </div>
        </div> 
         <div className={`${styles.cardccreditation2} d-flex mb-5`}>
            <div className={`${styles.accreditationThumbnailSecond}`}>
                <span className={`${styles.serviceTitle}`} data-trans='Services8'>Personal Certification Consultation</span>
                <p className={`${styles.servicepargraph}`} data-trans="ServicesBrief8">{`At CASCO, we provide consultation services in the field of Personal certification, in accordance with the international standard ISO/IEC 17024:2012.`}</p>
                <a data-bs-toggle="modal" data-bs-target="#Ser8Modal">
                    <span className={`${styles.btnContainer}`} data-trans="Applynow">Apply now</span>
                </a>
            </div>
            <div className= {`mt-3 mb-3 ${styles.accreditationThumbnail2div}`}>
                <img src="/images/services_images/8.png" className='rounded' alt=""/>
            </div>
        </div>
        <div className={`${styles.cardccreditation} d-flex mb-5`}>
            <div className= {`mt-3 mb-3 ${styles.accreditationThumbnail2div}`}>
                <img src="/images/services_images/9.png" className='rounded' alt=""/>
            </div>
            <div className={`${styles.accreditationThumbnailFirst}`}>
                <span className='fs-4 fw-bold' data-trans='Services9'>Consultation for Proficiency Testing Providers</span> 
                <p className={`${styles.servicepargraph}`} data-trans="ServicesBrief9">{`At CASCO, we provide consulting services in the field of proficiency testing providers in accordance with the international standard ISO/IEC 17043:2010.`}</p>
                <a data-bs-toggle="modal" data-bs-target="#Ser9Modal">
                    <span className={`${styles.btnContainer}`} data-trans="Applynow">Apply now</span>
                </a>
            </div>
        </div>
        <div className={`${styles.cardccreditation2} d-flex mb-5`}>
        <div className={`${styles.accreditationThumbnailSecond}`}>
                <span className={`${styles.serviceTitle}`} data-trans='Services10'>Technical Consultation for Notification Purposes</span> 
                <p className={`${styles.servicepargraph}`} data-trans="ServicesBrief10">{`At CASCO, we offer technical consulting services for evaluation processes aimed at qualifying for notification by certifying authorities for products conformity certificates listed in the Gulf technical regulations GCC Standardization Organization "GSO", such as the regulations for children's toys (BD-131704-01) , low voltage electrical devices (BD-142004-01) , and more.`}</p>
                <a data-bs-toggle="modal" data-bs-target="#Ser10Modal">
                    <span className={`${styles.btnContainer}`} data-trans="Applynow">Apply now</span>
                </a>
            </div>
            <div className= {`mt-3 mb-3 ${styles.accreditationThumbnail2div}`}>
                <img src="/images/services_images/10.png" className='rounded' alt=""/>
            </div>
        </div>
        <div className={`${styles.cardccreditation} d-flex mb-5 `}>
            <div className= {`mt-3 mb-3 ${styles.accreditationThumbnail2div}`}>
                <img src="/images/services_images/11.png" className='rounded' alt=""/>
            </div>
            <div className={`${styles.accreditationThumbnailFirst}`}>
                <span className={`${styles.serviceTitle}`} data-trans='Services11'>Consultation for Obtaining BRCGS Certification</span>
                <p className={`${styles.servicepargraph}`} data-trans="ServicesBrief11">{`At CASCO, we provide consultation services for qualification processes to obtain BRCGS Food Safety and BRCGS Packaging Material certifications.`}</p>
                <a data-bs-toggle="modal" data-bs-target="#Ser11Modal">
                    <span className={`${styles.btnContainer}`} data-trans="Applynow">Apply now</span>
                </a>
            </div>
        </div>
        <div className={`${styles.cardccreditation2} d-flex mb-5 `}>
        <div className={`${styles.accreditationThumbnailSecondd}`}>
                <span className={`${styles.serviceTitle} mt-0 pt-0`} data-trans='Services12'>Consultation for Obtaining Forest Stewardship Council (FSC) Certification</span>
                <p className={`${styles.servicepargraph}`} data-trans="ServicesBrief12">{`At CASCO, we offer consulting services in the field of responsible forest management to ensure that wood products originating from forests are managed in a responsible and sustainable manner, in accordance with the international standard of the Forest Stewardship Council (FSC), Programme for the Endorsement of Forest Certification (PEFC), Keurhout, and the European Union Timber Regulation (EU TR).`}</p>
                <a data-bs-toggle="modal" data-bs-target="#Ser12Modal">
                    <span className={`${styles.btnContainer} mt-0 `} data-trans="Applynow">Apply now</span>
                </a>
            </div>
            <div className={`mt-5 ${styles.accreditationThumbnail2div}`}>
                <img src="/images/services_images/12.png" className='rounded' alt=""/>
            </div>
        </div>
        <div className={`${styles.cardccreditation} d-flex mb-5 `}>
            <div className= {`mt-3 mb-3 ${styles.accreditationThumbnail2div}`}>
                <img src="/images/services_images/13.png" className='rounded' alt=""/>
            </div>
            <div className={`${styles.accreditationThumbnailFirstt}`}>
                <span className={`${styles.serviceTitle}`} data-trans='Services13'>Consultation for Obtaining FSSC 22000 Scheme Certification</span>
                <p className={`${styles.servicepargraph}`} data-trans="ServicesBrief13">{`At CASCO, we provide consulting services in the field of FSSC 22000 - Food and Feed Safety Management System and Quality Management System accreditation, in compliance with ISO 22000/9001 requirements, the Basic Requirements for Sector Program, and additional program requirements as applicable, according to the FSSC 22000 Version 6.0 international standard for obtaining GFSI (Global Food Safety Initiative) accreditation.`}</p>
                <a data-bs-toggle="modal" data-bs-target="#Ser13Modal">
                    <span className={`${styles.btnContainer}`} data-trans="Applynow">Apply now</span>
                </a>
            </div>
        </div>
        <div className={`${styles.cardccreditation2} d-flex mb-5`}>
            <div className={`${styles.accreditationThumbnailSecond}`}>
                <span className={`${styles.serviceTitle}`} data-trans='Services14'>ESG Report Service</span>
                <p className={`${styles.servicepargraph}`} data-trans="ServicesBrief14">{`CASCO offers a low-cost and credible ESG report service for businesses in the Gulf region, leveraging our team of highly experienced advisors with in-depth knowledge of ESG standards, regulations, and best practices across all major jurisdictions.`}</p>
                <a data-bs-toggle="modal" data-bs-target="#Ser14Modal">
                    <span className={`${styles.btnContainer}`} data-trans="Applynow">Apply now</span>
                </a>
            </div>
            <div className={`mt-4 mb-5 ${styles.accreditationThumbnail2div}`}>
                <img src="/images/services_images/14.png" className='rounded' alt=""/>
            </div>
        </div> 
    </div>
<Ser1Modal/> <Ser2Modal/> <Ser3Modal/> <Ser4Modal/> <Ser5Modal/> <Ser6Modal/> <Ser7Modal/> <Ser8Modal/> <Ser9Modal/> <Ser10Modal/> <Ser11Modal/> <Ser12Modal/> <Ser13Modal/> <Ser14Modal/>

   
</>
    )
}

export default ServicesPage