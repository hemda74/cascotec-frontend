import React from 'react'
import styles from '../styles/Events.module.css'
import Image from 'next/image'
import newsthree from '../public/imagess/newsthree.jpg'
import event1 from '../public/images/events/event1.jpg'
import event2 from '../public/images/events/event2.jpg'
import { CgCalendarDates } from 'react-icons/cg'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { AiFillClockCircle } from 'react-icons/ai'
const Events = () => {
  return (
    <>
   <div className={`text-center ${styles.titleWord}`}>
       <h6 className="text-white fw-semibold mb-4" >{`Home > Events`}</h6>
       <h2 className={`text-white fw-bold mb-5 `} >Events</h2>
   </div>
   <div className={` container col-xl-8 col-lg-10 col-md-12 mt-5 mb-4 ${styles.formConatiner}`}>
        <div className="row gy-5 gx-lg-5">
            <div className={`col-lg-12 ${styles.contactCard}`}>
                <form action="forms/contact.php" method="post" role="form" className={` php-email-form ${styles.searchCard}`}>
                    <div className="row justify-content-between">
                        <div className={` d-flex col-md-4 col-lg-3 col-sm-6 col-xs-6 col-xl-3 mb-3 form-group   ${styles.formGroup}`}>
                            <label className='mt-1 me-1 ms-1'><small>Sortedby:</small></label>      
                            <select  className={`form-select ${styles.formControl}`}  id="site-holidayes-input" >
                                <option>Most Recent</option>
                                <option>Title</option>
                            </select>
                        </div>
                        <div className={`col-md-4 col-lg-3 col-xl-3 col-sm-6 col-xs-6   form-group  ${styles.formGroup}`}>
                            <input type="text" name="name" className={`form-control ${styles.formControl}`} id="name" placeholder="Search..." required/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
   </div>
   <div className="container col-xl-8 col-lg-10 col-md-12 mb-5">
        <div className="row">
            <div className="col-lg-4 col-md-6 p-3" >
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