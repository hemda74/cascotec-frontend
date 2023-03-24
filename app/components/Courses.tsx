import React from 'react'
import styles from '../styles/Courses.module.css'
import Link from 'next/link'
import Image from 'next/image'
import courseimage from '../public/imagess/coursesimage.png'
import coursesimage2 from '../public/imagess/coursesimage2.png'
import courses from '../public/images/courses-section.svg'
import {CgCalendarDates} from 'react-icons/cg'
import {FaMapMarkerAlt} from 'react-icons/fa'
const Courses = () => {
    return (
        <>
         <div className={`text-center ${styles.titleWord}`}>
            <h6 className="text-white fw-semibold mb-4" >{`Home > Courses`}</h6>
            <h2 className={`text-white fw-bold mb-5 `} >Courses</h2>
        </div>
        <div className="container col-xl-8 col-lg-10 col-md-12 mb-5">
            <div className="row ">
               <div className={`col-lg-12  justify-content-between ${styles.coursesCard}`}>
                    <div className={` ${styles.cardImage} `}>
                        <Image src={courses} width={300} height={300}  alt=""/>
                    </div>
                    <div className={`  ${styles.coursesHead}`}>
                        <span className="card-title  fw-semibold mt-3" >COURSES</span> 
                        <span className={`card-text fs-4 fw-semibold d-block mt-3 ${styles.cardSubTitle}`}>{`Find your perfect program`}</span>
                    </div>
               </div>
            </div>
        </div>
        <div className={` container col-xl-8 col-lg-10 col-md-12  ${styles.formConatiner}`}>
        <span className={`me-3 ms-3`} >25  Upcoming Course </span>
        <div className="row gy-5 gx-lg-5">
          <div className={`col-lg-12 m-0 `}>
            <form action="forms/contact.php" method="post" role="form" className={` php-email-form ${styles.searchCard}`}>
               
              <div className="row">
                <div className={`col-md-4 col-lg-4 col-sm-6 col-xs-6  form-group  ${styles.formGroup}`}>
                  <input type="text" name="name" className={`form-control ${styles.formControl}`} id="name" placeholder="Search..." required/>
                </div>
                <div className={`col-md-4 col-lg-4 col-sm-6 col-xs-6 form-group   ${styles.formGroup}`}>
                    <select  className={`form-select ${styles.formControl}`}  id="site-holidayes-input" >
                        <option>Select All</option>
                        <option>Testing Lap</option>
                        <option>Calibration Lab</option>
                        <option>Medical Lab</option>
                        <option>Mangment System Cetifcation</option>
                        <option>Halal Product Certification</option>
                        <option>Inspection Body</option>
                        <option>Prof Testing Provider</option>
                        <option>Product Certification</option>
                        <option>Personnel Certification Body</option>
                        <option>Reference Material Producer</option>
                    </select>
                  </div>
                <div className={`col-md-4 col-lg-4 col-sm-6 col-xs-6 form-group  ${styles.formGroup}`}>
                    <select  className={`form-select ${styles.formControl}`}  id="site-holidayes-input" >
                        <option>Upcoming Trainings</option>
                        <option>Pervious Trainings</option>
                    </select>                
                  </div>

                  <div className={`form-group d-flex justify-content-between mt-4 ${styles.formGroup}`}>
                    <div className='col-md-4 col-lg-4 col-sm-6 col-xs-6'>
                    </div>
                    <div><button className={` myInfo  rounded ${styles.SearchButton}`} type="submit"> Search </button></div>
                  </div>
                  </div>
            </form>
          </div>
        </div>
        </div>
        <div className={`container col-xl-8 col-lg-10 col-md-12 ${styles.coursesConainer} ` }>
            <div className="row">
                <div className="col-lg-4 col-md-6 p-1" >
                    <Link href={'/courses/1'}>
                    <div className={`${styles.postBox}`}>
                        <div className={`${styles.postImage}`}><Image src={courseimage} className="img-fluid" alt=""/></div>
                        <figure className={`  mt-5 ${styles.postTitleFigre}`}>
                        <span className={` fs-5 mt-5 ${styles.postTitle}`}>Mandatory documents for international accreditation organizations IHAF -AIF</span>
                        <figcaption className={`${styles.figCaption}`}>
                            <span className='m-auto fs-5 fw-semibold text-white'>General Requirements for Halal Cosmetics and Personal care.Packaging for Halal Cosmetics and Personal care.Informative Data Halal Cosmetics and Personal care.</span>
                        </figcaption>
                        </figure>                        
                        <span className={`${styles.iconDate}`}><CgCalendarDates size={20}/>
                            <small className='text-black me-1 ms-1 mt-1'> 04-06Sep.2023</small>
                        </span>
                        <span className={`${styles.iconDate}`}><FaMapMarkerAlt size={20} className='mb-1'/>
                            <small className='text-black me-1 ms-1 pt-3'>Dubai</small>
                        </span>
                    </div>
                    </Link>
                </div>
                <div className="col-lg-4 col-md-6 p-1" >
                    <Link href={'/courses/1'}>
                    <div className={`${styles.postBox}`}>
                        <div className={`${styles.postImage}`}><Image src={coursesimage2} className="img-fluid" alt=""/></div>
                        <figure className={`  mt-5 ${styles.postTitleFigre}`}>
                        <span className={` fs-5 mt-5 ${styles.postTitle}`}>Mandatory documents for international accreditation organizations IHAF -AIF</span>
                        <figcaption className={`${styles.figCaption}`}>
                            <span className='m-auto fs-5 fw-semibold text-white'>General Requirements for Halal Cosmetics and Personal care.Packaging for Halal Cosmetics and Personal care.Informative Data Halal Cosmetics and Personal care.</span>
                        </figcaption>
                        </figure>                        <span className={`${styles.iconDate}`}>
                            <CgCalendarDates size={20}/>
                            <small className='text-black me-1 ms-1 mt-1'> 04-06Sep.2023</small>
                        </span>
                        <span className={`${styles.iconDate}`}>
                            <FaMapMarkerAlt size={20} className='mb-1'/>
                            <small className='text-black me-1 ms-1 pt-3'>Dubai</small>
                        </span>
                    </div>
                    </Link>
                </div>
                <div className="col-lg-4 col-md-6 p-1" >
                    <Link href={'/courses/1'}>
                    <div className={`${styles.postBox}`}>
                        <div className={`${styles.postImage}`}><Image src={courseimage} className="img-fluid" alt=""/></div>
                        <figure className={`  mt-5 ${styles.postTitleFigre}`}>
                        <span className={` fs-5 mt-5 ${styles.postTitle}`}>Mandatory documents for international accreditation organizations IHAF -AIF</span>
                        <figcaption className={`${styles.figCaption}`}>
                            <span className='m-auto fs-5 fw-semibold text-white'>General Requirements for Halal Cosmetics and Personal care.Packaging for Halal Cosmetics and Personal care.Informative Data Halal Cosmetics and Personal care.</span>
                        </figcaption>
                        </figure>                        <span className={`${styles.iconDate}`}><CgCalendarDates size={20}/>
                            <small className='text-black me-1 ms-1 mt-1'> 04-06Sep.2023</small>
                        </span>
                        <span className={`${styles.iconDate}`}><FaMapMarkerAlt size={20} className='mb-1'/>
                            <small className='text-black me-1 ms-1 pt-3'>Dubai</small>
                        </span>
                    </div>
                    </Link>
                </div>
                <div className="col-lg-4 col-md-6 p-1" >
                    <Link href={'/courses/1'}>
                    <div className={`${styles.postBox}`}>
                        <div className={`${styles.postImage}`}><Image src={coursesimage2} className="img-fluid" alt=""/></div>
                        <figure className={`  mt-5 ${styles.postTitleFigre}`}>
                        <span className={` fs-5 mt-5 ${styles.postTitle}`}>Mandatory documents for international accreditation organizations IHAF -AIF</span>
                        <figcaption className={`${styles.figCaption}`}>
                            <span className='m-auto fs-5 fw-semibold text-white'>General Requirements for Halal Cosmetics and Personal care.Packaging for Halal Cosmetics and Personal care.Informative Data Halal Cosmetics and Personal care.</span>
                        </figcaption>
                        </figure>                        <span className={`${styles.iconDate}`}>
                            <CgCalendarDates size={20}/>
                            <small className='text-black me-1 ms-1 mt-1'> 04-06Sep.2023</small>
                        </span>
                        <span className={`${styles.iconDate}`}>
                            <FaMapMarkerAlt size={20} className='mb-1'/>
                            <small className='text-black me-1 ms-1 pt-3'>Dubai</small>
                        </span>
                    </div>
                    </Link>
                </div>
                <div className="col-lg-4 col-md-6 p-1" >
                    <Link href={'/courses/1'}>
                    <div className={`${styles.postBox}`}>
                        <div className={`${styles.postImage}`}><Image src={courseimage} className="img-fluid" alt=""/></div>
                        <figure className={`  mt-5 ${styles.postTitleFigre}`}>
                        <span className={` fs-5 mt-5 ${styles.postTitle}`}>Mandatory documents for international accreditation organizations IHAF -AIF</span>
                        <figcaption className={`${styles.figCaption}`}>
                            <span className='m-auto fs-5 fw-semibold text-white'>General Requirements for Halal Cosmetics and Personal care.Packaging for Halal Cosmetics and Personal care.Informative Data Halal Cosmetics and Personal care.</span>
                        </figcaption>
                        </figure>
                                                <span className={`${styles.iconDate}`}><CgCalendarDates size={20}/>
                            <small className='text-black me-1 ms-1 mt-1'> 04-06Sep.2023</small>
                        </span>
                        <span className={`${styles.iconDate}`}><FaMapMarkerAlt size={20} className='mb-1'/>
                            <small className='text-black me-1 ms-1 pt-3'>Dubai</small>
                        </span>
                    </div>
                    </Link>
                </div>
                <div className="col-lg-4 col-md-6 p-1" >
                    <Link href={'/courses/1'}>
                    <div className={`${styles.postBox}`}>
                        <div className={`${styles.postImage}`}><Image src={coursesimage2} className="img-fluid" alt=""/></div>
                        <figure className={`  mt-5 ${styles.postTitleFigre}`}>
                        <span className={` fs-5 mt-5 ${styles.postTitle}`}>Mandatory documents for international accreditation organizations IHAF -AIF</span>
                        <figcaption className={`${styles.figCaption}`}>
                            <span className='m-auto fs-5 fw-semibold text-white'>General Requirements for Halal Cosmetics and Personal care.Packaging for Halal Cosmetics and Personal care.Informative Data Halal Cosmetics and Personal care.</span>
                        </figcaption>
                        </figure>
                        <span className={`${styles.iconDate}`}>
                            <CgCalendarDates size={20}/>
                            <small className='text-black me-1 ms-1 mt-1'> 04-06Sep.2023</small>
                        </span>
                        <span className={`${styles.iconDate}`}>
                            <FaMapMarkerAlt size={20} className='mb-1'/>
                            <small className='text-black me-1 ms-1 pt-3'>Dubai</small>
                        </span>
                    </div>
                    </Link>
                </div>
                <div className="col-lg-4 col-md-6 p-1" >
                    <Link href={'/courses/1'}>
                    <div className={`${styles.postBox}`}>
                        <div className={`${styles.postImage}`}><Image src={courseimage} className="img-fluid" alt=""/></div>
                        <figure className={`  mt-5 ${styles.postTitleFigre}`}>
                        <span className={` fs-5 mt-5 ${styles.postTitle}`}>Mandatory documents for international accreditation organizations IHAF -AIF</span>
                        <figcaption className={`${styles.figCaption}`}>
                            <span className='m-auto fs-5 fw-semibold text-white'>General Requirements for Halal Cosmetics and Personal care.Packaging for Halal Cosmetics and Personal care.Informative Data Halal Cosmetics and Personal care.</span>
                        </figcaption>
                        </figure>                        <span className={`${styles.iconDate}`}><CgCalendarDates size={20}/>
                            <small className='text-black me-1 ms-1 mt-1'> 04-06Sep.2023</small>
                        </span>
                        <span className={`${styles.iconDate}`}><FaMapMarkerAlt size={20} className='mb-1'/>
                            <small className='text-black me-1 ms-1 pt-3'>Dubai</small>
                        </span>
                    </div>
                    </Link>
                </div>
                <div className="col-lg-4 col-md-6 p-1" >
                    <Link href={'/courses/1'}>
                    <div className={`${styles.postBox}`}>
                        <div className={`${styles.postImage}`}><Image src={courseimage} className="img-fluid" alt=""/></div>
                        <figure className={`  mt-5 ${styles.postTitleFigre}`}>
                        <span className={` fs-5 mt-5 ${styles.postTitle}`}>Mandatory documents for international accreditation organizations IHAF -AIF</span>
                        <figcaption className={`${styles.figCaption}`}>
                            <span className='m-auto fs-5 fw-semibold text-white'>General Requirements for Halal Cosmetics and Personal care.Packaging for Halal Cosmetics and Personal care.Informative Data Halal Cosmetics and Personal care.</span>
                        </figcaption>
                        </figure>                        <span className={`${styles.iconDate}`}>
                            <CgCalendarDates size={20}/>
                            <small className='text-black me-1 ms-1 mt-1'> 04-06Sep.2023</small>
                        </span>
                        <span className={`${styles.iconDate}`}>
                            <FaMapMarkerAlt size={20} className='mb-1'/>
                            <small className='text-black me-1 ms-1 pt-3'>Dubai</small>
                        </span>
                    </div>
                    </Link>
                </div>
                <div className="col-lg-4 col-md-6 p-1" >
                    <Link href={'/courses/1'}>
                    <div className={`${styles.postBox}`}>
                        <div className={`${styles.postImage}`}><Image src={courseimage} className="img-fluid" alt=""/></div>
                        <figure className={`  mt-5 ${styles.postTitleFigre}`}>
                        <span className={` fs-5 mt-5 ${styles.postTitle}`}>Mandatory documents for international accreditation organizations IHAF -AIF</span>
                        <figcaption className={`${styles.figCaption}`}>
                            <span className='m-auto fs-5 fw-semibold text-white'>General Requirements for Halal Cosmetics and Personal care.Packaging for Halal Cosmetics and Personal care.Informative Data Halal Cosmetics and Personal care.</span>
                        </figcaption>
                        </figure>                        <span className={`${styles.iconDate}`}><CgCalendarDates size={20}/>
                            <small className='text-black me-1 ms-1 mt-1'> 04-06Sep.2023</small>
                        </span>
                        <span className={`${styles.iconDate}`}><FaMapMarkerAlt size={20} className='mb-1'/>
                            <small className='text-black me-1 ms-1 pt-3'>Dubai</small>
                        </span>
                    </div>
                    </Link>
                </div>
                <div className="col-lg-4 col-md-6 p-1" >
                    <Link href={'/courses/1'}>
                    <div className={`${styles.postBox}`}>
                        <div className={`${styles.postImage}`}><Image src={courseimage} className="img-fluid" alt=""/></div>
                        <figure className={`  mt-5 ${styles.postTitleFigre}`}>
                        <span className={` fs-5 mt-5 ${styles.postTitle}`}>Mandatory documents for international accreditation organizations IHAF -AIF</span>
                        <figcaption className={`${styles.figCaption}`}>
                            <span className='m-auto fs-5 fw-semibold text-white'>General Requirements for Halal Cosmetics and Personal care.Packaging for Halal Cosmetics and Personal care.Informative Data Halal Cosmetics and Personal care.</span>
                        </figcaption>
                        </figure>                        <span className={`${styles.iconDate}`}>
                            <CgCalendarDates size={20}/>
                            <small className='text-black me-1 ms-1 mt-1'> 04-06Sep.2023</small>
                        </span>
                        <span className={`${styles.iconDate}`}>
                            <FaMapMarkerAlt size={20} className='mb-1'/>
                            <small className='text-black me-1 ms-1 pt-3'>Dubai</small>
                        </span>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
        </>
  )
}

export default Courses