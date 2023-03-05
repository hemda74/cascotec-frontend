import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import styles from '../styles/Documents.module.css'
import servicesimage from '../public/imagess/servicesimage.jpg'
const Documents = () => {
  return (
<>
    <div className={`text-center ${styles.titleWord}`}>
        <h6 className="text-white fw-semibold mb-4">{`Home > Documents`}</h6>
        <h2 className={`text-white fw-bold mb-5 `}>Documents</h2>
    </div>
    <div className={` container `}>
            <div className="row ">
            <div className="col-3">
            </div>
            </div>
        </div>
        <div className={` container ${styles.formConatiner}`}>
        <div className="row gy-5 gx-lg-5">
          <div className={`col-lg-12 ${styles.contactCard}`}>
            <form action="forms/contact.php" method="post" role="form" className={` php-email-form ${styles.searchCard}`}>
            <p>25  Upcoming Course </p>
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
        <div className="container">
            <div className="row"></div></div>
   
</>
  )
}

export default Documents;