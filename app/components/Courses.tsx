import React from 'react'
import styles from '../styles/Courses.module.css'
import Link from 'next/link'
import Image from 'next/image'
import courseimage from '../public/imagess/coursesimage.png'
import coursesimage2 from '../public/imagess/coursesimage2.png'
import courses from '../public/images/courses-section.svg'
import {CgCalendarDates} from 'react-icons/cg'
import {FaMapMarkerAlt} from 'react-icons/fa'
import Example from './Example'
import CourseComponent from './CourseComponent'
type Props = {
    [key: string]: any;
  };
  type Courses = {
    [key: string]: any;
  };
const Courses = (props:Props) => {
    return (
        <>
         <div className={`text-center ${styles.titleWord}`}>
             <div className={`container mb-4`}>
                <Link href={"/"}><a className="text-white fw-semibold mb-4">{`Home`}</a></Link>
                <Link href={"/courses"}><a className="text-white fw-semibold mb-4">{` > Courses`}</a></Link>
            </div>
            <h2 className={`text-white fw-bold mb-5 `} >Courses</h2>
        </div>
        <div className="container col-xl-8 col-lg-10 col-md-12 mb-5">
            <div className="row">
               <div className={`col-lg-12 justify-content-between ${styles.coursesCard}`}>
                    <div className={` ${styles.cardImage} `}>
                        <Image src={courses} width={300} height={300}  alt=""/>
                    </div>
                    <div className={`${styles.coursesHead}`}>
                        <span className="card-title fw-semibold mt-3" >COURSES</span> 
                        <span className={`card-text fs-4 fw-semibold d-block mt-3 ${styles.cardSubTitle}`}>{`Find your perfect program`}</span>
                    </div>
               </div>
            </div>
        </div>
        {/* <div className={`container col-xl-8 col-lg-10 col-md-12 ${styles.formConatiner}`}>
            <span className={`me-3 ms-3`} >25  Upcoming Course </span>
            <div className="row gy-5 gx-lg-5">
                <div className={`col-lg-12 m-0`}>
                    <form action="" method="post" role="form" className={` php-email-form ${styles.searchCard}`}>
                        <div className="row">
                            <div className={`col-md-4 col-lg-4 col-sm-6 col-xs-6 mt-3 form-group  ${styles.formGroup}`}>
                                <input type="text" name="name" className={`form-control ${styles.formControl}`} id="name" placeholder="Search..." required/>
                            </div>
                            <div className={`col-md-4 col-lg-4 col-sm-6 col-xs-12 form-group mt-3 ${styles.formGroup}`}>
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
                                <div>
                                    <button className={` myInfo rounded ${styles.SearchButton}`} type="submit">Search</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div> */}
        <div className={`container col-xl-8 col-lg-10 col-md-12 ${styles.coursesConainer}`}>
            <div className="row">
            {/* {props.courses.map(
                      (courses:Courses,index:number)=>(
                        <CourseComponent
                        key={index}
                        course_id={courses.course_id}
                        course_title={courses.course_title}
                        course_title_ar={courses.course_title_ar}
                        course_image={courses.course_image}
                        course_vanue={courses.course_vanue}
                        course_vanue_ar={courses.course_vanue_ar}
                        course_date={courses.course_date}
                        couesre_date_ar={courses.couesre_date_ar} 
                        course_link={courses.course_link}
                        />
                      ) 
                    )} */}
            </div>
        </div>
    </>
  )
}

export default Courses