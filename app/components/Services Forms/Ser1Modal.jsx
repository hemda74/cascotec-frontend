import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from '../../styles/FormCourseModal.module.css';
// Service Modal component
const Ser1Modal = () => {
    const form = useRef();
    const name1 = useRef(null);
    const phone1 = useRef(null);
    const mail1 = useRef(null);
   const sendEmail = (e) => {
     e.preventDefault();
      
     emailjs.sendForm('service_5qqa4i3', 'template_8t7npaa', form.current, 'tMN89qaA4jrvOzV4Q')
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
    <div className="modal fade" id="Ser1Modal" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="Ser1Modal" aria-hidden="true">
        <div className={`modal-dialog modal-lg modal-dialog-centered ${styles.modalWidth}`}>
            <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="btn-close mb-0 mt-2" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body p-0">
                    <form ref={form} className={`p-4 mt-2 ${styles.contactCard}`} onSubmit={sendEmail}>
                        <div className='text-center mb-4'>
                            <span className={` fs-5 rounded mt-0 fw-bold `} data-trans="RequestNow" >Request Now</span>
                        </div>
                        <p data-trans="pleasefillform2"></p>                        <div className={`${styles.formGroup}`}>
                            <label data-trans="Name">Name</label>
                            <input className={`form-control mb-3  ${styles.formControl}`} ref={name1}  name="user_name" required/>
                        </div>
                        <div className={`${styles.formGroup}`}>
                            <label data-trans="Email">Email</label>
                            <input className={`form-control mb-3 ${styles.formControl}`} ref={mail1} type="email" name="user_email" required/>
                        </div> 
                        <div className={`${styles.formGroup}`}>
                            <label className='' data-trans="Phone"></label>
                            <input className={`form-control ${styles.formControl}`} ref={phone1} type='text' name="message" />
                        </div>
                        <button className={`myInfo p-2 fw-bold mt-4 rounded fs-6 ${styles.enrollButton}`} type="submit" value="Send" data-trans="sendmessage">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
};
export default Ser1Modal;
