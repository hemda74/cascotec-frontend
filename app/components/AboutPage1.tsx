import Image from 'next/image'
import React from 'react'
import styles from '../styles/AboutPage1.module.css'
import{GiAchievement,GiShakingHands} from 'react-icons/gi'
import {FaRegAddressCard} from 'react-icons/fa'
import {TbUsers} from 'react-icons/tb'
import logoobjective from '../public/imagess/logoobjective.png';
import gsoLogo from '../public/imagess/GSO-Logo-300x93.png';
import {TfiCheck} from 'react-icons/tfi'
const About = () => {
  return (
    <>
        <div className={` row `} >
            <div className="col-3">
            </div>
            <div className={`col-lg-6 `}>
                <div className={` row ${styles.objectiveCard2}`} >
                    <div className="col-1">
                    </div>
                    <div className="col-lg-4">
                        <Image src={logoobjective} className={` ${styles.cardImage} mb-3 `} alt=""/>
                    </div>
                    <div className={`col-lg-5 text-center m-auto`}>
                        <span className="card-title fs-4 fw-bold mt-3" data-trans='Ourobjective'>Our Objective</span> 
                        <p className="card-text mt-3" data-trans="OurobjectiveP">The CASCO Group aims to enhance its standing, accomplish its objectives, and reinforce its infrastructure by adopting best practices recognized globally and partnering with international entities in the accreditation sector.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="row mx-0 mt-5 d-flex justify-content-around align-items-center">
            <div className={`card-body col-xl-6 col-lg-6 col-md-6 col-sm-12 ${styles.visionCard}`}>
                <span className='fs-4 fw-bold' data-trans="OurVision">Our Vision</span>
                <p className='mt-3' data-trans='OurVisionP' >Creating a Safer World Together Committed to ensuring project integrity, managing risks, and maximizing client performance to build a better and safer world for all.</p>
            </div>
            <div className={`card-body col-xl-6 col-lg-6 col-md-6 col-sm-12 ${styles.visionCard}`}>
                <span className='fs-4 fw-bold' data-trans="OurMission">Our Mission</span>
                <p className='mt-3'data-trans="OurMissionP" >Comprehensive Project Consultation Our expert team identifies, evaluates, and controls risks related to quality, health and safety, and the environment throughout the entire project life cycle.</p>
            </div>
        </div>
        {/* achivments section */}
        <div className={`${styles.ctA}`}>
            <div className="row">
                <div className="col-lg-5 text-center text-lg-center mt-5">
                    <p className='fs-5 fw-semibold text-white' data-trans='SUCCESSINDICATORS'>SUCCESS INDICATORS</p>
                    <p className='fs-2 text-white fw-bold' data-trans="OurAchievements">Our Achievements</p>
                </div>
                <div className={`mb-lg-3 d-flex col-lg-6 cta-btn-container text-center row ${styles.ctaBtn}`}>
                    <div className={`col-lg-3 col-sm-12 col-md-3   `}>
                        <span className={`${styles.iconsColor}`}>
                        <GiAchievement size={70}/>
                        </span>
                    </div>
                    <div className='col-lg-3 col-sm-12 col-md-3  ' >
                        <p className=' text-white fs-3  ms-md-2 fw-bold'>311</p>
                        <p className=' d-inline-block' data-trans="AccreditedBodiesAbout">Accredited Bodies</p>
                    </div>
                    <div className={`col-lg-3 col-sm-12 col-md-3  `}>
                        <span className={`${styles.iconsColor}`}>
                        <FaRegAddressCard size={60}/>
                        </span>
                    </div>
                    <div className='col-lg-3 col-sm-12 col-md-3' >
                        <p className='mt-2 text-white fs-3 fw-bold'>1784</p>
                        <span className='mt-2 text-white d-block mb-4' data-trans="AssessorsandExperts">AssessorsandExperts</span>
                    </div>
                    <div className={`col-lg-3 col-sm-12 col-md-3  `}>
                        <span className={`${styles.iconsColor}`}>
                        <TbUsers size={70}/>
                        </span>
                    </div>
                    <div className='col-lg-3 col-sm-12 col-md-3 ' >
                        <p className=' text-white fs-3 fw-bold'>777</p>
                        <p className=' d-inline-block' data-trans="Traineesduring2022">Trainees during 2022</p>
                    </div>
                    <div className={`col-lg-3 col-sm-12 col-md-3 mt-3 `}>
                        <span className={`${styles.iconsColor}`}>
                        <GiShakingHands size={70}/>
                        </span>
                    </div>
                    <div className='col-lg-3 col-sm-12 col-md-3 mt-3 ' >
                        <h3 className=' text-white  fw-bold'>31</h3>
                        <p className=' d-inline-block' data-trans="CASCOAgreements">CASCO Agreements</p>
                    </div>
                </div>
            </div>
      </div>
      <div className="ethicsCasco">
      <div className="row mx-0 mt-5 d-flex justify-content-around align-items-center">
            <div className={`card-body col-xl-12 col-lg-12 col-md-12 col-sm-12 ${styles.ethicCard}`}>
                <span className='fs-4 fw-bold' data-trans="Ethics">Ethics are central to CASCO’s actions</span>
                <br/>
                <p className='mt-3'data-trans="EthicsP">{`Central to CASCO's Actions: Ethics, Integrity, and Responsibility
                    Ethics is a cornerstone of CASCO's actions, and compliance with local and international laws and regulations is crucial to the Group's standards. This fundamental principle ensures the Group's integrity and maintains its reputation.
                    CASCO is committed to ethics and transparency, reflected in its Code of Ethics which is binding for all employees globally. Every company within the Group is responsible for implementing and enforcing the Code of Ethics, considering the obligations and specificities of its business activities and location.
                    An annual message is sent to all employees to remind them of the existence of the Code of Ethics.
                    A reporting mechanism is available for all employees and individuals to report any illegal activities or threats to public interest.
                    The Ethics Committee is responsible for enforcing the Code of Ethics, receiving reports of unethical behavior, and ensuring compliance with anti-corruption laws.`}
                </p>
                <div className={` d-flex justify-content-around align-items-center`}>
                <Image  src={gsoLogo} alt={'hello'}/>
                </div>
            </div>
                <div className={`card-body col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-3 ${styles.ethicCard2}`}>
                    <div className={`${styles.ethicCard3}`}>
                    <span className='fs-4 fw-bold' data-trans="budget">The budget of CASCO</span>
                    <p className='mt-3 fs-5'data-trans="budgetP">CASCO shall have a separate budget, funded by the following sources</p>
                    <ul className='-list-unstyled'>
                        <li className={styles.itemCheckTage}>
                            <TfiCheck size={20} className='mt-1 me-2'/>
                            <p data-trans="budgetP1" className='me-4 ms-4'>Fees charged by CASCO in exchange for its services.</p>
                        </li>	
                        <li className={styles.itemCheckTage}>
                            <TfiCheck size={20} className='mt-1 me-2'/>
                            <p data-trans="budgetP2" className='me-4 ms-4'>Financial contributions from Member States</p>
                        </li>
                        <li className={styles.itemCheckTage}>
                            <TfiCheck size={50} className=' ms-1'/>
                            <p data-trans="budgetP3" className='me-4 ms-4'>Grants and donations that do not compromise the independence and impartiality of CASCO, approved by the Board of Directors.</p>
                        </li>
                        <li className={styles.itemCheckTage}>
                            <TfiCheck size={20} className='mt-1 me-2'/>
                                <p data-trans="budgetP4" className='me-4 ms-4'>Other sources determined by the Board of Directors.</p>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    </>     
  )
}

export default About 