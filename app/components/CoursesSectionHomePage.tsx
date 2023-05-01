import React from 'react'
import styles from '../styles/CoursesSectionHomePage.module.css'
import Link from 'next/link'
import Image from 'next/image'
import courseimage from '../public/images/courses_section/courses_images/Global-Standard-for-Food-Safety-Issue-9-Sites-Training.png'
import courseimage2 from '../public/images/courses_section/courses_images/Food-Safety-Management-Requirements-in-Accordance-with-International-Standard-ISO-22000-2018.png'
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
                                        <span className={`fw-bold fs-4 mt-2 ${styles.spanFeature}`} data-trans="COURSES">{`COURSES`}</span>
                                        <p className={`${styles.cousesParageph}`} data-trans="cousesParageph">{`CASCO is known for its provision of courses, seminars, and training programs through online technology to adapt to any situation and keep up with advancements in information technology. Furthermore, we also offer in-person classroom courses.`}</p>
                                        <img src="/images/home_page/section_courses/section_courses.svg" className="img_blog" alt="course_image"/>
                                    </div>
                                </div>
                                <div className="col-xl-8 col-lg-8 col-md-12">
                                    <div className="row justify-content-between">
                                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 p-4 p-4" >
                                            <Link href={'/courses/Global-Standard-for-Food-Safety-Issue-9-Sites-Training'}>
                                    <div className={`${styles.postBox} p-1`}>
                                        <div className={`${styles.postImage}`}>
                                            <Image src={courseimage} className="img-fluid" alt="course_image"/>
                                        </div>
                                        <figure className={`mt-4 ${styles.postTitleFigre}`}>
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
                                            <div className={`${styles.postBox} p-1`}>
                                                <div className={`${styles.postImage}`}>
                                                <Image src={courseimage2} className="img-fluid" alt="course_image"/>
                                                </div>
                                                <figure className={`mt-4 ${styles.postTitleFigre}`}>
                                                <span className={`${styles.postTitle}`} data-trans="course1">{`Food Safety Management Requirements In Accordance With International Standard ISO 22000:2018`}</span>
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
                                    </div>
                                    <div className='ms-5 me-5'><a href={'/courses'}> 
                                    <button className={`myInfo-outline m-auto ${styles.SearchButton}`}>VIEW ALL</button></a></div>
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