import React from 'react'
import styles from '../styles/BoardOfDirectors.module.css'
import mohamed from '../public/imagess/mohamedhamdy.jpg'
import Link from 'next/link'
import Image from 'next/image'
import uae from '../public/imagess/accretied flags/uae.png'
import qater from '../public/imagess/accretied flags/qater.png'
import ksa from '../public/imagess/accretied flags/ksa.png'
import egypt from '../public/imagess/accretied flags/egypt.png'
import bahreen from '../public/imagess/accretied flags/bahreen.png'
import kuwiat from '../public/imagess/accretied flags/kuwait.png'
import oman from '../public/imagess/accretied flags/oman.png'
const BoardOfDirectors = () => {
  return (
    <>
   <section id="team" className={`${styles.boardOfDirc}`}>
      <div  className="container" data-aos="fade-up">
        <div className="text-center">
        <div className={`container mb-4`}>
                    <Link href={"/"}><a className="text-white fw-semibold mb-4">{`Home`}</a></Link>
                    <Link href={"/about"}><a className="text-white fw-semibold mb-4">{` > About CASCO`}</a></Link>
                    <Link href={"/board-of-directors"}><a className="text-white fw-semibold mb-4">{` > Board Of Board Of Directors`}</a></Link>
                </div>
          <h2 className="text-white fw-bold mb-5" data-trans="BoardofDirectors">Board of Directors</h2>
          </div>
          <div className={`container ${styles.imgsHolder}`}>
              <div className="row gy-5 col-lg-9 m-auto justify-content-center">
          <div className="col-xl-4 col-md-6 d-flex" >
              <Link href={`https://www.linkedin.com/in/ahmed-hemdan-695408201/`} target="_blank" rel="noreferrer">
                <a>
                    <div className={`${styles.teamMember2}`}>
                        <figure className={`${styles.teamMemberFigure}`}>
                          <Image src={mohamed} height={500} alt="" className="img-responsive rounded"/>
                          <figcaption className={`${styles.figCaption} text-center`}>
                            <div className='mt-5'>
                              <p className='fs-3' data-trans="MrAhmedMahrous">Mr. Ahmed Mahrous</p>
                              <p className='fs-5' data-trans='BusinessDevelopmentManager'>Business Development Manager</p>
                            </div>
                            <div className='d-flex justify-content-end'>
                            <Image src={oman} alt="" className={`${styles.flagImage}`} />
                            </div>
                          </figcaption>
                        </figure>
                    </div>
                </a>
            </Link>
          </div>
          <div className="col-xl-4 col-md-6 d-flex" >
              <Link href={`https://www.linkedin.com/in/ahmed-hemdan-695408201/`} target="_blank" rel="noreferrer">
                <a>
                    <div className={`${styles.teamMember2}`}>
                        <figure className={`${styles.teamMemberFigure}`}>
                          <Image src={mohamed} height={500} alt="" className="img-responsive rounded"/>
                          <figcaption className={`${styles.figCaption} text-center`}>
                            <div className='mt-5'>
                              <p className='fs-3' data-trans="MrMostafaFarag">Mr. Mostafa Farag</p>
                              <p className='fs-5' data-trans="ChiefFinancialOfficerCFO">Chief Financial Officer (CFO)</p>
                            </div>
                            <div className='d-flex justify-content-end'>
                            <Image src={ksa} alt="" className={`${styles.flagImage}`} />
                            </div>
                          </figcaption>
                        </figure>
                    </div>
                </a>
            </Link>
          </div>
          <div className="col-xl-4 col-md-6 d-flex" >
              <Link href={`https://www.linkedin.com/in/ahmed-hemdan-695408201/`} target="_blank" rel="noreferrer">
                <a>
                    <div className={`${styles.teamMember2}`}>
                        <figure className={`${styles.teamMemberFigure}`}>
                          <Image src={mohamed} height={500} alt="" className="img-responsive rounded"/>
                          <figcaption className={`${styles.figCaption} text-center`}>
                           <div className='mt-5'>
                              <p className='fs-3' data-trans="MsJihadMohamed">Ms. Jihad Mohamed</p>
                              <p className='fs-5' data-trans="ChiefOperationsOfficerCFO">Chief Operations Officer (CFO)</p>
                            </div>
                            <div className='d-flex justify-content-end'>
                            <Image src={uae} alt="" className={`${styles.flagImage}`} />
                            </div>
                          </figcaption>
                        </figure>
                    </div>
                </a>
            </Link>
          </div>
          <div className="col-xl-4 col-md-6 d-flex">
              <Link href={`https://www.linkedin.com/in/ahmed-hemdan-695408201/`} target="_blank" rel="noreferrer">
                <a>
                    <div className={`${styles.teamMember2}`}>
                        <figure className={`${styles.teamMemberFigure}`}>
                          <Image src={mohamed} height={500} alt="" className="img-responsive rounded"/>
                          <figcaption className={`${styles.figCaption} text-center`}>
                            <div className='mt-5'>
                                <p className='fs-3' data-trans="MrsEsraaAbdelHafez">Mrs. Esraa Abdel Hafez</p>
                                <p className='fs-5' data-trans="HumanResourcesDirector">Human Resources Director</p>
                            </div>
                            <div className='d-flex justify-content-end'>
                            <Image src={egypt} alt=""  className={`${styles.flagImage}`} />
                            </div>
                          </figcaption>
                        </figure>
                    </div>
                </a>
            </Link>
          </div>
          <div className="col-xl-4 col-md-6 d-flex" >
              <Link href={`https://www.linkedin.com/in/ahmed-hemdan-695408201/`} target="_blank" rel="noreferrer">
                <a>
                    <div className={`${styles.teamMember2}`}>
                        <figure className={`${styles.teamMemberFigure}`}>
                          <Image src={mohamed} height={500} alt="" className="img-responsive rounded"/>
                          <figcaption className={`${styles.figCaption} text-center`}>
                            <div className='mt-5'>
                                <p className='fs-3' data-trans="DrAhmedBedawi">Dr. Ahmed Bedawi</p>
                                <p className='fs-5' data-trans="TrainingAcademyManager">Training Academy Manager</p>
                              </div>
                              <div className='d-flex justify-content-end'>
                            <Image src={qater} alt="" className={`${styles.flagImage}`} />
                            </div>
                          </figcaption>
                        </figure>
                    </div>
                </a>
            </Link>
          </div>
          <div className="col-xl-4 col-md-6 d-flex" >
              <Link href={`https://www.linkedin.com/in/ahmed-hemdan-695408201/`} target="_blank" rel="noreferrer">
                <a>
                    <div className={`${styles.teamMember2}`}>
                        <figure className={`${styles.teamMemberFigure}`}>
                          <Image src={mohamed} height={500} alt="" className="img-responsive rounded"/>
                          <figcaption className={`${styles.figCaption} text-center`}>
                            <div className='mt-5'>
                                <p className='fs-3' data-trans="ProfDrAbdelrhamanFarahat">Prof. Dr. Abdelrhaman Farahat</p>
                                <p className='fs-5' data-trans="TechnicalSchemeManager">Technical Scheme Manager</p>
                              </div>
                              <div className='d-flex justify-content-end'>
                            <Image src={ksa} alt="" className={`${styles.flagImage}`} />
                            </div>
                          </figcaption>
                        </figure>
                    </div>
                </a>
            </Link>
          </div>
          <div className="col-xl-4 col-md-6 d-flex" >
              <Link href={`https://www.linkedin.com/in/ahmed-hemdan-695408201/`} target="_blank" rel="noreferrer">
                <a>
                    <div className={`${styles.teamMember2}`}>
                        <figure className={`${styles.teamMemberFigure}`}>
                          <Image src={mohamed} height={500} alt="" className="img-responsive rounded"/>
                          <figcaption className={`${styles.figCaption} text-center`}>
                           <div className='mt-5'>
                              <p className='fs-3' data-trans="ProfDrMagdyElMahdy">Prof Dr. Magdy El Mahdy</p>
                              <p className='fs-5' data-trans="ChiefInspectorOfficerCIO">Chief Inspector Officer (CIO)</p>
                            </div>
                            <div className='d-flex justify-content-end'>
                            <Image src={egypt} alt="" className={`${styles.flagImage}`} />
                            </div>
                          </figcaption>
                        </figure>
                    </div>
                </a>
            </Link>
          </div>
          <div className="col-xl-4 col-md-6 d-flex" >
              <Link href={`https://www.linkedin.com/in/ahmed-hemdan-695408201/`} target="_blank" rel="noreferrer">
                <a>
                    <div className={`${styles.teamMember2}`}>
                        <figure className={`${styles.teamMemberFigure}`}>
                          <Image src={mohamed} height={500} alt="" className="img-responsive rounded"/>
                          <figcaption className={`${styles.figCaption} text-center`}>
                           <div className='mt-5'>
                              <p className='fs-3' data-trans="DrFred">Dr. Fred</p>
                              <p className='fs-5' data-trans="InformationSecurityBCMDirector">Information Security & BCM Director</p>
                            </div>
                            <div className='d-flex justify-content-end'>
                            <Image src={bahreen} alt=""  className={`${styles.flagImage}`} />
                            </div>
                          </figcaption>
                        </figure>
                    </div>
                </a>
            </Link>
          </div>
          <div className="col-xl-4 col-md-6 d-flex" >
              <Link href={`https://www.linkedin.com/in/ahmed-hemdan-695408201/`} target="_blank" rel="noreferrer">
                <a>
                    <div className={`${styles.teamMember2}`}>
                        <figure className={`${styles.teamMemberFigure}`}>
                          <Image src={mohamed} height={500} alt="" className="img-responsive rounded"/>
                          <figcaption className={`${styles.figCaption} text-center`}>
                          <div className='mt-5'>
                              <p className='fs-3'data-trans="ShehabAlAref">Shehab Al Aref</p>
                              <p className='fs-5'data-trans="DigitalTransformationDirector">Digital Transformation Director</p>
                            </div>
                            <div className='d-flex justify-content-end'>
                            <Image src={kuwiat}  alt="" className={`${styles.flagImage}`} />
                            </div>
                          </figcaption>
                        </figure>
                    </div>
                </a>
            </Link>
          </div>
          <div className="col-xl-4 col-md-6 d-flex" >
              <Link href={`https://www.linkedin.com/in/ahmed-hemdan-695408201/`} target="_blank" rel="noreferrer">
                <a>
                    <div className={`${styles.teamMember2}`}>
                        <figure className={`${styles.teamMemberFigure}`}>
                          <Image src={mohamed} height={500} alt="" className="img-responsive rounded"/>
                          <figcaption className={`${styles.figCaption} text-center`}>
                            <div className='mt-5'>
                            <p className='fs-3'data-trans="DinaMohi">Dina Mohi</p>
                            <p className='fs-5'data-trans="ArchitecturalGraphicDirector">Architectural Graphic Director</p>
                            </div>
                            <div className='d-flex justify-content-end'>
                            <Image src={uae}  alt="" className={`${styles.flagImage}`} />
                            </div>
                          </figcaption>
                        </figure>
                    </div>
                </a>
            </Link>
          </div>
              </div>
              </div>
            </div>
    </section>
    </>
  )
}

export default BoardOfDirectors