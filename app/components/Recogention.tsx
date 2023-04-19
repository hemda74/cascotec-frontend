import React from 'react'
import styles from '../styles/Recogention.module.css'
const Recogention = () => {
  return (
    <>
        <div  className={`${styles.mainSection}`}>
            <div  className={` ${styles.mainDivRecogention}`}>
                <section className={`${styles.sectionRecogention}`}>
                    <div className={`${styles.conaninerRecogention}`}>
                        <div className="">
                            <div className="">
                                <div className={`${styles.cardRecognition} `}>
                        <span className='fs-4 fw-bold' data-trans="Internationalrecognition">International recognition</span>
                        <p className=' text-black-50 fw-semibold' data-trans="InternationalrecognitionParagraph">{`CASCO is distinguished by its technical expertise in the 17000 family standards, whether in qualification, training, or independent evaluation. Additionally, the company provides product management and branding systems through the iCASCO platform, which enables SASO, SFDA, and SABER trademark issuers to easily and efficiently manage conformity certification COC processes.`}</p>
                        {/* <div  className={`${styles.listImages}`}>
                             <div  className={`${styles.itemImages}`}>
                                <img src="https://gac.org.sa/wp-content/uploads/2022/05/ILAC.png" alt="" />
                            </div> 
                            <div  className={`${styles.itemImages}`}>
                                <img src="https://gac.org.sa/wp-content/uploads/2022/05/iaf.png" alt="" />
                            </div>
                            <div  className={`${styles.itemImages}`}>
                                <img src="https://gac.org.sa/wp-content/uploads/2022/05/ihaf.png" alt="" />
                            </div> 
                            <div  className={`${styles.itemImages}`}>
                                <img src="https://gac.org.sa/wp-content/uploads/2022/05/ARAC_Logo.png" alt="" />
                            </div>
                            <div  className={`${styles.itemImages}`}>
                                <img src="https://gac.org.sa/wp-content/uploads/2022/05/APAC_logo.png" alt="" />
                            </div>  
                        </div> */}
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

export default Recogention