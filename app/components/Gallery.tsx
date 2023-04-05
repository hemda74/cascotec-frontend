import React from 'react'
import styles from '../styles/Gallery.module.css'
import Image from 'next/image'
import Link from 'next/link'
import gone from '../public/imagess/newsone.jpg'
import gtwo from '../public/imagess/newstwo.jpg'
import gthree from '../public/imagess/newsthree.jpg'
import g5 from '../public/imagess/g5.jpg'
const Gallery = () => {
  return (
    <>
    <div className={`text-center ${styles.titleWord}`}>
    <div className={`container mb-4`}>
                    <Link href={"/"}><a className="text-white fw-semibold mb-4">{`Home`}</a></Link>
                    <Link href={"/gallery"}><a className="text-white fw-semibold mb-4">{` > Gallery`}</a></Link>
                </div>
       <h2 className={`text-white fw-bold mb-5 `} >Gallery</h2>
   </div>
   <div className={` container `}>
       <div className="row ">
       <div className="col-3">
       </div>
       </div>
   </div>
   <div className={` container ${styles.formConatiner}`}>
   <div className="row gy-5 gx-lg-5">
     <div className={`col-lg-12 ${styles.contactCard}`}>
       <form action="forms/contact.php" method="post" role="form" className={` php-email-form ${styles.searchCard}`}>
         <div className="row justify-content-between">
         <div className={` d-flex col-md-4 col-lg-4 col-sm-6 col-xs-6 col-xl-2 form-group   ${styles.formGroup}`}>
         <label className='mt-1 me-1 ms-1'><small>Sortedby:</small></label>      
               <select  className={`form-select ${styles.formControl}`}  id="site-holidayes-input" >
                   <option>Most Recent</option>
                   <option>Title</option>
               </select>
             </div>
           <div className={`col-md-4 col-lg-2 col-xl-2 col-sm-6 col-xs-6  form-group  ${styles.formGroup}`}>
             <input type="text" name="name" className={`form-control ${styles.formControl}`} id="name" placeholder="Search..." required/>
           </div>
             <div className={`form-group d-flex justify-content-between mt-4 ${styles.formGroup}`}>
               <div className='col-md-4 col-lg-4 col-sm-6 col-xs-6'>
               </div>
             </div>
             </div>
       </form>
     </div>
   </div>
   </div>
   <section id="team" className="team">
      <div className="container">
        <div className="row gy-5">
          <div className="col-xl-4 col-md-6 d-flex" >
            <div className={`${styles.teamMember}`}>
              <div className={`${styles.memberImg}`}>
                <Image src={gtwo} className="img-fluid" alt=""/>
              </div>
              <Link href={'gallery/id'}>
              <div className={`${styles.memberInfo}`}>
              <span className=' fw-bold'>The 2nd GCC Conference for Laboratory Proficiency</span>
                <small>31 jan,2023</small>
              </div>
              </Link>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 d-flex" >
            <div className={`${styles.teamMember}`}>
              <div className={`${styles.memberImg}`}>
                <Image src={gone} className="img-fluid" alt=""/>
              </div>
              <Link href={'gallery/id'}>
              <div className={`${styles.memberInfo}`}>
              <span className=' fw-bold'>The 2nd GCC Conference for Laboratory Proficiency</span>
                <small>31 jan,2023</small>
              </div>
              </Link>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 d-flex" >
            <div className={`${styles.teamMember}`}>
              <div className={`${styles.memberImg}`}>
                <Image src={gthree} className="img-fluid" alt=""/>
              </div>
              <Link href={'gallery/id'}>
              <div className={`${styles.memberInfo}`}>
              <span className=' fw-bold'>The 2nd GCC Conference for Laboratory Proficiency</span>
                <small>31 jan,2023</small>
              </div>
              </Link>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 d-flex" >
            <div className={`${styles.teamMember}`}>
              <div className={`${styles.memberImg}`}>
                <Image src={gthree} className="img-fluid" alt=""/>
              </div>
              <Link href={'gallery/id'}>
              <div className={`${styles.memberInfo}`}>
              <span className=' fw-bold'>The 2nd GCC Conference for Laboratory Proficiency</span>
                <small>31 jan,2023</small>
              </div>
              </Link>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 d-flex" >
            <div className={`${styles.teamMember}`}>
              <div className={`${styles.memberImg}`}>
                <Image src={g5} className="img-fluid" alt=""/>
              </div>
              <Link href={'gallery/id'}>
              <div className={`${styles.memberInfo}`}>
              <span className=' fw-bold'>The 2nd GCC Conference for Laboratory Proficiency</span>
                <small>31 jan,2023</small>
              </div>
              </Link>
            </div>
          </div>
          </div>
        </div>
    </section>
   </>
  )
}

export default Gallery