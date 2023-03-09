import React from 'react'
import styles from '../styles/Courses.module.css'
import Link from 'next/link'
import Image from 'next/image'
const EducationalBooklets= () => {
    return (
        <>
         <div className={`text-center ${styles.titleWord}`}>
            <h6 className="text-white fw-semibold mb-4" >{`Home > Educational Booklets`}</h6>
            <h2 className={`text-white fw-bold mb-5 `} >Educational Booklets</h2>
        </div>
        <div className={` container ${styles.formConatiner}`}>
        <div className="row gy-5 gx-lg-5">
          <div className={`col-lg-12 ${styles.contactCard}`}>
            <form action="forms/contact.php" method="post" role="form" className={`  ${styles.searchCard}`}>
              <div className=" d-flex justify-content-between">
              <div className={`col-md-4 col-lg-4 col-sm-6 col-xs-6  form-group mt-4 ${styles.formGroup}`}>
              <p>500  Accretied </p>
              </div>
                <div className={`col-md-4 col-lg-2 col-sm-6 col-xs-6  form-group mt-4 ${styles.formGroup}`}>
                  <input type="text" name="name" className={`form-control ${styles.formControl}`} id="name" placeholder="Your Name" required/>
                </div>
                </div>
                </form></div></div>
                </div>

        </>
  )
}

export default EducationalBooklets;