import React from 'react'
import Link from 'next/link'
import styles from '../styles/StackHolders.module.css'
const StackHolders = () => {
  return (
<>
    <section className={`${styles.mainContainer}`}>
        <div className={`text-center ${styles.titleWord}`}>
            <div className={`container mb-4`}>
                <Link href={"/"}><a className="text-white fw-semibold mb-4">{`Home`}</a></Link>
                <Link href={"/about"}><a className="text-white fw-semibold mb-4">{` > About CASCO`}</a></Link>
                <Link href={"/about/stakeholders-advisory-committee"}><a className="text-white fw-semibold mb-4" >{` > Stakeholders Advisory Committee`}</a></Link>
            </div>   
            <h2 className={`text-white fw-bold mb-5`} data-trans="StakeholdersAdvisoryCommitteeTitle">Stakeholders Advisory Committee</h2>
        </div>
        <div className="container">
            <div className="section-header text-center">
                <p className='fs-1' data-trans="Responsibilitiesofthecommittee"></p>
                <p className="fs-5" data-trans="Responsibilitiesofthecommitteeb1"></p>
            </div>
            <div className="row mt-5">
                <div className="col-lg-2"></div>
                <div className={` ${styles.innerContainer} col-lg-2 col-md-6 col-sm-12 col-xs-12`}>
                    <div className="d-flex mb-3">
                        <div className={`${styles.biggerCircle}`}>
                            <span className={`${styles.numbersCircle}`}>1</span>
                        </div>
                        <h6 className='mt-3 me-2 ms-2'data-trans='Examininganddiscussingsubjectstitle'></h6>
                    </div>
                    <small className='pt-3 mt-5' data-trans="Examininganddiscussingsubjects">{``}</small>
                </div>
                <div className={`${styles.innerContainer} col-lg-2 col-md-6 col-sm-12 col-xs-12`}>
                    <div className="d-flex mb-3">
                        <div className={`${styles.biggerCircle}`}>
                            <span className={` ${styles.numbersCircle}`}>2</span>
                        </div>
                        <h6 className='mt-3 me-2 ms-2' data-trans='Assessingthepoliciestitle'></h6>
                    </div>
                    <small className='pt-3 mt-5'data-trans="Assessingthepolicies">{``}</small>
                </div>
                <div className={`${styles.innerContainer} col-lg-2 col-md-6 col-sm-12 col-xs-12`}>
                    <div className="d-flex mb-3">
                        <div className={`${styles.biggerCircle}`}>
                            <span className={` ${styles.numbersCircle}`}>3</span>
                        </div>
                        <h6 className='mt-3 me-2 ms-2' data-trans='Evaluatingtheplanstitle'></h6>
                    </div>
                    <small className='pt-3 mt-5' data-trans="Evaluatingtheplans">{``}</small>
                </div>
                <div className={`${styles.innerContainer} col-lg-2 col-md-6 col-sm-12 col-xs-12`}>
                    <div className={`${styles.itemOne}`}>
                        <div className="d-flex mb-3">
                            <div className={`${styles.biggerCircle}`}>
                                <span className={` ${styles.numbersCircle}`}>4</span>
                            </div>
                            <h6 className='mt-3 me-2 ms-2' data-trans='Reviewannualreportstitle'></h6>
                        </div>
                        <small className='pt-3 mt-5' data-trans="Reviewannualreports">{``}</small>
                    </div>
                </div>
                <div className="col-lg-2"></div>
            </div>
          </div>
          <div className={`${styles.ctA}`}>
            <div className="row">
                <div className="col-xl-2 col-lg-2"></div>
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 ms-2 text-lg-center mt-5">
                        <p className={`fs-3 fw-semibold ${styles.titleStackH}`} data-trans="TheAdvisory"></p>
                    </div>
                <div className="row col-xl-5 col-lg-5 col-md-12 col-sm-12 col-xs-12 ms-2 text-lg-center mt-5">
                    <div className={`d-flex align-items-start ${styles.listContainer}`}>
                        <div className={`nav flex-column nav-pills me-lg-4 col-sm-1 ms-lg-4 ${styles.listinnerContainer1}`} id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <button className={` pb-2  ${styles.navLink} text-start fs-6`} id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true" data-trans="Governmentauthorities">Government authorities</button>
                            <button className={` pb-2 ${styles.navLink} text-start fs-6`} id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false" data-trans="ConformityAssessmentBodies">Conformity Assessment Bodies</button>
                            <button className={` pb-2 ${styles.navLink} active text-start fs-6`} id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false" data-trans="GCCorganizationsIndustryandconsumers">{`GCC organizations, Industry and consumers`}</button>
                        </div>
                        <div className={`tab-content ${styles.listinnerContainer2}`} id="v-pills-tabContent">
                            <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabIndex={0}>
                                <ul className="text-white">
                                    <li className={`mt-2 ${styles.listGroupItem}`} data-trans="Onerepresentativeofagovernment">{`One representative of a government authority (ministry) in each of the Member States (7 members).`}</li>
                                </ul>
                            </div>
                            <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabIndex={0}>
                                <ul className="text-white">
                                    <li className={`mt-2 ${styles.listGroupItem}`} data-trans="Onerepresentativefromtheconformity">{`One representative from the conformity assessment bodies accredited by the GAC (up to 6 members)`}</li>
                                </ul>
                            </div>
                            <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabIndex={0}>
                                <ul className="text-white ">
                                    <li className={`mt-2  ${styles.listGroupItem}`} data-trans="Onerepresentative1">{`One representative of the chambers of commerce and industry of the Member States`}</li>
                                    <li className={`mt-2  ${styles.listGroupItem}`} data-trans="Onerepresentative2">{`One representative of the consumer protection organizations`}</li>
                                    <li className={`mt-2  ${styles.listGroupItem}`} data-trans="Onerepresentative3">{`One representative of the Secretariat-general of the Cooperation Council`}</li>
                                    <li className={`mt-2  ${styles.listGroupItem}`} data-trans="Onerepresentative4">{`One representative of the GCC Standardization Organization`}</li>
                                </ul>       
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-2">
                </div>
            </div>
        </div>
    </section>
</>
  )
}
export default StackHolders