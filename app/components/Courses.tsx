import React from 'react'
import styles from '../styles/Courses.module.css'
import Link from 'next/link'
import Image from 'next/image'
import courseimage from '../public/images/courses_section/courses_images/Food-Safety-Management-Requirements-in-Accordance-with-International-Standard-ISO-22000-2018.png'
import coursesimage2 from '../public/images/courses_section/courses_images/General-Requirement-For-Halal-Products-Certification-According-To-GCC-Standard-GSO2055-2-2021-And-International-Standard-ISO-IEC17065.png'
import coursesimage3 from '../public/images/courses_section/courses_images/ISO-IEC-17065-2012-Certification-Requirements.png'
import coursesimage4 from '../public/images/courses_section/courses_images/Understanding-ISO-IEC-17025-2017-for-Testing-and-Calibration-Laboratories.png'
import coursesimage5 from '../public/images/courses_section/courses_images/General-GSO-993.png'
import coursesimage6 from '../public/images/courses_section/courses_images/Guidelines-For-Auditing-Management-Systems-According-To-ISO190112018-based-on-Halal-Scheme.png'
import coursesimage7 from '../public/images/courses_section/courses_images/Accreditation-Requirements-For-Inspection-Bodies-In-Accordance-With-International-StandardISO-IEC-17020-2012.png'
import coursesimage8 from '../public/images/courses_section/courses_images/Accreditation-GSO-2055-2.png'
import coursesimage9 from '../public/images/courses_section/courses_images/Requirements-For-Accreditation-of-Medical-Laboratories-According-To-ISO-15189-2012.png'
import coursesimage10 from '../public/images/courses_section/courses_images/Accreditation-Requirements-For-Testing-And-Calibration-Laboratories.png'
import coursesimage11 from '../public/images/courses_section/courses_images/Measurement-Uncertainty-and-ISO-IEC-17025-2017-Compliance-for-Laboratories.png'
import coursesimage12 from '../public/images/courses_section/courses_images/ISO-IEC-17024-Requirements-for-Personnel-Certification-Bodies.png'
import coursesimage13 from '../public/images/courses_section/courses_images/Requirements-For-Accreditation-of-Medical-Laboratories-According-To-ISO-15189-2012.png'
import coursesimage14 from '../public/images/courses_section/courses_images/Requirements-For-Accreditation-Of-Risk-Management-Systems-Certification-Bodies-Guidelines-ISO-31000-2018.png'
import coursesimage15 from '../public/images/courses_section/courses_images/Food-Safety-Management.png'
import coursesimage16 from '../public/images/courses_section/courses_images/Global-Standard-for-Food-Safety-Issue-9-Sites-Training.png'
import coursesimage17 from '../public/images/courses_section/courses_images/Global-Standard-for-Food-Safety-Issue--Lead-Auditor.png'
import courses from '../public/images/home_page/section_courses/section_courses.svg'
import {CgCalendarDates} from 'react-icons/cg'
import {FaMapMarkerAlt} from 'react-icons/fa'
const Courses = () => {
    return (
    <>
        <div className={`text-center ${styles.titleWord}`}>
            <div className={`container mb-4`}>
                <Link href={"/"}><a className="text-white fw-semibold mb-4" data-trans="HomeNav">{`Home`}</a></Link>
                <Link href={"/courses"}><a className="text-white fw-semibold mb-4" data-trans="CourseNav2">{` > Courses`}</a></Link>
            </div>  
        <h2 className={`text-white fw-bold mb-5`} data-trans="Courses"></h2>
        </div>
        <div className="container col-xl-8 col-lg-10 col-md-12 mb-5">
            <div className="row ">
               <div className={`col-lg-12 justify-content-between ${styles.coursesCard}`}>
                    <div className={`${styles.coursesHead}`}>
                        <span className={`fs-4 fw-semibold mb-3 ${styles.cardSubTitle}`} data-trans="COURSES">COURSES</span> 
                        <span className="fw-semibold d-block mt-3" data-trans="cousesParageph">{``}</span>
                    </div>
                    <div className={`${styles.cardImage}`}>
                        <Image src={courses} width={1200} height={1200} alt="courses_image"/>
                    </div>
               </div>
            </div>
        </div>
         {/* <div className={` container col-xl-8 col-lg-10 col-md-12  ${styles.formConatiner}`}>
        <span className={`me-3 ms-3`} >25  Upcoming Course </span>
        <div className="row gy-5 gx-lg-5">
          <div className={`col-lg-12 m-0`}>
            <form action="forms/contact.php" method="post" role="form" className={`php-email-form ${styles.searchCard}`}>
              <div className="row">
                <div className={`col-md-4 col-lg-4 col-sm-6 col-xs-6 mt-3 form-group  ${styles.formGroup}`}>
                  <input type="text" name="name" className={`form-control ${styles.formControl}`} id="name" placeholder="Search..." required/>
                </div>
                <div className={`col-md-4 col-lg-4 col-sm-6 col-xs-12 form-group mt-3 ${styles.formGroup}`}>
                  <div  className={`${styles.formControl}`}>
                   <Example/>
                   </div>
                  </div>
                <div className={`col-md-4 col-lg-4 col-sm-6 col-xs-6 form-group mt-3 ${styles.formGroup}`}>
                    <select  className={`form-select ${styles.formControl}`}  id="site-holidayes-input" >
                        <option>Upcoming Trainings</option>
                        <option>Pervious Trainings</option>
                    </select>                
                  </div>

                  <div className={`form-group d-flex justify-content-between mt-4 ${styles.formGroup}`}>
                    <div className='col-md-4 col-lg-4 col-sm-6 col-xs-6'>
                    </div>
                    <div><button className={`myInfo rounded ${styles.SearchButton}`} type="submit"> Search </button></div>
                  </div>
                  </div>
            </form>
          </div>
        </div>
        </div>  */}
        <div className="container col-xl-8 col-lg-10 col-md-12 mb-3 mt-1 p-0 ">
            <div className="row ms-1 me-1 p-0">
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 p-1">
                    <Link href={'/courses/food-safety-management-requirements-in-accordance-with-international-standard-iso'}>
                    <div className={`${styles.postBox}`}>
                        <div className={`${styles.postImage}`}>
                            <Image src={courseimage} className="img-fluid" alt=""/>
                        </div>
                        <figure className={`mt-5 ${styles.postTitleFigre}`}>
                        <span className={`mt-5 ${styles.postTitle}`} data-trans="course1">{``}</span>
                        </figure>                      
                        <span className={`${styles.iconDate}`}>
                            <CgCalendarDates size={20}/>
                            <small className='text-black me-1 ms-1 mt-1' data-trans="coursedate1jun">01-Jun-2023</small>
                        </span>
                        <span className={`${styles.iconDate}`}>
                            <FaMapMarkerAlt size={20} className='mb-1'/>
                            <small className='text-black me-1 ms-1 pt-3' data-trans="Egypt">Egypt</small>
                        </span>
                    </div>
                    </Link>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 p-1" >
                    <Link href={'/courses/general_requirement_for_halal_products_certification_according_to_gcc_standard'}>
                    <div className={`${styles.postBox}`}>
                        <div className={`${styles.postImage}`}>
                            <Image src={coursesimage2} className="img-fluid" alt=""/></div>
                        <figure className={`mt-5 ${styles.postTitleFigre}`}>
                        <span  className={` mt-5 ${styles.postTitle}`} data-trans="course2">{`General Requirement For Halal Products Certification According To GCC Standard GSO2055-2:2021 And International Standard ISO/IEC17065`}</span>
                        </figure>                
                                <span className={`${styles.iconDate}`}>
                            <CgCalendarDates size={20}/>
                            <small className='text-black me-1 ms-1 mt-1' data-trans="coursedate1jun">01-Jun-2023</small>
                        </span>
                        <span className={`${styles.iconDate}`}>
                            <FaMapMarkerAlt size={20} className='mb-1'/>
                            <small className='text-black me-1 ms-1 pt-3' data-trans="UAE">UAE</small>
                        </span>
                    </div>
                    </Link>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 p-1" >
                    <Link href={'/courses/iSO_iEC_17065_2012_certification_requirements'}>
                    <div className={`${styles.postBox}`}>
                        <div className={`${styles.postImage}`}>
                            <Image src={coursesimage3} className="img-fluid" alt=""/></div>
                        <figure className={`pe-1 ps-2 mt-5 ${styles.postTitleFigre}`}>
                        <span className={`mt-5 ${styles.postTitle}`} data-trans="course3">{`ISO/IEC 17065:2012 Certification Requirements`}</span>
                        </figure>                       
                         <span className={`${styles.iconDate}`}><CgCalendarDates size={20}/>
                            <small className='text-black me-1 ms-1 mt-1' data-trans="coursedate1jun">01-Jun-2023</small>
                        </span>
                        <span className={`${styles.iconDate}`}><FaMapMarkerAlt size={20} className='mb-1'/>
                            <small className='text-black me-1 ms-1 pt-3' data-trans="KSA">KSA</small>
                        </span>
                    </div>
                    </Link>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 p-1" >
                    <Link href={'/courses/understanding_iso_ise_17025_2017_for_testing_and_calibration_laboratories'}>
                    <div className={`${styles.postBox}`}>
                        <div className={`${styles.postImage}`}>
                            <Image src={coursesimage4} className="img-fluid" alt=""/>
                        </div>
                        <figure className={`pe-1 ps-2 mt-5 ${styles.postTitleFigre}`}>
                        <span className={`mt-5 ${styles.postTitle}`} data-trans="course4">{`Understanding ISO/IEC 17025:2017 for Testing and Calibration Laboratories`}</span>
                        </figure>                      
                        <span className={`${styles.iconDate}`}>
                            <CgCalendarDates size={20}/>
                            <small className='text-black me-1 ms-1 mt-1' data-trans="coursedate1jun">01-Jun-2023</small>
                        </span>
                        <span className={`${styles.iconDate}`}>
                            <FaMapMarkerAlt size={20} className='mb-1'/>
                            <small className='text-black me-1 ms-1 pt-3' data-trans="Egypt">Egypt</small>
                        </span>
                    </div>
                    </Link>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 p-1">
                    <Link href={'/courses/General-Requirements-For-Halal-Food-In-Accordance-With-Gulf-Standard-Specification-GSO-2055-1-And-Animal-Zakat-Requirements-In-Accordance-With-Islamic-Sharia-GSO-993'}>
                    <div className={`${styles.postBox}`}>
                        <div className={`${styles.postImage}`}>
                            <Image src={coursesimage5} className="img-fluid" alt=""/>
                        </div>
                        <figure className={`pe-1 ps-2 mt-5 ${styles.postTitleFigre}`}>
                        <span className={`mt-5 ${styles.postTitle}`} data-trans="course5"></span>
                        </figure>
                        <span className={`${styles.iconDate}`}><CgCalendarDates size={20}/>
                            <small className='text-black me-1 ms-1 mt-1' data-trans="coursedate1jun">01-Jun-2023</small>
                        </span>
                        <span className={`${styles.iconDate}`}><FaMapMarkerAlt size={20} className='mb-1'/>
                            <small className='text-black me-1 ms-1 pt-3' data-trans="KSA"></small>
                        </span>
                    </div>
                    </Link>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 p-1" >
                    <Link href={'/courses/guidelines-for-auditing-management-systems-according'}>
                    <div className={`${styles.postBox}`}>
                        <div className={`${styles.postImage}`}><Image src={coursesimage6} className="img-fluid" alt=""/></div>
                        <figure className={`pe-1 ps-2 mt-5 ${styles.postTitleFigre}`}>
                        <span className={`mt-5 ${styles.postTitle}`} data-trans="course6"> </span>
                        
                        </figure>
                        <span className={`${styles.iconDate}`}>
                            <CgCalendarDates size={20}/>
                            <small className='text-black me-1 ms-1 mt-1' data-trans="coursedate1jun">01-Jun-2023</small>
                        </span>
                        <span className={`${styles.iconDate}`}>
                            <FaMapMarkerAlt size={20} className='mb-1'/>
                            <small className='text-black me-1 ms-1 pt-3' data-trans="KSA"></small>
                        </span>
                    </div>
                    </Link>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 p-1" >
                    <Link href={'/courses/Accreditation-Requirements-or-Inspection-Bodies-In-Accordance-With-International-StandardISO'}>
                    <div className={`${styles.postBox}`}>
                        <div className={`${styles.postImage}`}>
                            <Image src={coursesimage7} className="img-fluid" alt=""/>
                        </div>
                        <figure className={`pe-1 ps-2 mt-5 ${styles.postTitleFigre}`}>
                        <span className={`mt-5 ${styles.postTitle}`} data-trans="course7"></span>
                        </figure>                        
                        <span className={`${styles.iconDate}`}><CgCalendarDates size={20}/>
                            <small className='text-black me-1 ms-1 mt-1' data-trans="coursedate1jun">01-Jun-2023</small>
                        </span>
                        <span className={`${styles.iconDate}`}><FaMapMarkerAlt size={20} className='mb-1'/>
                            <small className='text-black me-1 ms-1 pt-3' data-trans="Egypt"></small>
                        </span>
                    </div>
                    </Link>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 p-1" >
                    <Link href={'/courses/Accreditation-Requirements-For-Bodies-Certifying-Halal-In-Accordance-With-GSO-2055-2'}>
                    <div className={`${styles.postBox}`}>
                        <div className={`${styles.postImage}`}>
                            <Image src={coursesimage8} className="img-fluid" alt=""/>
                        </div>
                        <figure className={`pe-1 ps-2 mt-5 ${styles.postTitleFigre}`}>
                        <span className={`mt-5 ${styles.postTitle}`} data-trans="course8"></span>
                        </figure>                        
                        <span className={`${styles.iconDate}`}>
                            <CgCalendarDates size={20}/>
                            <small className='text-black me-1 ms-1 mt-1' data-trans="coursedate1jun">01-Jun-2023</small>
                        </span>
                        <span className={`${styles.iconDate}`}>
                            <FaMapMarkerAlt size={20} className='mb-1'/>
                            <small className='text-black me-1 ms-1 pt-3' data-trans="UAE"></small>
                        </span>
                    </div>
                    </Link>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 p-1" >
                    <Link href={'/courses/Requirements-For-Accreditation-Of-Medical-Laboratories-According-To-ISO'}>
                    <div className={`${styles.postBox}`}>
                        <div className={`${styles.postImage}`}>
                            <Image src={coursesimage9} className="img-fluid" alt=""/>
                        </div>
                        <figure className={`pe-1 ps-2 mt-5 ${styles.postTitleFigre}`}>
                        <span className={`mt-5 ${styles.postTitle}`} data-trans="course9"></span>
                        </figure>                       
                         <span className={`${styles.iconDate}`}><CgCalendarDates size={20}/>
                            <small className='text-black me-1 ms-1 mt-1' data-trans="coursedate1jun">01-Jun-2023</small>
                        </span>
                        <span className={`${styles.iconDate}`}><FaMapMarkerAlt size={20} className='mb-1'/>
                            <small className='text-black me-1 ms-1 pt-3' data-trans="KSA"></small>
                        </span>
                    </div>
                    </Link>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 p-1" >
                    <Link href={'/courses/Accreditation-Requirements-For-Testing-And-Calibration-Laboratories-According'}>
                    <div className={`${styles.postBox}`}>
                        <div className={`${styles.postImage}`}>
                            <Image src={coursesimage10} className="img-fluid" alt=""/>
                        </div>
                        <figure className={`pe-1 ps-2 mt-5 ${styles.postTitleFigre}`}>
                        <span className={`mt-5 ${styles.postTitle}`} data-trans="course10"></span>
                        </figure>           
                        <span className={`${styles.iconDate}`}>
                            <CgCalendarDates size={20}/>
                            <small className='text-black me-1 ms-1 mt-1' data-trans="coursedate1jun">01-Jun-2023</small>
                        </span>
                        <span className={`${styles.iconDate}`}>
                            <FaMapMarkerAlt size={20} className='mb-1'/>
                            <small className='text-black me-1 ms-1 pt-3' data-trans="KSA"></small>
                        </span>
                    </div>
                    </Link>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 p-1" >
                    <Link href={'/courses/Measurement-Uncertainty-and-ISO-IEC-Compliance-for-labs'}>
                    <div className={`${styles.postBox}`}>
                        <div className={`${styles.postImage}`}>
                            <Image src={coursesimage11} className="img-fluid" alt=""/>
                        </div>
                        <figure className={`pe-1 ps-2 mt-5 ${styles.postTitleFigre}`}>
                        <span className={`mt-5 ${styles.postTitle}`} data-trans="course11"></span>
                        </figure>           
                        <span className={`${styles.iconDate}`}>
                            <CgCalendarDates size={20}/>
                            <small className='text-black me-1 ms-1 mt-1' data-trans="coursedate1jun">01-Jun-2023</small>
                        </span>
                        <span className={`${styles.iconDate}`}>
                            <FaMapMarkerAlt size={20} className='mb-1'/>
                            <small className='text-black me-1 ms-1 pt-3' data-trans="Egypt"></small>
                        </span>
                    </div>
                    </Link>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 p-1" >
                    <Link href={'/courses/ISO-IEC-17024-Requirements-for-Personnel-Certification-Bodies'}>
                    <div className={`${styles.postBox}`}>
                        <div className={`${styles.postImage}`}>
                            <Image src={coursesimage12} className="img-fluid" alt=""/>
                        </div>
                        <figure className={`pe-1 ps-2 mt-5 ${styles.postTitleFigre}`}>
                        <span className={`mt-5 ${styles.postTitle}`} data-trans="course12"></span>
                        </figure>           
                        <span className={`${styles.iconDate}`}>
                            <CgCalendarDates size={20}/>
                            <small className='text-black me-1 ms-1 mt-1' data-trans="coursedate1jun">01-Jun-2023</small>
                        </span>
                        <span className={`${styles.iconDate}`}>
                            <FaMapMarkerAlt size={20} className='mb-1'/>
                            <small className='text-black me-1 ms-1 pt-3' data-trans="UAE"></small>
                        </span>
                    </div>
                    </Link>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 p-1" >
                    <Link href={'/courses/Requirements-of-Accreditation-of-Medical-Laboratories-According-To-ISO'}>
                    <div className={`${styles.postBox}`}>
                        <div className={`${styles.postImage}`}>
                            <Image src={coursesimage13} className="img-fluid" alt=""/>
                        </div>
                        <figure className={`pe-1 ps-2 mt-5 ${styles.postTitleFigre}`}>
                        <span className={`mt-5 ${styles.postTitle}`} data-trans="course13"></span>
                        </figure>           
                        <span className={`${styles.iconDate}`}>
                            <CgCalendarDates size={20}/>
                            <small className='text-black me-1 ms-1 mt-1' data-trans="coursedate1jun">01-Jun-2023</small>
                        </span>
                        <span className={`${styles.iconDate}`}>
                            <FaMapMarkerAlt size={20} className='mb-1'/>
                            <small className='text-black me-1 ms-1 pt-3' data-trans="Egypt"></small>
                        </span>
                    </div>
                    </Link>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 p-1" >
                    <Link href={'/courses/Requirements-For-Accreditation-Of-Risk-Management-Systems-Certification-Bodies-Guidelines'}>
                    <div className={`${styles.postBox}`}>
                        <div className={`${styles.postImage}`}>
                            <Image src={coursesimage14} className="img-fluid" alt=""/>
                        </div>
                        <figure className={`pe-1 ps-2 mt-5 ${styles.postTitleFigre}`}>
                        <span className={`mt-5 ${styles.postTitle}`} data-trans="course14"></span>
                        </figure>           
                        <span className={`${styles.iconDate}`}>
                            <CgCalendarDates size={20}/>
                            <small className='text-black me-1 ms-1 mt-1' data-trans="coursedate1jun">01-Jun-2023</small>
                        </span>
                        <span className={`${styles.iconDate}`}>
                            <FaMapMarkerAlt size={20} className='mb-1'/>
                            <small className='text-black me-1 ms-1 pt-3' data-trans="KSA"></small>
                        </span>
                    </div>
                    </Link>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 p-1" >
                    <Link href={'/courses/Food-Safety-Management-Requirements-in-Accordance-with-International-Standard'}>
                    <div className={`${styles.postBox}`}>
                        <div className={`${styles.postImage}`}>
                            <Image src={coursesimage15} className="img-fluid" alt=""/>
                        </div>
                        <figure className={`pe-1 ps-2 mt-5 ${styles.postTitleFigre}`}>
                        <span className={`mt-5 ${styles.postTitle}`} data-trans="course15"></span>
                        </figure>           
                        <span className={`${styles.iconDate}`}>
                            <CgCalendarDates size={20}/>
                            <small className='text-black me-1 ms-1 mt-1' data-trans="coursedate1jun">01-Jun-2023</small>
                        </span>
                        <span className={`${styles.iconDate}`}>
                            <FaMapMarkerAlt size={20} className='mb-1'/>
                            <small className='text-black me-1 ms-1 pt-3' data-trans="KSA"></small>
                        </span>
                    </div>
                    </Link>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 p-1" >
                    <Link href={'/courses/Global-Standard-for-Food-Safety-Issue-9-Sites-Training'}>
                    <div className={`${styles.postBox}`}>
                        <div className={`${styles.postImage}`}>
                            <Image src={coursesimage16} className="img-fluid" alt=""/>
                        </div>
                        <figure className={`pe-1 ps-2 mt-5 ${styles.postTitleFigre}`}>
                        <span className={`mt-5 ${styles.postTitle}`} data-trans="course16"></span>
                        </figure>           
                        <span className={`${styles.iconDate}`}>
                            <CgCalendarDates size={20}/>
                            <small className='text-black me-1 ms-1 mt-1' data-trans="coursedate1jun">01-Jun-2023</small>
                        </span>
                        <span className={`${styles.iconDate}`}>
                            <FaMapMarkerAlt size={20} className='mb-1'/>
                            <small className='text-black me-1 ms-1 pt-3' data-trans="Egypt"></small>
                        </span>
                    </div>
                    </Link>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 p-1" >
                    <Link href={'/courses/Global-Standard-for-Food-Safety-Issue-9-Lead-Auditor'}>
                    <div className={`${styles.postBox}`}>
                        <div className={`${styles.postImage}`}>
                            <Image src={coursesimage17} className="img-fluid" alt=""/>
                        </div>
                        <figure className={`pe-1 ps-2 mt-5 ${styles.postTitleFigre}`}>
                        <span className={`mt-5 ${styles.postTitle}`} data-trans="course17"> </span>
                        </figure>           
                        <span className={`${styles.iconDate}`}>
                            <CgCalendarDates size={20}/>
                            <small className='text-black me-1 ms-1 mt-1' data-trans="coursedate1jun">01-Jun-2023</small>
                        </span>
                        <span className={`${styles.iconDate}`}>
                            <FaMapMarkerAlt size={20} className='mb-1'/>
                            <small className='text-black me-1 ms-1 pt-3' data-trans="UAE"></small>
                        </span>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
        </>
  )
}

export default Courses