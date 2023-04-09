import React from 'react'
import styles from '../styles/AccretiedBodiesCard.module.css'
import  Image  from 'next/image';
import Link from 'next/link';
import AccrediedsModal from './AccrediedsModal';
type Props = {
      accredtied_body_image:string;
      accredtied_body_id: number;
      accredtied_body_Country:string;
      accredtied_body_From:string;
      accredtied_body_To:string;
      accredtied_body_country_image:string;
  };
  // Accredited Body Card Component
const AccreditedBodyCard = (props:Props) => {
  return (
    <>
        <div className={`col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-4 ${styles.mainCardDiv}`}>
            <div className={``}>
                <a data-bs-toggle="modal" data-bs-target="#AccrediedsModal">
                    <div className={`${styles.teamMember2}`}>
                        <figure className={`${styles.teamMemberFigure} `}>
                            <div className={`${styles.cardImage}`}>
                                <Image src={props.accredtied_body_image} layout='fill' alt="" className={`${styles.cardImage} p-5 `}/>
                            </div>
                            <figcaption className={`${styles.figCaption} d-flex`}>
                                <div className={`mt-1 me-2 ms-2 ${styles.accretiedCaption}`}>
                                    <span className='text-white fs-6 d-block fw-bold'>World Halal Trust</span>
                                    <span className='text-white fs-6 d-block fw-semibold mt-1'>HPC 0069</span>
                                    <span  className="text-white">{props.accredtied_body_Country}</span>
                                    <small className='d-block mt-1'>Initial Accreditation Date </small>
                                    <small>{props.accredtied_body_From}</small>
                                    <small className='d-block mt-1'>Expairy Date</small>
                                    <small>{props.accredtied_body_To}</small>
                                </div>
                                <div className='d-flex justify-content-end'>
                                    <Image src={props.accredtied_body_country_image} layout='fill' alt="" className={`${styles.flagImage} ps-5 pe-5`} />
                                </div>  
                            </figcaption>
                        </figure>
                    </div>
                </a>
            </div>
        </div>
        <AccrediedsModal/>
    </>
  )
}

export default AccreditedBodyCard