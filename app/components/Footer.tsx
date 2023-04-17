import React, { Component } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import styels from '../styles/Footer.module.css'
import logo from '../public/logo.png'
import {BsFacebook,BsTwitter,BsLinkedin,BsFillArrowUpRightCircleFill, BsYoutube, BsInstagram} from 'react-icons/bs';
// footer Component design
const Footer = () => {
  return (
    <footer>
        <div className={`container-fluied mt-3 pt-5 pb-5 ${styels.footerCont}`}>
            <div className="row d-flex justify-content-center ms-2 me-2">
                <div className="col-md-6 col-lg-3   ">
                    <div className="info">
                        <Image
                            alt="casco logo"
                            src={logo}
                            width={250}
                            height={100}
                        />         
                        <small className={`mt-4 text-black  d-inline-block ${styels.companybrief}`} data-trans="aboutCascoFooter">
                        Trust in the Conformity Assessment Bodies
                        </small>
                    </div>
                </div>
                <div className="col-md-6 col-lg-2 pt-3">
                                     {/* handel links for other routes */}
                    <div className="links">
                       <span className="fs-6 fw-bold" data-trans="supportFooter">Support</span>
                       <ul className="list-unstyled ln-lg p-0 mt-3">
                            <li><Link href="/contact-us" className={`nav-link fs-6`} id="link"><a className={`${styels.footerLink}`} data-trans="ContactUsFooter"><small>Contact Us</small></a></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 pt-3">
                    {/* handel links for other pages */}
                    <div className="links ">
                        <span className="fs-5 fw-bold p-0 " data-trans="LinksFooter">Links</span>
                        <ul className="list-unstyled ln-lg mt-3 p-0 ">
                            <li><Link className={`nav-link mt-2`}href={'/services'}><a className={`${styels.footerLink}`} data-trans="ServicesFooter">Services</a></Link></li>
                            <li className='mt-2'><Link className={`nav-link `}href={'/our-clients'}><a className={`${styels.footerLink}`}data-trans="AccreditedBodiesFooter"><small>Our Clients</small></a></Link></li>
                            <li className='mt-2'><Link className={`nav-link`}href={'/courses'}><a className={`${styels.footerLink}`} data-trans="CoursesFooter"><small>Courses</small></a></Link></li>
                            <li className='mt-2'><Link className={`nav-link`}href={'documents'}><a className={`${styels.footerLink}`} data-trans="DocumentsFooter"><small>Documents</small></a></Link></li>
                        </ul>    
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 pt-2">
                    <div className="contact">
                        <div className="">
                            <small className=" fw-bold fs-5" data-trans='NewsletterSubscriptionFooter'>
                            Newsletter Subscription
                            </small>
                            <small className="ln-lg mt-3 mb-3 fw-semibold d-inline-block" data-trans='NewsletterSubscriptionFooterberif'>
                            Join our mailing list and receive our latest updates, recent CABs, training programs and etc. straight to your inbox</small>
                            <div className="form-group">
                                <div className="form-group">
                                    <div className={`input-group mb-1 `}>
                                    <input type="email" className={`form-control ${styels.emailInput}`} aria-label="" placeholder='Your Email Adrress...'/>
                                    <span className={`input-group-text ${styels.subsIcon}`}><BsFillArrowUpRightCircleFill/></span>
                                </div>
                            <div className={` mt-2 ${styels.iconsSocial}`}>
                                <Link href="/" className={` me-3 ms-3 ${styels.footerA}`}> <BsTwitter size={15}/></Link> 
                                <Link href="/" className={` me-3 ms-3 ${styels.footerA}`}> <BsFacebook size={15}/></Link>
                                <Link href='/' className={` me-3 ms-3 ${styels.footerA}`}> <BsLinkedin size={14}/></Link>
                                <Link href='/' className={` me-3 ms-3 ${styels.footerA}`}> <BsInstagram size={14}/></Link>
                                <Link href="/" className={` me-3 ms-3 ${styels.footerA}`}> <BsYoutube size={16}/></Link> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr className='mt-3'/>
            <div className={`mt-1  d-flex justify-content-between ${styels.footerAhmed1}`}>
                <p className={`${styels.copyRightsDiv}`}>
                    <span data-trans="CascoCopyright">&copy; Copyright 2023</span>
                    <span data-trans="CascoCopyrightAll" className='ms-1 me-1'>. All Rights Reserved</span>
                    <span className={`${styels.footerAhmed} me-1 ms-1`} data-trans='Cascocopyright'>CASCO</span>
                </p>
                <div className={`${styels.copyRightsDiv}`}>
                    <span data-trans="CreatedByFooter">Created By</span> 
                    <span className='me-1 ms-1'>
                        <a href="https://portoflio-six.vercel.app/" target="_blank" rel="noreferrer" className={` ${styels.footerAhmed}`} data-trans="AhmedHemdan"><span>Ahmed Hemdan</span></a>
                    </span>
                </div>
            </div>
        </div>
    </div>
</footer>
)
}
export default Footer;