import React from 'react'
import styles from '../styles/VisualPresentations.module.css'
import Link from 'next/link'
import vp from '../public/imagess/visualpresentations.jpg'
import Image from 'next/image'
import { BsPlayFill } from 'react-icons/bs'
const VisualPresentations= () => {
return(
<>
    <div className={`text-center ${styles.titleWord}`}>
        <div className={`container mb-4`}>
            <Link href={"/"}><a className="text-white fw-semibold mb-4">{`Home`}</a></Link>
            <Link href={"/visual-presentations"}><a className="text-white fw-semibold mb-4">{` > Visual Presentations`}</a></Link>
        </div>
      <h2 className={`text-white fw-bold mb-5 `}>Visual Presentations</h2>
    </div>
    <div className={` container mt-5 mb-5 `}>
        <div className="row gy-5 gx-lg-5 ">
           <div className={`col-lg-10 m-auto row `}>
                <form action="forms/contact.php" method="post" role="form" >
                    <div className=" d-flex justify-content-between">
                        <div className={`col-md-4 col-lg-4 col-sm-6 col-xs-6 form-group ${styles.formGroup}`}>
                          <p>3 Visual presentations</p>
                        </div>
                        <div className={`col-md-4 col-lg-2 col-sm-6 col-xs-6  form-group  ${styles.formGroup}`}>
                          <input type="text" name="name" className={`form-control ${styles.formControl}`} id="name" placeholder="Search..." required/>
                        </div>
                  </div>
              </form>
          </div>
          <div className={`container mt-5`}>
              <div className="row gy-5 gx-lg-5">
                  <div className={`col-lg-10 m-auto row `}>
                      <div className={`col-xl-4 col-lg-6 col-md-6 col-sm-12 ${styles.teamMember2}`}>
                          <div className={``}>
                              <figure className={`${styles.teamMemberFigure} `}>
                                  <div className='p-2 '>
                                      <Image src={vp} layout='fill' alt="" className={`${styles.cardImage} p-3 `}/>
                                  </div>
                                  <figcaption className={`${styles.figCaption}d-flex`}>
                                      <div className={` ${styles.accretiedCaption}`}>
                                          <a href="https://www.youtube.com/embed/tv-8cJfQbqc" target="_blank" rel="noreferrer" >
                                              <span className="text-white">
                                                  <BsPlayFill className='m-0' size={45}/>
                                              </span>
                                          </a>
                                      </div> 
                                  </figcaption>
                              </figure>
                              <span className={`${styles.textCard} fw-bold`}>Introducing the Gulf Accreditation Center from some members</span>
                          </div>
                      </div>
                      <div className={`col-xl-4 col-lg-6 col-md-6 col-sm-12 ${styles.teamMember2}`}>
                          <div className={``}>
                              <figure className={`${styles.teamMemberFigure} `}>
                                  <div className='p-2 '>
                                      <Image src={vp} layout='fill' alt="" className={`${styles.cardImage} p-3 `}/>
                                  </div>
                                  <figcaption className={`${styles.figCaption}d-flex`}>
                                      <div className={` ${styles.accretiedCaption}`}>
                                          <a href="https://www.youtube.com/embed/tv-8cJfQbqc" target="_blank" rel="noreferrer" >
                                              <span className="text-white">
                                                  <BsPlayFill className='m-0' size={45}/>
                                              </span>
                                          </a>
                                      </div> 
                                  </figcaption>
                              </figure>
                              <span className={`${styles.textCard} fw-bold`}>Introducing the Gulf Accreditation Center from some members</span>
                          </div>
                      </div>
                      <div className={`col-xl-4 col-lg-6 col-md-6 col-sm-12 ${styles.teamMember2}`}>
                          <div className={``}>
                              <figure className={`${styles.teamMemberFigure} `}>
                                  <div className='p-2 '>
                                      <Image src={vp} layout='fill' alt="" className={`${styles.cardImage} p-3 `}/>
                                  </div>
                                  <figcaption className={`${styles.figCaption}d-flex`}>
                                      <div className={` ${styles.accretiedCaption}`}>
                                          <a href="https://www.youtube.com/embed/tv-8cJfQbqc" target="_blank" rel="noreferrer" >
                                              <span className="text-white">
                                                  <BsPlayFill className='m-0' size={45}/>
                                              </span>
                                          </a>
                                      </div> 
                                  </figcaption>
                              </figure>
                              <span className={`${styles.textCard} fw-bold`}>Introducing the Gulf Accreditation Center from some members</span>
                          </div>
                      </div>
                      <div className={`col-xl-4 col-lg-6 col-md-6 col-sm-12 ${styles.teamMember2}`}>
                          <div className={``}>
                              <figure className={`${styles.teamMemberFigure} `}>
                                  <div className='p-2 '>
                                      <Image src={vp} layout='fill' alt="" className={`${styles.cardImage} p-3 `}/>
                                  </div>
                                  <figcaption className={`${styles.figCaption}d-flex`}>
                                      <div className={` ${styles.accretiedCaption}`}>
                                          <a href="https://www.youtube.com/embed/tv-8cJfQbqc" target="_blank" rel="noreferrer" >
                                              <span className="text-white">
                                                  <BsPlayFill className='m-0' size={45}/>
                                              </span>
                                          </a>
                                      </div> 
                                  </figcaption>
                              </figure>
                              <span className={`${styles.textCard} fw-bold`}>Introducing the Gulf Accreditation Center from some members</span>
                          </div>
                      </div>
                      <div className={`col-xl-4 col-lg-6 col-md-6 col-sm-12 ${styles.teamMember2}`}>
                          <div className={``}>
                              <figure className={`${styles.teamMemberFigure} `}>
                                  <div className='p-2 '>
                                      <Image src={vp} layout='fill' alt="" className={`${styles.cardImage} p-3 `}/>
                                  </div>
                                  <figcaption className={`${styles.figCaption}d-flex`}>
                                      <div className={` ${styles.accretiedCaption}`}>
                                          <a href="https://www.youtube.com/embed/tv-8cJfQbqc" target="_blank" rel="noreferrer" >
                                              <span className="text-white">
                                                  <BsPlayFill className='m-0' size={45}/>
                                              </span>
                                          </a>
                                      </div> 
                                  </figcaption>
                              </figure>
                              <span className={`${styles.textCard} fw-bold`}>Introducing the Gulf Accreditation Center from some members</span>
                          </div>
                      </div>
                      <div className={`col-xl-4 col-lg-6 col-md-6 col-sm-12 ${styles.teamMember2}`}>
                          <div className={``}>
                              <figure className={`${styles.teamMemberFigure} `}>
                                  <div className='p-2 '>
                                      <Image src={vp} layout='fill' alt="" className={`${styles.cardImage} p-3 `}/>
                                  </div>
                                  <figcaption className={`${styles.figCaption}d-flex`}>
                                      <div className={` ${styles.accretiedCaption}`}>
                                          <a href="https://www.youtube.com/embed/tv-8cJfQbqc" target="_blank" rel="noreferrer" >
                                              <span className="text-white">
                                                  <BsPlayFill className='m-0' size={45}/>
                                              </span>
                                          </a>
                                      </div> 
                                  </figcaption>
                              </figure>
                              <span className={`${styles.textCard} fw-bold`}>Introducing the Gulf Accreditation Center from some members</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
</>
)
}

export default VisualPresentations;