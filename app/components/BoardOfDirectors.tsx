import React from 'react'
import styles from '../styles/BoardOfDirectors.module.css'
import Link from 'next/link'
import Image from 'next/image'
// import ahmed_mahrous from '../public/images/borad_of_directors/Roles/01 Ahmed Mahrous/Ahmed Mahrous.jpeg'
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
                              <Link href={'/about/our-team/ahmed_badawy'}>
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
                              </Link>
                        </div>  
                        <div className="col-xl-4 col-md-6 d-flex" >
                            <Link href={'/about/our-team/mostafa_farag'}>
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
                            </Link>
                        </div>
                        <div className="col-xl-4 col-md-6 d-flex" >
                            <Link href={'/about/our-team/abdelrahman_farahat'}>
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
                              </Link>
                        </div>
                        <div className="col-xl-4 col-md-6 d-flex" >
                              <Link href={'/about/our-team/ahmed_hammad'}>
                                  <div className={`${styles.teamMember2}`}>
                                      <figure className={`${styles.teamMemberFigure}`}>
                                        <Image src={hammad} height={500} width={400} alt="" className={`${styles.imgStyle}`}/>
                                          <figcaption className={`${styles.figCaption} text-center`}>
                                            <div className='mt-5'>
                                                <p className='fs-3' data-trans="AhmedHammad">Dr.Ahmed Hammad</p>
                                                <p className='fs-5' data-trans="QualityFoodSafetyConsultant"></p>
                                            </div>
                                              <div className='d-flex justify-content-end'>
                                                  {/* <Image src={qater} alt="" className={`${styles.flagImage}`} /> */}
                                              </div>
                                          </figcaption>
                                      </figure>
                                  </div>
                              </Link>
                        </div>
                        <div className="col-xl-4 col-md-6 d-flex" >
                            <Link href={'/about/our-team/jihad_mohamed'}>
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
                            </Link>
                        </div>
                        <div className="col-xl-4 col-md-6 d-flex" >
                              <Link href={'/about/our-team/shreif_galal'}>
                                  <div className={`${styles.teamMember2}`}>
                                      <figure className={`${styles.teamMemberFigure}`}>
                                        <Image src={sheif} height={500} width={400} alt="" className={`${styles.imgStyle}`}/>
                                          <figcaption className={`${styles.figCaption} text-center`}>
                                            <div className='mt-5'>
                                                <p className='fs-3' data-trans="DrShriefGalal"></p>
                                                <p className='fs-5' data-trans="QualityFoodSafetyConsultant"></p>
                                            </div>
                                              <div className='d-flex justify-content-end'>
                                                  {/* <Image src={qater} alt="" className={`${styles.flagImage}`} /> */}
                                              </div>
                                          </figcaption>
                                      </figure>
                                  </div>
                              </Link>
                        </div>
                        <div className="col-xl-4 col-md-6 d-flex" >
                              <Link href={'/about/our-team/mai-tag'}>
                                  <div className={`${styles.teamMember2}`}>
                                      <figure className={`${styles.teamMemberFigure}`}>
                                        <Image src={mai} height={500} width={400} alt="" className={`${styles.imgStyle}`}/>
                                          <figcaption className={`${styles.figCaption} text-center`}>
                                            <div className='mt-5'>
                                                <p className='fs-3' data-trans="DrMaiTag"></p>
                                                <p className='fs-5' data-trans="QualityFoodSafetyConsultant"></p>
                                            </div>
                                              <div className='d-flex justify-content-end'>
                                                  {/* <Image src={qater} alt="" className={`${styles.flagImage}`} /> */}
                                              </div>
                                          </figcaption>
                                      </figure>
                                  </div>
                              </Link>
                        </div>
                        <div className="col-xl-4 col-md-6 d-flex" >
                              <Link href={'/about/our-team/mohamed_hossam'}>
                                  <div className={`${styles.teamMember2}`}>
                                      <figure className={`${styles.teamMemberFigure}`}>
                                        <Image src={hossam} height={500} width={400} alt="" className={`${styles.imgStyle}`}/>
                                          <figcaption className={`${styles.figCaption} text-center`}>
                                            <div className='mt-5'>
                                                <p className='fs-3' data-trans="DrMohamedHossam"></p>
                                                <p className='fs-5' data-trans="QualityFoodSafetyConsultant"></p>
                                            </div>
                                              <div className='d-flex justify-content-end'>
                                                  {/* <Image src={qater} alt="" className={`${styles.flagImage}`} /> */}
                                              </div>
                                          </figcaption>
                                      </figure>
                                  </div>
                              </Link>
                        </div>
                        <div className="col-xl-4 col-md-6 d-flex" >
                              <Link href={'/about/our-team/ahmed_abdo'}>
                                  <div className={`${styles.teamMember2}`}>
                                      <figure className={`${styles.teamMemberFigure}`}>
                                        <Image src={ahmed_abdo} height={500} width={400} alt="" className={`${styles.imgStyle}`}/>
                                          <figcaption className={`${styles.figCaption} text-center`}>
                                            <div className='mt-5'>
                                                <p className='fs-3' data-trans="DrAhmedAbdo"></p>
                                                <p className='fs-5' data-trans="QualityFoodSafetyConsultant"></p>
                                            </div>
                                              <div className='d-flex justify-content-end'>
                                                  {/* <Image src={qater} alt="" className={`${styles.flagImage}`} /> */}
                                              </div>
                                          </figcaption>
                                      </figure>
                                  </div>
                              </Link>
                        </div>
                        <div className="col-xl-4 col-md-6 d-flex" >
                              <Link href={'/about/our-team/ahmed_abdelaziem'}>
                                  <div className={`${styles.teamMember2}`}>
                                      <figure className={`${styles.teamMemberFigure}`}>
                                        <Image src={ahmed_abdelazim} height={500} width={400} alt="" className={`${styles.imgStyle}`}/>
                                          <figcaption className={`${styles.figCaption} text-center`}>
                                            <div className='mt-5'>
                                                <p className='fs-3' data-trans="DrAhmedAbdelaziem"></p>
                                                <p className='fs-5' data-trans="QualityFoodSafetyConsultant"></p>
                                            </div>
                                              <div className='d-flex justify-content-end'>
                                                  {/* <Image src={qater} alt="" className={`${styles.flagImage}`} /> */}
                                              </div>
                                          </figcaption>
                                      </figure>
                                  </div>
                              </Link>
                        </div>
                        <div className="col-xl-4 col-md-6 d-flex" >
                              <Link href={'/about/our-team/mohamed_mossad'}>
                                  <div className={`${styles.teamMember2}`}>
                                      <figure className={`${styles.teamMemberFigure}`}>
                                        <Image src={mossad} height={500} width={400} alt="" className={`${styles.imgStyle}`}/>
                                          <figcaption className={`${styles.figCaption} text-center`}>
                                            <div className='mt-5'>
                                                <p className='fs-3' data-trans="DrMohamedMosaad"></p>
                                                <p className='fs-5' data-trans="QualityFoodSafetyConsultant"></p>
                                            </div>
                                              <div className='d-flex justify-content-end'>
                                                  {/* <Image src={qater} alt="" className={`${styles.flagImage}`} /> */}
                                              </div>
                                          </figcaption>
                                      </figure>
                                  </div>
                              </Link>
                        </div>
                        <div className="col-xl-4 col-md-6 d-flex" >
                              <Link href={'/about/our-team/kossai'}>
                                  <div className={`${styles.teamMember2}`}>
                                      <figure className={`${styles.teamMemberFigure}`}>
                                        <Image src={kossai} height={500} width={400} alt="" className={`${styles.imgStyle}`}/>
                                          <figcaption className={`${styles.figCaption} text-center`}>
                                            <div className='mt-5'>
                                                <p className='fs-3' data-trans="DrKossai"></p>
                                                <p className='fs-5' data-trans="QualityFoodSafetyConsultant"></p>
                                            </div>
                                              <div className='d-flex justify-content-end'>
                                                  {/* <Image src={qater} alt="" className={`${styles.flagImage}`} /> */}
                                              </div>
                                          </figcaption>
                                      </figure>
                                  </div>
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