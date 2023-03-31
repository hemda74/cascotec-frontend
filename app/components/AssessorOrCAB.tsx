import React from 'react'
import styles from '../styles/AssessorOrCAB.module.css'
const AssessorOrCAB = () => {
  return (
<>
    <div className="row">
        <div className="col-sm-12">
            <section className={`${styles.sectionAssessorCab}`}>
                <div className={`${styles.innerAssessorCab}`}>
                    <h4 className={`${styles.headAssessorCab}`}>Assessor or CAB?</h4>
                </div>
                <div className={`${styles.bodyAssessorCab}  `}>
                    <div className={`container ${styles.innerContainer} `}>
                        <div className={`row justify-content-center  ${styles.mainDivContainer}`}>
                             <div className={`col-md-6 col-sm-12 col-xl-6 col-xs-12 col-lg-6 ${styles.cardCertificate} me-lg-4 ms-lg-4 `}>
                                            <img src="/images/home_page/assessor-illustration.png" alt=""/>
                                            <button className={`myInfo p-2 rounded ${styles.btnClass} `} type="submit">Send Message</button>
                                    </div>
                                        <div className={` col-md-6 col-sm-12 col-xs-12 col-xl-6 col-lg-6 ${styles.cardCertificate2}`}>
                                        <img src="/images/home_page/cab-illustration.png" alt=""/>
                                            <button className={`myInfo p-2 rounded ${styles.btnClass} `} type="submit">Send Message</button>
                                        </div>
                             </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</>
  )
}

export default AssessorOrCAB