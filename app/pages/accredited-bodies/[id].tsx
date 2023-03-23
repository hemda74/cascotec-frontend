import React from 'react'
import Image from 'next/image';
import styles from '../../styles/AccredtiedBodiesModal.module.css'
import {AiFillEye} from 'react-icons/ai'
const dummyData = {
      accredtied_body_image:'/images/accretied_bodies/first_images/4.png', 
      accredtied_body_id: 0,
      accredtied_body_name:'HALAL ACCREDITATION COUCIL (GURANTEE) LIMITED',
      accredtied_body_Country:'Egypt',
      accredtied_body_From:'02/Feb/2023',
      accredtied_body_To:'02/Jan/2028',
      accredtied_body_country_image:'/images/accretied_bodies/accretied_flags/egypt.png',
};
const AccreditedDetailesCard = () => {
  return (
    <>
    <div
        className={`modal-dialog modal-lg modal-dialog-centered ${styles.modalWidth}`}>
        <div className="modal-content">
          <div className="modal-body p-0">
            <div className="d-flex flex-column align-items-center col-sm-12">
              <div
                className={`d-flex align-items-center justify-content-start mb-5 ${styles.iconContainer}`}>
                 <Image
                  alt="Warning Icon"
                  src={dummyData.accredtied_body_image}
                  className="mt-5 mb-5"
                  width={350}
                  height={430}
                /> 
              </div>
              <p className="fs-5 me-2 ms-2 pt-0 fw-semibold">{dummyData.accredtied_body_name}</p>
              <small className=' text-black-50 me-2 ms-2'>{dummyData.accredtied_body_From}</small>
              <div className={`d-flex ${styles.imageConutry} me-2 ms-2`}>
                   <Image
                    className='p-2'
                    src={dummyData.accredtied_body_country_image}
                    width={53}
                    height={53}
                    alt='countryflage'
                  /> 
                  <span className='me-1 mt-1 '>
                    {dummyData.accredtied_body_Country}
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
                <div className={`${styles.itemDownload} d-flex justify-content-between`}>
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
    </>
  )
}

export default AccreditedDetailesCard