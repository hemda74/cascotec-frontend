import React from 'react'
import styles from '../styles/News.module.css'
import Image from 'next/image'
import Link from 'next/link'
import newsone from '../public/imagess/newsone.jpg'
import newstwo from '../public/imagess/newstwo.jpg'
import newsthree from '../public/imagess/newsthree.jpg'
const News = () => {
  return (
    <>
    <div className={`text-center ${styles.titleWord}`}>
       <h6 className="text-white fw-semibold mb-4" >{`Home > Courses`}</h6>
       <h2 className={`text-white fw-bold mb-5 `} >Courses</h2>
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
           <p>25  Upcoming Course </p>
         <div className="row">
           <div className={`col-md-4 col-lg-4 col-sm-6 col-xs-6  form-group  ${styles.formGroup}`}>
             <input type="text" name="name" className={`form-control ${styles.formControl}`} id="name" placeholder="Search..." required/>
           </div>
           <div className={`col-md-4 col-lg-4 col-sm-6 col-xs-6 form-group   ${styles.formGroup}`}>
               <select  className={`form-select ${styles.formControl}`}  id="site-holidayes-input" >
                   <option>Select All</option>
                   <option>Testing Lap</option>
                   <option>Calibration Lab</option>
                   <option>Medical Lab</option>
                   <option>Mangment System Cetifcation</option>
                   <option>Halal Product Certification</option>
                   <option>Inspection Body</option>
                   <option>Prof Testing Provider</option>
                   <option>Product Certification</option>
                   <option>Personnel Certification Body</option>
                   <option>Reference Material Producer</option>
               </select>
             </div>
           <div className={`col-md-4 col-lg-4 col-sm-6 col-xs-6 form-group  ${styles.formGroup}`}>
               <select  className={`form-select ${styles.formControl}`}  id="site-holidayes-input" >
                   <option>Upcoming Trainings</option>
                   <option>Pervious Trainings</option>
               </select>                
             </div>

             <div className={`form-group d-flex justify-content-between mt-4 ${styles.formGroup}`}>
               <div className='col-md-4 col-lg-4 col-sm-6 col-xs-6'>
               </div>
               <div><button className={` myInfo  rounded ${styles.SearchButton}`} type="submit"> Search </button></div>
             </div>
             </div>
       </form>
     </div>
   </div>
   </div>
   <div className="container">
       <div className="row">
           <div className="col-lg-4 p-3" >
               <div className={`${styles.postBox}`}>
                   <div className={`${styles.postImage}`}><Image src={newsone} className="img-fluid" alt=""/></div>
                   <figure className={`  mt-5 ${styles.postTitleFigre}`}>
                   <span className={` fs-5 mt-5 ${styles.postTitle}`}>Mandatory documents for international accreditation organizations IHAF -AIF</span>
                   <figcaption className={`${styles.figCaption}`}>
                       <span className='m-auto fs-5 fw-semibold text-white'>General Requirements for Halal Cosmetics and Personal care.Packaging for Halal Cosmetics and Personal care.Informative Data Halal Cosmetics and Personal care.</span>
                   </figcaption>
                   </figure>                        
               </div>
           </div>
           <div className="col-lg-4 p-3" >
               <div className={`${styles.postBox}`}>
                   <div className={`${styles.postImage}`}><Image src={newsthree} className="img-fluid" alt=""/></div>
                   <figure className={`  mt-5 ${styles.postTitleFigre}`}>
                   <span className={` fs-5 mt-5 ${styles.postTitle}`}>Mandatory documents for international accreditation organizations IHAF -AIF</span>
                   <figcaption className={`${styles.figCaption}`}>
                       <span className='m-auto fs-5 fw-semibold text-white'>General Requirements for Halal Cosmetics and Personal care.Packaging for Halal Cosmetics and Personal care.Informative Data Halal Cosmetics and Personal care.</span>
                   </figcaption>
                   </figure>                      
               </div>
           </div>
           <div className="col-lg-4 p-3" >
               <div className={`${styles.postBox}`}>
                   <div className={`${styles.postImage}`}><Image src={newstwo} className="img-fluid" alt=""/></div>
                   <figure className={`  mt-5 ${styles.postTitleFigre}`}>
                   <span className={` fs-5 mt-5 ${styles.postTitle}`}>Mandatory documents for international accreditation organizations IHAF -AIF</span>
                   <figcaption className={`${styles.figCaption}`}>
                       <span className='m-auto fs-5 fw-semibold text-white'>General Requirements for Halal Cosmetics and Personal care.Packaging for Halal Cosmetics and Personal care.Informative Data Halal Cosmetics and Personal care.</span>
                   </figcaption>
                   </figure>                       
               </div>
           </div>
           <div className="col-lg-4 p-3" >
               <div className={`${styles.postBox}`}>
                   <div className={`${styles.postImage}`}><Image src={newsone} className="img-fluid" alt=""/></div>
                   <figure className={`  mt-5 ${styles.postTitleFigre}`}>
                   <span className={` fs-5 mt-5 ${styles.postTitle}`}>Mandatory documents for international accreditation organizations IHAF -AIF</span>
                   <figcaption className={`${styles.figCaption}`}>
                       <span className='m-auto fs-5 fw-semibold text-white'>General Requirements for Halal Cosmetics and Personal care.Packaging for Halal Cosmetics and Personal care.Informative Data Halal Cosmetics and Personal care.</span>
                   </figcaption>
                   </figure>                      
               </div>
           </div>
           <div className="col-lg-4 p-3" >
               <div className={`${styles.postBox}`}>
                   <div className={`${styles.postImage}`}><Image src={newsone} className="img-fluid" alt=""/></div>
                   <figure className={`  mt-5 ${styles.postTitleFigre}`}>
                   <span className={` fs-5 mt-5 ${styles.postTitle}`}>Mandatory documents for international accreditation organizations IHAF -AIF</span>
                   <figcaption className={`${styles.figCaption}`}>
                       <span className='m-auto fs-5 fw-semibold text-white'>General Requirements for Halal Cosmetics and Personal care.Packaging for Halal Cosmetics and Personal care.Informative Data Halal Cosmetics and Personal care.</span>
                   </figcaption>
                   </figure>
               </div>
           </div>
           <div className="col-lg-4 p-3" >
               <div className={`${styles.postBox}`}>
                   <div className={`${styles.postImage}`}><Image src={newsthree} className="img-fluid" alt=""/></div>
                   <figure className={`  mt-5 ${styles.postTitleFigre}`}>
                   <span className={` fs-5 mt-5 ${styles.postTitle}`}>Mandatory documents for international accreditation organizations IHAF -AIF</span>
                   <figcaption className={`${styles.figCaption}`}>
                       <span className='m-auto fs-5 fw-semibold text-white'>General Requirements for Halal Cosmetics and Personal care.Packaging for Halal Cosmetics and Personal care.Informative Data Halal Cosmetics and Personal care.</span>
                   </figcaption>
                   </figure>
               </div>
           </div>
           <div className="col-lg-4 p-3" >
               <div className={`${styles.postBox}`}>
                   <div className={`${styles.postImage}`}><Image src={newstwo} className="img-fluid" alt=""/></div>
                   <figure className={`  mt-5 ${styles.postTitleFigre}`}>
                   <span className={` fs-5 mt-5 ${styles.postTitle}`}>Mandatory documents for international accreditation organizations IHAF -AIF</span>
                   <figcaption className={`${styles.figCaption}`}>
                       <span className='m-auto fs-5 fw-semibold text-white'>General Requirements for Halal Cosmetics and Personal care.Packaging for Halal Cosmetics and Personal care.Informative Data Halal Cosmetics and Personal care.</span>
                   </figcaption>
                   </figure>                        
               </div>
           </div>
           <div className="col-lg-4 p-3" >
               <div className={`${styles.postBox}`}>
                   <div className={`${styles.postImage}`}><Image src={newsone} className="img-fluid" alt=""/></div>
                   <figure className={`  mt-5 ${styles.postTitleFigre}`}>
                   <span className={` fs-5 mt-5 ${styles.postTitle}`}>Mandatory documents for international accreditation organizations IHAF -AIF</span>
                   <figcaption className={`${styles.figCaption}`}>
                       <span className='m-auto fs-5 fw-semibold text-white'>General Requirements for Halal Cosmetics and Personal care.Packaging for Halal Cosmetics and Personal care.Informative Data Halal Cosmetics and Personal care.</span>
                   </figcaption>
                   </figure>                      
               </div>
           </div>
           <div className="col-lg-4 p-3" >
               <div className={`${styles.postBox}`}>
                   <div className={`${styles.postImage}`}><Image src={newstwo} className="img-fluid" alt=""/></div>
                   <figure className={`  mt-5 ${styles.postTitleFigre}`}>
                   <span className={` fs-5 mt-5 ${styles.postTitle}`}>Mandatory documents for international accreditation organizations IHAF -AIF</span>
                   <figcaption className={`${styles.figCaption}`}>
                       <span className='m-auto fs-5 fw-semibold text-white'>General Requirements for Halal Cosmetics and Personal care.Packaging for Halal Cosmetics and Personal care.Informative Data Halal Cosmetics and Personal care.</span>
                   </figcaption>
                   </figure>                       
               </div>
           </div>
           <div className="col-lg-4 p-3" >
               <div className={`${styles.postBox}`}>
                   <div className={`${styles.postImage}`}><Image src={newsthree} className="img-fluid" alt=""/></div>
                   <figure className={`  mt-5 ${styles.postTitleFigre}`}>
                   <span className={` fs-5 mt-5 ${styles.postTitle}`}>Mandatory documents for international accreditation organizations IHAF -AIF</span>
                   <figcaption className={`${styles.figCaption}`}>
                       <span className='m-auto fs-5 fw-semibold text-white'>General Requirements for Halal Cosmetics and Personal care.Packaging for Halal Cosmetics and Personal care.Informative Data Halal Cosmetics and Personal care.</span>
                   </figcaption>
                   </figure>                        
               </div>
           </div>
       </div>
   </div>
   </>
  )
}

export default News;