import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from '../../styles/ContactUs.module.css'
 const ContactUs = () => {
  const form = useRef();
   const name1 = useRef(null);
   const phone1 = useRef(null);
   const mail1 = useRef(null);
  const sendEmail = (e) => {
    e.preventDefault();
     
    emailjs.sendForm('service_5qqa4i3', 'template_ibedz4l', form.current, 'tMN89qaA4jrvOzV4Q')
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
    
    <form ref={form} className={`p-4 mt-5 ${styles.contactCard}`} onSubmit={sendEmail}>
    <div className='text-center mb-4'>
       <span className={`myInfo rounded fw-bold ${styles.enrollButton}`} data-trans="EnrollNow" >Enroll Now</span>
       </div>
       <p data-trans="pleasefillform2"></p>
           <div className={`${styles.formGroup}`}>
      <label data-trans="Name">Name</label>
      <input className={`form-control ${styles.formControl}`} ref={name1}  name="user_name" required/>
      </div>
       <div className={`${styles.formGroup}`}>
      <label data-trans="Email">Email</label>
      <input className={`form-control ${styles.formControl}`} ref={mail1} type="email" name="user_email" required/>
      </div> 
      <div className={`${styles.formGroup}`}>
      <label data-trans="Phone" ></label>
      <input className={` form-control ${styles.formControl}`} ref={phone1} type='text' name="message" />
      </div>
      <button className={`myInfo p-2 fw-bold rounded fs-6 ${styles.btnClass}`} type="submit" value="Send" data-trans="sendmessage">Send Message</button>
    </form>
    </>
  );
};
export default ContactUs