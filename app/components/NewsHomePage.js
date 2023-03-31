import React, { Component } from "react";
import Slider from "react-slick";
import styles from '../styles/NewsHomePage.module.css'
import Image from 'next/image'
import Link from 'next/link'
import newsone from '../public/imagess/newsone.jpg'
import newstwo from '../public/imagess/newstwo.jpg'
import newsthree from '../public/imagess/newsthree.jpg'
import {BsArrowRightCircle} from 'react-icons/bs'
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#ddd" ,padding:"0",}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#ddd", padding:"0rem" }}
      onClick={onClick}
    />
  );
}

export default class NewsHomePage extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      // nextArrow: <SampleNextArrow />,
      // prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 7,
            slidesToScroll: 2,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 1,
            dots: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 3,
            initialSlide: 1,
            dots: false
          }
        }
      ]
    };
    return (
      <div className={`${styles.mainDiv}`}>
      <div className={`container col-xl-8 col-lg-10 col-md-12`}>
        <div className="row">
        <Slider {...settings}>
        <div className="col-lg-4 col-md-6 p-3" >
                <div className={`${styles.postBox}`}>
                    <div className={`${styles.postImage}`}><Image src={newsthree} className="img-fluid" alt=""/>
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
                    <div className={`${styles.postImage}`}><Image src={newstwo} className="img-fluid" alt=""/>
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
        </Slider>
      </div>
      <div className='text-center'><a href={'/courses'}> <button className={`myInfo-outline m-auto  ${styles.SearchButton}`}>VIEW ALL</button></a></div>
      </div>
      </div>
    );
  }
}