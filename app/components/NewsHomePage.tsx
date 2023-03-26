import React from 'react'
import styles from '../styles/NewsHomePage.module.css'
import Image from 'next/image'
import Link from 'next/link'
import newsone from '../public/imagess/newsone.jpg'
import newstwo from '../public/imagess/newstwo.jpg'
import newsthree from '../public/imagess/newsthree.jpg'
const NewsHomePage = () => {
  return (
    <>
    <div className="container col-xl-8 col-lg-10 col-md-12">
    <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active w-50">
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
    <div className="carousel-item w-50">
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
    <div className="carousel-item w-50">
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
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
<div className='ms-5 me-5'><a href={'/courses'}> <button className={`myInfo-outline m-auto  ${styles.SearchButton}`}>VIEW ALL</button></a></div>

    </>
  )
}

export default NewsHomePage