import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from '../../styles/Footer.module.css'
import {RiSendPlaneFill} from 'react-icons/ri'
 const NewsLetter = () => {
  const form = useRef();
   const mail1 = useRef(null);
  const sendEmail = (e) => {
    e.preventDefault();
     
    emailjs.sendForm('service_5qqa4i3', 'template_31wglbd', form.current, 'tMN89qaA4jrvOzV4Q')
      .then((result) => {
          console.log(result.text);
          alert("Your request has been sent successfully... Please check your email for more information");
          mail1.current.value="";
      }, (error) => {
          console.log(error.text);
          alert(error)
      });
  };
  return (
    <>
        <div className="">
            <div className={`col-lg-12 ${styles.contactCard}`}>
                <form ref={form} className={``} onSubmit={sendEmail}>
                    <div className={`input-group mb-1  ${styles.formGroup}`}>
                        <input className={`form-control mt-2 ${styles.formControl}`} ref={mail1} placeholder='Your Email Adrress...' type="email" name="user_email" required/>         
                        <button className={`${styles.subsIcon} `} type="submit">
                        <RiSendPlaneFill className='m-0 p-0 mt-2' size={33}/>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </>
  );
};
export default NewsLetter;