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
   <div className={`container mb-4`}>
                    <Link href={"/"}><a className="text-white fw-semibold mb-4">{`Home`}</a></Link>
                    <Link href={"/news"}><a className="text-white fw-semibold mb-4">{` > News`}</a></Link>
                </div>
       <h2 className={`text-white fw-bold mb-5 `} >News</h2>
   </div>
   <div className={` container col-xl-8 col-lg-10 col-md-12 mt-5 mb-4 ${styles.formConatiner}`}>
        <div className="row gy-5 gx-lg-5">
            <div className={`col-lg-12 ${styles.contactCard}`}>
                <form action="forms/contact.php" method="post" role="form" className={` php-email-form ${styles.searchCard}`}>
                    <div className="row justify-content-between">
                        <div className={` d-flex col-md-4 col-lg-3 col-sm-6 col-xs-6 col-xl-3 form-group   ${styles.formGroup}`}>
                            <label className='mt-1 me-1 ms-1'><small>Sortedby:</small></label>      
                            <select  className={`form-select ${styles.formControl}`}  id="site-holidayes-input" >
                                <option>Most Recent</option>
                                <option>Title</option>
                            </select>
                        </div>
                        <div className={`col-md-4 col-lg-3 col-xl-3 col-sm-6 col-xs-6  form-group  ${styles.formGroup}`}>
                            <input type="text" name="name" className={`form-control ${styles.formControl}`} id="name" placeholder="Search..." required/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
   </div>
   <div className="container col-xl-8 col-lg-10 col-md-12">
        <div className="row">
            <div className="col-lg-4 col-md-6 p-3" >
                <div className={`${styles.postBox}`}>
                    <div className={`${styles.postImage}`}><Image src={newsone} className="img-fluid" alt=""/>
                    </div>
                    <div className="meta">
                        <small className={`${styles.postDate}`}>
                            {`Tue, December 12,2023`}
                        </small>
                    </div>   
                    <span className={` fs-5  ${styles.postTitle}`}>
                        GCC Accreditation Center Director General meeting with the Undersecretary of ...</span>
                    <p className='mt-3'>GCC Accreditation Center Director General, H.E Eng. Mutib Al-Mizani, was honored to meet with H.E Mr. Salem bin Muslim Al-Busaidi, Undersecretary ...</p>
                    <Link href={'/news/id'} className="readmore stretched-link"><a><span className={`${styles.spanReadMore}`}>{`Read More`}</span></a></Link>                
                </div>
            </div>
            <div className="col-lg-4 col-md-6 p-3" >
               <div className={`${styles.postBox}`}>
                    <div className={`${styles.postImage}`}><Image src={newsthree} className="img-fluid" alt=""/>
                    </div> 
                    <div className="meta">
                        <small className={`${styles.postDate}`}>{`Tue, December 12,2023`}</small>
                    </div>   
                    <span className={` fs-5  ${styles.postTitle}`}>GCC Accreditation Center Director General meeting with the Undersecretary of ...</span>
                    <p className='mt-3'>GCC Accreditation Center Director General, H.E Eng. Mutib Al-Mizani, was honored to meet with H.E Mr. Salem bin Muslim Al-Busaidi, Undersecretary ...</p>
                    <Link href={'/news/id'} className="readmore stretched-link"><a><span className={`${styles.spanReadMore}`}>{`Read More`}</span></a></Link>               
                </div>
            </div>
            <div className="col-lg-4 col-md-6 p-3" >
                <div className={`${styles.postBox}`}>
                    <div className={`${styles.postImage}`}><Image src={newstwo} className="img-fluid" alt=""/></div>   
                    <div className="meta">
                        <small className={`${styles.postDate}`}>{`Tue, December 12,2023`}</small>
                    </div>   
                    <span className={` fs-5  ${styles.postTitle}`}>GCC Accreditation Center Director General meeting with the Undersecretary of ...</span>
                    <p className='mt-3'>GCC Accreditation Center Director General, H.E Eng. Mutib Al-Mizani, was honored to meet with H.E Mr. Salem bin Muslim Al-Busaidi, Undersecretary ...</p>
                    <Link href={'/news/id'} className="readmore stretched-link"><a><span className={`${styles.spanReadMore}`}>{`Read More`}</span></a></Link>                     
                </div>
            </div>
            <div className="col-lg-4 col-md-6 p-3" >
               <div className={`${styles.postBox}`}>
                    <div className={`${styles.postImage}`}><Image src={newsone}  className="img-fluid" alt=""/></div>                
                    <div className="meta">
                        <small className={`${styles.postDate}`}>{`Tue, December 12,2023`}</small>
                    </div>   
                    <span className={` fs-5  ${styles.postTitle}`}>GCC Accreditation Center Director General meeting with the Undersecretary of ...</span>
                    <p className='mt-3'>GCC Accreditation Center Director General, H.E Eng. Mutib Al-Mizani, was honored to meet with H.E Mr. Salem bin Muslim Al-Busaidi, Undersecretary ...</p>
                    <Link href={'/news/id'} className="readmore stretched-link"><a><span className={`${styles.spanReadMore}`}>{`Read More`}</span></a></Link>    
                </div>
            </div>
            <div className="col-lg-4 col-md-6 p-3" >
                <div className={`${styles.postBox}`}>
                    <div className={`${styles.postImage}`}><Image src={newsone} className="img-fluid" alt=""/></div>
                    <div className="meta">
                        <small className={`${styles.postDate}`}>{`Tue, December 12,2023`}</small>
                    </div>   
                    <span className={` fs-5  ${styles.postTitle}`}>GCC Accreditation Center Director General meeting with the Undersecretary of ...</span>
                    <p className='mt-3'>GCC Accreditation Center Director General, H.E Eng. Mutib Al-Mizani, was honored to meet with H.E Mr. Salem bin Muslim Al-Busaidi, Undersecretary ...</p>
                    <Link href={'/news/id'} className="readmore stretched-link"><a><span className={`${styles.spanReadMore}`}>{`Read More`}</span></a></Link>    
                </div>
            </div>
             <div className="col-lg-4 col-md-6 p-3" >
               <div className={`${styles.postBox}`}>
                    <div className={`${styles.postImage}`}><Image src={newsthree} className="img-fluid" alt=""/>
                    </div> 
                    <div className="meta">
                        <small className={`${styles.postDate}`}>{`Tue, December 12,2023`}</small>
                    </div>   
                    <span className={` fs-5  ${styles.postTitle}`}>GCC Accreditation Center Director General meeting with the Undersecretary of ...</span>
                    <p className='mt-3'>GCC Accreditation Center Director General, H.E Eng. Mutib Al-Mizani, was honored to meet with H.E Mr. Salem bin Muslim Al-Busaidi, Undersecretary ...</p>
                    <Link href={'/news/id'} className="readmore stretched-link"><a><span className={`${styles.spanReadMore}`}>{`Read More`}</span></a></Link>               
                </div>
            </div>
            <div className="col-lg-4 col-md-6 p-3" >
                <div className={`${styles.postBox}`}>
                    <div className={`${styles.postImage}`}><Image src={newstwo} className="img-fluid" alt=""/></div>   
                    <div className="meta">
                        <small className={`${styles.postDate}`}>{`Tue, December 12,2023`}</small>
                    </div>   
                    <span className={` fs-5  ${styles.postTitle}`}>GCC Accreditation Center Director General meeting with the Undersecretary of ...</span>
                    <p className='mt-3'>GCC Accreditation Center Director General, H.E Eng. Mutib Al-Mizani, was honored to meet with H.E Mr. Salem bin Muslim Al-Busaidi, Undersecretary ...</p>
                    <Link href={'/news/id'} className="readmore stretched-link"><a><span className={`${styles.spanReadMore}`}>{`Read More`}</span></a></Link>                     
                </div>
            </div>
            <div className="col-lg-4 col-md-6 p-3" >
               <div className={`${styles.postBox}`}>
                    <div className={`${styles.postImage}`}><Image src={newsone}  className="img-fluid" alt=""/></div>                
                    <div className="meta">
                        <small className={`${styles.postDate}`}>{`Tue, December 12,2023`}</small>
                    </div>   
                    <span className={` fs-5  ${styles.postTitle}`}>GCC Accreditation Center Director General meeting with the Undersecretary of ...</span>
                    <p className='mt-3'>GCC Accreditation Center Director General, H.E Eng. Mutib Al-Mizani, was honored to meet with H.E Mr. Salem bin Muslim Al-Busaidi, Undersecretary ...</p>
                    <Link href={'/news/id'} className="readmore stretched-link"><a><span className={`${styles.spanReadMore}`}>{`Read More`}</span></a></Link>    
                </div>
            </div>
            <div className="col-lg-4 col-md-6 p-3" >
                <div className={`${styles.postBox}`}>
                    <div className={`${styles.postImage}`}><Image src={newsone} className="img-fluid" alt=""/></div>
                    <div className="meta">
                        <small className={`${styles.postDate}`}>{`Tue, December 12,2023`}</small>
                    </div>   
                    <span className={` fs-5  ${styles.postTitle}`}>GCC Accreditation Center Director General meeting with the Undersecretary of ...</span>
                    <p className='mt-3'>GCC Accreditation Center Director General, H.E Eng. Mutib Al-Mizani, was honored to meet with H.E Mr. Salem bin Muslim Al-Busaidi, Undersecretary ...</p>
                    <Link href={'/news/id'} className="readmore stretched-link"><a><span className={`${styles.spanReadMore}`}>{`Read More`}</span></a></Link>    
                </div>
            </div>
        </div>
    </div>
   </>
  )
}

export default News;