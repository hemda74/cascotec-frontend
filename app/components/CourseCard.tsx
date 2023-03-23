import React from 'react'
import styles from '../styles/CourseCard.module.css'
const CourseCard = () => {
  return (
    <>
    <div className={`text-center row ${styles.titleWord}`}>
        <h6 className="text-white col-12 fw-semibold mb-4" >{`Home > Courses`}</h6>
        <h3 className={`text-white col-lg-6 m-auto fw-bold mb-5 `} >An Internal Auditor For Management Systems According To ISO 19011 For The Accreditation Requirement Requirements For Bodies Certifying Halal In Accordance With: GSO 2055-2</h3>
    </div>
    <div className="container col-xl-10 col-lg-12 col-md-12 mb-5">
        <div className="row">
            <div className="d-flex">
            <small className='fw-bold text-black-50'>Description</small>
            <small className='fw-bold text-black-50 me-4 ms-4'> Audience</small>
            </div>
            <hr/>
            <div className="col-lg-10 col-md-6 p-3">
             </div>
             <div className="col-lg-12 col-md-6 p-3">
             </div>
        </div>
    </div>   

    </>
  )
}

export default CourseCard