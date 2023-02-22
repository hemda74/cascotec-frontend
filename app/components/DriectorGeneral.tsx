import Image from 'next/image';
import metaeb from '../public/imagess/Eng.Moteb-2.jpg'
import styles  from '../styles/DriectorGeneral.module.css';
import React from 'react';
import { FcCheckmark } from 'react-icons/fc';
type Props = {
}
// design for DriectorGeneral detailes 
const DriectorGeneral = (props:Props) => {
  return (
 <>
    <div className={`text-center ${styles.titleWord}`}>
    <h6 className="text-white fw-semibold mb-5" data-trans="routeDirctorGeneral">{`Home > About Us > Director General`}</h6>
      <h2 className={`text-white fw-bold mb-5 `} data-trans="DirectorManger">Director General</h2>
    </div>
    <div className={` row ${styles.bookCont}`} >
        <div className="col-lg-2"> 
        </div>
        <div className="col-lg-3">
            <Image src={metaeb} height={550} className={` ${styles.cardImage} rounded `} alt=""/>
        </div>
        <div className={`${styles.ethicCard3} col-lg-5 col-md-8 col-sm-12`}>
            <span className='fs-4 fw-bold m-5 ' data-trans="Thedirectorgeneral1">The director general is responsible for:-</span>
            <ul className='list-unstyled row'>
                <li className={`${styles.itemCheckTage} d-flex`}>
                    <FcCheckmark size={28} className='flex-start'/>
                    <span data-trans="Thedirectorgeneral2" className='me-4 ms-4 '>{`Ensuring appropriate representation at national, regional and international levels`}</span>
                </li>	
                <li className={`${styles.itemCheckTage} d-flex`}>
                    <FcCheckmark size={28} className='flex-start'/>
                    <span data-trans="Thedirectorgeneral3" className='me-4 ms-4  '>{`Signing mutual recognition arrangements`}</span>
                </li>
                <li className={`${styles.itemCheckTage} d-flex`}>
                    <p><FcCheckmark size={28} className='flex-start'/></p>
                    <p  className='ms-3 me-3 text-start'  data-trans="Thedirectorgeneral4">{`Supporting GAC presence in regional and international institutions in accordance with relevant laws and regulations, international standards and conventions`}</p>
                </li>
                <li className={`${styles.itemCheckTage} d-flex`}>
                    <p><FcCheckmark size={28} className=''/></p>
                    <span data-trans="Thedirectorgeneral5" className='me-4 ms-4 '>{`Develop relationships with stakeholders of accreditation activity`}</span>
                </li>
                <li className={`${styles.itemCheckTage} d-flex`}>
                    <p><FcCheckmark size={28} className=''/></p>
                    <span data-trans="Thedirectorgeneral6" className='me-4 ms-4 text-start '>{`Head of evaluation teams for the accreditation of laboratories, inspection bodies, Halal certification bodies, and product certification bodies`}</span>
                </li>
                <li className={`${styles.itemCheckTage} d-flex`}>
                    <p><FcCheckmark size={28} className=''/></p>
                    <span data-trans="Thedirectorgeneral7" className='me-4 ms-4 text-start '>{`A peer reviewer in each of the International Organization for Accreditation of Asia and the Pacific Countries (APAC) and the International Organization`}</span>
                </li>
                <li className={`${styles.itemCheckTage} d-flex`}>
                    <p><FcCheckmark size={28} className=''/></p>
                    <span data-trans="Thedirectorgeneral8" className='me-4 ms-4 text-stert '>{`Vice President of the Arab Regional Accreditation Agency (ARAC).`}</span>
                </li>
                <li className={`${styles.itemCheckTage} d-flex`}>
                    <p><FcCheckmark size={28} className=''/></p>
                    <span data-trans="Thedirectorgeneral9" className='me-4 ms-4 text-start '>An international trainer and certification expert since 2015</span>
                </li>
            </ul>
        </div>
        <div className="col-lg-2"></div>
    </div>    
 </>
  )
}
export default DriectorGeneral ;