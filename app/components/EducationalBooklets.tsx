import React from 'react'
import styles from '../styles/EducationalBooklets.module.css'
import Link from 'next/link'
import edubok from '../public/imagess/edubok.png'
import Image from 'next/image'
import { VscFilePdf } from 'react-icons/vsc'
const EducationalBooklets= () => {
return(
<>
    <div className={`text-center ${styles.titleWord}`}>
    <div className={`container mb-4`}>
                    <Link href={"/"}><a className="text-white fw-semibold mb-4">{`Home`}</a></Link>
                    <Link href={"/educational-booklets"}><a className="text-white fw-semibold mb-4">{` > Educational Booklets`}</a></Link>
                </div>
      <h2 className={`text-white fw-bold mb-5 `} >Educational Booklets</h2>
    </div>
    <div className={` container`}>
        <div className="row gy-5 gx-lg-5">
          <div className={`col-lg-12 ${styles.contactCard}`}>
              <form action="forms/contact.php" method="post" role="form" className={`  ${styles.searchCard}`}>
                  <div className=" d-flex justify-content-between">
                      <div className={`col-md-4 col-lg-4 col-sm-6 col-xs-6  form-group  ${styles.formGroup}`}>
                          <p>1 Educational booklets</p>
                      </div>
                      <div className={`col-md-4 col-lg-2 col-sm-6 col-xs-6  form-group  ${styles.formGroup}`}>
                          <input type="text" name="name" className={`form-control ${styles.formControl}`} id="name" placeholder="Search..." required/>
                      </div>
                  </div>
              </form>
          </div>
        </div>
    </div>
    <div className="container">
       <div className="row">
           <div className="col-lg-4 p-3" >
           <div className={`${styles.eduBooklet} d-flex `}>
                                <div >
                                    <Image src={edubok} className={`rounded`} width={250} height={550} alt=""/>
                                </div>
                                <div className="inner_card me-5 ms-5">
                                    <div className="content_card">
                                        <p className="title">Why use an Accredited Laboratory? </p>
                                        <small className="text-black-50">25 May, 2022</small>
                                    </div>
                                    <a href='/HPC 0069.pdf'  download>
                              <div className={`${styles.fileDownloader}`}>
                                <div className="inner_file_downloader mt-5 d-flex p-2 ">
                                  <div className={ ` ms-3 me-3 ${styles.iconHolder}`}>
                                      <VscFilePdf size={20}/>
                                  </div>
                                  <div className=" ms-4 me-4">
                                    <small className=' text-black mt-5'>Download</small>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                            </div>
            </div>
        </div>
      </div>

</>
)
}

export default EducationalBooklets;