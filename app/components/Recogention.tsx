import React from 'react'
import styles from '../styles/Recogention.module.css'
const Recogention = () => {
  return (
    <>
    <div  className="row">
        <div  className={`col-sm-12 ${styles.mainDivRecogention}`}>
        <section  className={`${styles.sectionRecogention}`}>
        <div  className={`container ${styles.conaninerRecogention}`}>
            <div  className="row justify-content-between">
                <div  className="col-xl-5 col-lg-9 col-md-12 offset-xl-2 offset-lg-1 offset-md-0">
                    <div  className={`${styles.cardRecognition} m-auto`}>
                        <span className='fs-4 fw-bold'>International recognition</span>
                        <p className='text-black-50'>The GCC was distinguished by providing courses, seminars, and training programs via online technology in line with the circumstances that may arise, and in keeping with the progress and development of information technology. In addition, we offer offline courses. </p>
                        <div  className={`${styles.listImages}`}>
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
                        </div>
                    </div>
                </div>
                <div  className=" col-xl-7 col-lg-5"></div>
            </div>
        </div> </section></div></div>
    </>
  )
}

export default Recogention