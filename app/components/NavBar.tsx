import React from 'react'
import styles from '../styles/NavBar.module.css';
import Image from 'next/image';
import logo from '../public/logo.png'
import Link from 'next/link';
import {AiOutlineSearch} from 'react-icons/ai'
import LocalizationBtn from './LocalizationBtn';
import LoginBtn from './LoginBtn';
import SearchModal from './SearchModal';
const NavBar = () => {
  return (
    //design nav
<>
  <nav className={`navbar navbar-expand-lg sticky-top bg-white ${styles.navBar}`}>
    <div className={`container-fluid d-flex justify-content-between align-items-center ms-4 `}>
        <Link href={'/'} className="navbar-brand me-5 mb-0 mt-0 ms-5">
            <a><Image
                className="me-0 mb-0 mt-0 ms-1"
                alt="casco logo"
                src={logo}
                width={150}
                height={70}
                />
            </a>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav m-auto ">
                <li className={`nav-item ms-3 ${styles.navItem}`}>
                    <Link href={'/'}  className={`nav-link`} id="link"><a className={`${styles.navLink}`} data-trans="HomeNav">Home</a></Link>
                </li> 
                <li className={`nav-item dropdown  ms-3  ${styles.navItem2} `}>
                    <a  href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"
                   className={`nav-link dropdown-toggle ${styles.navLink2}`} data-trans="AboutCascoNav">About CASCO
                    </a>
                    <ul className={`dropdown-menu ${styles.ulDropDown}`} aria-labelledby="navbarDropdown">
                        <li className={`nav-item ${styles.navItemDropDown} ms-2 me-2`}>
                            <Link href={'/about'}  className={`nav-link`} id="link"><a className='d-flex'><p className={`${styles.navLink} me-4 ms-4 mt-2 mb-2`}data-trans="AboutUsNav">About Us</p></a></Link>
                        </li>
                        <li className={`nav-item ${styles.navItemDropDown} ms-2 me-2`}>
                            <Link href={'/about/our-team'}  className={`nav-link`} id="link"><a className='d-flex'><p className={`${styles.navLink} me-4 ms-4 mt-2 mb-2`}data-trans="BoardOfDirectorsNav">Our Team</p></a></Link>
                        </li>
                        <li className={`nav-item ${styles.navItemDropDown} ms-2 me-2`}>
                            <Link href={'/about/director-general'}  className={`nav-link`} id="link"><a className='d-flex'><p className={`${styles.navLink} me-4 ms-4 mt-2 mb-2`}data-trans="DirectorMangerNav">Director Manger</p></a></Link>
                        </li>
                        {/* commented till need  */}
                        <li className={`nav-item ${styles.navItemDropDown} ms-2 me-2`}>
                            <Link href={'/about/our-values'}  className={`nav-link `} id="link"><a  className='d-flex'><p className={`${styles.navLink} me-4 ms-4 mt-2 mb-2`}data-trans="OurValuesNav">Our Values</p></a></Link>
                        </li>
                        <li className={`nav-item ${styles.navItemDropDown} ms-2 me-2`}>
                            <Link href={'/about/rights-and-duties'}  className={`nav-link `} id="link"><a className='d-flex'><p className={`${styles.navLink} me-4 ms-4 mt-2 mb-2`}data-trans="CASCORightsAndDutiesNav">CASCO’s Rights And Duties</p></a></Link>
                        </li>
                        <li className={`nav-item ${styles.navItemDropDown} ms-2 me-2`}>
                            <Link href={'/about/stakeholders-advisory-committee'}  className={`nav-link `} id="link"><a className='d-flex'><p className={`${styles.navLink} d-inline me-4 ms-4 mt-2 mb-2`} data-trans="StakeholdersAdvisoryCommitteeNav">Stakeholders Advisory Committee</p></a></Link>
                        </li>
                    </ul>
                </li>
                <li className={`nav-item ms-3 ${styles.navItem}`}>
                    <Link href={'/our-clients'}  className={`nav-link text-black pb-0 mb-0 ${styles.navLink}`} id="link"><a className={`${styles.navLink}`}data-trans="AccreditedBodiesNav">Our Clients</a></Link>
                </li>
                <li className={`nav-item ms-3 ${styles.navItem}`}>
                    <Link href={'/services'}  className={`nav-link text-black pb-0 mb-0 ${styles.navLink}`} id="link"><a className={`${styles.navLink}`}data-trans="ServicesNav">Services</a></Link>
                </li>
                <li className={`nav-item ms-3 ${styles.navItem}`}>
                    <Link href={'/courses'}  className={`nav-link text-black pb-0 mb-0 ${styles.navLink}`} id="link"><a className={`${styles.navLink}`}data-trans="CoursesNav">Courses</a></Link>
                </li>
                <li className={`nav-item ms-3  ${styles.navItem}`}>
                    <Link href={'/documents'}  className={`nav-link text-black pb-0 mb-0 ${styles.navLink}`} id="link"><a className={`${styles.navLink}`}data-trans="DocumentsNav">Documents</a></Link>
                </li>
                <li className={`nav-item dropdown ms-3  ${styles.navItem2}`}>
                    <a  href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"
                     className={`nav-link dropdown-toggle ${styles.navLink2}`} data-trans="MediaCenterNav">Media Center</a>
                    <ul className={`dropdown-menu ${styles.ulDropDown2}`} aria-labelledby="navbarDropdown">
                        <li className={`nav-item ${styles.navItemDropDown} mt-2 ms-2 me-2`}>
                            <Link href={'/news'}  className={`nav-link  ${styles.navLink}`} id="link"><a className='d-flex'><p className={`${styles.navLink} me-4 ms-4 mt-2 mb-2 `}data-trans="NewsNav">News</p></a></Link>
                        </li>
                        <li className={`nav-item ${styles.navItemDropDown} ms-2 me-2`}>
                            <Link href={'/gallery'}  className={`nav-link`} id="link"><a className='d-flex'><p className={`${styles.navLink} me-4 ms-4 mt-2 mb-2`}data-trans="GalleryNav">Gallery</p></a></Link>
                        </li>
                        <li className={`nav-item ${styles.navItemDropDown} ms-2 me-2`}>
                            <Link href={'/educational-booklets'}  className={`nav-link`} id="link"><a className='d-flex'><p className={`${styles.navLink} d-inline me-4 ms-4 mt-2 mb-2`}data-trans="EducationalBookletsNav">Educational Booklets</p></a></Link>
                        </li>
                        <li className={`nav-item ${styles.navItemDropDown} ms-2 me-2`}>
                            <Link href={'/visual-presentations'}  className={`nav-link `} id="link"><a className='d-flex'><p className={`${styles.navLink} d-inline me-4 ms-4 mt-2 mb-2`}data-trans="VisualPresentationsNav">Visual Presentations</p></a></Link>
                        </li>
                        <li className={`nav-item ${styles.navItemDropDown} ms-2 me-2 mb-2`}>
                            <Link href={'/events'}  className={`nav-link `} id="link"><a className='d-flex'><p className={`${styles.navLink} me-4 ms-4 mt-2 mb-2`} data-trans="EventsNav">Events</p></a></Link>
                        </li>
                    </ul>
                </li>  
                <li className={`nav-item ms-3 ${styles.navItem}`}>
                    <Link href={'/contact-us'}  className={`nav-link text-black pb-0 mb-0 ${styles.navLink}`} id="link"><a className={`${styles.navLink}`}data-trans="ContactUsNav">Contact Us</a></Link>
                </li>        
            </ul>
            <div className={`d-flex me-4 ms-4`}>
                    {/* <span className={`${styles.searchIcon} me-2 ms-2 mt-3`}>
                    <a data-bs-toggle="modal"
                        data-bs-target="#SearchModal">
                        <AiOutlineSearch size={30}/>
                        </a>
                    </span> */}
            
                <div className='me-3 ms-3'>
                    <LoginBtn />
                </div>
                    <LocalizationBtn/>
            </div>
        </div>
    </div>
 </nav>
 <SearchModal/>
</>
  );
}

export default NavBar;