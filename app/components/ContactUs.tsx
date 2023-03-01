import React from 'react'
import { GiShakingHands } from 'react-icons/gi'
import styles from '../styles/ContactUs.module.css'
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
            <div className={`card-body col-xl-6 col-lg-6 col-md-12 col-sm-12 p-4 d-flex justify-content-center align-items-center`}>
            <div className={`  col-lg-6 col-sm-12 justify-content-center align-items-center `}>
                        <p className={``}>
                        <GiShakingHands  size={40}/>
                        </p>
                        <div className='mt-2  '>
                        <p className=''>+20 112 1900 466</p>
                        </div>
                        <p className={``}>
                        <GiShakingHands  size={40}/>
                        </p>
                        <div className='mt-2  '>
                        <p className=''>+20 112 1900 466</p>
                        </div>
                    </div>
                    <div className="col-lg-5"></div>
                    <div className={` col-lg-4 col-sm-12 justify-content-center align-items-center`}>
                        <p className={``}>
                        <GiShakingHands  size={40}/>
                        </p>
                        <div className='mt-2  '>
                        <p className=''>+20 112 1900 466</p>
                        </div>
                        <p className={``}>
                        <GiShakingHands  size={40}/>
                        </p>
                        <div className='mt-2  '>
                        <p className='d-inline-block'>Kingdom of Saudia Arabia P.O.Box 85245 Riyadh 11691</p>
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
      <div className="container">

        <div className="row gy-5 gx-lg-5">

          <div className="col-lg-1">
          </div>

          <div className="col-lg-10">
            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required/>
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required/>
                </div>
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required/>
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" placeholder="Message" required></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>
          <div className="col-lg-2"></div>
        </div>

      </div>
    </section>
   </>
  )
}

export default ContactUs