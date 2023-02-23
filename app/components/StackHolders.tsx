import React from 'react'
import styles from '../styles/StackHolders.module.css'
const StackHolders = () => {
  return (
    <>
    <section>
        <div className={`text-center ${styles.titleWord}`}>
          <h6 className="text-white fw-semibold mb-4" data-trans="routeStakeholdersAdvisoryCommittee">{`Home > About CASCO > Stakeholders Advisory Committee`}</h6>
          <h2 className={`text-white fw-bold mb-5 `} data-trans="StakeholdersAdvisoryCommitteeTitle">Stakeholders Advisory Committee</h2>
        </div>
        <div className="values">
                <div className="container">
                    <div className="section-header text-center">
                        <p className='fs-1' data-trans="Responsibilitiesofthecommittee">Responsibilities of the committee</p>
                        <p className="fs-5" data-trans="Responsibilitiesofthecommitteeb1">The committee is in charge of the implementation of the following tasks and functions</p>
                    </div>
                    <div className="row ">
                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 d-block">
                            <div className={`${styles.itemOne}`}>
                                <span className={`mb-4 ${styles.numbersCircle}`}  data-trans="LeadershipthroughExample">1</span>
                                <p className='fs-5' data-trans="LeadershipthroughExampleb1">{`"Commitment" > highlights our employees' dedication to maintaining high standards in their daily work, taking extra steps to reduce the risk for clients, collaborating with and supporting coworkers, and making a positive impact to create a safer world.`}</p>
                                <p className='fs-5' data-trans="LeadershipthroughExampleb2">{`"Excellence" > embodies our ongoing pursuit of excellence by continuously enhancing our abilities and staying ahead of the curve in our field.`}</p>
                            </div>
                        </div>
                        </div>
                        </div>
                        </div>
    </section>
    </>
  )
}

export default StackHolders