import React from 'react'
import styles from '../styles/Courses.module.css'
import Link from 'next/link'
import Image from 'next/image'
import courseimage from '../public/imagess/coursesimage.png'
import coursesimage2 from '../public/imagess/coursesimage2.png'
import courses from '../public/images/home_page/section_courses/section_courses.svg'
import {CgCalendarDates} from 'react-icons/cg'
import {FaMapMarkerAlt} from 'react-icons/fa'
import Example from './Example'
const Courses = () => {
    return (
        <>
         <div className={`text-center ${styles.titleWord}`}>
         <div className={`container mb-4`}>
                    <Link href={"/"}><a className="text-white fw-semibold mb-4">{`Home`}</a></Link>
                    <Link href={"/courses"}><a className="text-white fw-semibold mb-4">{` > Courses`}</a></Link>
                </div>
            <h2 className={`text-white fw-bold mb-5`} >Courses</h2>
        </div>
        <div className="container col-xl-8 col-lg-10 col-md-12 mb-5">
            <div className="row ">
               <div className={`col-lg-12  justify-content-between ${styles.coursesCard}`}>
                    <div className={`${styles.cardImage}`}>
                        <Image src={courses}  alt=""/>
                    </div>
                    <div className={`${styles.coursesHead}`}>
                        <span className="card-title fw-semibold mt-3" data-trans="COURSES">COURSES</span> 
                        <span className={`card-text fs-4 fw-semibold mb-3 d-block mt-3 ${styles.cardSubTitle}`}>{`Find your perfect program`}</span>
                    </div>
               </div>
            </div>
        </div>
        {/* <div className={` container col-xl-8 col-lg-10 col-md-12  ${styles.formConatiner}`}>
        <span className={`me-3 ms-3`} >25  Upcoming Course </span>
        <div className="row gy-5 gx-lg-5">
          <div className={`col-lg-12 m-0 `}>
            <form action="forms/contact.php" method="post" role="form" className={` php-email-form ${styles.searchCard}`}>
               
              <div className="row">
                <div className={`col-md-4 col-lg-4 col-sm-6 col-xs-6 mt-3 form-group  ${styles.formGroup}`}>
                  <input type="text" name="name" className={`form-control ${styles.formControl}`} id="name" placeholder="Search..." required/>
                </div>
                <div className={`col-md-4 col-lg-4 col-sm-6 col-xs-12 form-group mt-3  ${styles.formGroup}`}>
                  <div  className={` ${styles.formControl}`}   >
                   <Example/>
                   </div>
                  </div>
                <div className={`col-md-4 col-lg-4 col-sm-6 col-xs-6 form-group mt-3 ${styles.formGroup}`}>
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
        </div> */}
        <div className={`container col-xl-8 col-lg-10 col-md-12 ${styles.coursesConainer} ` }>
            <div className="row">
                <div className="col-lg-4 col-md-6 p-1">
                    <Link href={'/courses/food-safety-management-requirements-in-accordance-with-international-standard-iso'}>
                    <div className={`${styles.postBox}`}>
                        <div className={`${styles.postImage}`}><Image src={courseimage} className="img-fluid" alt=""/></div>
                        <figure className={`mt-5 ${styles.postTitleFigre}`}>
                        <span className={` mt-5 ${styles.postTitle}`} data-trans="course1">{`Food Safety Management Requirements In Accordance With International Standard ISO 22000:2018`}</span>
                        </figure>                        
                        <span className={`${styles.iconDate}`}><CgCalendarDates size={20}/>
                            <small className='text-black me-1 ms-1 mt-1' data-trans="coursedate1jun">01-Jun-2023</small>
                        </span>
                        <span className={`${styles.iconDate}`}><FaMapMarkerAlt size={20} className='mb-1'/>
                            <small className='text-black me-1 ms-1 pt-3' data-trans="Egypt">Egypt</small>
                        </span>
                    </div>
                    </Link>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12  p-1" >
                    <Link href={'/courses/general_requirement_for_halal_products_certification_according_to_gcc_standard_gSO2055_2:2021_and_international_standard_iSO_IEC17065'}>
                    <div className={`${styles.postBox}`}>
                        <div className={`${styles.postImage}`}><Image src={coursesimage2} className="img-fluid" alt=""/></div>
                        <figure className={`mt-5 ${styles.postTitleFigre}`}>
                        <span  className={` mt-5 ${styles.postTitle}`} data-trans="course2">{`General Requirement For Halal Products Certification According To GCC Standard GSO2055-2:2021 And International Standard ISO/IEC17065`}</span>
                        </figure>                
                                <span className={`${styles.iconDate}`}>
                            <CgCalendarDates size={20}/>
                            <small className='text-black me-1 ms-1 mt-1' data-trans="coursedate1jun">01-Jun-2023</small>
                        </span>
                        <span className={`${styles.iconDate}`}>
                            <FaMapMarkerAlt size={20} className='mb-1'/>
                            <small className='text-black me-1 ms-1 pt-3' data-trans="UAE">UAE</small>
                        </span>
                    </div>
                    </Link>
                </div>
                <div className="col-lg-4 col-md-6 p-1" >
                    <Link href={'/courses/iSO_iEC_17065_2012_certification_requirements'}>
                    <div className={`${styles.postBox}`}>
                        <div className={`${styles.postImage}`}><Image src={courseimage} className="img-fluid" alt=""/></div>
                        <figure className={` pe-1 ps-2 mt-5 ${styles.postTitleFigre}`}>
                        <span className={` mt-5 ${styles.postTitle}`} data-trans="course3">{`ISO/IEC 17065:2012 Certification Requirements`}</span>
                        </figure>                       
                         <span className={`${styles.iconDate}`}><CgCalendarDates size={20}/>
                            <small className='text-black me-1 ms-1 mt-1' data-trans="coursedate1jun">01-Jun-2023</small>
                        </span>
                        <span className={`${styles.iconDate}`}><FaMapMarkerAlt size={20} className='mb-1'/>
                            <small className='text-black me-1 ms-1 pt-3' data-trans="KSA">KSA</small>
                        </span>
                    </div>
                    </Link>
                </div>
                <div className="col-lg-4 col-md-6 p-1" >
                    <Link href={'/courses/understanding_iso_ise_17025_2017_for_testing_and_calibration_laboratories'}>
                    <div className={`${styles.postBox}`}>
                        <div className={`${styles.postImage}`}>
                            <Image src={coursesimage2} className="img-fluid" alt=""/>
                        </div>
                        <figure className={`pe-1 ps-2 mt-5 ${styles.postTitleFigre}`}>
                        <span className={`mt-5 ${styles.postTitle}`} data-trans="course4">{`Understanding ISO/IEC 17025:2017 for Testing and Calibration Laboratories`}</span>
                        </figure>                      
                        <span className={`${styles.iconDate}`}>
                            <CgCalendarDates size={20}/>
                            <small className='text-black me-1 ms-1 mt-1' data-trans="coursedate1jun">01-Jun-2023</small>
                        </span>
                        <span className={`${styles.iconDate}`}>
                            <FaMapMarkerAlt size={20} className='mb-1'/>
                            <small className='text-black me-1 ms-1 pt-3' data-trans="Egypt">Egypt</small>
                        </span>
                    </div>
                    </Link>
                </div>
                <div className="col-lg-4 col-md-6 p-1" >
                    <Link href={'/courses/1'}>
                    <div className={`${styles.postBox}`}>
                        <div className={`${styles.postImage}`}><Image src={courseimage} className="img-fluid" alt=""/></div>
                        <figure className={` pe-1 ps-2 mt-5 ${styles.postTitleFigre}`}>
                        <span className={` mt-5 ${styles.postTitle}`}> </span>
                        </figure>
                        <span className={`${styles.iconDate}`}><CgCalendarDates size={20}/>
                            <small className='text-black me-1 ms-1 mt-1'>01-Jun-2023</small>
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
                        <figure className={` pe-1 ps-2 mt-5 ${styles.postTitleFigre}`}>
                        <span className={` mt-5 ${styles.postTitle}`}> </span>
                        
                        </figure>
                        <span className={`${styles.iconDate}`}>
                            <CgCalendarDates size={20}/>
                            <small className='text-black me-1 ms-1 mt-1'>01-Jun-2023</small>
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
                        <figure className={` pe-1 ps-2 mt-5 ${styles.postTitleFigre}`}>
                        <span className={` mt-5 ${styles.postTitle}`}> </span>
                        </figure>                        <span className={`${styles.iconDate}`}><CgCalendarDates size={20}/>
                            <small className='text-black me-1 ms-1 mt-1'>01-Jun-2023</small>
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
                        <figure className={` pe-1 ps-2 mt-5 ${styles.postTitleFigre}`}>
                        <span className={` mt-5 ${styles.postTitle}`}> </span>
                        </figure>                        <span className={`${styles.iconDate}`}>
                            <CgCalendarDates size={20}/>
                            <small className='text-black me-1 ms-1 mt-1'>01-Jun-2023</small>
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
                        <figure className={` pe-1 ps-2 mt-5 ${styles.postTitleFigre}`}>
                        <span className={` mt-5 ${styles.postTitle}`}> </span>
                        </figure>                        <span className={`${styles.iconDate}`}><CgCalendarDates size={20}/>
                            <small className='text-black me-1 ms-1 mt-1'>01-Jun-2023</small>
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
                        <figure className={` pe-1 ps-2 mt-5 ${styles.postTitleFigre}`}>
                        <span className={` mt-5 ${styles.postTitle}`}> </span>
                        </figure>           
                                     <span className={`${styles.iconDate}`}>
                            <CgCalendarDates size={20}/>
                            <small className='text-black me-1 ms-1 mt-1'>01-Jun-2023</small>
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