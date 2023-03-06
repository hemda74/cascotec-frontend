import React from 'react'
import Link from 'next/link'
import styles from '../styles/NewsDetails.module.css'
const NewsDetails = () => {
  return (
    <>
        <div className='vh-100'>
            <nav className={`navbar navbar-expand-lg ${styles.navCont}`}>
                <div className={`container `}>
                    <a className="navbar-brand" href="#">News details</a>
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
                            <Link className="" href={'/news'}>{`News >`}</Link>
                            </li>
                            <li className="me-2 ms-2">
                            <a className="" href="#">News Details</a>
                            </li>
                        </ul>
                        </span>
                    </div>
                </div>
            </nav>
            <div className="container mt-4">
               <span className='fs-3 mt-3 fw-bold'>The Gulf Accreditation Center concluded its participation in Expo 2020 Dubai</span> 
               <nav className={`navbar navbar-expand-lg ${styles.navCont2}`}>
                <div className={`container `}>
                    <a className="navbar-brand" href="#">News details</a>
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
                            <Link className="" href={'/news'}>{`News >`}</Link>
                            </li>
                            <li className="me-2 ms-2">
                            <a className="" href="#">News Details</a>
                            </li>
                        </ul>
                        </span>
                    </div>
                </div>
            </nav>
            </div>
        </div>
    </>
  )
}

export default NewsDetails