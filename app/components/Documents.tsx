import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import styles from '../styles/Documents.module.css'
import servicesimage from '../public/imagess/servicesimage.jpg'
import {CiFilter} from 'react-icons/ci'
import {VscFilePdf} from 'react-icons/vsc'
import {SlReload} from 'react-icons/sl'
import fileSaver, {saveAs} from 'file-saver'

const Documents = () => {
  
  const saveFile = () => {
    fileSaver.saveAs(
      process.env.REACT_APP_CLIENT_URL + "../public/accretied.pdf",
      "MyCV.pdf"
    );}
  return (
<>
    <div className={`text-center ${styles.titleWord}`}>
        <h6 className="text-white fw-semibold mb-4">{`Home > Documents`}</h6>
        <h2 className={`text-white fw-bold mb-5 `}>Documents</h2>
    </div>
    <div className={` container `}>
        <div className="row ">
              <div className="col-3"></div>
        </div>
    </div>
        <div className={` container ${styles.formConatiner}`}>
        <div className="row gy-5 gx-lg-5">
          <div className={`col-lg-12 ${styles.contactCard}`}>
            <form action="forms/contact.php" method="post" role="form" className={` php-email-form ${styles.searchCard}`}>
            <div className=" d-flex justify-content-between">
            <p>25  Upcoming Course </p>
            <button className={`rounded mb-3  ${styles.filterButton}`} type="submit">Filter<CiFilter/></button>
            </div>
              <div className="row">
                <div className={`col-md-4 col-lg-4 col-sm-6 col-xs-6  form-group  ${styles.formGroup}`}>
                  <input type="text" name="name" className={`form-control ${styles.formControl}`} id="name" placeholder="Search..." required/>
                </div>
                <div className={`col-md-4 col-lg-4 col-sm-6 col-xs-6 form-group   ${styles.formGroup}`}>
                    <select  className={`form-select ${styles.formControl}`}  id="site-holidayes-input" >
                        <option>Select All</option>
                        <option>Testing Lap</option>
                        <option>Calibration Lab</option>
                        <option>Medical Lab</option>
                        <option>Mangment System Cetifcation</option>
                        <option>Halal Product Certification</option>
                        <option>Inspection Body</option>
                        <option>Prof Testing Provider</option>
                        <option>Product Certification</option>
                        <option>Personnel Certification Body</option>
                        <option>Reference Material Producer</option>
                    </select>
                  </div>
                <div className={`col-md-4 col-lg-4 col-sm-6 col-xs-6 form-group  ${styles.formGroup}`}>
                    <select  className={`form-select ${styles.formControl}`}  id="site-holidayes-input" >
                        <option>Upcoming Trainings</option>
                        <option>Pervious Trainings</option>
                    </select>                
                  </div>
                  <div className={`form-group d-flex justify-content-between mt-4 ${styles.formGroup}`}>
                    <div className='col-md-4 col-lg-4 col-sm-6 col-xs-6'>
                    </div>
                    <div><button className={` myInfo  rounded ${styles.SearchButton}`} type="submit"> Search </button></div>
                  </div>
                  </div>
            </form>
          </div>
        </div>
        </div>
        <div className="container mt-5">
            <div className="row">
            <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className={`accordion-header .accordionItemHead}`} id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <div className="content_card">
                        <div className="row mx-0">
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <small className="accredited_bodies_code text-black-50">Version</small>
                            <p className="accredited_bodies_desc mt-2">7.1</p>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <small className=" text-black-50 accredited_bodies_code">
                              Accreditation type
                            </small>
                            <small className={`${styles.accreditationType} mt-2`}>
                              Calibration Lab,Halal Product Certification
                              ,Inspection Body
                              ,Management System Certification
                              ,Medical Lab
                              ,Personnel Certification Body
                              ,Product Certification
                              ,Prof Testing Provider
                              ,Reference Material Producer,Testing Lab
                            </small>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <small className=" accredited_bodies_code text-black-50">
                              Category
                            </small>
                            <p className="mt-2 accredited_bodies_desc">
                              Internal Document
                            </p>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <small className="accredited_bodies_code text-black-50">
                              Subcategory
                            </small>
                            <p className="accredited_bodies_desc mt-2">
                              Procedures
                            </p>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <p className="accredited_bodies_code">
                              Issued date
                            </p>
                            <p className="accredited_bodies_desc">
                              Oct 20, 2021
                            </p>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <p className="accredited_bodies_code">
                              Recent actions
                            </p>
                            <p className="accredited_bodies_desc">
                              Oct 20, 2021
                            </p>
                          </div>
                        </div>
                        <div className="row mx-0 mt-3">
                          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                            <a href='/HPC 0069.pdf' download>
                              <div className={`${styles.fileDownloader}`}>
                                <div className="inner_file_downloader d-flex ">
                                  <div className={ `mt-3 ms-3 me-3 ${styles.iconHolder}`}>
                                      <VscFilePdf size={30}/>
                                  </div>
                                <div className="  ms-4 me-4">
                                    <p className=' text-black mt-3'>Download</p>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                            <button className={` btn ${styles.changeLog}`} >
                              <small >
                              <SlReload className='me-1 ms-1'/>
                              Changelog</small>
                            </button>
                          </div>
                        </div>
                      </div> 
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <div className="content_card">
                        <div className="row mx-0">
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <small className="accredited_bodies_code text-black-50">Version</small>
                            <p className="accredited_bodies_desc mt-2">7.1</p>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <small className=" text-black-50 accredited_bodies_code">
                              Accreditation type
                            </small>
                            <small className={`${styles.accreditationType} mt-2`}>
                              Calibration Lab,Halal Product Certification
                              ,Inspection Body
                              ,Management System Certification
                              ,Medical Lab
                              ,Personnel Certification Body
                              ,Product Certification
                              ,Prof Testing Provider
                              ,Reference Material Producer,Testing Lab
                            </small>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <small className=" accredited_bodies_code text-black-50">
                              Category
                            </small>
                            <p className="mt-2 accredited_bodies_desc">
                              Internal Document
                            </p>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <small className="accredited_bodies_code text-black-50">
                              Subcategory
                            </small>
                            <p className="accredited_bodies_desc mt-2">
                              Procedures
                            </p>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <p className="accredited_bodies_code">
                              Issued date
                            </p>
                            <p className="accredited_bodies_desc">
                              Oct 20, 2021
                            </p>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <p className="accredited_bodies_code">
                              Recent actions
                            </p>
                            <p className="accredited_bodies_desc">
                              Oct 20, 2021
                            </p>
                          </div>
                        </div>
                        <div className="row mx-0 mt-3">
                          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                            <a href='/HPC 0069.pdf' download>
                              <div className={`${styles.fileDownloader}`}>
                                <div className="inner_file_downloader d-flex ">
                                  <div className={ `mt-3 ms-3 me-3 ${styles.iconHolder}`}>
                                      <VscFilePdf size={30}/>
                                  </div>
                                <div className="  ms-4 me-4">
                                    <p className=' text-black mt-3'>Download</p>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                            <button className={` btn ${styles.changeLog}`} >
                              <small >
                              <SlReload className='me-1 ms-1'/>
                              Changelog</small>
                            </button>
                          </div>
                        </div>
                      </div> 
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <div className="content_card">
                        <div className="row mx-0">
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <small className="accredited_bodies_code text-black-50">Version</small>
                            <p className="accredited_bodies_desc mt-2">7.1</p>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <small className=" text-black-50 accredited_bodies_code">
                              Accreditation type
                            </small>
                            <small className={`${styles.accreditationType} mt-2`}>
                              Calibration Lab,Halal Product Certification
                              ,Inspection Body
                              ,Management System Certification
                              ,Medical Lab
                              ,Personnel Certification Body
                              ,Product Certification
                              ,Prof Testing Provider
                              ,Reference Material Producer,Testing Lab
                            </small>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <small className=" accredited_bodies_code text-black-50">
                              Category
                            </small>
                            <p className="mt-2 accredited_bodies_desc">
                              Internal Document
                            </p>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <small className="accredited_bodies_code text-black-50">
                              Subcategory
                            </small>
                            <p className="accredited_bodies_desc mt-2">
                              Procedures
                            </p>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <p className="accredited_bodies_code">
                              Issued date
                            </p>
                            <p className="accredited_bodies_desc">
                              Oct 20, 2021
                            </p>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <p className="accredited_bodies_code">
                              Recent actions
                            </p>
                            <p className="accredited_bodies_desc">
                              Oct 20, 2021
                            </p>
                          </div>
                        </div>
                        <div className="row mx-0 mt-3">
                          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                            <a href='/HPC 0069.pdf' download>
                              <div className={`${styles.fileDownloader}`}>
                                <div className="inner_file_downloader d-flex ">
                                  <div className={ `mt-3 ms-3 me-3 ${styles.iconHolder}`}>
                                      <VscFilePdf size={30}/>
                                  </div>
                                <div className="  ms-4 me-4">
                                    <p className=' text-black mt-3'>Download</p>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                            <button className={` btn ${styles.changeLog}`} >
                              <small >
                              <SlReload className='me-1 ms-1'/>
                              Changelog</small>
                            </button>
                          </div>
                        </div>
                      </div> 
      </div>
    </div>
  </div>
</div>
             
        </div>
      </div>
</>
  )
}
export default Documents;