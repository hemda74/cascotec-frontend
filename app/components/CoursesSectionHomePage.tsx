import React from 'react'
import styles from '../styles/CoursesSectionHomePage.module.css'
import Link from 'next/link'
import Image from 'next/image'
import courseimage from '../public/imagess/coursesimage.png'
import {CgCalendarDates} from 'react-icons/cg'
import {FaMapMarkerAlt} from 'react-icons/fa'
const CoursesSectionHomePage = () => {
  return (
<>
    <div className={`row ${styles.sectionCoursesHead}`}>
        <div className="col-sm-12">
            <section className="section_courses">
                <div className="container-fluid">
                    <div className="row justify-content-end">
                        <div className="col-xl-10 col-lg-11 col-md-12 pr-0">
                            <div className="row mx-0">
                                <div className="col-xl-4 col-lg-4 col-md-12 ">
                                    <div className="section_services_head pb-sm-5">
                                        <span className={`${styles.spanFeature}`}>Courses</span>
                                        <p  className="fw-bold fs-4 mt-2">Find your perfect program</p>
                                        <p className={`${styles.cousesParageph}`}>The GCC was distinguished by providing courses, seminars, and training programs via online technology in line with the circumstances that may arise, and in keeping with the progress and development of information technology. In addition, we offer offline courses.</p>
                                        <img src="/images/home_page/section_courses/section_courses.png" className="img_blog" alt="course_image" />
                                    </div>
                                </div>
                                <div className="col-xl-8 col-lg-8 col-md-12">
                                    <div className="row justify-content-between">
                                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 p-4 p-4" >
                                    <Link href={'/courses/global-standard-for-food-safety-issue-9'}>
                                    <div className={`${styles.postBox} p-1`}>
                                        <div className={`${styles.postImage}`}><Image src={courseimage} className="img-fluid" alt="course_image"/></div>
                                        <figure className={`mt-3 ${styles.postTitleFigre}`}>
                                        <span className={`${styles.postTitle}`}>Global Standard for Food Safety Issue 9: Sites Training</span>
                                        </figure>                        
                                        <span className={`${styles.iconDate}`}><CgCalendarDates size={25}/>
                                            <span className='text-black me-1 ms-1 mt-1'>01-02 Jun.2023</span>
                                        </span>
                                        <span className={`${styles.iconDate}`}><FaMapMarkerAlt size={25} className=''/>
                                            <span className='text-black me-1 ms-1'>UAE</span>
                                        </span>
                                    </div>
                                    </Link>
                                        </div>
                                        <div className={`col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 p-4 p-4 ${styles.courseCard}`} >
                                            <Link href={'/courses/food-safety-management-requirements-in-accordance-with-international-standard-iso'}>
                                            <div className={`${styles.postBox} p-1 `}>
                                                <div className={`${styles.postImage}`}><Image src={courseimage} className="img-fluid" alt="course_image"/></div>
                                                <figure className={`mt-5 ${styles.postTitleFigre}`}>
                                                <span className={`mt-5 ${styles.postTitle}`}>Food Safety Management Requirements in Accordance with International Standard ISO 22000:2018</span>
                                                </figure>                        
                                                <span className={`${styles.iconDate}`}><CgCalendarDates size={25}/>
                                                    <small className='text-black me-1 ms-1 mt-1'>01-03 Jun.2023</small>
                                                </span>
                                                <span className={`${styles.iconDate}`}><FaMapMarkerAlt size={25} className='mb-1'/>
                                                    <small className='text-black me-1 ms-1 pt-3'>Egypt</small>
                                                </span>
                                            </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className='ms-5 me-5'><a href={'/courses'}> <button className={`myInfo-outline m-auto  ${styles.SearchButton}`}>VIEW ALL</button></a></div>
                                </div>
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

export default CoursesSectionHomePage