import React from 'react'
import styles from '../styles/ApplyAcc.module.css'
// Apply Accrediation Component
 const ApplyAcc = () => {
  return (
    <>
        <div className={`${styles.mainContanier}`}>
            <span className='fw-bold fs-1 text-white'>
                Ready to be accredited?
            </span>
            <span className='fs-4 fw-semibold text-white text-center'>
                GCC Accreditation Center provides accreditation services in wide range of management schemes
            </span>
            <button className={`mt-4 rounded ${styles.SearchButton}`}>
                <span className='fs-6 fw-bold'>
                    APPLY FOR ACCREDITATION NOW
                </span>
            </button>
        </div>
    </>
  )
}
export default ApplyAcc;
