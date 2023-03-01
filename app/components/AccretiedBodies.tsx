import React from 'react'
import styles from '../styles/AccretiedBodies.module.css'
const AccretiedBodies = () => {
  return (
    <>
     <div className={`text-center ${styles.titleWord}`}>
        <h6 className="text-white fw-semibold mb-4" >{`Home > Accretied Bodies`}</h6>
        <h2 className={`text-white fw-bold mb-5 `} >Accretied Bodies</h2>
    </div>
    <div className={` container ${styles.formConatiner}`}>
        <div className="row gy-5 gx-lg-5">
          <div className={`col-lg-12 ${styles.contactCard}`}>
            <form action="forms/contact.php" method="post" role="form" className={` php-email-form ${styles.phpEmailForm}`}>
            <p> 500  Accretied </p>
              <div className="row">
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
              <div className="text-center"><button className=' myInfo p-2 rounded ' type="submit">Send Message</button></div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default AccretiedBodies
