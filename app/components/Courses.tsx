import React from 'react'
import styles from '../styles/Courses.module.css'
const Courses = () => {
    return (
        <>
         <div className={`text-center ${styles.titleWord}`}>
            <h6 className="text-white fw-semibold mb-4" >{`Home > Courses`}</h6>
            <h2 className={`text-white fw-bold mb-5 `} >Courses</h2>
        </div>
        <div className={` container ${styles.formConatiner}`}>
            <div className="row gy-5 gx-lg-5">
               <div className={`col-lg-12 ${styles.contactCard}`}>
               </div>
            </div>
        </div>
                </>
  )
}

export default Courses