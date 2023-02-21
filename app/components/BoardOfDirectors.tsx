import React from 'react'
import styles from '../styles/BoardOfDirectors.module.css'
import mohamed from '../public/imagess/mohamedhamdy.jpg'
import Link from 'next/link'
import Image from 'next/image'
import uae from '../public/imagess/uae.png'
import qater from '../public/imagess/qater.png'
import ksa from '../public/imagess/ksa.png'
import egypt from '../public/imagess/egypt.png'
import bahreen from '../public/imagess/bahreen.png'
import kuwiat from '../public/imagess/kuwait.png'
import oman from '../public/imagess/oman.png'
import hh from '../public/imagess/kuawdfghjkl_ait-removebg-preview.png'
const BoardOfDirectors = () => {
  return (
    <>
   <section id="team" className={`${styles.boardOfDirc}`}>
      <div  className="container" data-aos="fade-up">
        <div className="text-center"><h2 className="text-white fw-bold mb-5" data-trans="BoardofDirectors">Board of Directors</h2></div>
        <div className="row gy-5">
          <div className="col-xl-4 col-md-6 d-flex" data-aos="zoom-in" data-aos-delay="200">
              <Link href={`https://www.linkedin.com/in/ahmed-hemdan-695408201/`} target="_blank" rel="noreferrer">
                <a>
                    <div className={`${styles.teamMember2}`}>
                        <figure className={`${styles.teamMemberFigure}`}>
                          <Image src={mohamed} height={460} alt="" className="img-responsive rounded"/>
                          <figcaption className={`${styles.figCaption} text-center`}>
                            <div className='mt-5'>
                              <p className='fs-3' data-trans="MrAhmedMahrous">Mr. Ahmed Mahrous</p>
                              <p className='fs-5' data-trans='BusinessDevelopmentManager'>Business Development Manager</p>
                            </div>
                            <div className='d-flex justify-content-end'>
                            <Image src={oman}  className={`${styles.flagImage}`} />
                            </div>
                          </figcaption>
                        </figure>
                    </div>
                </a>
            </Link>
          </div>
          <div className="col-xl-4 col-md-6 d-flex" data-aos="zoom-in" data-aos-delay="200">
              <Link href={`https://www.linkedin.com/in/ahmed-hemdan-695408201/`} target="_blank" rel="noreferrer">
                <a>
                    <div className={`${styles.teamMember2}`}>
                        <figure className={`${styles.teamMemberFigure}`}>
                          <Image src={mohamed} height={460} alt="" className="img-responsive rounded"/>
                          <figcaption className={`${styles.figCaption} text-center`}>
                            <div className='mt-5'>
                              <p className='fs-3' data-trans="MrMostafaFarag">Mr. Mostafa Farag</p>
                              <p className='fs-5' data-trans="ChiefFinancialOfficerCFO">Chief Financial Officer (CFO)</p>
                            </div>
                            <div className='d-flex justify-content-end'>
                            <Image src={ksa}  className={`${styles.flagImage}`} />
                            </div>
                          </figcaption>
                        </figure>
                    </div>
                </a>
            </Link>
          </div>
          <div className="col-xl-4 col-md-6 d-flex" data-aos="zoom-in" data-aos-delay="200">
              <Link href={`https://www.linkedin.com/in/ahmed-hemdan-695408201/`} target="_blank" rel="noreferrer">
                <a>
                    <div className={`${styles.teamMember2}`}>
                        <figure className={`${styles.teamMemberFigure}`}>
                          <Image src={mohamed} height={460} alt="" className="img-responsive rounded"/>
                          <figcaption className={`${styles.figCaption} text-center`}>
                           <div className='mt-5'>
                              <p className='fs-3' data-trans="MsJihadMohamed">Ms. Jihad Mohamed</p>
                              <p className='fs-5' data-trans="ChiefOperationsOfficerCFO">Chief Operations Officer (CFO)</p>
                            </div>
                            <div className='d-flex justify-content-end'>
                            <Image src={uae}  className={`${styles.flagImage}`} />
                            </div>
                          </figcaption>
                        </figure>
                    </div>
                </a>
            </Link>
          </div>
          <div className="col-xl-4 col-md-6 d-flex" data-aos="zoom-in" data-aos-delay="200">
              <Link href={`https://www.linkedin.com/in/ahmed-hemdan-695408201/`} target="_blank" rel="noreferrer">
                <a>
                    <div className={`${styles.teamMember2}`}>
                        <figure className={`${styles.teamMemberFigure}`}>
                          <Image src={mohamed} height={460} alt="" className="img-responsive rounded"/>
                          <figcaption className={`${styles.figCaption} text-center`}>
                            <div className='mt-5'>
                                <p className='fs-3' data-trans="MrsEsraaAbdelHafez">Mrs. Esraa Abdel Hafez</p>
                                <p className='fs-5' data-trans="HumanResourcesDirector">Human Resources Director</p>
                            </div>
                            <div className='d-flex justify-content-end'>
                            <Image src={egypt}  className={`${styles.flagImage}`} />
                            </div>
                          </figcaption>
                        </figure>
                    </div>
                </a>
            </Link>
          </div>
          <div className="col-xl-4 col-md-6 d-flex" data-aos="zoom-in" data-aos-delay="200">
              <Link href={`https://www.linkedin.com/in/ahmed-hemdan-695408201/`} target="_blank" rel="noreferrer">
                <a>
                    <div className={`${styles.teamMember2}`}>
                        <figure className={`${styles.teamMemberFigure}`}>
                          <Image src={mohamed} height={460} alt="" className="img-responsive rounded"/>
                          <figcaption className={`${styles.figCaption} text-center`}>
                            <div className='mt-5'>
                                <p className='fs-3' data-trans="DrAhmedBedawi">Dr. Ahmed Bedawi</p>
                                <p className='fs-5' data-trans="TrainingAcademyManager">Training Academy Manager</p>
                              </div>
                              <div className='d-flex justify-content-end'>
                            <Image src={qater}  className={`${styles.flagImage}`} />
                            </div>
                          </figcaption>
                        </figure>
                    </div>
                </a>
            </Link>
          </div>
          <div className="col-xl-4 col-md-6 d-flex" data-aos="zoom-in" data-aos-delay="200">
              <Link href={`https://www.linkedin.com/in/ahmed-hemdan-695408201/`} target="_blank" rel="noreferrer">
                <a>
                    <div className={`${styles.teamMember2}`}>
                        <figure className={`${styles.teamMemberFigure}`}>
                          <Image src={mohamed} height={460} alt="" className="img-responsive rounded"/>
                          <figcaption className={`${styles.figCaption} text-center`}>
                            <div className='mt-5'>
                                <p className='fs-3' data-trans="ProfDrAbdelrhamanFarahat">Prof. Dr. Abdelrhaman Farahat</p>
                                <p className='fs-5' data-trans="TechnicalSchemeManager">Technical Scheme Manager</p>
                              </div>
                              <div className='d-flex justify-content-end'>
                            <Image src={ksa}  className={`${styles.flagImage}`} />
                            </div>
                          </figcaption>
                        </figure>
                    </div>
                </a>
            </Link>
          </div>
          <div className="col-xl-4 col-md-6 d-flex" data-aos="zoom-in" data-aos-delay="200">
              <Link href={`https://www.linkedin.com/in/ahmed-hemdan-695408201/`} target="_blank" rel="noreferrer">
                <a>
                    <div className={`${styles.teamMember2}`}>
                        <figure className={`${styles.teamMemberFigure}`}>
                          <Image src={mohamed} height={460} alt="" className="img-responsive rounded"/>
                          <figcaption className={`${styles.figCaption} text-center`}>
                           <div className='mt-5'>
                              <p className='fs-3' data-trans="ProfDrMagdyElMahdy">Prof Dr. Magdy El Mahdy</p>
                              <p className='fs-5' data-trans="ChiefInspectorOfficerCIO">Chief Inspector Officer (CIO)</p>
                            </div>
                            <div className='d-flex justify-content-end'>
                            <Image src={egypt}  className={`${styles.flagImage}`} />
                            </div>
                          </figcaption>
                        </figure>
                    </div>
                </a>
            </Link>
          </div>
          <div className="col-xl-4 col-md-6 d-flex" data-aos="zoom-in" data-aos-delay="200">
              <Link href={`https://www.linkedin.com/in/ahmed-hemdan-695408201/`} target="_blank" rel="noreferrer">
                <a>
                    <div className={`${styles.teamMember2}`}>
                        <figure className={`${styles.teamMemberFigure}`}>
                          <Image src={mohamed} height={460} alt="" className="img-responsive rounded"/>
                          <figcaption className={`${styles.figCaption} text-center`}>
                           <div className='mt-5'>
                              <p className='fs-3' data-trans="DrFred">Dr. Fred</p>
                              <p className='fs-5' data-trans="InformationSecurityBCMDirector">Information Security & BCM Director</p>
                            </div>
                            <div className='d-flex justify-content-end'>
                            <Image src={bahreen}  className={`${styles.flagImage}`} />
                            </div>
                          </figcaption>
                        </figure>
                    </div>
                </a>
            </Link>
          </div>
          <div className="col-xl-4 col-md-6 d-flex" data-aos="zoom-in" data-aos-delay="200">
              <Link href={`https://www.linkedin.com/in/ahmed-hemdan-695408201/`} target="_blank" rel="noreferrer">
                <a>
                    <div className={`${styles.teamMember2}`}>
                        <figure className={`${styles.teamMemberFigure}`}>
                          <Image src={mohamed} height={460} alt="" className="img-responsive rounded"/>
                          <figcaption className={`${styles.figCaption} text-center`}>
                          <div className='mt-5'>
                              <p className='fs-3'data-trans="ShehabAlAref">Shehab Al Aref</p>
                              <p className='fs-5'data-trans="DigitalTransformationDirector">Digital Transformation Director</p>
                            </div>
                            <div className='d-flex justify-content-end'>
                            <Image src={kuwiat}  className={`${styles.flagImage}`} />
                            </div>
                          </figcaption>
                        </figure>
                    </div>
                </a>
            </Link>
          </div>
          <div className="col-xl-4 col-md-6 d-flex" data-aos="zoom-in" data-aos-delay="200">
              <Link href={`https://www.linkedin.com/in/ahmed-hemdan-695408201/`} target="_blank" rel="noreferrer">
                <a>
                    <div className={`${styles.teamMember2}`}>
                        <figure className={`${styles.teamMemberFigure}`}>
                          <Image src={mohamed} height={460} alt="" className="img-responsive rounded"/>
                          <figcaption className={`${styles.figCaption} text-center`}>
                            <div className='mt-5'>
                            <p className='fs-3'data-trans="DinaMohi">Dina Mohi</p>
                            <p className='fs-5'data-trans="ArchitecturalGraphicDirector">Architectural Graphic Director</p>
                            </div>
                            <div className='d-flex justify-content-end'>
                            <Image src={uae}  className={`${styles.flagImage}`} />
                            </div>
                          </figcaption>
                        </figure>
                    </div>
                </a>
            </Link>
          </div>
            </div>
            </div>
    </section>
    {/* <!-- End Team Section --> */}
    </>
  )
}

export default BoardOfDirectors