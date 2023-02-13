import React, { Component } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/logo.png'
import {BsFacebook,BsTwitter,BsLinkedin,BsGithub} from 'react-icons/bs';
// footer Component design
const Footer = () => {
  return (
    <footer className='mt-auto'>
        <div className="container-fluied mySecondary mt-3 p-5">
            <div className="row">
                <div className="col-md-6 col-lg-4 ">
                    <div className="info">
                        <Image
                            alt="trash icon"
                            src={logo}
                            width={220}
                            height={50}
                        />         
                        <p className="mt-4 fs-5" data-trans='CascoTitleFooter'>
                            CASCO
                            </p>    
                          <p data-trans='CascoSubTitleFooter'>All Your Needs About Books</p>
                        
                    </div>
                </div>
                <div className="col-md-6 col-lg-2 pt-3">
                    {/* handel links for other pages */}
                    <div className="links">
                        <span className="text-light fs-4">Links</span>
                        <ul className="list-unstyled  ln-lg mt-3">
                            <li><Link className={`nav-link fs-5`}href="/books">Books</Link></li>
                            <li><Link className={`nav-link fs-5`}href="/authors">Authors</Link></li>
                            <li><Link className={`nav-link fs-5`}href="/countries">Countries</Link></li>
                            <li><Link className={`nav-link fs-5`}href="/bookcategories">Categoires</Link></li>
                        </ul>    
                    </div>
                </div>
                <div className="col-md-6 col-lg-2 pt-3">
                                     {/* handel links for other routes */}
                    <div className="links">
                       <span className="text-light fs-5">About Us</span>
                       <ul className="list-unstyled  ln-lg mt-3">
                        <li> <Link href="/" className={`nav-link  fs-5`} id="link">Home</Link></li>
                            <li><Link className={`nav-link  fs-5`}href="/services" id="link">Our Services</Link></li>
                            <li><Link className={`nav-link  fs-5`}href="/about" id="link">About Us</Link></li>
                            <li><Link className={`nav-link  fs-5`}href="/">Our Numbers</Link></li>
                            <li><Link className={`nav-link  fs-5`}href="/contact">Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 pt-2">
                    <div className="contact">
                        <div className="">
                            <span className="text-light fs-5">
                                Contact Us
                            </span>
                            <p className="ln-lg mt-3 ">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium in quis aspernatur.
                            </p>
                            <a  className=" w-100 "  href=""> <span className='myPrimary p-2 rounded'>ahmedashrafhemdan@gmail.com </span></a>
                            <div className={`d-md-flex align-items-center mt-2`}>
                                <Link href="https://twitter.com/AhmedHemdan72" target="_blank" className="m-3" >< BsTwitter size={25}/></Link>
                                <Link href="https://www.facebook.com/profile.php?id=100009361588650" target="_blank" className="m-3">< BsFacebook size={25}/></Link>
                                <Link href="https://www.linkedin.com/in/ahmed-hemdan-695408201/" target="_blank" className="m-3"> <BsLinkedin size={25}/></Link>
                                <Link href="https://github.com/hemda74" target="_blank" className="m-3"> <BsGithub size={25}/></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}
export default Footer