import React from 'react'
import styles from '../styles/Events.module.css'
import Image from 'next/image'
import Link from 'next/link'
import newsthree from '../public/imagess/newsthree.jpg'
import event1 from '../public/images/events/event1.jpg'
import event2 from '../public/images/events/event2.jpg'
import { CgCalendarDates } from 'react-icons/cg'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { AiFillClockCircle, AiOutlineSearch } from 'react-icons/ai'
const Events = () => {
  return (
    <>
   <div className={`text-center ${styles.titleWord}`}><div className={`container mb-4`}>
                    <Link href={"/"}><a className="text-white fw-semibold mb-4">{`Home`}</a></Link>
                    <Link href={"/events"}><a className="text-white fw-semibold mb-4">{` > Events`}</a></Link>
                </div>
       <h2 className={`text-white fw-bold mb-5 `} >Events</h2>
   </div>
   <div className={` container col-xl-8 col-lg-10 col-md-12 mt-5 mb-4 ${styles.formConatiner}`}>
        <div className="row gy-5 gx-lg-5">
            <div className={`col-lg-12 `}>
            <div className={`d-flex align-items-center justify-content-center  `}>
              <form>
                <div className={`d-flex align-items-center justify-content-center  ${styles.cardSubTitle} `}>
                  <span className=" my-2 my-sm-0 text-black-50" ><AiOutlineSearch size={25}/></span>
                  <input className={`form-control me-2 ${styles.searchInput}`} type="search" placeholder="Search"/>
                  <button className={` myInfo  rounded ${styles.SearchButton}`} type="submit"> Search </button>
                  </div>
                    </form>
              </div>
            </div>
        </div>
   </div>
   <div className="container col-xl-8 col-lg-10 col-md-12 mb-5">
        <div className="row">
            <div className="col-lg-4 col-md-6 p-3">
                <div className={`${styles.postBox}`}>
                    <div className={`${styles.postImage}`}><Image src={newsthree} className="img-fluid" alt=""/>
                    </div>
                    <figure className={`  mt-5 ${styles.postTitleFigre}`}>
                        <span className={` fs-5 mt-5 ${styles.postTitle}`}>GCC Accreditation Center Diwaniya</span>
                    </figure>
                    <span className={`${styles.iconDate} mt-4`}>
                        <CgCalendarDates size={25}/>
                        <small className='text-black me-1 ms-1 mt-4'>04 Sep.2023 - 08 Sep.2023</small>
                    </span>
                    <span className={`${styles.iconDate} mt-3`}>
                        <AiFillClockCircle size={20}/>
                        <small className='text-black me-2 ms-2 mt-4'>11:00 AM - 03:00 PM</small>
                    </span>
                    <span className={`${styles.iconDate} mt-3`}>
                        <FaMapMarkerAlt size={20} className='mb-1 '/>
                        <small className='text-black me-2 ms-2 pt-3'>Dubai</small>
                    </span>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 p-3" >
                <div className={`${styles.postBox}`}>
                    <div className={`${styles.postImage}`}><Image src={event2} className="img-fluid" alt=""/>
                    </div>
                    <figure className={`  mt-5 ${styles.postTitleFigre}`}>
                        <span className={` fs-5 mt-5 ${styles.postTitle}`}>GCC Accreditation Center Diwaniya</span>
                    </figure>
                    <span className={`${styles.iconDate} mt-4`}>
                        <CgCalendarDates size={25}/>
                        <small className='text-black me-1 ms-1 mt-4'>04 Sep.2023 - 08 Sep.2023</small>
                    </span>
                    <span className={`${styles.iconDate} mt-3`}>
                        <AiFillClockCircle size={20}/>
                        <small className='text-black me-2 ms-2 mt-4'>11:00 AM - 03:00 PM</small>
                    </span>
                    <span className={`${styles.iconDate} mt-3`}>
                        <FaMapMarkerAlt size={20} className='mb-1 '/>
                        <small className='text-black me-2 ms-2 pt-3'>Dubai</small>
                    </span>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 p-3" >
                <div className={`${styles.postBox}`}>
                    <div className={`${styles.postImage}`}><Image src={event1} className="img-fluid" alt=""/>
                    </div>
                    <figure className={`  mt-5 ${styles.postTitleFigre}`}>
                        <span className={` fs-5 mt-5 ${styles.postTitle}`}>GCC Accreditation Center Diwaniya</span>
                    </figure>
                    <span className={`${styles.iconDate} mt-4`}>
                        <CgCalendarDates size={25}/>
                        <small className='text-black me-1 ms-1 mt-4'>04 Sep.2023 - 08 Sep.2023</small>
                    </span>
                    <span className={`${styles.iconDate} mt-3`}>
                        <AiFillClockCircle size={20}/>
                        <small className='text-black me-2 ms-2 mt-4'>11:00 AM - 03:00 PM</small>
                    </span>
                    <span className={`${styles.iconDate} mt-3`}>
                        <FaMapMarkerAlt size={20} className='mb-1 '/>
                        <small className='text-black me-2 ms-2 pt-3'>Dubai</small>
                    </span>
                </div>
            </div>
        </div>
    </div>
</>
)
}

export default Events;