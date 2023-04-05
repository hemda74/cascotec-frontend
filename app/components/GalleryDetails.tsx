import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import nd2 from '../public/imagess/nd2.jpg'
import nd3 from '../public/imagess/nd3.jpg'
import styles from '../styles/GalleryDetails.module.css'
import Footer from './Footer';

const NewsDetails = () => {
  return (
    <>
    <div className={` ${styles.mainCont}`}>   
         <div className={` vh-100 ${styles.mainDiv}`}>
            <nav className={`navbar navbar-expand-lg ${styles.navCont}`}>
                <div className={`container `}>
                    <a className="navbar-brand" href="#">Album details</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
                        </ul>
                        <span className="navbar-text">
                        <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
                            <li className="me-1 ms-1">
                            <a className=" active" aria-current="page" href={'/'}><small>{`Home >`}</small></a>
                            </li>
                            <li className="me-1 ms-1">
                            <a className="" href={'/gallery'}><small>{`Gallery >`}</small></a>
                            </li>
                            <li className="me-1 ms-1">
                            <a className="" href="#"><small>Gallery Details</small></a>
                            </li>
                        </ul>
                        </span>
                    </div>
                </div>
            </nav>
            <div className="container mt-4">
               <span className='fs-3 mt-3 fw-bold'>The Gulf Accreditation Center concluded its participation in Expo 2020 Dubai</span> 
                <div className='mt-5 mb-5'>
                    <div className="row mx-0">				
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
                    <div className="card_gallery shadow_none gallery">
                    <Link className="" href={'/gallery/images'}>
                        <Image className='rounded' src={nd2} alt="image 1"/>
                        </Link>
                    </div>
                    </div>
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
                        <div className="card_gallery shadow_none gallery">
                        <Link className="" href={'/gallery/images'}>
                            <Image src={nd3} className='rounded' alt="image 2"/>
                            </Link>
                        </div>
                    </div>
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
                        <div className="card_gallery shadow_none gallery">
                        <Link className="" href={'/gallery/images'}>
                            <Image className='rounded' src={nd2} alt="image 3"/>
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
                    <div className="card_gallery shadow_none gallery">
                    <Link className="" href={'/gallery/images'}>
                        <Image className='rounded' src={nd2} alt="image 1"/>
                        </Link>
                    </div>
                    </div>
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
                        <div className="card_gallery shadow_none gallery">
                        <Link className="" href={'/gallery/images'}>
                            <Image src={nd3} className='rounded' alt="image 2"/>
                            </Link>
                        </div>
                    </div>
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
                        <div className="card_gallery shadow_none gallery">
                        <Link className="" href={'/gallery/images'}>
                            <Image className='rounded' src={nd2} alt="image 3"/>
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
                    <div className="card_gallery shadow_none gallery">
                    <Link className="" href={'/gallery/images'}>
                        <Image className='rounded' src={nd2} alt="image 1"/>
                        </Link>
                    </div>
                    </div>
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
                        <div className="card_gallery shadow_none gallery">
                        <Link className="" href={'/gallery/images'}>
                            <Image src={nd3} className='rounded' alt="image 2"/>
                            </Link>
                        </div>
                    </div>                    
                    </div>
                </div>
            </div>
            <div className={`${styles.footerStyle} `}>
        <Footer/>
        </div>
        </div>
        </div>
    </>
  )
}

export default NewsDetails