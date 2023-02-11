import React from 'react'

import  styles  from '../styles/AboutLand.module.css'
import about from '../public/imagess/about.png'
import Image from 'next/image'
import Link from 'next/link'
const AboutLand = () => {
  return (
    <div className="container">
        <div className={`row justify-content-center `}>   
            <div className={`col-sm-12 col-xl-8 col-md-8 ${styles.aboutHolder}`}>
                <div>
                    <div className={`bg-img-holder `}>
                        <div className={`${styles.aboutHolder}`}>
                            <div className={`col-12 ${styles.aboutBody}`}>
                                <span className={`${styles.whoWeAre}`} data-trans='WhoWeAreAbout'>Who We Are</span>
                                <div className={`${styles.aboutCasco}`}>
                                    <span className={` fw-semibold `} data-trans='AboutCASCOAbout'>About CASCO</span>
                                </div>
                                <div className={`${styles.aboutCascoText}`}>
                                     <p data-trans="AboutCascoText">The GCC Accreditation Center is one of the most visible successes</p>
                                     <p data-trans="AboutCascoText2" className={`${styles.aboutCascoText2}`}>of the Gulf Cooperation Council countries,</p> 
                                     <p data-trans="AboutCascoText3" className={`${styles.aboutCascoText3}`}>as it is the first and fastest multi-economy accreditation agency in the Middle East, Asia,</p>
                                     <p data-trans="AboutCascoText4" className={`${styles.aboutCascoText4}`}>and the Pacific to gain international recognition.</p>
                                </div>
                                <div>
                                   <Link href={'/about/about-us'} id='link'><a> <p className={`${styles.aboutCascoLink}`} data-trans="LearnMoreAbout">Learn More</p></a></Link>
                                </div>
                            </div>
                                <Image src ={about} className={`${styles.imageHolder}`}  alt='about image'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutLand