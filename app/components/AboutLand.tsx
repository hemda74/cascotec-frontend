import React from 'react'

import  styles  from '../styles/AboutLand.module.css'
import about from '../public/imagess/about.png'
import Image from 'next/image'
const AboutLand = () => {
  return (
    <div className="container">
        <div className={`row justify-content-center `}>   
            <div className={`col-sm-12 col-xl-8 col-md-8 ${styles.aboutHolder}`}>
                <div>
                    <div className={`bg-img-holder `}>
                        <div className={`${styles.aboutHolder}`}>
                            <div className={`col-12 ${styles.aboutBody}`}>
                                <span className={`${styles.whoWeAre}`}>Who We Are</span>
                                <span className='fs-6 fw-semibold '>About CASCO</span>
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