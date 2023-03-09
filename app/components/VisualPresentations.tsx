import React from 'react'
import styles from '../styles/EducationalBooklets.module.css'
import Link from 'next/link'
import vp from '../public/imagess/visualpresentations.jpg'
import Image from 'next/image'
import { VscFilePdf } from 'react-icons/vsc'
const VisualPresentations= () => {
return(
<>
    <div className={`text-center ${styles.titleWord}`}>
      <h6 className="text-white fw-semibold mb-4" >{`Home > Educational Booklets`}</h6>
      <h2 className={`text-white fw-bold mb-5 `} >Educational Booklets</h2>
    </div>
    <div className={` container`}>
        <div className="row gy-5 gx-lg-5">
          <div className={`col-lg-12 ${styles.contactCard}`}>
              <form action="forms/contact.php" method="post" role="form" className={`  ${styles.searchCard}`}>
                  <div className=" d-flex justify-content-between">
                      <div className={`col-md-4 col-lg-4 col-sm-6 col-xs-6  form-group  ${styles.formGroup}`}>
                          <p>3 Visual presentations</p>
                      </div>
                      <div className={`col-md-4 col-lg-2 col-sm-6 col-xs-6  form-group  ${styles.formGroup}`}>
                          <input type="text" name="name" className={`form-control ${styles.formControl}`} id="name" placeholder="Search..." required/>
                      </div>
                  </div>
              </form>
          </div>
          <div className="row">
          <div className={`col-xl-4 col-lg-6 col-md-6 col-sm-12 ${styles.cardContainer}`}>
          <div className={`card p-3 ${styles.cardContainer}`}>
                <Image src={vp} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
        <div className={`card p-3`}>
                <Image src={vp} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
        <div className={`card p-3`}>
                <Image src={vp} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                </div>
            </div>
        </div>
        </div>
    </div>
</>
)
}

export default VisualPresentations;