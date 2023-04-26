import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from '../../styles/ContactUs.module.css'
 const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4tqcs1z', 'template_0s1x01p', form.current, 'b0R16AlvPJzjsR8Ii')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} className={` p-4 mt-5 ${styles.contactCard}`} onSubmit={sendEmail}>
       <p data-trans="pleasefillform">Please fill out the form below, and one of our representatives will contact you within 24 hours.</p>
    <div className={`${styles.formGroup}`}>
      <label data-trans="Name">Name</label>
      <input className={`form-control  ${styles.formControl}`} type="text" name="user_name" required/>
      </div>
       <div className={`${styles.formGroup}`}>
      <label data-trans="Email">Email</label>
      <input className={`form-control ${styles.formControl}`} type="email" name="user_email" required/>
      </div> 
      <div className={`${styles.formGroup}`}>
      <label data-trans="Phone" ></label>
      <input className={` form-control ${styles.formControl}`} type='text' name="message" />
      </div>
      <button className={`myInfo p-2 rounded fs-6 ${styles.btnClass}`} type="submit" value="Send" data-trans="sendmessage"></button>
      
    </form>
  );
};
export default ContactUs