import React from 'react'
import styles from '../styles/NavBar.module.css';
import Image from 'next/image';
import logo from '../public/logo.png'
import Link from 'next/link';
import {AiOutlineSearch} from 'react-icons/ai'
import LocalizationBtn from './LocalizationBtn';
const NavBar = () => {
  return (
    //design nav
<>
  <nav className={`navbar navbar-expand-lg sticky-top bg-white ${styles.navBar}`}>
    <div className={`container-fluid d-flex justify-content-between align-items-center ms-4 `}>
        <Link href={'/'} className="navbar-brand  ">
            <a><Image
                alt="trash icon"
                src={logo}
                width={200}
                height={90}
                />
            </a>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav m-auto ">
                <li className={`nav-item  ${styles.navItem}`}>
                    <Link href={'/'}  className={`nav-link`} id="link"><a><p className={`${styles.navLink}`} data-trans="HomeNav">Home</p></a></Link>
                </li>  
                <li className={`nav-item ms-4  ${styles.navItem}`}>
                    <Link href={'/about'}  className={`nav-link  ${styles.navLink}`} id="link"><a><p className={`${styles.navLink}`}data-trans="AboutCascoNav">About CASCO</p></a></Link>
                </li>
                <li className={`nav-item ms-4 ${styles.navItem}`}>
                    <Link href={'/about'}  className={`nav-link text-black pb-0 mb-0 ${styles.navLink}`} id="link"><a><p className={`${styles.navLink}`}data-trans="AboutCascoNav">About CASCO</p></a></Link>
                </li>
                <li className={`nav-item ms-4 ${styles.navItem}`}>
                    <Link href={'/about'}  className={`nav-link text-black pb-0 mb-0 ${styles.navLink}`} id="link"><a><p className={`${styles.navLink}`}data-trans="AboutCascoNav">About CASCO</p></a></Link>
                </li>
                <li className={`nav-item ms-4 ${styles.navItem}`}>
                    <Link href={'/about'}  className={`nav-link text-black pb-0 mb-0 ${styles.navLink}`} id="link"><a><p className={`${styles.navLink}`}data-trans="AboutCascoNav">About CASCO</p></a></Link>
                </li>
                <li className={`nav-item ms-4 ${styles.navItem}`}>
                    <Link href={'/about'}  className={`nav-link text-black pb-0 mb-0 ${styles.navLink}`} id="link"><a><p className={`${styles.navLink}`}data-trans="AboutCascoNav">About CASCO</p></a></Link>
                </li>
                <li className={`nav-item ms-4 ${styles.navItem}`}>
                    <Link href={'/about'}  className={`nav-link text-black pb-0 mb-0 ${styles.navLink}`} id="link"><a><p className={`${styles.navLink}`}data-trans="AboutCascoNav">About CASCO</p></a></Link>
                </li>      
                <li className={`nav-item ms-4 mt-0 ${styles.navItem}`}>
                    <LocalizationBtn/>
                </li>     
            </ul>
          </div>
    </div>
 </nav>
</>
  );
}

export default NavBar;