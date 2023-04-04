import React from 'react'
import styles from '../styles/OurValues.module.css'
import Link from 'next/link'
const OurValues = () => {
  return (
   <>
      <section id="team" className={` `}>
        <div className={`text-center ${styles.titleWord}`}>
            <div className={`container mb-4`}>
                <Link href={"/"}><a className="text-white fw-semibold mb-4">{`Home`}</a></Link>
                <Link href={"/about"}><a className="text-white fw-semibold mb-4">{` > About CASCO`}</a></Link>
                <Link href={"/our-values"}><a className="text-white fw-semibold mb-4" >{` > Our Values`}</a></Link>
            </div>
          <h2 className={`text-white fw-bold mb-5 `} data-trans="ourValuesTitle">Our Value</h2>
        </div>
         <div className="values">
                <div className="container">
                    <div className="section-header text-center">
                        <p className='fs-1 pb-4' data-trans="Ourcorporatevalues">Our corporate values</p>
                    </div>
                    <div className="row ">
                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 d-block">
                            <div className={`${styles.itemOne}`}>
                                <h2 className='mb-4' data-trans="LeadershipthroughExample">Leadership through Example</h2>
                                <p className='fs-5' data-trans="LeadershipthroughExampleb1">{`"Commitment" > highlights our employees' dedication to maintaining high standards in their daily work, taking extra steps to reduce the risk for clients, collaborating with and supporting coworkers, and making a positive impact to create a safer world.`}</p>
                                <p className='fs-5' data-trans="LeadershipthroughExampleb2">{`"Excellence" > embodies our ongoing pursuit of excellence by continuously enhancing our abilities and staying ahead of the curve in our field.`}</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 d-block">
                            <div className={`${styles.itemTwo}`}>
                                <h2 className='mb-4' data-trans="EntrepreneurshipInnovation">{`Entrepreneurship & Innovation`}</h2>
                                <p className='fs-5' data-trans="EntrepreneurshipInnovationb1">{`Embracing risk with an entrepreneurial mindset: Agile and Dependable`}</p>
                                <p className="fs-5" data-trans="EntrepreneurshipInnovationb2">{`We continuously seek improvement, and, through cross-disciplinary collaboration, we unlock new possibilities and create innovative solutions that bring added value and differentiation. We inspire our clients to strive for greater speed and progress so they can secure the future success of their businesses.`}</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 d-block">
                            <div className={`${styles.itemThree}`}>
                                <h2 className='mb-4' data-trans="AccountabilitySocialResponsibility">{`Accountability & Social Responsibility`}</h2>
                                <p className="fs-5" data-trans="AccountabilitySocialResponsibilityb1">{`Being Proactive: Managing Risk, Encouraging Sustainability and Green Development, Addressing Urban Growth.`}</p>
                                <p className="fs-5" data-trans="AccountabilitySocialResponsibilityb2">{`Accountability represents a promise of quality for our clients and ensures that our solutions are designed for long-term success.`}</p>
                                <p className="fs-5" data-trans="AccountabilitySocialResponsibilityb3">{`Together with social responsibility, it reflects our shared mission and our commitment to ensuring the safety and well-being of individuals both within the company and in society as a whole.`}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </section>
   </>
  )
}

export default OurValues