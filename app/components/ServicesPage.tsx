import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import styles from '../styles/ServicesPage.module.css'
import servicesimage from '../public/imagess/servicesimage.jpg'
const ServicesPage = () => {
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
            <div className={` mt-5  ${styles.accreditationThumbnail2div}`}>
                <Image className={`${styles.accreditationThumbnailImage}`}src={servicesimage} width={450} height={450} alt=""/>
            </div>
            <div className={`${styles.accreditationThumbnailFirst}`}>
                <span className='fs-4  fw-bold '>Accreditation of Testing Laboratories</span>
                <p className='mb-5 pb-4 mt-4'>GCC Accreditation Center provides accreditation services in the scheme of Testing Laboratories according to ISO/IEC 17025:2017 General requirements for the competence of testing and calibration laboratories. </p>
                <Link href="/login" target="_blank" className='mt-3'><span className={`${styles.btnContainer}`} data-trans="Applynow">Apply now</span></Link>
            </div>
        </div>
        <div className={`${styles.cardccreditation2} d-flex mt-5 mb-5`}>
            <div className={`${styles.accreditationThumbnailSecond} `}>
                <span className='fs-4  fw-bold '>Accreditation of Testing Laboratories</span>
                <p className='mb-5 pb-4 mt-4'>GCC Accreditation Center provides accreditation services in the scheme of Testing Laboratories according to ISO/IEC 17025:2017 General requirements for the competence of testing and calibration laboratories. </p>
                <Link href="/login" target="_blank" className='mt-3'><span className={`${styles.btnContainer}`} data-trans="Applynow">Apply now</span></Link>
            </div>
            <div className={` mt-5 ${styles.accreditationThumbnail2div}`}>
                <Image className={`${styles.accreditationThumbnailImage}`}src={servicesimage} width={400} height={400} alt=""/>
            </div>
        </div>
        <div className={`${styles.cardccreditation} d-flex mt-5 mb-5`}>
            <div className={` mt-5  ${styles.accreditationThumbnail2div}`}>
                <Image className={`${styles.accreditationThumbnailImage}`}src={servicesimage} width={450} height={450} alt=""/>
            </div>
            <div className={`${styles.accreditationThumbnailFirst}`}>
                <span className='fs-4  fw-bold '>Accreditation of Testing Laboratories</span>
                <p className='mb-5 pb-4 mt-4'>GCC Accreditation Center provides accreditation services in the scheme of Testing Laboratories according to ISO/IEC 17025:2017 General requirements for the competence of testing and calibration laboratories. </p>
                <Link href="/login" target="_blank" className='mt-3'><span className={`${styles.btnContainer}`} data-trans="Applynow">Apply now</span></Link>
            </div>
        </div>
        <div className={`${styles.cardccreditation2} d-flex mt-5 mb-5`}>
            <div className={`${styles.accreditationThumbnailSecond} `}>
                <span className='fs-4  fw-bold '>Accreditation of Testing Laboratories</span>
                <p className='mb-5 pb-4 mt-4'>GCC Accreditation Center provides accreditation services in the scheme of Testing Laboratories according to ISO/IEC 17025:2017 General requirements for the competence of testing and calibration laboratories. </p>
                <Link href="/login" target="_blank" className='mt-3'><span className={`${styles.btnContainer}`}  data-trans="Applynow">Apply now</span></Link>
            </div>
            <div className={` mt-5 ${styles.accreditationThumbnail2div}`}>
                <Image className={`${styles.accreditationThumbnailImage}`}src={servicesimage} width={400} height={400} alt=""/>
            </div>
        </div>
        <div className={`${styles.cardccreditation} d-flex mt-5 mb-5`}>
            <div className={` mt-5  ${styles.accreditationThumbnail2div}`}>
                <Image className={`${styles.accreditationThumbnailImage}`}src={servicesimage} width={450} height={450} alt=""/>
            </div>
            <div className={`${styles.accreditationThumbnailFirst}`}>
                <span className='fs-4  fw-bold '>Accreditation of Testing Laboratories</span>
                <p className='mb-5 pb-4 mt-4'>GCC Accreditation Center provides accreditation services in the scheme of Testing Laboratories according to ISO/IEC 17025:2017 General requirements for the competence of testing and calibration laboratories. </p>
                <Link href="/login" target="_blank" className='mt-3'><span className={`${styles.btnContainer}`} data-trans="Applynow">Apply now</span></Link>
            </div>
        </div>
        <div className={`${styles.cardccreditation2} d-flex mt-5 mb-5`}>
            <div className={`${styles.accreditationThumbnailSecond} `}>
                <span className='fs-4  fw-bold '>Accreditation of Testing Laboratories</span>
                <p className='mb-5 pb-4 mt-4'>GCC Accreditation Center provides accreditation services in the scheme of Testing Laboratories according to ISO/IEC 17025:2017 General requirements for the competence of testing and calibration laboratories. </p>
                <Link href="/login" target="_blank" className='mt-3'><span className={`${styles.btnContainer}`} data-trans="Applynow">Apply now</span></Link>
            </div>
            <div className={` mt-5 ${styles.accreditationThumbnail2div}`}>
                <Image className={`${styles.accreditationThumbnailImage}`}src={servicesimage} width={400} height={400} alt=""/>
            </div>
        </div>
        <div className={`${styles.cardccreditation} d-flex mt-5 mb-5`}>
            <div className={` mt-5  ${styles.accreditationThumbnail2div}`}>
                <Image className={`${styles.accreditationThumbnailImage}`}src={servicesimage} width={450} height={450} alt=""/>
            </div>
            <div className={`${styles.accreditationThumbnailFirst}`}>
                <span className='fs-4  fw-bold '>Accreditation of Testing Laboratories</span>
                <p className='mb-5 pb-4 mt-4'>GCC Accreditation Center provides accreditation services in the scheme of Testing Laboratories according to ISO/IEC 17025:2017 General requirements for the competence of testing and calibration laboratories. </p>
                <Link href="/login" target="_blank" className='mt-3'><span className={`${styles.btnContainer}`} data-trans="Applynow">Apply now</span></Link>
            </div>
        </div>
        <div className={`${styles.cardccreditation2} d-flex mt-5 mb-5`}>
            <div className={`${styles.accreditationThumbnailSecond} `}>
                <span className='fs-4  fw-bold '>Accreditation of Testing Laboratories</span>
                <p className='mb-5 pb-4 mt-4'>GCC Accreditation Center provides accreditation services in the scheme of Testing Laboratories according to ISO/IEC 17025:2017 General requirements for the competence of testing and calibration laboratories. </p>
                <Link href="/login" target="_blank" className='mt-3'><span className={`${styles.btnContainer}`}  data-trans="Applynow">Apply now</span></Link>
            </div>
            <div className={` mt-5 ${styles.accreditationThumbnail2div}`}>
                <Image className={`${styles.accreditationThumbnailImage}`}src={servicesimage} width={400} height={400} alt=""/>
            </div>
        </div>
        <div className={`${styles.cardccreditation} d-flex mt-5 mb-5`}>
            <div className={` mt-5  ${styles.accreditationThumbnail2div}`}>
                <Image className={`${styles.accreditationThumbnailImage}`}src={servicesimage} width={450} height={450} alt=""/>
            </div>
            <div className={`${styles.accreditationThumbnailFirst}`}>
                <span className='fs-4  fw-bold '>Accreditation of Testing Laboratories</span>
                <p className='mb-5 pb-4 mt-4'>GCC Accreditation Center provides accreditation services in the scheme of Testing Laboratories according to ISO/IEC 17025:2017 General requirements for the competence of testing and calibration laboratories. </p>
                <Link href="/login" target="_blank" className='mt-3'><span className={`${styles.btnContainer}`} data-trans="Applynow">Apply now</span></Link>
            </div>
        </div>
        <div className={`${styles.cardccreditation2} d-flex mt-5 mb-5`}>
            <div className={`${styles.accreditationThumbnailSecond} `}>
                <span className='fs-4  fw-bold '>Accreditation of Testing Laboratories</span>
                <p className='mb-5 pb-4 mt-4'>GCC Accreditation Center provides accreditation services in the scheme of Testing Laboratories according to ISO/IEC 17025:2017 General requirements for the competence of testing and calibration laboratories. </p>
                <Link href="/login" target="_blank" className='mt-3'><span className={`${styles.btnContainer}`} data-trans="Applynow">Apply now</span></Link>
            </div>
            <div className={` mt-5 ${styles.accreditationThumbnail2div}`}>
                <Image className={`${styles.accreditationThumbnailImage}`}src={servicesimage} width={400} height={400} alt=""/>
            </div>
        </div>
        <div className={`${styles.cardccreditation} d-flex mt-5 mb-5`}>
            <div className={` mt-5  ${styles.accreditationThumbnail2div}`}>
                <Image className={`${styles.accreditationThumbnailImage}`}src={servicesimage} width={450} height={450} alt=""/>
            </div>
            <div className={`${styles.accreditationThumbnailFirst}`}>
                <span className='fs-4  fw-bold '>Accreditation of Testing Laboratories</span>
                <p className='mb-5 pb-4 mt-4'>GCC Accreditation Center provides accreditation services in the scheme of Testing Laboratories according to ISO/IEC 17025:2017 General requirements for the competence of testing and calibration laboratories. </p>
                <Link href="/login" target="_blank" className='mt-3'><span className={`${styles.btnContainer}`} data-trans="Applynow">Apply now</span></Link>
            </div>
        </div>
        <div className={`${styles.cardccreditation2} d-flex mt-5 mb-5`}>
            <div className={`${styles.accreditationThumbnailSecond} `}>
                <span className='fs-4  fw-bold '>Accreditation of Testing Laboratories</span>
                <p className='mb-5 pb-4 mt-4'>GCC Accreditation Center provides accreditation services in the scheme of Testing Laboratories according to ISO/IEC 17025:2017 General requirements for the competence of testing and calibration laboratories. </p>
                <Link href="/login" target="_blank" className='mt-3'><span className={`${styles.btnContainer}`}  data-trans="Applynow">Apply now</span></Link>
            </div>
            <div className={` mt-5 ${styles.accreditationThumbnail2div}`}>
                <Image className={`${styles.accreditationThumbnailImage}`}src={servicesimage} width={400} height={400} alt=""/>
            </div>
        </div>
        <div className={`${styles.cardccreditation} d-flex mt-5 mb-5`}>
            <div className={` mt-5  ${styles.accreditationThumbnail2div}`}>
                <Image className={`${styles.accreditationThumbnailImage}`}src={servicesimage} width={450} height={450} alt=""/>
            </div>
            <div className={`${styles.accreditationThumbnailFirst}`}>
                <span className='fs-4  fw-bold '>Accreditation of Testing Laboratories</span>
                <p className='mb-5 pb-4 mt-4'>GCC Accreditation Center provides accreditation services in the scheme of Testing Laboratories according to ISO/IEC 17025:2017 General requirements for the competence of testing and calibration laboratories. </p>
                <Link href="/login" target="_blank" className='mt-3'><span className={`${styles.btnContainer}`} data-trans="Applynow">Apply now</span></Link>
            </div>
        </div>
        <div className={`${styles.cardccreditation2} d-flex mt-5 mb-5`}>
            <div className={`${styles.accreditationThumbnailSecond} `}>
                <span className='fs-4  fw-bold '>Accreditation of Testing Laboratories</span>
                <p className='mb-5 pb-4 mt-4'>GCC Accreditation Center provides accreditation services in the scheme of Testing Laboratories according to ISO/IEC 17025:2017 General requirements for the competence of testing and calibration laboratories. </p>
                <Link href="/login" target="_blank" className='mt-3'><span className={`${styles.btnContainer}`} data-trans="Applynow">Apply now</span></Link>
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