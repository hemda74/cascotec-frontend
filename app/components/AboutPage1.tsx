import Image from 'next/image'
import React from 'react'
import styles from '../styles/AboutPage1.module.css'
import{GiShakingHands} from 'react-icons/gi'
import {FcCheckmark} from 'react-icons/fc'
import card_objective from '../public/imagess/card_objective.jpg';
import Link from 'next/link'
const About = () => {
  return (
    <>
    <div className={`${styles.bodyContainer}`}></div>
        <div className={`text-center ${styles.titleWord}`}>
                <div className={`container `}>
                    <Link href={"/"}><a className="text-white fw-semibold mb-4">{`Home`}</a></Link>
                    <Link href={"/about"}><a className="text-white fw-semibold mb-4">{` > About CASCO`}</a></Link>
                    <Link href={"/about"}><a className="text-white fw-semibold mb-4">{` > About US`}</a></Link>
                </div>
            <h2 className={`text-white fw-bold mb-5 `} data-trans="AboutUsTitle">About Us</h2>
          </div>
          <div className={`row m-auto container p-0 `} >
            <div className={`d-flex justify-content-around align-items-center`}>
                <div className={` d-flex ${styles.objectiveCard2}`} >
                    <div className={`col-lg-6 p-0  `}>
                        <Image src={card_objective} className={`${styles.objImage} `} alt="" />
                    </div>
                    <div className={`col-lg-6 p-5 d-flex flex-column justify-content-center align-items-start`}>
                        <h4 className="fw-bold" data-trans='Ourobjective'>Our Objective</h4> 
                        <p className={`${styles.objectiveCardText}`} data-trans="OurobjectiveP">{`The CASCO Group aims to enhance its standing, accomplish its objectives, and reinforce its infrastructure by adopting best practices recognized globally and partnering with international entities in the accreditation sector.`}</p>
                    </div>
                </div>
            </div>
        </div> 
        <div className={`row m-auto container pe-lg-5 ps-lg-5 pt-3 `} >
            <div className={`d-flex justify-content-around align-items-center`}>
            <div className="row">
            <div className={`card-body col-xl-4 col-lg-4 col-md-6 col-sm-12 ${styles.visionCard}`}>
                <span className='fs-4 fw-bold' data-trans="OurVision">Our Vision</span>
                <p className={`${styles.objectiveCardText}`} data-trans='OurVisionP' >{`Creating a Safer World Together Committed to ensuring project integrity, managing risks, and maximizing client performance to build a better and safer world for all.`}</p>
            </div>
            <div className={`card-body col-xl-4 col-lg-4 col-md-6 col-sm-12 ${styles.visionCard}`}>
                <span className='fs-4 fw-bold' data-trans="OurMission">Our Mission</span>
                <p className={`${styles.objectiveCardText}`} data-trans="OurMissionP" >{`Comprehensive Project Consultation Our expert team identifies, evaluates, and controls risks related to quality, health and safety, and the environment throughout the entire project life cycle.`}</p>
            </div>
            </div>
            </div>
        </div>
        {/* achivments section */}
        {/* <div className={`${styles.ctA}`}>
            <div className="row">
                <div className="col-lg-5 ms-2 text-lg-center mt-5">
                    <p className='fs-6 fw-semibold text-white me-2 ms-2' data-trans='SUCCESSINDICATORS'>SUCCESS INDICATORS</p>
                    <p className='fs-1 text-white fw-bold me-3 ms-3' data-trans="OurAchievements">Our Achievements</p>
                </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-start align-items-start flex-wrap row">
                    <div className={` d-flex col-lg-6 col-sm-12 col-md-6 col-xs-12   justify-content-center align-items-center ${styles.achievementsDiv}`}>
                        <p className={`  ${styles.iconsColor}`}>
                        <GiShakingHands  size={60}/>
                        </p>
                        <div className='mt-1'>
                        <p className=' text-white fs-4 fw-bold me-3 mb-0 ms-3'>311</p>
                        <small className=' text-white ms-3 me-3 d-block mb-4 text-start' data-trans="AccreditedBodiesAbout">Accredited Bodies</small>
                        </div>
                    </div>
                    <div className={` d-flex col-lg-6 col-sm-12 justify-content-center align-items-center ${styles.achievementsDiv}`}>
                        <p className={`${styles.iconsColor}`}>
                        <GiShakingHands  size={60}/>
                        </p>
                        <div className='mt-2'>
                        <span className=' text-white fs-4 fw-bold ms-3 me-3'>1784</span>
                        <small className='text-white ms-3 me-3 d-block mb-4 text-start' data-trans="AssessorsandExperts">AssessorsandExperts</small>
                        </div>
                    </div>
                    <div className={`d-flex col-lg-6 d-flex justify-content-center align-items-center ${styles.achievementsDiv}`}>
                        <p className={`${styles.iconsColor} text-start `}>
                        <GiShakingHands  size={60}/>
                        </p>
                        <div className='mt-2'>
                        <span className=' text-white fs-4 fw-bold text-start ms-3 me-3'>777</span>
                        <small className=' text-white ms-3 me-3 d-block mb-4 text-start' data-trans="Traineesduring2022">{`2022's Trainees`}</small>
                        </div>
                    </div>
                    <div className={` col-lg-6 d-flex justify-content-center align-items-center ${styles.achievementsDiv}`}>
                        <p className={`${styles.iconsColor}`}>
                        <GiShakingHands size={60}/>
                        </p>
                        <div className=' ms-3 me-3'>
                        <p className=' text-white fs-4 fw-bold  ms-3 mb-0 me-3'>31</p>
                        <small className='text-white mb-4' data-trans="CASCOAgreements">CASCO Agreements</small>
                        </div>
                    </div>
                </div>
            </div>
      </div> */}
      <section className={`${styles.sectionOurAchievements}`}>
        <div className="row">
            <div className="col-sm-12">
                <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-8 col-lg-10 col-md-12">
                    <div className={`${styles.innerSectionOurAchievements}`}>
                        <div className="col-xl-4 col-lg-4 col-md-12">
                            <span className={`${styles.spanFeature}`}>Success indicators</span>
                            <h4 className={`${styles.headFeature}`}>Our achievements</h4>
                        </div>
                        <div className={`${styles.featuresBoxes} col-xl-8 col-lg-8 col-md-12`}>
                            <div className={`${styles.featuresBoxesInner}`}>
                                <div className={`${styles.itemFeatures} col-xl-6 col-lg-6 col-md-12`}>
					                <img src="https://gac.org.sa/wp-content/uploads/2022/05/accredited-bodies-ic2.png" alt=""/>
						                <div className={`${styles.itemFeaturesBoxContent}`}>
							            <h4>324</h4>
							            <p>Accredited bodies</p>
						            </div>
				                </div>
                                <div className={`${styles.itemFeatures} col-xl-6 col-lg-6 col-md-12`}>
					<img  className="" src="https://gac.org.sa/wp-content/uploads/2022/05/assessors-and-experts-ic2.png" alt=""/>
                    <div className={`${styles.itemFeaturesBoxContent}`}>
							<h4>1785</h4>
							<p className=''>Assessors and experts</p>
						</div>
				</div>
                <div className={`${styles.itemFeatures} col-xl-6 col-lg-6 col-md-12`}>
					<img src="https://gac.org.sa/wp-content/uploads/2022/05/trainees-ic2.png" alt=""/>
                    <div className={`${styles.itemFeaturesBoxContent}`}>
							<h4>666</h4>
							<p>Trainees during 2022</p>
						</div>
				</div>
                <div className={`${styles.itemFeatures} col-xl-6 col-lg-6 col-md-12`}>
					<img src="https://gac.org.sa/wp-content/uploads/2022/05/agreements_ic.png" alt=""/>
                    <div className={`${styles.itemFeaturesBoxContent}`}>
							<h4>37</h4>
							<p>CASCO agreements</p>
						</div>
				</div> 
                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div></div></div></section>
        <section className={`${styles.sectionEstablishment}`}>
            <div className={`row m-auto container col-lg-9 pe-lg-5 ps-lg-5  `} >
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
                                        <p className='text-center mt-3'>
                                            <img loading="lazy" className="wp-image-797" src="https://gac.org.sa/wp-content/uploads/2022/10/GSO-Logo-300x93.png" alt="" width="162" height="50"  sizes="(max-width: 162px) 100vw, 162px"/>
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
      {/* <div className="ethicsCasco">
      <div className="row mx-0 mt-5 d-flex justify-content-around align-items-center">
            <div className="col-lg-2"></div>
            <div className={`card-body col-xl-4 col-lg-4 col-md-6 col-sm-12  ${styles.ethicCard}`}>
            <h4 className='fs-4 fw-bold' data-trans="Ethics">{`Ethics are central to CASCO’s actions`}</h4>
                <p className='mt-3 ' data-trans='EthicsP1'>
                    {`Central to CASCO's Actions: Ethics, Integrity, and Responsibility Ethics is a cornerstone of CASCO's actions, and compliance with local and international laws and regulations is crucial to the Group's standards. This fundamental principle ensures the Group's integrity and maintains its reputation. CASCO is committed to ethics and transparency, reflected in its Code of Ethics which is binding for all employees globally.`}
                </p>
            </div>
            <div className={`card-body col-xl-4 col-lg-4 col-md-6 col-sm-12 ${styles.ethicCard5}`}>
                <p className=' 'data-trans="EthicsP2" >{`Every company within the Group is responsible for implementing and enforcing the Code of Ethics, considering the obligations and specificities of its business activities and location.
                    An annual message is sent to all employees to remind them of the existence of the Code of Ethics.
                    A reporting mechanism is available for all employees and individuals to report any illegal activities or threats to public interest.
                    The Ethics Committee is responsible for enforcing the Code of Ethics, receiving reports of unethical behavior, and ensuring compliance with anti-corruption laws.
                    `}
                </p>
                <div className={`d-flex justify-content-around align-items-center`}>
                <Image  src={gsoLogo} alt={'hello'}/>
                </div>
            </div>
            <div className="col-lg-2"></div>
            </div>
            </div> */}
            <div className={`container col-xl-8 col-lg-8 col-md-10 col-sm-12 col-xs-12 mb-5 ${styles.ethicCard2}`}>                  
             <div className={`${styles.budgetCard}`}>
                    <span className='fs-4 fw-bold' data-trans="budget">The budget of CASCO</span>
                    <p className='mt-1 fs-5'data-trans="budgetP">{`CASCO shall have a separate budget, funded by the following sources`}</p>
                    <ul className='list-unstyled m-0 p-0'>
                    <li className={`${styles.itemCheckTage} d-flex`}>
                    <p><FcCheckmark size={15} className=''/></p>
                            <small data-trans="budgetP1" className='me-2 ms-2'>{`Fees charged by CASCO in exchange for its services.`}</small>
                        </li>	
                        <li className={`${styles.itemCheckTage} d-flex`}>
                            <p><FcCheckmark size={15} className=''/></p>
                            <small data-trans="budgetP2" className='me-2 ms-2'>{`Financial contributions from Member States`}</small>
                        </li>
                        <li className={`${styles.itemCheckTage2} d-flex  `}>
                            <p><FcCheckmark size={15} className=''/></p>
                            <small data-trans="budgetP3" className='me-2 ms-2 '>{`Grants and donations that do not compromise the independence and impartiality of CASCO, approved by the Board of Directors.`}</small>
                        </li>
                        <li className={`${styles.itemCheckTage} mt-1  d-flex`}>
                            <p><FcCheckmark size={15} className=''/></p>
                                <small data-trans="budgetP4" className='me-2 mt-1 ms-2'>{`Other sources determined by the Board of Directors.`}</small>
                        </li>
                    </ul>
            </div>
        </div>
    </>     
  )
}

export default About 