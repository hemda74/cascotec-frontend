import React from 'react'
import styles from '../styles/Courses.module.css'
import Link from 'next/link'
import {CgCalendarDates} from 'react-icons/cg'
import {FaMapMarkerAlt} from 'react-icons/fa'
type Props={
    course_id:0,
    course_title:string,
    course_title_ar:string,
    course_image:string,
    course_vanue:string,
    course_vanue_ar:string,
    course_date:string,
    couesre_date_ar:string,
    course_link:string,
}
const CourseComponent = (props:Props) => {
  return (
    <div className="col-lg-4 col-md-6 p-1" >
        <Link href={'/courses/1'}>
            <div className={`${styles.postBox}`}>
                <div className={`${styles.postImage}`}>
                    {/* <Image src={courseimage} className="img-fluid" alt=""/> */}
                </div>
                <figure className={`mt-5 ${styles.postTitleFigre}`}>
                <span className={`fs-5 mt-5 ${styles.postTitle}`}>Mandatory documents for international accreditation organizations IHAF -AIF</span>
                </figure>                        
                <span className={`${styles.iconDate}`}><CgCalendarDates size={25}/>
                    <span className='text-black me-1 ms-1 mt-1'>04-06Sep.2023</span>
                </span>
                <span className={`${styles.iconDate}`}>
                    <FaMapMarkerAlt size={24} className='mb-1'/>
                    <span className='text-black me-1 ms-1 pt-3'>Dubai</span>
                </span>
            </div>
        </Link>
    </div>
  )
}

export default CourseComponent