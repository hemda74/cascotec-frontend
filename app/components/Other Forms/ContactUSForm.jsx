import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from '../../styles/ContactUs.module.css'
 const ContactUsf = () => {
  const form = useRef();
   const name1 = useRef(null);
   const phone1 = useRef(null);
   const mail1 = useRef(null);
  const sendEmail = (e) => {
    e.preventDefault();
     
    emailjs.sendForm('service_5qqa4i3', 'template_ura9f76', form.current, 'tMN89qaA4jrvOzV4Q')
      .then((result) => {
          console.log(result.text);
          alert("Your request has been sent successfully... Please check your email for more information");
          name1.current.value ="";
          mail1.current.value="";
          phone1.current.value=""
      }, (error) => {
          console.log(error.text);
          alert(error)
      });
  };
  return (
    <>
        <div className="row gy-5 gx-lg-5">
            <div className={`col-lg-12 ${styles.contactCard}`}>
            <h6 data-trans="pleasefillform">Please fill out the form below, and one of our representatives will contact you within 24 hours.</h6>
                <form ref={form} className={`p-4`} onSubmit={sendEmail}>
                    <div className="row">
                        <div className={`${styles.formGroup} col-lg-6 col-xl-6 col-md-6 col-sm-12 col-xs-6`}>
                          <label data-trans="Name">Name</label>
                          <input className={`form-control mt-2 ${styles.formControl}`} ref={name1}  name="user_name" required/>
                        </div>
                      <div className={`${styles.formGroup} col-lg-6 col-xl-6 col-md-6 col-sm-12 col-xs-6`}>
                          <label data-trans="Email">Email</label>
                          <input className={`form-control mt-2 ${styles.formControl}`} ref={mail1} type="email" name="user_email" required/>
                      </div> 
                      <div className={`${styles.formGroup}`}>
                          <label data-trans="Message"></label>
                          <textarea className={`mt-2 form-control`} name="message" ref={phone1} rows={5} required></textarea>
                      </div>
                      <div className="text-center">
                          <button className={`myInfo p-3 rounded fs-6 ${styles.btnClass}`} type="submit" data-trans="sendmessage">Send Message</button>
                      </div>
                    </div>
                </form>
            </div>
        </div>
    </>
  );
};
export default ContactUsf