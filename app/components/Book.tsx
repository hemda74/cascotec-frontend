import Image from 'next/image';
import mohamed from '../public/imagess/mohamedhamdy.jpg'
import styles  from '../styles/Book.module.css';
import { BsStarFill } from 'react-icons/bs';
import React from 'react';
import { FcCheckmark } from 'react-icons/fc';
type Props = {
}

// design for book detailes 
const Book = (props:Props) => {
  return (
 <>
    <div className={`text-center `}><h2 className={`text-white fw-bold mb-5 ${styles.titleWord}`} data-trans="BoardofDirectors">Board of Directors</h2></div>
    <div className={` row ${styles.bookCont}`} >
        <div className="col-lg-2"> 
        </div>
        <div className="col-lg-3">
            <Image src={mohamed} height={550} className={` ${styles.cardImage} rounded  `} alt=""/>
        </div>
        <div className={`${styles.ethicCard3} col-lg-5`}>
            <span className='fs-4 fw-bold m-4' data-trans="Thedirectorgeneralisresponsiblefor">The director general is responsible for:-</span>
            <ul className='-list-unstyled'>
                <li className={styles.itemCheckTage}>
                    <FcCheckmark size={28} className='mt-1 me-2'/>
                    <span data-trans="budgetP1" className='me-4 ms-4  fs-6'>Ensuring appropriate representation at national, regional and international levels</span>
                </li>	
                <li className={styles.itemCheckTage}>
                    <FcCheckmark size={28} className='mt-1 me-2'/>
                    <span data-trans="budgetP2" className='me-4 ms-4  fs-6'>Signing mutual recognition arrangements</span>
                </li>
                <li className={styles.itemCheckTage}>
                    <FcCheckmark size={32} className=' ms-1 me-2'/>
                    <span  className='me-4 ms-4 '>Supporting GAC presence in regional and international institutions in accordance with relevant laws and regulations, international standards and conventions</span>
                </li>
                <li className={styles.itemCheckTage}>
                    <FcCheckmark size={28} className='mt-1 me-2'/>
                    <span data-trans="budgetP4" className='me-4 ms-4  fs-6'>Develop relationships with stakeholders of accreditation activity</span>
                </li>
                <li className={styles.itemCheckTage}>
                    <FcCheckmark size={28} className='mt-1 me-2'/>
                    <span data-trans="budgetP4" className='me-4 ms-4  fs-6'>Head of evaluation teams for the accreditation of laboratories, inspection bodies, Halal certification bodies, and product certification bodies</span>
                </li>
                <li className={styles.itemCheckTage}>
                    <FcCheckmark size={28} className='mt-1 me-2'/>
                    <p data-trans="budgetP4" className='me-4 ms-4  fs-6'>A peer reviewer in each of the International Organization for Accreditation of Asia and the Pacific Countries (APAC) and the International Organization of Accreditation Bodies for Halal Certification Issuers (IHAF)</p>
                </li>
                <li className={styles.itemCheckTage}>
                    <FcCheckmark size={28} className='mt-1 me-2'/>
                    <p data-trans="budgetP4" className='me-4 ms-4 text-start fs-6'>Vice President of the Arab Regional Accreditation Agency (ARAC).</p>
                </li>
                <li className={styles.itemCheckTage}>
                    <FcCheckmark size={28} className='mt-1 me-2'/>
                    <p data-trans="budgetP4" className='me-4 ms-4  fs-6'>An international trainer and certification expert since 2015</p>
                </li>
            </ul>
        </div>
        <div className="col-lg-2">
        </div>
        </div>    
 </>
  )
}
export default Book ;