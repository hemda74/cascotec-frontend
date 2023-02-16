import React from 'react'
import styles from '../styles/PagesHeader.module.css'
const PagesHeader = () => {
  return (
    <div className={`${styles.aboutHeader} d-flex `}>
            <span className='fs-2 text-light m-auto '>About Us</span>
        </div>
  )
}

export default PagesHeader