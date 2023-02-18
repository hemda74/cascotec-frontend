import React from 'react'
import styles from '../styles/BoardOfDirectors.module.css'
import mohamed from '../public/imagess/mohamedhamdy.jpg'
const BoardOfDirectors = () => {
  return (
    < >
    <div className="row">
    <div className={`card ${styles.cardOne}`}>
  <div className={`card-bio ${styles.cardBio}`}>
    <p className={`${styles.cardBioP}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
</div>
<div className={`card ${styles.cardOne}`}>
  <div className={`card-info ${styles.cardInfo}`}>
    <p className={`title ${styles.cardTitle}`}>John Doe</p>
    <p className={`subtitle ${styles.cardSubTitle}`}>Web Dev</p>
  </div>
  <div className={`card-bio ${styles.cardBio}`}>
    <p className={`${styles.cardBioP}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
</div>
<div className={`card ${styles.cardOne}`}>
  <div className={`card-info ${styles.cardInfo}`}>
    <p className={`title ${styles.cardTitle}`}>John Doe</p>
    <p className={`subtitle ${styles.cardSubTitle}`}>Web Dev</p>
  </div>
  <div className={`card-bio ${styles.cardBio}`}>
    <p className={`${styles.cardBioP}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
</div>
</div>
    </>
  )
}

export default BoardOfDirectors