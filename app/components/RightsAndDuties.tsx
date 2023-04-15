import React from 'react'
import { FcCheckmark } from 'react-icons/fc'
import styles from '../styles/RightsAndDuties.module.css'
import Image from 'next/image'
import dutes from '../public/imagess/duties.png'
import { GiCheckMark } from 'react-icons/gi'
import Link from 'next/link'

const RightsAndDuties = () => {
  return (
    <>
     <section className={` `}>
        <div className={`text-center ${styles.titleWord}`}>
        <div className={`container mb-4`}>
                <Link href={"/"}><a className="text-white fw-semibold mb-4">{`Home`}</a></Link>
                <Link href={"/about"}><a className="text-white fw-semibold mb-4">{` > About CASCO`}</a></Link>
                <Link href={"/about/rights-and-duties"}><a className="text-white fw-semibold mb-4" >{` > Rights And Duties`}</a></Link>
            </div>
            <h2 className={`text-white fw-bold  `} data-trans="CASCORightsAndDuties">{`CASCO’s Rights And Duties`}</h2>
        </div>
        <div className="container col-lg-10 col-xl-10 col-md-12 col-sm-12 col-xs-12">
            <div className="row mx-0 d-flex justify-content-center align-items-center ">
                
       
            <div className="row d-flex justify-content-around align-items-center">
            <div className={`card-body mb-4 `}>
                    <span className={`${styles.spanHead}`} data-trans="CASCOSRIGHTSANDDUTIES">{`CASCO'S RIGHTS AND DUTIES`}</span>
                    <h4 className='fw-bold  mt-2' data-trans="CASCOSRights">{`CASCO'S Rights`}</h4>
                </div>
                <div className={`card-body`}>
                    <ul className={`${styles.ulClass}`}>
                        <li className={`${styles.itemCheckTage} col-sm-12 mb-4 d-flex`}>
                            <p><FcCheckmark size={20} className=''/></p>
                            <span  className='me-2 ms-2' data-trans='ritghs1'>{`CASCO has the right to reject the accreditation request of an entity that does not cooperate in applying the accreditation requirements and standards, including applicable laws and regulations, or when fraudulent information or documents are found and when there is clear evidence of fraudulent behaviour.`}</span>
                        </li>
                        <li className={`${styles.itemCheckTage} d-flex mb-4`}>
                            <p><FcCheckmark size={20} className=''/></p>
                            <span  className='me-2 ms-2' data-trans='ritghs2'>{`The request from an entity that does not have the required information or documents or that does not cooperate to the necessary level to meet the qualification schedules will not be accepted.`}</span>
                        </li>
                        <li className={`${styles.itemCheckTage} d-flex`}>
                            <p><FcCheckmark size={20} className=''/></p>
                            <span  className='me-2 ms-2' data-trans='ritghs3'>{`The top management or their delegates' failure to purchase technical specifications, technical regulations, or legal requirements to complete the technical qualification stages will result in disqualification.`}</span>
                        </li>
                        {/* <li className={`${styles.itemCheckTage} d-flex mt-4`}>
                            <p><FcCheckmark size={20} className=''/></p>
                            <span data-trans='ritghs4' className='me-2 ms-2'>{`To assess the management system of the CAB and require any document and access to location and facilities in relation to the scope of accreditation during the accreditation cycle of the CAB.`}</span>
                        </li> */}
                    </ul>          
                </div>
                </div>
            </div>
        </div>
        <div className={` ${styles.ctA} mb-5 `}>
            <div className={`container `}>
                <div className={`row mx-0 d-flex justify-content-around align-items-center `}>
                    <div className={`card-body col-xl-6 col-lg-6 col-md-6 col-sm-12 `}>
                        <Image src={dutes} className={``} alt="dutes image"/>
                    </div>
                    <div className={`card-body col-xl-6 col-lg-6 col-md-6 col-sm-12 ${styles.dutesList}`}>
                        <h4 className='fw-bold text-white me-5' data-trans='CASCOsduties'>{`CASCO’s duties`}</h4>
                        <ul className='list-unstyled mt-4'>
                            <li className={`${styles.itemCheckTage} d-flex`}>
                                <p><GiCheckMark size={20} className={`${styles.iconsColor}`}/></p>
                                <small className='me-2 ms-2 text-white' data-trans='duiets1'>{`To timely plan and conduct due assessments for the CABs to determine its competence`}</small>
                            </li>
                            <li className={`${styles.itemCheckTage} d-flex mt-4`}>
                                <p><GiCheckMark size={20} className={`${styles.iconsColor}`}/></p>
                                <small className='me-2 ms-2 text-white' data-trans='duiets2'>{`To ensure confidentiality of CAB’s information and their documents unless required by the law/regulation to disclose it in a way required.`}</small>
                            </li>
                            <li className={`${styles.itemCheckTage} d-flex mt-4`}>
                                <p><GiCheckMark size={20} className={`${styles.iconsColor}`}/></p>
                                <small className='me-2 ms-2 text-white' data-trans='duiets3'>{`GAC will make publicly available information about the current status of the accreditations that it has granted to the CABs, this information is updated regularly and in line with ISO/IEC 17011 requirements.`}</small>
                            </li>
                            <li className={`${styles.itemCheckTage} d-flex mt-4`}>
                                <p><GiCheckMark size={20} className={`${styles.iconsColor}`}/></p>
                                <small className='me-2 ms-2 text-white' data-trans='duiets4'>{`To ensure impartiality of its services`}</small>
                            </li>
                            <li className={`${styles.itemCheckTage} d-flex mt-4`}>
                                <p><GiCheckMark size={20} className={`${styles.iconsColor}`}/></p>
                                <small className='me-2 ms-2 text-white' data-trans='duiets5'>{`To inform its accredited CABs about any changes in the accreditation requirements and timelines as applicable, to ensure the implementation of changes it could be covered through next due assessment or by asking CABs to provide some immediate evidences of implementation.`}</small>
                            </li>
                            <li className={`${styles.itemCheckTage} d-flex mt-4`}>
                                <p><GiCheckMark size={20} className={`${styles.iconsColor}`}/></p>
                                <small className='me-2 ms-2 text-white' data-trans='duiets6'>{`To provide information about suitable ways to obtain tractability of measurement results in relation to the scope for which accreditation is provided. This is detailed in the Technical Note TN 2.0.`}</small>
                            </li>
                        </ul>  
                    </div>
                </div>
            </div>
        </div>
    </section>
</>
  )
}

export default RightsAndDuties