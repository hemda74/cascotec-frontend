import React, { ReactElement } from 'react'
import ViewerLayout from '../../../layouts/ViewerLayout6';
import styles  from '../../../styles/DriectorGeneral.module.css';
import { NextPageWithLayout } from '../../_app';
import Head from 'next/head';
import { FcCheckmark } from 'react-icons/fc';
import Link from 'next/link'
import Image from 'next/image'
import hammad from '../../../public/images/borad_of_directors/Roles/04 Dr Abdelrahamn Faraht/farahat.jpeg'
type Props = {};
// dymmy data for ui till handle working with api

const ahmed_hammad:NextPageWithLayout = (props:Props) => {
  return (
    <>
      <Head>
          <title>Abdelrhaman Farahat | CASCO</title>
      </Head>
      <main>
          <div className={`text-center ${styles.titleWord}`}>
              <div className={`container mb-4`}>
                  <Link href={"/"}><a className="text-white fw-semibold mb-4" data-trans="HomeNav">{`Home`}</a></Link>
                  <Link href={"/about"}><a className="text-white fw-semibold mb-4" data-trans="AboutCascoNav2">{` > About CASCO`}</a></Link>
                  <Link href={"/about/our-team"}><a className="text-white fw-semibold mb-4" data-trans="BoardOfDirectorsNav2" >{``}</a></Link>
              </div>
            <h2 className={`text-white fw-bold mb-5`} data-trans="ProfDrAbdelrhamanFarahat">Prof. Dr. Abdelrhaman Farahat</h2>
          </div>
          <div className={`container row m-auto`} >
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mt-3 mb-3">
                  <Image src={hammad} className={`${styles.cardImage} rounded`} width={500} height={600} alt="abdelrahman farhat"/>
              </div>
              <div className={`${styles.ethicCard3} col-lg-7 col-md-8 col-sm-12 mt-5 mb-3`}>
                  <span className='fs-4 fw-bold m-2' data-trans="Thedirectorgeneral1">Bio :-</span>
                  <ul className='list-unstyled mt-3'>
                    <li className={`${styles.itemCheckTage} mt-2 d-flex`}>
                        <p><FcCheckmark size={20} className=''/></p>
                        <span data-trans="abdelrahmanfarahatl2" className='me-4 ms-4'>{``}</span>
                    </li>	
                    <li className={`${styles.itemCheckTage} mt-2 d-flex`}>
                        <p><FcCheckmark size={20} className=''/></p>
                        <span data-trans="abdelrahmanfarahatl3" className='me-4 ms-4'>{``}</span>
                    </li>
                    <li className={`${styles.itemCheckTage} mt-2 mb-0 d-flex`}>
                        <p><FcCheckmark size={20} className=''/></p>
                        <span data-trans="abdelrahmanfarahatl4" className='ms-4 me-4'>{``}</span>
                    </li>
                    <li className={`${styles.itemCheckTage} mt-2 d-flex`}>
                        <p><FcCheckmark size={20} className=''/></p>
                        <span data-trans="abdelrahmanfarahatl5" className='me-4 ms-4'>{``}</span>
                    </li>
                </ul>
              </div>
          </div>    
      </main>
    </>
  )
}
// adding Layout
ahmed_hammad.getLayout = function getLayout(ahmed_hammad: ReactElement) {
  return <ViewerLayout childern={ahmed_hammad}></ViewerLayout>;
};
export default ahmed_hammad