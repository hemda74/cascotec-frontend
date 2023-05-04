import Image from 'next/image'
import React from 'react'
import styles from '../styles/AboutPage1.module.css'
import {FcCheckmark} from 'react-icons/fc'
import card_objective from '../public/images/about_page/card_objective.png';
import Link from 'next/link'
const About = () => {
  return (
    <>
    <div className={`${styles.mainContainer}`}>
        <div className={`text-center ${styles.titleWord}`}>
            <div className={`container`}>
                <Link href={"/"}><a className="text-white fw-semibold mb-4" data-trans="homepageurl">{`Home`}</a></Link>
                <Link href={"/about"}><a className="text-white fw-semibold mb-4" data-trans="aboutpageurl">{` > About CASCO`}</a></Link>
            </div>
            <h2 className={`text-white fw-bold mb-5 mt-4`} data-trans="AboutUsTitle">About Us</h2>
        </div>
        {/* Objective Section */}
        <div className={`row m-auto container p-0`} >
            <div className={`d-flex justify-content-around align-items-center`}>
                <div className={` d-flex ${styles.objectiveCard2}`} >
                    <div className={`col-lg-6 p-0  `}>
                        <Image src={card_objective} className={`${styles.objImage}`} alt="" />
                    </div>
                    <div className={`col-lg-6 p-5 d-flex flex-column justify-content-center align-items-start`}>
                        <h4 className="fw-bold" data-trans='Ourobjective'>Our Objective</h4> 
                        <p className={`${styles.objectiveCardText}`} data-trans="OurobjectiveP">{`CASCO, aims to assist clients in achieving technical specifications compliance, using recommended global practices and collaborating with international bodies in the field of accreditation. Our services aim to enhance our client's position and empower their structure while increasing their awareness of the importance of accreditation for conformity assessment bodies.`}</p>
                    </div>
                </div>
            </div>
        </div>
        {/* vision and mission  */}
        <div className={`row m-auto container pe-lg-5 ps-lg-5 pt-3`} >
            <div className={`d-flex justify-content-around align-items-center`}>
                <div className="row">
                    <div className={`card-body col-xl-4 col-lg-4 col-md-6 col-sm-12 ${styles.visionCard}`}>
                        <span className='fs-4 fw-bold' data-trans="OurVision">Our Vision</span>
                        <p className={`${styles.objectiveCardText}`} data-trans='OurVisionP'>{`Our vision is to become the leading company in the field of qualification and provision of consulting services to all entities that seek accreditation in technical Standards, by offering innovative and effective solutions that meet our customer's needs, and by committing to excellence, quality, and customer satisfaction.`}</p>
                    </div>
                    <div className={`card-body col-xl-4 col-lg-4 col-md-6 col-sm-12 ${styles.visionCard}`}>
                        <span className='fs-4 fw-bold' data-trans="OurMission">Our Mission</span>
                        <p className={`${styles.objectiveCardText}`} data-trans="OurMissionP" >{`We, at CASCO, strive to provide high-quality and professional consulting services to all entities that seek accreditation and implementation of technical Standards, in order to improve their performance and achieve growth and success.`}</p>
                    </div>
                </div>
            </div>
        </div>
        {/* Achievments Section */}
      <section className={`${styles.sectionOurAchievements}`}>
        <div className="row">
            <div className="col-sm-12">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-10 col-md-12">
                            <div className={`${styles.innerSectionOurAchievements}`}>
                                <div className="col-xl-4 col-lg-4 col-md-12">
                                    <span className={`${styles.spanFeature}`} data-trans="SUCCESSINDICATORS"></span>
                                    <h4 className={`${styles.headFeature}`} data-trans="OurAchievements"></h4>
                                </div>
                                <div className={`${styles.featuresBoxes} col-xl-8 col-lg-8 col-md-12`}>
                                    <div className={`${styles.featuresBoxesInner}`}>
                                        <div className={`${styles.itemFeatures} col-xl-6 col-lg-6 col-md-12`}>
                                            <img src="/images/about_page/achivs_icons/accreditation-bodies.png" alt=""/>
                                                <div className={`${styles.itemFeaturesBoxContent}`}>
                                                <h4 className='mb-0'>10</h4>
                                                <p data-trans="AccreditedBodiesAbout"></p>
                                            </div>
                                        </div>
                                        <div className={`${styles.itemFeatures} col-xl-6 col-lg-6 col-md-12`}>
                                            <img  className="" src="/images/about_page/achivs_icons/assessor-and-experts.png" alt=""/>
                                            <div className={`${styles.itemFeaturesBoxContent}`}>
                                                <h4 className='mb-0'>50</h4>
                                                <p className='' data-trans="AssessorsandExperts"></p>
                                            </div>
                                        </div>
                                        <div className={`${styles.itemFeatures} col-xl-6 col-lg-6 col-md-12`}>
                                            <img src="/images/about_page/achivs_icons/trainees-during.png" alt=""/>
                                            <div className={`${styles.itemFeaturesBoxContent}`}>
                                                <h4 className='mb-0'>40</h4>
                                                <p data-trans="Traineesduring2022"></p>
                                            </div>
                                        </div>
                                        <div className={`${styles.itemFeatures} col-xl-6 col-lg-6 col-md-12`}>
                                            <img src="/images/about_page/achivs_icons/casco-agreements.png" alt=""/>
                                            <div className={`${styles.itemFeaturesBoxContent}`}>
                                                <h4 className='mb-0'>2</h4>
                                                <p data-trans="CASCOAgreements"></p>
                                            </div>
                                        </div> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className={`${styles.sectionEstablishment}`}>
        <div className={`row m-auto container col-lg-9 pe-lg-5 ps-lg-5`} >
            <div className="col-sm-12">
                <div className="row">
                    <div className="wpb_column vc_column_container col-sm-12">
                        <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                                <h2  className={`vc_custom_heading ${styles.spanFeature2} text-left`}data-trans="Ethics">{`Ethics are central to CASCO’s actions`}</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 wpb_column vc_column_container col-sm-6">
                            <div className="vc_column-inner">
                                <div className="wpb_wrapper">
                                    <div className="wpb_text_column wpb_content_element  pargraph_feature">
                                        <div className="wpb_wrapper">
                                            <p className={`${styles.objectiveCardText}`}  data-trans='EthicsP1'>
                                                {`Central to CASCO's Actions: Ethics, Integrity, and Responsibility Ethics is a cornerstone of CASCO's actions, and compliance with local and international laws and regulations is crucial to the Group's standards. This fundamental principle ensures the Group's integrity and maintains its reputation. CASCO is committed to ethics and transparency, reflected in its Code of Ethics which is binding for all employees globally.`}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 wpb_column vc_column_container col-sm-6">
                        <div className="vc_column-inner">
                            <div className="wpb_wrapper">
	                            <div className="wpb_text_column wpb_content_element  pargraph_feature">
		                            <div className="wpb_wrapper">
			                            <p className={`${styles.objectiveCardText}`} data-trans="EthicsP2" >{`Every company within the Group is responsible for implementing and enforcing the Code of Ethics, considering the obligations and specificities of its business activities and location.
                                            An annual message is sent to all employees to remind them of the existence of the Code of Ethics.
                                            A reporting mechanism is available for all employees and individuals to report any illegal activities or threats to public interest.
                                            The Ethics Committee is responsible for enforcing the Code of Ethics, receiving reports of unethical behavior, and ensuring compliance with anti-corruption laws.
                                            `}
                                        </p>
		                            </div>
	                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* budget section */}
    <div className={`container col-xl-8 col-lg-8 col-md-10 col-sm-12 col-xs-12 mb-5 ${styles.ethicCard2}`}>                  
        <div className={`${styles.budgetCard}`}>
            <span className='fs-4 fw-bold' data-trans="budget">The budget of CASCO</span>
            <p className='mt-1 fs-6'data-trans="budgetP">{`"CASCO Group" was founded with a clear vision to provide high-quality and professional consulting services to all entities that seek accreditation and application of technical specifications. Based on this vision, the company's available budget is funded from the following sources:`}</p>
            <ul className='list-unstyled m-0 p-0'>
                <li className={`${styles.itemCheckTage} d-flex mb-2`}>
                    <p><FcCheckmark size={16} className='mb-2'/></p>
                    <small data-trans="budgetP1" className='me-2 ms-2'>{`Fees charged by CASCO in exchange for its services.`}</small>
                </li>	
                <li className={`${styles.itemCheckTage} d-flex`}>
                    <p><FcCheckmark size={15} className='mb-2'/></p>
                    <small data-trans="budgetP2" className='me-2 ms-2'>{`Financial contributions from Member States`}</small>
                </li>
                <li className={`${styles.itemCheckTage2} d-flex`}>
                    <p><FcCheckmark size={15} className='mb-2'/></p>
                    <small data-trans="budgetP3" className='me-2 ms-2 '>{`Grants and donations that do not compromise the independence and impartiality of CASCO, approved by the Board of Directors.`}</small>
                </li>
                <li className={`${styles.itemCheckTage} d-flex`}>
                    <p><FcCheckmark size={15} className='mb-0'/></p>
                    <small data-trans="budgetP4" className='me-2 mt-1 ms-2'>{`Other sources determined by the Board of Directors.`}</small>
                </li>
            </ul>
        </div>
    </div>
    </div>
    </>     
  )
}

export default About 