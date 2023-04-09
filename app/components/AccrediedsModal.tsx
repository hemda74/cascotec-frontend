import React from 'react';
import Image from 'next/image';
import styles from '../styles/AccredtiedBodiesModal.module.css';
import accrimage from'../public/images/accretied_bodies/first_images/13.jpg'
import uae from '../public/images/accretied_bodies/accretied_flags/uae.png'
import {AiFillEye, AiOutlineDownload} from 'react-icons/ai'
type Props = {};
// Accrtited Modal component
const AccrediedsModal = (props: Props) => {
  return (
    <div className="modal fade" id="AccrediedsModal" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="AccrediedsModal" aria-hidden="true">
        <div className={`modal-dialog modal-lg modal-dialog-centered ${styles.modalWidth}`}>
            <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body p-0">
                    <div className="d-flex flex-column align-items-start col-sm-12">
                      <div className={`d-flex align-items-center  justify-content-start ${styles.iconContainer}`}>
                          <Image alt="Accrited Image" src={accrimage} className="me-2 mb-0 mt-0 ms-2"/> 
                      </div>
                      <p className="fs-5 me-2 mt-3 ms-2 fw-semibold">Arab Shipbuilding and Repair Yard (ASRY)</p>
                      <small className=' text-black-50 me-2 ms-2'>ACL 0021</small>
                      <div className={`d-flex ${styles.imageConutry} me-2 ms-2`}>
                          <Image className='p-2' src={uae} width={33} height={33} alt='countryflage'/>
                          <span className='me-1 mt-1 '>
                              Emirates
                          </span>
                      </div>
                      <div className={`${styles.itemDownload} d-flex justify-content-between`}>
                          <span className="title mt-1 mb-2 ">Certificates</span>
                          <div className="d-flex">
                              <a target="_blank" href="/accretied.pdf" rel="noreferrer" className="mt-1">
                                  <span className={`${styles.iconColor}`}>
                                      <AiFillEye size={20}/>
                                  </span>
                              </a>
                              <a href='/HPC 0069.pdf' className=' me-1 ms-3 mt-1' download>
                                  <div className={`${styles.fileDownloader}`}>
                                      <div className="inner_file_downloader d-flex ">
                                          <span className={ `ms-3 me-3  `}>
                                              <AiOutlineDownload size={20}/>
                                          </span>
                                      </div>
                                  </div>
                              </a>
                          </div>
                      </div>
                      <div className={`${styles.itemDownload} d-flex justify-content-between`}>
                          <span className="title mt-1 mb-2 ">Scope</span>
                          <div className="d-flex">
                              <a target="_blank" className="mt-1" rel="noreferrer" href="/accretied.pdf" >
                                  <span className={`${styles.iconColor}`}>
                                      <AiFillEye size={20}/>
                                  </span> 
                              </a>
                              <a href='/HPC 0069.pdf' className=' me-1 ms-3 mt-1' download>
                                  <div className={`${styles.fileDownloader}`}>
                                      <div className="inner_file_downloader d-flex ">
                                          <span className={ `ms-3 me-3  `}>
                                              <AiOutlineDownload size={20}/>
                                          </span>
                                      </div>
                                  </div>
                              </a>
                          </div>
                        </div>
                        <div className='d-flex justify-content-around align-items-center pe-4 ps-4 ms-5 me-5 mt-3 mb-3'>
                            <div className='col-7 p-2 me-3 ms-3 '>
                                <small className='d-inline-block'>
                                    Initial Accreditation Date
                                </small>
                                <small className='d-block'>
                                    28 Feb 2023
                                </small>
                            </div>
                            <div className='col-5 me-5 p-2 me-5'>
                              <small className='d-block'>
                                    Expiry date
                                </small>
                                <small className='pt-3'>
                                    28 Feb 2027
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default AccrediedsModal;
