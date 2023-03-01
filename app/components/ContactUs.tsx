import React from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs'
import {BiWorld} from 'react-icons/bi'
import {FiMail} from 'react-icons/fi'
import styles from '../styles/ContactUs.module.css'
import { FaFax, FaMapMarkerAlt } from 'react-icons/fa'
const ContactUs = () => {
  return (
   <>
     <section id="contact" className="contact">
     <div className={`text-center ${styles.titleWord}`}>
          <h6 className="text-white fw-semibold mb-4" data-trans="routeContactUs">{`Home > Contact Us`}</h6>
          <h2 className="text-white fw-bold mb-5" data-trans="ContactUs">Contact Us</h2>
          </div>
      <div className="container">
        <div className="section-header">
        <div className="row mx-0 d-flex justify-content-around align-items-center">
            <div className="col-lg-3"></div>
            <div className={`card-body col-xl-6 col-lg-6 col-md-12 col-sm-12 p-4 d-flex justify-content-center align-items-center ${styles.cardBobyIcons}`}>
            <div className={`col-lg-6 col-sm-12 justify-content-center align-items-center row ${styles.firstIcons}`}>
                        <p className={`${styles.iconsColor}`}>
                        <BsFillTelephoneFill  size={33}/>
                        </p>
                        <p className=''>+20 112 1900 466</p>
                        <p className={`${styles.iconsColor}`}>
                        <FiMail  size={30}/>
                        </p>
                        <p className='mt-0 me-2'>info@casco.com</p>
                        
                    </div>
                    <div className="col-lg-2"></div>
                    <div className={` row col-lg-6 col-sm-12 col-md-6 justify-content-center align-items-center`}>
                    <div className=' col-sm-12'>
                    <p className={`${styles.iconsColor}`}>
                        <FaFax  size={30}/>
                        </p>
                        <p className=''>+20 112 1900 466</p>
                        </div>
                        <div className=' col-sm-12'>
                        <p className={`${styles.iconsColor2}`}>
                        <FaMapMarkerAlt  size={35} />
                        </p>
                        <p className=''>Kingdom of Saudia Arabia P.O.Box 85245 Riyadh 11691</p>
                        </div>
                    </div>             
            </div>
            <div className="col-lg-3"></div>
        </div>
        </div>
      </div>
      <div className={`${styles.mapContact}`}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.623773892965!2d46.62362161499904!3d24.671075184143564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f1d573927541d%3A0xb9bf38666935b508!2sGCC%20Accreditation%20Center%20-%20GAC!5e0!3m2!1sen!2seg!4v1612347619354!5m2!1sen!2seg" frameBorder={0} allowFullScreen></iframe>
      </div>
      <div className={` container ${styles.formConatiner}`}>
        <div className="row gy-5 gx-lg-5">
          <div className={`col-lg-12 ${styles.contactCard}`}>
            <form action="forms/contact.php" method="post" role="form" className={` php-email-form ${styles.phpEmailForm}`}>
              <div className="row">
              <p>Please fill out the form below, and one of our representatives will contact you within 24 hours.</p>
                <div className={`col-md-6 form-group mt-4 ${styles.formGroup}`}>
                  <input type="text" name="name" className={`form-control ${styles.formControl}`} id="name" placeholder="Your Name" required/>
                </div>
                <div className={`col-md-6 form-group mt-4  ${styles.formGroup}`}>
                  <input type="email" className={`form-control ${styles.formControl}`} name="email" id="email" placeholder="Your Email" required/>
                </div>
                <div className={`col-md-6 form-group mt-4 ${styles.formGroup}`}>
                <select  className={`form-select ${styles.formControl}`}  id="site-holidayes-input" >
                      <option>Contact</option>
                      <option>Inquiry</option>
                      <option>Complaints $ Seggestions</option>
                      <option>Technical Support</option>
                  </select>                </div>
                <div className={`col-md-6 form-group mt-3 mt-4 ${styles.formGroup}`}>
                <input type="text" name="subject" className={`form-control ${styles.formControl}`} id="subject" placeholder="Subject" required/>
                </div>
              </div>
              <div className={`form-group mt-4 ${styles.formGroup}`}>
                <textarea className="form-control" name="message" placeholder="Message" rows={5} required></textarea>
              </div>
              <div className="my-3">
                <div className={`loading ${styles.loadingMassage}`}>Loading</div>
                <div className={`error-message ${styles.errorMassage}`}></div>
                <div className={`sent-message ${styles.sentMassage}`}>Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button className={`myInfo p-2 rounded ${styles.btnClass} `} type="submit">Send Message</button></div>
            </form>
          </div>
        </div>
      </div>
    </section>
   </>
  )
}

export default ContactUs