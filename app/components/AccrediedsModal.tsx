import React from 'react';
import Image from 'next/image';
import styles from '../styles/AccredtiedBodiesModal.module.css';
import WarningIcon from '../public/icons/warning-therid-icon.svg'
import accrimage from'../public/imagess/accrimage2.png'
import uae from '../public/imagess/accretied flags/uae.png'
import {AiFillEye, AiOutlineDownload} from 'react-icons/ai'
type Props = {};
// Edit Site Discard Changes Modal component
const AccrediedsModal = (props: Props) => {
  return (
    <div
      className="modal fade"
      id="AccrediedsModal"
      data-bs-keyboard="false"
      tabIndex={-1}
      aria-labelledby="AccrediedsModal"
      aria-hidden="true">
      <div
        className={`modal-dialog modal-lg modal-dialog-centered ${styles.modalWidth}`}>
        <div className="modal-content">
          <div className="modal-body p-0">
            <div className="d-flex flex-column align-items-start col-sm-12">
              <div
                className={`d-flex align-items-center  justify-content-start ${styles.iconContainer}`}>
                <Image
                  alt="Warning Icon"
                  src={accrimage}
                  className="me-2 mb-0 mt-0 ms-2"
                />
              </div>
              <p className="fs-5 me-2 ms-2 fw-semibold">Arab Shipbuilding and Repair Yard (ASRY)</p>
              <small className=' text-black-50 me-2 ms-2'>ACL 0021</small>
              <div className={`d-flex ${styles.imageConutry} me-2 ms-2`}>
                  <Image
                    className=' p-2'
                    src={uae}
                    width={33}
                    height={33}
                    alt='countryflage'
                  />
                  <span className='me-1 mt-1 '>
                    Emirates
                  </span>
              </div>
              <div className={`${styles.itemDownload} d-flex justify-content-between`}>
                    <span className="title mt-2">Certificates</span>
                    <div className="actions">
                        <a target="_blank" href="https://api.gac.org.sa/public/uploads/cab_request/certificates/vSGcxUuVPTxz5aulhHsbnv5m5v2w3kQsj7pvndUYj2fo2qSScH7UFO3HDGOD1gEiLYdqkcxOIysNfMz1.pdf" rel="noreferrer" className="btn btn_icon grey">
                           <span className={`${styles.iconColor}`}>
                            <AiFillEye size={30}/>
                            </span>
                        </a>
                    </div>
                </div>
                <div className={`${styles.itemDownload} d-flex    justify-content-between`}>
                    <span className="title mt-2">Scope</span>
                    <div className="actions">
                        <a target="_blank"  rel="noreferrer" href="https://api.gac.org.sa/public/uploads/cab_request/certificates/vSGcxUuVPTxz5aulhHsbnv5m5v2w3kQsj7pvndUYj2fo2qSScH7UFO3HDGOD1gEiLYdqkcxOIysNfMz1.pdf" className="btn btn_icon grey">
                        <span className={`${styles.iconColor}`}>
                        <AiFillEye size={30}/>
                        </span>
                        </a>                      
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
