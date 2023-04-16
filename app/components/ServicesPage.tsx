import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import styles from '../styles/ServicesPage.module.css'
import servicesimage from '../public/imagess/servicesimage.jpg'
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
        <h2 className={`text-white fw-bold mb-5`} data-trans="ServicesNav">Services</h2>
    </div>
    <div className="container col-xl-8 col-lg-10 col-md-12 mb-5">
        <span className={`fw-bold`} data-trans="ServicesNav">SERVICES</span>
        <p className={` mt-2 fw-bold ${styles.subtitleWord}`} data-trans="servicesSubTitle">{`Professionalism in providing technical consulting services for obtaining accreditations and upgrading quality infrastructure to comply with legislative, mandatory, and technical regulations is crucial.`}</p>
        <span className='fw-semibold fs-6' data-trans="servicesbrief">{`Our services aim to enhance mutual trust between conformity assessment providers and consumers, as well as raise awareness of the importance of accreditation in strengthening the quality infrastructure worldwide.`}</span>
    </div>
    <div className="container col-xl-7 col-lg-8 col-md-12 col-sm-12 col-xs-12 mb-5">
        <div className={`${styles.cardccreditation} d-flex mt-5 mb-5`}>
            <div className={`mt-5 ${styles.accreditationThumbnail2div}`}>
                <Image className={`${styles.accreditationThumbnailImage}`}src={servicesimage} width={450} height={450} alt=""/>
            </div>
            <div className={`${styles.accreditationThumbnailFirst}`}>
                <span className='fs-4 fw-bold' data-trans='Services1'>Laboratory Testing Consultation</span>
                <p className='mb-5 pb-4 mt-4' data-trans="ServicesBrief1">{`At CASCO, we provide consultation services in the field of testing laboratories, in accordance with the international standard ISO/IEC 17025:2017.`}</p>
                <Link href="/services/laboratory-testing-consultation" className='mt-3'><span className={`${styles.btnContainer}`} data-trans="Applynow">Apply now</span></Link>
            </div>
        </div>
        <div className={`${styles.cardccreditation2} d-flex mt-5 mb-5`}>
            <div className={`${styles.accreditationThumbnailSecond}`}>
                <span className='fs-4 fw-bold' data-trans='Services2'>Calibration Laboratory Consultation</span>
                <p className='mb-5 pb-4 mt-4' data-trans="ServicesBrief2">{`At CASCO, we provide consultation services in the field of calibration laboratories, in accordance with the international standard ISO/IEC 17025:2017.`}</p>
                <Link href="/services/calibration-laboratory-consultation" className='mt-3'><span className={`${styles.btnContainer}`} data-trans="Applynow">Apply now</span></Link>
            </div>
            <div className={`mt-5 ${styles.accreditationThumbnail2div}`}>
                <Image className={`${styles.accreditationThumbnailImage}`} src={servicesimage} width={400} height={400} alt=""/>
            </div>
        </div>
        <div className={`${styles.cardccreditation} d-flex mt-5 mb-5`}>
            <div className={`mt-5 ${styles.accreditationThumbnail2div}`}>
                <Image className={`${styles.accreditationThumbnailImage}`} src={servicesimage} width={450} height={450} alt=""/>
            </div>
            <div className={`${styles.accreditationThumbnailFirst}`}>
                <span className='fs-4  fw-bold ' data-trans='Services3'>Inspection Certification Body Consultation</span>
                <p className='mb-5 pb-4 mt-4' data-trans="ServicesBrief3">{`At CASCO, we provide consultation services in the field of inspection body accreditation, in accordance with the international standard ISO/IEC 17020:2012.`}</p>
                <Link href="/services/inspection-certification-body-consultation" className='mt-3'><span className={`${styles.btnContainer}`} data-trans="Applynow">Apply now</span></Link>
            </div>
        </div>
        <div className={`${styles.cardccreditation2} d-flex mt-5 mb-5`}>
            <div className={`${styles.accreditationThumbnailSecond} `}>
                <span className='fs-4  fw-bold ' data-trans='Services4'>Product Certification Body Consultation</span>
                <p className='mb-5 pb-4 mt-4' data-trans="ServicesBrief4">{`At CASCO, we provide consultation services in the field of product certification body accreditation, in accordance with the international standard ISO/IEC 17065:2012.`} </p>
                <Link href="/services/product-certification-body-consultation" className='mt-3'><span className={`${styles.btnContainer}`}  data-trans="Applynow">Apply now</span></Link>
            </div>
            <div className={`mt-5 ${styles.accreditationThumbnail2div}`}>
                <Image className={`${styles.accreditationThumbnailImage}`}src={servicesimage} width={400} height={400} alt=""/>
            </div>
        </div>
        <div className={`${styles.cardccreditation} d-flex mt-5 mb-5`}>
            <div className={`mt-5 ${styles.accreditationThumbnail2div}`}>
                <Image className={`${styles.accreditationThumbnailImage}`}src={servicesimage} width={450} height={450} alt=""/>
            </div>
            <div className={`${styles.accreditationThumbnailFirst}`}>
                <span className='fs-4 fw-bold' data-trans='Services5'>Management System Certification Body Consultation</span>
                <p className='mb-5 pb-4 mt-4' data-trans="ServicesBrief5">{`At CASCO, we provide consultation services in the field of management system certification body accreditation, in accordance with the international standard ISO/IEC 17021-1:2015.`}</p> 
                <Link href="/services/management-system-certification-body-consultation" className='mt-3'><span className={`${styles.btnContainer}`} data-trans="Applynow">Apply now</span></Link>
            </div>
        </div>
        <div className={`${styles.cardccreditation2} d-flex mt-5 mb-5`}>
            <div className={`${styles.accreditationThumbnailSecond} `}>
                <span className='fs-4 fw-bold' data-trans='Services6'>Medical Laboratory Consultation</span>
                <p className='mb-5 pb-4 mt-4' data-trans="ServicesBrief6">{`At CASCO, we provide consultation services in the field of medical laboratories, in accordance with the international standard ISO 15189:2012.`} </p> 
                <Link href="/services/medical-laboratory-consultation" className='mt-3'><span className={`${styles.btnContainer}`} data-trans="Applynow">Apply now</span></Link>
            </div>
            <div className={`mt-5 ${styles.accreditationThumbnail2div}`}>
                <Image className={`${styles.accreditationThumbnailImage}`}src={servicesimage} width={400} height={400} alt=""/>
            </div>
        </div>
        <div className={`${styles.cardccreditation} d-flex mt-5 mb-5`}>
            <div className={`mt-5 ${styles.accreditationThumbnail2div}`}>
                <Image className={`${styles.accreditationThumbnailImage}`}src={servicesimage} width={450} height={450} alt=""/>
            </div>
            <div className={`${styles.accreditationThumbnailFirst}`}>
                <span className='fs-4 fw-bold' data-trans='Services7'>Halal Certification Consultation</span>
                <p className='mb-5 pb-4 mt-4' data-trans="ServicesBrief7">{`At CASCO, we provide consultation services in the field of halal certification, in accordance with the international standard GSO 2055-2:2021.`} </p>
                <Link href="/services/halal-certification-consultation" className='mt-3'><span className={`${styles.btnContainer}`} data-trans="Applynow">Apply now</span></Link>
            </div>
        </div>
        <div className={`${styles.cardccreditation2} d-flex mt-5 mb-5`}>
            <div className={`${styles.accreditationThumbnailSecond} `}>
                <span className='fs-4 fw-bold' data-trans='Services8'>Personal Certification Consultation</span>
                <p className='mb-5 pb-4 mt-4'data-trans="ServicesBrief8">{`At CASCO, we provide consultation services in the field of Personal certification, in accordance with the international standard ISO/IEC 17024:2012.`} </p>
                <Link href="/services/personal-certification-consultation" className='mt-3'><span className={`${styles.btnContainer}`}  data-trans="Applynow">Apply now</span></Link>
            </div>
            <div className={`mt-5 ${styles.accreditationThumbnail2div}`}>
                <Image className={`${styles.accreditationThumbnailImage}`}src={servicesimage} width={400} height={400} alt=""/>
            </div>
        </div>
        <div className={`${styles.cardccreditation} d-flex mt-5 mb-5`}>
            <div className={`mt-5 ${styles.accreditationThumbnail2div}`}>
                <Image className={`${styles.accreditationThumbnailImage}`}src={servicesimage} width={450} height={450} alt=""/>
            </div>
            <div className={`${styles.accreditationThumbnailFirst}`}>
                <span className='fs-4 fw-bold'data-trans='Services9'>Consultation for Proficiency Testing Providers</span>
                <p className='mb-5 pb-4 mt-4' data-trans="ServicesBrief9">{`At CASCO, we provide consulting services in the field of proficiency testing providers in accordance with the international standard ISO/IEC 17043:2010.`} </p>
                <Link href="/services/consultation-for-proficiency-testing-providers" className='mt-3'><span className={`${styles.btnContainer}`} data-trans="Applynow">Apply now</span></Link>
            </div>
        </div>
        <div className={`${styles.cardccreditation2} d-flex mt-5 mb-5`}>
            <div className={`${styles.accreditationThumbnailSecond} `}>
                <span className='fs-4 fw-bold'data-trans='Services10'>Technical Consultation for Notification Purposes</span>
                <p className='mb-5 pb-4 mt-4' data-trans="ServicesBrief10">{`At CASCO, we offer technical consulting services for evaluation processes aimed at qualifying for notification by certifying authorities for products conformity certificates listed in the Gulf technical regulations GCC Standardization Organization "GSO", such as the regulations for children's toys (BD-131704-01) , low voltage electrical devices (BD-142004-01) , and more.`} </p>
                <Link href="/services/technical-consultation-for-notification-purposes" className='mt-3'><span className={`${styles.btnContainer}`} data-trans="Applynow">Apply now</span></Link>
            </div>
            <div className={`mt-5 ${styles.accreditationThumbnail2div}`}>
                <Image className={`${styles.accreditationThumbnailImage}`}src={servicesimage} width={400} height={400} alt=""/>
            </div>
        </div>
        <div className={`${styles.cardccreditation} d-flex mt-5 mb-5`}>
            <div className={`mt-5 ${styles.accreditationThumbnail2div}`}>
                <Image className={`${styles.accreditationThumbnailImage}`}src={servicesimage} width={450} height={450} alt=""/>
            </div>
            <div className={`${styles.accreditationThumbnailFirst}`}>
                <span className='fs-4 fw-bold' data-trans='Services11'>Consultation for Obtaining BRCGS Certification </span>
                <p className='mb-5 pb-4 mt-4' data-trans="ServicesBrief11">{`At CASCO, we provide consultation services for qualification processes to obtain BRCGS Food Safety and BRCGS Packaging Material certifications.`} </p>
                <Link href="/services/consultation-for-obtaining-brcgs-certification" className='mt-3'><span className={`${styles.btnContainer}`} data-trans="Applynow">Apply now</span></Link>
            </div>
        </div>
        <div className={`${styles.cardccreditation2} d-flex mt-5 mb-5`}>
            <div className={`${styles.accreditationThumbnailSecond} `}>
                <span className='fs-4 fw-bold' data-trans='Services12'>Consultation for Obtaining Forest Stewardship Council (FSC) Certification</span>
                <p className='mb-5 pb-4 mt-4' data-trans="ServicesBrief12">{`At CASCO, we offer consulting services in the field of responsible forest management to ensure that wood products originating from forests are managed in a responsible and sustainable manner, in accordance with the international standard of the Forest Stewardship Council (FSC), Programme for the Endorsement of Forest Certification (PEFC), Keurhout, and the European Union Timber Regulation (EU TR).`}</p>
                <Link href="/services/consultation-for-obtaining-forest-stewardship-council-certification" className='mt-3'><span className={`${styles.btnContainer}`}  data-trans="Applynow">Apply now</span></Link>
            </div>
            <div className={` mt-5 ${styles.accreditationThumbnail2div}`}>
                <Image className={`${styles.accreditationThumbnailImage}`}src={servicesimage} width={400} height={400} alt=""/>
            </div>
        </div>
        <div className={`${styles.cardccreditation} d-flex mt-5 mb-5`}>
            <div className={`mt-5 ${styles.accreditationThumbnail2div}`}>
                <Image className={`${styles.accreditationThumbnailImage}`}src={servicesimage} width={450} height={450} alt=""/>
            </div>
            <div className={`${styles.accreditationThumbnailFirst}`}>
                <span className='fs-4 fw-bold' data-trans='Services13'>Consultation for Obtaining FSSC 22000 Scheme Certification</span>
                <p className='mb-5 pb-4 mt-4' data-trans="ServicesBrief13">{`At CASCO, we provide consulting services in the field of FSSC 22000 - Food and Feed Safety Management System and Quality Management System accreditation, in compliance with ISO 22000/9001 requirements, the Basic Requirements for Sector Program, and additional program requirements as applicable, according to the FSSC 22000 Version 6.0 international standard for obtaining GFSI (Global Food Safety Initiative) accreditation.`} </p>
                <Link href="/services/consultation-for-obtaining-fssc22000-scheme-certification" className='mt-3'><span className={`${styles.btnContainer}`} data-trans="Applynow">Apply now</span></Link>
            </div>
        </div>
        <div className={`${styles.cardccreditation2} d-flex mt-5 mb-5`}>
            <div className={`${styles.accreditationThumbnailSecond} `}>
                <span className='fs-4 fw-bold' data-trans='Services14'>ESG Report Service</span>
                <p className='mb-5 pb-4 mt-4' data-trans="ServicesBrief14">{`CASCO offers a low-cost and credible ESG report service for businesses in the Gulf region, leveraging our team of highly experienced advisors with in-depth knowledge of ESG standards, regulations, and best practices across all major jurisdictions.`} </p>
                <Link href="/services/esg-report-service" className='mt-3'><span className={`${styles.btnContainer}`} data-trans="Applynow">Apply now</span></Link>
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