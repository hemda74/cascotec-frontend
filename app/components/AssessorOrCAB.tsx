import React from 'react'
import styles from '../styles/AssessorOrCAB.module.css'
import ASSESSORModal from './Other Forms/AssessorModal'
import CABModal from './Other Forms/CABModal'
// AssessorOrCAB Component
const AssessorOrCAB = () => {
  return (
    <>
        <div className={`${styles.mainDiv}`}>
            <div className="row">
                <div className="col-sm-12">
                    <section className={`${styles.sectionAssessorCab}`}>
                        <div className={`${styles.innerAssessorCab}`}>
                            <h4 className={`${styles.headAssessorCab}`} data-trans="AssessororCAB">Assessor or CAB?</h4>
                        </div>
                        <div className={`${styles.bodyAssessorCab} `}>
                            <div className={`container ${styles.innerContainer} `}>
                                <div className={`row justify-content-center  ${styles.mainDivContainer}`}>
                                    <div className={`col-md-6 col-sm-12 col-xl-6 col-xs-12 col-lg-6 ${styles.cardCertificate} me-lg-4 ms-lg-4 `}>
                                        <img src="/images/home_page/assessor.png" alt=""/>
                                        <a data-bs-toggle="modal" data-bs-target="#ASSESSORModal">
                                        <button className={`myInfo rounded ${styles.btnClassAssessor}`} data-trans="APPLYASASSESSOR">{`APPLY AS ASSESSOR`}</button>
                                        </a>
                                    </div>
                                    <div className={`col-md-6 col-sm-12 col-xs-12 col-xl-6 col-lg-6 ${styles.cardCertificate2}`}>
                                        <img src="/images/home_page/cab.png" alt=""/>
                                        <a data-bs-toggle="modal" data-bs-target="#CABModal">
                                        <button className={`myInfo rounded ${styles.btnClassCab}`} data-trans="APPLYASCAB">{`APPLY AS CAB`}</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
        <ASSESSORModal/> <CABModal/>
    </>
  )
}

export default AssessorOrCAB