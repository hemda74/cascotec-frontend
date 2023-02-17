import Image from 'next/image'
import React from 'react'
import styles from '../styles/AboutPage1.module.css'
import{GiAchievement,GiRead} from 'react-icons/gi'
import logoobjective from '../public/imagess/logoobjective.png'
const About  = () => {
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
                        <span className="card-title fs-4 fw-bold mt-3">Our objective</span> 
                        <p className="card-text mt-3">The CASCO Group aims to enhance its standing, accomplish its objectives, and reinforce its infrastructure by adopting best practices recognized globally and partnering with international entities in the accreditation sector.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="row mx-0 mt-5 d-flex justify-content-around align-items-center ">
            <div className={`card-body col-xl-6 col-lg-6 col-md-6 col-sm-12 ${styles.visionCard}`}>
                <span className='fs-4 fw-bold'>Our vision</span>
                <p className='mt-3'>Creating a Safer World Together Committed to ensuring project integrity, managing risks, and maximizing client performance to build a better and safer world for all.</p>
            </div>
            <div className={`card-body col-xl-6 col-lg-6 col-md-6 col-sm-12 ${styles.visionCard}`}>
                <span className='fs-4 fw-bold'>Our Mission </span>
                <p className='mt-3' >Comprehensive Project Consultation Our expert team identifies, evaluates, and controls risks related to quality, health and safety, and the environment throughout the entire project life cycle.</p>
            </div>
        </div>
        {/* achivments section */}
        <div className={`${styles.ctA}`}>
            <div className="row">
                <div className="col-lg-9 text-center text-lg-center">
                    <p className='fs-5 fw-semibold text-white'>SUCCESS INDICATORS</p>
                    <p className='fs-2 text-white fw-bold'>Our achievements</p>
                </div>
                <div className={`col-lg-3 cta-btn-container text-center row ${styles.ctaBtn}`}>
                    <div className={`col-3 `}>
                        <span className={`${styles.iconsColor}`}>
                        <GiAchievement size={70}/>
                        </span>
                    </div>
                    <div >
                        <h3 className='mt-2 fw-bold'>311</h3>
                        <p>Accredited bodies</p>
                    </div>
                    <div>
                        <span className={`${styles.iconsColor}`}>
                        <GiAchievement size={70}/>
                        </span>
                    </div>
                    <div>
                        <h3 className='mt-2 fw-bold'>311</h3>
                        <p>Accredited bodies</p>
                    </div>
                    <div>
                        <span className={`${styles.iconsColor}`}>
                        <GiAchievement size={70}/>
                        </span>
                    </div>
                    <div>
                        <h3 className='mt-2 fw-bold'>311</h3>
                        <p>Accredited bodies</p>
                    </div>
                    <div>
                        <span className={`${styles.iconsColor}`}>
                        <GiAchievement size={70}/>
                        </span>
                    </div>
                    <div>
                        <h3 className='mt-2 fw-bold'>311</h3>
                        <p>Accredited bodies</p>
                    </div>
                </div>
            </div>
      </div>
    </>
        
  )
}

export default About 