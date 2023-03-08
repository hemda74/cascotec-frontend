import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import nd1 from '../public/imagess/nd1.jpg'
import nd2 from '../public/imagess/nd2.jpg'
import nd3 from '../public/imagess/nd3.jpg'
import styles from '../styles/GalleryDetails.module.css'
import {BsFacebook,BsTwitter,BsLinkedin} from 'react-icons/bs';
import {CgCalendarDates} from 'react-icons/cg'
const NewsDetails = () => {
  return (
    <>
        <div className={`vh-100 ${styles.mainDiv}`}>
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
                            <li className="me-2 ms-2">
                            <a className=" active" aria-current="page" href={'/'}>{`Home >`}</a>
                            </li>
                            <li className="me-2 ms-2">
                            <Link className="" href={'/news'}>{`Gallery >`}</Link>
                            </li>
                            <li className="me-2 ms-2">
                            <a className="" href="#">Gallery Details</a>
                            </li>
                        </ul>
                        </span>
                    </div>
                </div>
            </nav>
            <div className="container mt-4">
               <span className='fs-3 mt-3 fw-bold'>The Gulf Accreditation Center concluded its participation in Expo 2020 Dubai</span> 
                <div className={`mt-4`}>
                    <Image src={nd1} className={`rounded ${styles.mainImage} `} alt="The Gulf Accreditation Center concluded its participation in Expo 2020 Dubai"/>
                <p className='mt-5'>The Gulf Accreditation Center concluded its participation in Expo2020 Dubai, in the Pavilion of the Cooperation Council for the Arab States of the Gulf, with the establishment of the second accreditation bureau and a symposium on the role of accreditation in water quality and sustainability of water resources, in the presence of a number of people interested in conformity and quality affairs.</p>
                </div>
                <div className='mt-5 mb-5'>
                    <p className='fs-5'>Related Photos</p>
                    <div className="row mx-0">				
                    <div className="col-xl-2 col-lg-2 col-md-4 col-sm-12">
                    <div className="card_gallery shadow_none gallery">
                        <Image className='rounded' src={nd2} alt="image 1"/>
                    </div>
                </div>
                    <div className="col-xl-2 col-lg-2 col-md-4 col-sm-12">
                    <div className="card_gallery shadow_none gallery">
                        <Image src={nd3} className='rounded' alt="image 2"/>
                    </div>
                </div>
                                                        <div className="col-xl-2 col-lg-2 col-md-4 col-sm-12">
                    <div className="card_gallery shadow_none gallery">
                        <Image className='rounded' src={nd2} alt="image 3"/>
                    </div>
                </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default NewsDetails