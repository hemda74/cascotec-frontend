import React from 'react'
import styles from '../styles/NavBar.module.css';
import Image from 'next/image';
import logo from '../public/logo.png'
import Link from 'next/link';
import {AiOutlineSearch} from 'react-icons/ai'
import LocalizationBtn from './LocalizationBtn';
import LoginBtn from './LoginBtn';
const NavBar = () => {
  return (
    //design nav
<>
  <nav className={`navbar navbar-expand-lg sticky-top bg-white ${styles.navBar}`}>
    <div className={`container-fluid d-flex justify-content-between align-items-center ms-4 `}>
        <Link href={'/'} className="navbar-brand ">
            <a><Image
                alt="casco logo"
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
                <li className={`nav-item ms-4 ${styles.navItem}`}>
                    <Link href={'/'}  className={`nav-link`} id="link"><a><span className={`${styles.navLink}`} data-trans="HomeNav">Home</span></a></Link>
                </li> 
                <li className={`nav-item dropdown ms-4 ${styles.navItem2} `}>
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <p className={`${styles.navLink2}`} data-trans="AboutCascoNav">About CASCO</p>
                    </a>
                    <ul className={`dropdown-menu ${styles.ulDropDown}  `} aria-labelledby="navbarDropdown">
                        <li className={`nav-item   ${styles.navItem}`}>
                            <Link href={'/about'}  className={`nav-link`} id="link"><a className='d-flex'><p className={`${styles.navLink} me-2 ms-2`}data-trans="AboutUsNav">About Us</p></a></Link>
                        </li>
                        <li className={`nav-item  ${styles.navItem}`}>
                            <Link href={'/about/board-of-directors'}  className={`nav-link`} id="link"><a className='d-flex'><p className={`${styles.navLink} me-2 ms-2`}data-trans="BoardOfDirectorsNav">Board Of Directors</p></a></Link>
                        </li>
                        <li className={`nav-item   ${styles.navItem}`}>
                            <Link href={'/about/director-manger'}  className={`nav-link`} id="link"><a className='d-flex'><p className={`${styles.navLink} me-2 ms-2`}data-trans="DirectorMangerNav">Director Manger</p></a></Link>
                        </li>
                        {/* commented till need  */}
                         <li className={`nav-item  ${styles.navItem}`}>
                            <Link href={'/about/our-values'}  className={`nav-link `} id="link"><a  className='d-flex'><p className={`${styles.navLink} me-2 ms-2`}data-trans="OurValuesNav">Our Values</p></a></Link>
                        </li>
                        <li className={`nav-item   ${styles.navItem}`}>
                            <Link href={'/about/rights-and-duties'}  className={`nav-link `} id="link"><a className='d-flex'><p className={`${styles.navLink} me-2 ms-2`}data-trans="CASCORightsAndDutiesNav">CASCO’s Rights And Duties</p></a></Link>
                        </li>
                        <li className={`nav-item `}>
                            <Link href={'/about/stakeholders-advisory-committee'}  className={`nav-link `} id="link"><a className='d-flex'><p className={`${styles.navLink} me-2 ms-2`}data-trans="StakeholdersAdvisoryCommitteeNav">Stakeholders Advisory Committee</p></a></Link>
                        </li>
                    </ul>
                </li>
                <li className={`nav-item ms-4 ${styles.navItem}`}>
                    <Link href={'/accredited-bodies'}  className={`nav-link text-black pb-0 mb-0 ${styles.navLink}`} id="link"><a><span className={`${styles.navLink}`}data-trans="AccreditedBodiesNav">Accredited Bodies</span></a></Link>
                </li>
                <li className={`nav-item ms-4 ${styles.navItem}`}>
                    <Link href={'/services'}  className={`nav-link text-black pb-0 mb-0 ${styles.navLink}`} id="link"><a><p className={`${styles.navLink}`}data-trans="ServicesNav">Services</p></a></Link>
                </li>
                <li className={`nav-item ms-4 ${styles.navItem}`}>
                    <Link href={'/courses'}  className={`nav-link text-black pb-0 mb-0 ${styles.navLink}`} id="link"><a><p className={`${styles.navLink}`}data-trans="CoursesNav">Courses</p></a></Link>
                </li>
                <li className={`nav-item ms-4  ${styles.navItem}`}>
                    <Link href={'/documents'}  className={`nav-link text-black pb-0 mb-0 ${styles.navLink}`} id="link"><a><p className={`${styles.navLink}`}data-trans="DocumentsNav">Documents</p></a></Link>
                </li>
                <li className={`nav-item dropdown ms-4 ${styles.navItem2} `}>
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <p className={`${styles.navLink2}`} data-trans="MediaCenterNav">Media Center</p>
                    </a>
                    <ul className={`dropdown-menu ${styles.ulDropDown2}`} aria-labelledby="navbarDropdown">
                        <li className={`nav-item   ${styles.navItem}`}>
                            <Link href={'/news'}  className={`nav-link  ${styles.navLink}`} id="link"><a className='d-flex'><p className={`${styles.navLink}`}data-trans="NewsNav">News</p></a></Link>
                        </li>
                        <li className={`nav-item  ${styles.navItem}`}>
                            <Link href={'/gallery'}  className={`nav-link`} id="link"><a className='d-flex'><p className={`${styles.navLink}`}data-trans="GalleryNav">Gallery</p></a></Link>
                        </li>
                        <li className={`nav-item   ${styles.navItem}`}>
                            <Link href={'/educational-booklets'}  className={`nav-link`} id="link"><a className='d-flex'><p className={`${styles.navLink}`}data-trans="EducationalBookletsNav">Educational Booklets</p></a></Link>
                        </li>
                        <li className={`nav-item  ${styles.navItem}`}>
                            <Link href={'/visual-presentations'}  className={`nav-link `} id="link"><a className='d-flex'><p className={`${styles.navLink}`}data-trans="VisualPresentationsNav">Visual Presentations</p></a></Link>
                        </li>
                        <li className={`nav-item   ${styles.navItem}`}>
                            <Link href={'/events'}  className={`nav-link `} id="link"><a className='d-flex'><p className={`${styles.navLink}`} data-trans="EventsNav">Events</p></a></Link>
                        </li>
                    </ul>
                </li>  
                <li className={`nav-item ms-4 ${styles.navItem}`}>
                    <Link href={'/contact-us'}  className={`nav-link text-black pb-0 mb-0 ${styles.navLink}`} id="link"><a><p className={`${styles.navLink}`}data-trans="ContactUsNav">Contact Us</p></a></Link>
                </li>        
            </ul>
            <div className="d-flex">
                <span className={`${styles.searchIcon} me-3 ms-3 mt-3`}>
                    <AiOutlineSearch size={30}/>
                </span>
                <div className='me-3 ms-3'>
                    
                    <LoginBtn />
            
                </div>
                    <LocalizationBtn/>
            </div>
        </div>
    </div>
 </nav>
</>
  );
}

export default NavBar;