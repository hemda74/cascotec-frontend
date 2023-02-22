import React from 'react'
import styles from '../styles/OurValues.module.css'
const OurValues = () => {
  return (
   <>
      <section id="team" className={`${styles.boardOfDirc} vh-100`}>
          <div className={`text-center ${styles.titleWord}`}>
            <h6 className="text-white fw-semibold mb-4" data-trans="routeourvalues">{`Home > About CASCO > Our Values`}</h6>
            <h2 className={`text-white fw-bold mb-5 `} data-trans="ourValuesTitle">Our Values</h2>
          </div>
        <div className="row gy-5">
          <div className="col-xl-4 col-md-6 d-flex" data-aos="zoom-in" data-aos-delay="200">
            <div className={`${styles.teamMember2}`}>
                <p className='fs-3' data-trans="MrAhmedMahrous"></p>
                <p className='fs-5' data-trans='BusinessDevelopmentManager'>Business Development Manager</p>
            </div>
          </div>
                    
          </div>
      </section>
   </>
  )
}

export default OurValues