import Image from 'next/image';
import mahrous from '../public/images/borad_of_directors/Roles/01 Ahmed Mahrous/Ahmed Mahrous.jpeg'
import styles  from '../styles/DriectorGeneral.module.css';
import React from 'react';
import Link from 'next/link';
import { FcCheckmark } from 'react-icons/fc';
import {BsLinkedin} from 'react-icons/bs'
type Props = {
}
// design for DriectorGeneral detailes 
const DriectorGeneral = (props:Props) => {
  return (
 <>
    <div className={`text-center ${styles.titleWord}`}>
        <div className={`container mb-4`}>
            <Link href={"/"}><a className="text-white fw-semibold mb-4" data-trans="HomeNav">{`Home`}</a></Link>
            <Link href={"/about"}><a className="text-white fw-semibold mb-4" data-trans="AboutCascoNav2">{` > About CASCO`}</a></Link>
            <Link href={"/about/our-team"}><a className="text-white fw-semibold mb-4" data-trans="BoardOfDirectorsNav2" >{``}</a></Link>
        </div>
      <h3 className={`text-white fw-bold mb-2 `} data-trans="DirectorMangerNav"></h3>
      <h2 className={`text-white fw-bold mb-0`} data-trans="MrAhmedMahrous">Mr. Ahmed Mahrous</h2>
    </div>
    <div className={`container row m-auto`} >
        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mt-3 mb-3">
            <Image src={mahrous} className={`${styles.cardImage} rounded`} width={400} height={450} alt="Ahmed Mahrous"/>
        </div>
        <div className={`${styles.ethicCard3} col-lg-7 col-md-8 col-sm-12 mt-5 mb-3`}>
            <span className='fs-4 fw-bold m-2 d-block' data-trans="Thedirectorgeneral1">Bio :-</span>
            <ul className='list-unstyled mt-3'>
                <li className={`${styles.itemCheckTage} mt-2 d-flex`}>
                    <p><FcCheckmark size={20} className=''/></p>
                    <span data-trans="Thedirectorgeneral2" className='me-4 ms-4'>{``}</span>
                </li>	
                <li className={`${styles.itemCheckTage} mt-2 d-flex`}>
                    <p><FcCheckmark size={20} className=''/></p>
                    <span data-trans="Thedirectorgeneral3" className='me-4 ms-4'>{``}</span>
                </li>
                <li className={`${styles.itemCheckTage} mt-2 mb-0 d-flex`}>
                    <p><FcCheckmark size={20} className=''/></p>
                    <span  className='ms-4 me-4' data-trans="Thedirectorgeneral4">{``}</span>
                </li>
                <li className={`${styles.itemCheckTage} mt-2 d-flex`}>
                    <p><FcCheckmark size={20} className=''/></p>
                    <span data-trans="Thedirectorgeneral5" className='me-4 ms-4'>{``}</span>
                </li>
                <li className={`${styles.itemCheckTage} mt-2 d-flex`}>
                    <p><FcCheckmark size={20} className=''/></p>
                    <span data-trans="Thedirectorgeneral6" className='me-4 ms-4'>{``}</span>
                </li>
            </ul>
            <div className='text-center mt-4'>
                <a href="https://www.linkedin.com/in/ahmed-mahrous-b714a825/" target="_blank" rel="noreferrer">
                    <span className={`${styles.btnContainer} myInfo`}><BsLinkedin size={25}/></span>
                </a>
            </div>
        </div>
    </div>    
 </>
  )
}
export default DriectorGeneral;