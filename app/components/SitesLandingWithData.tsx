import React from 'react'
import styles from '../styles/ListSitesData.module.css'
import NewBtn from './NewBtn'
import Image from 'next/image';
import edit_icon from '../public/icons/edit-icon.svg'
import map_icon from '../public/icons/map_icon.svg'
import  Pagination  from './Pagination';
const SitesLandingWithData = () => {
  return (
    <>
    <div className="d-flex flex-column w-100 h-100 mt-4">
        <div className="card  border-light mb-3">
            <div className={` card-body p-0  ${styles.cardBodyContainer}`}>
                <div className={`${styles.headingArea}`}>
                        <div className={`${styles.headingSection}`}>
                            <h3 className='mb-2 ' data-trans="">Orgnaization Sites</h3>
                        </div>
                         <div className={` d-flex justify-content-end ${styles.newOpHourBtn}`}>
                                <NewBtn
                                    href="/tenant-admin/organization_details/sites/create_new_site"
                                imageWidth={22}
                                imageHeigth={22}
                                />
                        </div>
                </div> 
                <div className={`${styles.sitesList}`}></div>                  
                    <ul className={`list-group mb-1`}>
                            <li className={`list-group-item d-flex align-items-center justify-content-between mb-4 p-0 myShadow-lg ${styles.sitesListLi}`}> 
                                    <div className={`d-flex align-items-center ${styles.locationSiteDiv}`}>
                                        <div className='d-flex align-items-center me-4 ms-4'>
                                            <Image
                                                src={map_icon}
                                                alt="operational-hours-landing-image"
                                                width={50}
                                                height={50}
                                                />
                                        </div>
                                        <div className="d-flex flex-column align-items-start">
                                            <span className={`${styles.siteHeading} fs-6`}>Egypt</span>
                                            <span className='fw-semibold fs-2'>Cairo</span>
                                        </div>
                                    </div>
                                    <div className='d-flex h-100 mt-3 me-3 ms-3'>
                                        <div className='mt-1 me-1 ms-1'>
                                            <div className="d-flex align-items-start">
                                                <div className="d-flex align-items-center me-1 ms-1">
                                                    <Image
                                                    src={edit_icon}
                                                    alt="operational-hours-landing-image"
                                                    width={22.3}
                                                    height={24}
                                                    />
                                                </div>
                                            <span className={`fw-bold myPrimary-Text ${styles.editText}`} data-trans="">Edit</span>
                                            </div> 
                                        </div>
                                    </div>
                            </li>
                    </ul>
                    <div className="pagination d-flex justify-content-center mt-2">
                        {/* <Pagination {...}/> */}
                    </div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default SitesLandingWithData