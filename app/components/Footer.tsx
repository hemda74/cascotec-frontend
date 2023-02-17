import React, { Component } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import styels from '../styles/Footer.module.css'
import logo from '../public/logo.png'
import {BsFacebook,BsTwitter,BsLinkedin,BsGithub,BsFillArrowUpRightCircleFill, BsYoutube, BsInstagram} from 'react-icons/bs';
// footer Component design
const Footer = () => {
  return (
    <footer>
        <div className={`container-fluied mt-3 pt-5 pb-3  ${styels.footerCont}`}>
            <div className="row d-flex justify-content-center ms-2 me-2">
                <div className="col-md-6 col-lg-2 ms-3 me-3  ">
                    <div className="info">
                        <Image
                            alt="trash icon"
                            src={logo}
                            width={220}
                            height={90}
                        />         
                        <p className={`mt-4 ${styels.companybrief}`} data-trans="aboutCascoFooter">
                        Trust in the Conformity Assessment Bodies
                        </p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-1 pt-3">
                                     {/* handel links for other routes */}
                    <div className="links">
                       <span className=" me-5 fs-5 fw-bold" data-trans="supportFooter">Support</span>
                       <ul className="list-unstyled ln-lg mt-3">
                            <li><Link href="/" className={`nav-link fs-6`} id="link"><a className={`${styels.footerLink}`} data-trans="ContactUsFooter">Contact Us</a></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-6 col-lg-2 pt-3">
                    {/* handel links for other pages */}
                    <div className="links ">
                        <span className=" fs-5 me-5 fw-bold" data-trans="LinksFooter">Links</span>
                        <ul className="list-unstyled ln-lg mt-3 ">
                            <li><Link className={`nav-link mt-2`}href={'/services'}><a className={`${styels.footerLink}`} data-trans="ServicesFooter">Services</a></Link></li>
                            <li className='mt-2'><Link className={`nav-link `}href={'/accredited-bodies'}><a className={`${styels.footerLink}`}data-trans="AccreditedBodiesFooter">Accredited Bodies</a></Link></li>
                            <li className='mt-2'><Link className={`nav-link`}href={'/courses'}><a className={`${styels.footerLink}`} data-trans="CoursesFooter">Courses</a></Link></li>
                            <li className='mt-2'><Link className={`nav-link`}href={'documents'}><a className={`${styels.footerLink}`} data-trans="DocumentsFooter">Documents</a></Link></li>
                        </ul>    
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 pt-2">
                    <div className="contact">
                        <div className="">
                            <span className=" fw-bold fs-5" data-trans='NewsletterSubscriptionFooter'>
                            Newsletter Subscription
                            </span>
                            <p className="ln-lg mt-3 fw-semibold" data-trans='NewsletterSubscriptionFooterberif'>
                            Join our mailing list and receive our latest updates, recent CABs, training programs and etc. straight to your inbox</p>
                            <div className="form-group">
                                <div className="form-group">
                                    <div className="input-group mb-3">
                                    <input type="email" className="form-control" aria-label="" placeholder='Your Email Adrress...'/>
                                    <span className={`input-group-text ${styels.subsIcon}`}><BsFillArrowUpRightCircleFill/></span>
                                </div>
                            <div className={`m-auto mt-2`}>
                                <a href="https://twitter.com/AhmedHemdan72"  rel="noopener noreferrer" className={` me-3 ms-3 ${styels.footerA}`}>< BsTwitter size={25}/></a> 
                                <a href="https://www.facebook.com/profile.php?id=100009361588650" rel="noopener noreferrer" className={`me-3 ms-3 ${styels.footerA}`}>< BsFacebook size={25}/></a>
                                <a href='https://www.linkedin.com/in/ahmed-hemdan-69540820'  rel="noopener noreferrer" className={`me-3 ms-3  ${styels.footerA}`}> <BsLinkedin size={25}/></a>
                                <a href='https://www.linkedin.com/in/ahmed-hemdan-69540820' rel="noopener noreferrer" className={`me-3 ms-3  ${styels.footerA}`}> <BsInstagram size={25}/></a>
                                <a href="https://github.com/hemda74" rel="noopener noreferrer" className={`me-3 ms-3  ${styels.footerA}`}> <BsYoutube size={25}/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr className='mt-3'/>
            <div className={`mt-1  d-flex justify-content-center ${styels.footerAhmed1}`}>
                    <div className='m-auto'>
                        <span data-trans="CreatedByFooter">Created By</span> 
                        <span >
                                <a href="https://portoflio-six.vercel.app/" target="_blank" className={`me-1 ms-1 ${styels.footerAhmed}` } data-trans="AhmedHemdan"><span>Ahmed Hemdan</span></a>
                        </span>
                    </div>
                    <div className="copyright m-auto" >
                        <span data-trans="CascoCopyright">&copy; Copyright 2023</span>
                         <span data-trans="CascoCopyrightAll" className='ms-1 me-1'>. All Rights Reserved</span>
                         <span className={`${styels.footerAhmed} me-2 ms-2 `} data-trans='Cascocopyright'>CASCO</span>
                    </div>
            </div>
        </div>
    </div>
</footer>
    )
}
export default Footer;