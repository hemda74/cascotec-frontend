import Link from 'next/link';
import React from 'react'
import styles from'../styles/Hero.module.css'
const Hero = () => {
  return (
<>
<div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="3000">
    <img src="/images/home_page/hero/hero_1.png" className="d-block w-100" alt="..."/>
      <div className={`carousel-caption text-white d-md-block ${styles.carouselCaption}`}>
        <h1 data-trans="ServicesNav"></h1>
        <p className='fw-semibold text-white fs-4' data-trans="servicesbrief"></p>
        <Link href={'/services'}>
        <button className={`myInfo rounded ${styles.LinkButton}`} data-trans="ServicesNav"></button>
        </Link>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="3000">
    <img src="/images/home_page/hero/hero_2.png" className="d-block w-100" alt="..."/>
      <div className="carousel-caption text-white d-md-block">
        <h1 data-trans="AboutUsTitle"></h1>
        <p className='fw-semibold text-white fs-4' data-trans="OurobjectiveP"></p>
        <Link href={'/about'}>
        <button className={`myInfo rounded ${styles.LinkButton}`} data-trans="AboutUsTitle"></button>
        </Link>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="3000">
    <img src="/images/home_page/hero/hero_3.png" className="d-block w-100" alt="..."/>
      <div className="carousel-caption text-white d-md-block">
        <h1 data-trans="Courses"></h1>
        <p className='fw-semibold text-white fs-4' data-trans="cousesParageph"></p>
        <Link href={'/courses'}>
        <button className={`myInfo d-inline rounded ${styles.LinkButton}`} data-trans="Courses"></button>
        </Link>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</>  
)
}

export default Hero;