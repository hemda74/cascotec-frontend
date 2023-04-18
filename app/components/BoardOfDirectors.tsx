import React from 'react'
import styles from '../styles/BoardOfDirectors.module.css'
import mohamed from '../public/images/borad_of_directors/directors/mohamedhamdy.jpg'
import Link from 'next/link'
import Image from 'next/image'
import ahmed_mahrous from '../public/images/borad_of_directors/Roles/01 Ahmed Mahrous/Ahmed Mahrous.jpeg'
import mostafa from '../public/images/borad_of_directors/Roles/03 Mostafa Farg/Mostafa Frag.jpeg'
import jihad from '../public/images/borad_of_directors/Roles/06 Jihad Mohamed/Jihad.jpeg'
import abdelrahman from "../public/images/borad_of_directors/Roles/04 Dr Abdelrahamn Faraht/farahat.jpeg"
import badwy from "../public/images/borad_of_directors/Roles/02 Dr. Ahmed Bedawi/Ahmed Bedawi.png"
import hammad from "../public/images/borad_of_directors/Roles/05 Dr Ahmed Hammad/ahmed hammad.jpg"
import sheif from "../public/images/borad_of_directors/Roles/07 Dr Sheif Galal/sheif.png"
import hossam from "../public/images/borad_of_directors/Roles/09 Dr Mohamed Hossam/Mohamed Hossam.jpeg"
import mai from "../public/images/borad_of_directors/Roles/08 Dr Mai Tag/mai.jpg"
import kossai from "../public/images/borad_of_directors/Roles/13 Dr Kossai/kossai.jpg"
import ahmed_abdo from "../public/images/borad_of_directors/Roles/10 Dr Ahmed Abdo/Ahmed Abdo.jpeg"
import ahmed_abdelazim from "../public/images/borad_of_directors/Roles/11 Dr Ahmed Abdelaziem/Ahmed Abelaziem.jpeg"
import mossad from "../public/images/borad_of_directors/Roles/12 Dr Mohamed Mossad/Mossad.jpeg"
// import uae from '../public/images/borad_of_directors/directors_flags/uae.png'
// import qater from '../public/images/borad_of_directors/directors_flags/qater.png'
// import ksa from '../public/images/borad_of_directors/directors_flags/ksa.png'
// import egypt from '../public/images/borad_of_directors/directors_flags/egypt.png'
// import bahreen from '../public/images/borad_of_directors/directors_flags/bahreen.png'
// import kuwiat from '../public/images/borad_of_directors/directors_flags/kuwait.png'
// import oman from '../public/images/borad_of_directors/directors_flags/oman.png'
const BoardOfDirectors = () => {
  return (
    <>
        <section className={`${styles.boardOfDirc}`}>
            <div className="container">
                <div className="text-center">
                    <div className={`container mb-4`}>
                        <Link href={"/"}><a className="text-white fw-semibold mb-4" data-trans="HomeNav">{`Home`}</a></Link>
                        <Link href={"/about"}><a className="text-white fw-semibold mb-4" data-trans="AboutCascoNav2">{` > About CASCO`}</a></Link>
                        <Link href={"/about/our-team"}><a className="text-white fw-semibold mb-4" data-trans="BoardOfDirectorsNav2" >{` > Our Team`}</a></Link>
                    </div>
                    <h2 className="text-white fw-bold mb-5" data-trans="BoardofDirectors">Our Team</h2>
                </div>
                <div className={`container ${styles.imgsHolder}`}>
                    <div className="row col-lg-9 m-auto justify-content-center">
                        <div className="col-xl-4 col-md-6 d-flex" >
                                <Link href={'/about/director-general'}>
                                    <div className={`${styles.teamMember2}`}>
                                        <figure className={`${styles.teamMemberFigure}`}>
                                          <Image src={ahmed_mahrous} height={500} width={400} alt="" className={`${styles.imgStyle}`}/>
                                          <figcaption className={`${styles.figCaption} text-center`}>
                                              <div className='mt-5'>
                                                  <p className='fs-3' data-trans="MrAhmedMahrous">Mr. Ahmed Mahrous</p>
                                                  <p className='fs-5' data-trans='BusinessDevelopmentManager'>Business Development Manager</p>
                                              </div>
                                              <div className='d-flex justify-content-end'>
                                                  {/* <Image src={oman} alt="" className={`${styles.flagImage}`} /> */}
                                              </div>
                                          </figcaption>
                                        </figure>
                                    </div>
                                </Link>
                        </div>
                        <div className="col-xl-4 col-md-6 d-flex" >
                              <a>
                                  <div className={`${styles.teamMember2}`}>
                                      <figure className={`${styles.teamMemberFigure}`}>
                                        <Image src={badwy} height={500} width={400} alt="" className={`${styles.imgStyle}`}/>
                                          <figcaption className={`${styles.figCaption} text-center`}>
                                            <div className='mt-5'>
                                                <p className='fs-3' data-trans="DrAhmedBedawi">Dr. Ahmed Bedawi</p>
                                                <p className='fs-5' data-trans="TrainingAcademyManager">Training Academy Manager</p>
                                            </div>
                                              <div className='d-flex justify-content-end'>
                                                  {/* <Image src={qater} alt="" className={`${styles.flagImage}`} /> */}
                                              </div>
                                          </figcaption>
                                      </figure>
                                  </div>
                              </a>

                        </div>  
                        <div className="col-xl-4 col-md-6 d-flex" >
                            <a>
                                <div className={`${styles.teamMember2}`}>
                                    <figure className={`${styles.teamMemberFigure}`}>
                                        <Image src={mostafa} height={500} width={400} alt="" className={`${styles.imgStyle}`}/>
                                        <figcaption className={`${styles.figCaption} text-center`}>
                                            <div className='mt-5'>
                                                <p className='fs-3' data-trans="MrMostafaFarag">Mr. Mostafa Farag</p>
                                                <p className='fs-5' data-trans="ChiefFinancialOfficerCFO">Chief Financial Officer (CFO)</p>
                                            </div>
                                            <div className='d-flex justify-content-end'>
                                                {/* <Image src={ksa} alt="" className={`${styles.flagImage}`} /> */}
                                            </div>
                                        </figcaption>
                                    </figure>
                                </div>
                            </a>
                        </div>
                        <div className="col-xl-4 col-md-6 d-flex" >
                              <a>
                                  <div className={`${styles.teamMember2}`}>
                                      <figure className={`${styles.teamMemberFigure}`}>
                                          <Image src={abdelrahman} height={500} width={400} alt="" className={`${styles.imgStyle}`}/>
                                          <figcaption className={`${styles.figCaption} text-center`}>
                                            <div className='mt-5'>
                                                <p className='fs-3' data-trans="ProfDrAbdelrhamanFarahat">Prof. Dr. Abdelrhaman Farahat</p>
                                                <p className='fs-5' data-trans="TechnicalSchemeManager">Technical Scheme Manager</p>
                                            </div>
                                            <div className='d-flex justify-content-end'>
                                                {/* <Image src={ksa} alt="" className={`${styles.flagImage}`} /> */}
                                            </div>
                                          </figcaption>
                                      </figure>
                                  </div>
                              </a>
                        </div>
                        <div className="col-xl-4 col-md-6 d-flex" >
                              <a>
                                  <div className={`${styles.teamMember2}`}>
                                      <figure className={`${styles.teamMemberFigure}`}>
                                        <Image src={hammad} height={500} width={400} alt="" className={`${styles.imgStyle}`}/>
                                          <figcaption className={`${styles.figCaption} text-center`}>
                                            <div className='mt-5'>
                                                <p className='fs-3'>Dr.Ahmed Hammad</p>
                                                <p className='fs-5'>Need Title</p>
                                            </div>
                                              <div className='d-flex justify-content-end'>
                                                  {/* <Image src={qater} alt="" className={`${styles.flagImage}`} /> */}
                                              </div>
                                          </figcaption>
                                      </figure>
                                  </div>
                              </a>
                        </div>
                        <div className="col-xl-4 col-md-6 d-flex" >
                            <a>
                                <div className={`${styles.teamMember2}`}>
                                    <figure className={`${styles.teamMemberFigure}`}>
                                    <Image src={jihad} height={500} width={400} alt="" className={`${styles.imgStyle}`}/>
                                    <figcaption className={`${styles.figCaption} text-center`}>
                                        <div className='mt-5'>
                                        <p className='fs-3' data-trans="MsJihadMohamed">Ms. Jihad Mohamed</p>
                                        <p className='fs-5' data-trans="ChiefOperationsOfficerCFO">Chief Operations Officer (CFO)</p>
                                        </div>
                                        <div className='d-flex justify-content-end'>
                                        {/* <Image src={uae} alt="" className={`${styles.flagImage}`} /> */}
                                        </div>
                                    </figcaption>
                                    </figure>
                                </div>
                            </a>
                        </div>
                        <div className="col-xl-4 col-md-6 d-flex" >
                              <a>
                                  <div className={`${styles.teamMember2}`}>
                                      <figure className={`${styles.teamMemberFigure}`}>
                                        <Image src={sheif} height={500} width={400} alt="" className={`${styles.imgStyle}`}/>
                                          <figcaption className={`${styles.figCaption} text-center`}>
                                            <div className='mt-5'>
                                                <p className='fs-3'>Dr .Shrief Galal </p>
                                                <p className='fs-5'>Need Title</p>
                                            </div>
                                              <div className='d-flex justify-content-end'>
                                                  {/* <Image src={qater} alt="" className={`${styles.flagImage}`} /> */}
                                              </div>
                                          </figcaption>
                                      </figure>
                                  </div>
                              </a>
                        </div>
                        <div className="col-xl-4 col-md-6 d-flex" >
                              <a>
                                  <div className={`${styles.teamMember2}`}>
                                      <figure className={`${styles.teamMemberFigure}`}>
                                        <Image src={mai} height={500} width={400} alt="" className={`${styles.imgStyle}`}/>
                                          <figcaption className={`${styles.figCaption} text-center`}>
                                            <div className='mt-5'>
                                                <p className='fs-3'>Dr.Mai Tag</p>
                                                <p className='fs-5'>Need Title</p>
                                            </div>
                                              <div className='d-flex justify-content-end'>
                                                  {/* <Image src={qater} alt="" className={`${styles.flagImage}`} /> */}
                                              </div>
                                          </figcaption>
                                      </figure>
                                  </div>
                              </a>
                        </div>
                        <div className="col-xl-4 col-md-6 d-flex" >
                              <a>
                                  <div className={`${styles.teamMember2}`}>
                                      <figure className={`${styles.teamMemberFigure}`}>
                                        <Image src={hossam} height={500} width={400} alt="" className={`${styles.imgStyle}`}/>
                                          <figcaption className={`${styles.figCaption} text-center`}>
                                            <div className='mt-5'>
                                                <p className='fs-3'>Dr.Mohamed Hossam</p>
                                                <p className='fs-5'>Need Title</p>
                                            </div>
                                              <div className='d-flex justify-content-end'>
                                                  {/* <Image src={qater} alt="" className={`${styles.flagImage}`} /> */}
                                              </div>
                                          </figcaption>
                                      </figure>
                                  </div>
                              </a>
                        </div>
                        <div className="col-xl-4 col-md-6 d-flex" >
                              <a>
                                  <div className={`${styles.teamMember2}`}>
                                      <figure className={`${styles.teamMemberFigure}`}>
                                        <Image src={ahmed_abdo} height={500} width={400} alt="" className={`${styles.imgStyle}`}/>
                                          <figcaption className={`${styles.figCaption} text-center`}>
                                            <div className='mt-5'>
                                                <p className='fs-3'>Dr.Ahmed Abdo</p>
                                                <p className='fs-5'>Need Title</p>
                                            </div>
                                              <div className='d-flex justify-content-end'>
                                                  {/* <Image src={qater} alt="" className={`${styles.flagImage}`} /> */}
                                              </div>
                                          </figcaption>
                                      </figure>
                                  </div>
                              </a>
                        </div>
                        <div className="col-xl-4 col-md-6 d-flex" >
                              <a>
                                  <div className={`${styles.teamMember2}`}>
                                      <figure className={`${styles.teamMemberFigure}`}>
                                        <Image src={ahmed_abdelazim} height={500} width={400} alt="" className={`${styles.imgStyle}`}/>
                                          <figcaption className={`${styles.figCaption} text-center`}>
                                            <div className='mt-5'>
                                                <p className='fs-3'>Dr.Ahmed Abdelaziem</p>
                                                <p className='fs-5'>Need Title</p>
                                            </div>
                                              <div className='d-flex justify-content-end'>
                                                  {/* <Image src={qater} alt="" className={`${styles.flagImage}`} /> */}
                                              </div>
                                          </figcaption>
                                      </figure>
                                  </div>
                              </a>
                        </div>
                        <div className="col-xl-4 col-md-6 d-flex" >
                              <a>
                                  <div className={`${styles.teamMember2}`}>
                                      <figure className={`${styles.teamMemberFigure}`}>
                                        <Image src={mossad} height={500} width={400} alt="" className={`${styles.imgStyle}`}/>
                                          <figcaption className={`${styles.figCaption} text-center`}>
                                            <div className='mt-5'>
                                                <p className='fs-3'>Dr.Mohamed Mosaad</p>
                                                <p className='fs-5'>Need Title</p>
                                            </div>
                                              <div className='d-flex justify-content-end'>
                                                  {/* <Image src={qater} alt="" className={`${styles.flagImage}`} /> */}
                                              </div>
                                          </figcaption>
                                      </figure>
                                  </div>
                              </a>
                        </div>
                        <div className="col-xl-4 col-md-6 d-flex" >
                              <a>
                                  <div className={`${styles.teamMember2}`}>
                                      <figure className={`${styles.teamMemberFigure}`}>
                                        <Image src={kossai} height={500} width={400} alt="" className={`${styles.imgStyle}`}/>
                                          <figcaption className={`${styles.figCaption} text-center`}>
                                            <div className='mt-5'>
                                                <p className='fs-3'>Dr.Kossai</p>
                                                <p className='fs-5'>Need Title</p>
                                            </div>
                                              <div className='d-flex justify-content-end'>
                                                  {/* <Image src={qater} alt="" className={`${styles.flagImage}`} /> */}
                                              </div>
                                          </figcaption>
                                      </figure>
                                  </div>
                              </a>
                        </div>
                        <div className="col-xl-4 col-md-6 d-flex" >
                              <a>
                                  <div className={`${styles.teamMember2}`}>
                                      <figure className={`${styles.teamMemberFigure}`}>
                                            <Image src={mohamed} height={500} width={400} alt="" className={`${styles.imgStyle}`}/>
                                            <figcaption className={`${styles.figCaption} text-center`}>
                                              <div className='mt-5'>
                                                  <p className='fs-3' data-trans="ProfDrMagdyElMahdy">Prof Dr. Magdy El Mahdy</p>
                                                  <p className='fs-5' data-trans="ChiefInspectorOfficerCIO">Chief Inspector Officer (CIO)</p>
                                              </div>
                                              <div className='d-flex justify-content-end'>
                                                  {/* <Image src={egypt} alt="" className={`${styles.flagImage}`} /> */}
                                              </div>
                                            </figcaption>
                                      </figure>
                                  </div>
                              </a>
                        </div>
                        <div className="col-xl-4 col-md-6 d-flex" >
                                <a>
                                    <div className={`${styles.teamMember2}`}>
                                        <figure className={`${styles.teamMemberFigure}`}>
                                            <Image src={mohamed} height={500} width={400} alt="" className={`${styles.imgStyle}`}/>
                                            <figcaption className={`${styles.figCaption} text-center`}>
                                                <div className='mt-5'>
                                                    <p className='fs-3' data-trans="DrFred">Dr. Fred</p>
                                                    <p className='fs-5' data-trans="InformationSecurityBCMDirector">Information Security & BCM Director</p>
                                                </div>
                                                <div className='d-flex justify-content-end'>
                                                    {/* <Image src={bahreen} alt=""  className={`${styles.flagImage}`} /> */}
                                                </div>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </a>

                        </div>
                        <div className="col-xl-4 col-md-6 d-flex" >
                                <a>
                                    <div className={`${styles.teamMember2}`}>
                                        <figure className={`${styles.teamMemberFigure}`}>
                                            <Image src={mohamed} height={500} width={400} alt="" className={`${styles.imgStyle}`}/>
                                            <figcaption className={`${styles.figCaption} text-center`}>
                                                <div className='mt-5'>
                                                    <p className='fs-3'data-trans="ShehabAlAref">Shehab Al Aref</p>
                                                    <p className='fs-5'data-trans="DigitalTransformationDirector">Digital Transformation Director</p>
                                                </div>
                                                <div className='d-flex justify-content-end'>
                                                    {/* <Image src={kuwiat} alt="" className={`${styles.flagImage}`} /> */}
                                                </div>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </a>
                        </div>
                        <div className="col-xl-4 col-md-6 d-flex" >
                                <a>
                                    <div className={`${styles.teamMember2}`}>
                                        <figure className={`${styles.teamMemberFigure}`}>
                                            <Image src={mohamed} height={500} width={400} alt="" className={`${styles.imgStyle}`}/>
                                            <figcaption className={`${styles.figCaption} text-center`}>
                                                <div className='mt-5'>
                                                    <p className='fs-3'data-trans="DinaMohi">Dina Mohi</p>
                                                    <p className='fs-5'data-trans="ArchitecturalGraphicDirector">Architectural Graphic Director</p>
                                                </div>
                                                <div className='d-flex justify-content-end'>
                                                    {/* <Image src={uae}  alt="" className={`${styles.flagImage}`} /> */}
                                                </div>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </a>
                        </div>
                        <div className="col-xl-4 col-md-6 d-flex">
                              <a>
                                  <div className={`${styles.teamMember2}`}>
                                      <figure className={`${styles.teamMemberFigure}`}>
                                        <Image src={mohamed} height={500} width={400} alt="" className={`${styles.imgStyle}`}/>
                                        <figcaption className={`${styles.figCaption} text-center`}>
                                            <div className='mt-5'>
                                                <p className='fs-3' data-trans="MrsEsraaAbdelHafez">Mrs. Esraa Abdel Hafez</p>
                                                <p className='fs-5' data-trans="HumanResourcesDirector">Human Resources Director</p>
                                            </div>
                                            <div className='d-flex justify-content-end'>
                                                {/* <Image src={egypt} alt=""  className={`${styles.flagImage}`} /> */}
                                            </div>
                                        </figcaption>
                                      </figure>
                                  </div>
                              </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default BoardOfDirectors