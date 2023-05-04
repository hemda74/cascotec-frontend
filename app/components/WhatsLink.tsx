import React from 'react'
import {BsWhatsapp} from 'react-icons/bs'
import styles from '../styles/WhatsLink.module.css'
const WhatsLink = () => {
  return (
    <>
    <div className={`${styles.mainDiv}`}>
        <a href="https://wa.me/+201028485872">
           <BsWhatsapp size={30} className={`${styles.iconStyle}`}/>
        </a>
        <div className={`tooltip fade bs-tooltip-top show ${styles.secondDiv}`}>
        </div>
    </div>
    </>
  )
}

export default WhatsLink