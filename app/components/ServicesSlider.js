import React, { Component } from "react";
import Slider from "react-slick";
import styles from '../styles/Services.module.css'
import Image from 'next/image'
import image1 from '../public/images/home_page/sevices_section/image1.jpg';
import image2 from '../public/images/home_page/sevices_section/image2.jpg';
import image3 from '../public/images/home_page/sevices_section/image3.jpg';
import image4 from '../public/images/home_page/sevices_section/image4.jpg';
import image5 from '../public/images/home_page/sevices_section/image5.jpg';
import image6 from '../public/images/home_page/sevices_section/image6.jpg';
import image7 from '../public/images/home_page/sevices_section/image7.jpg';
export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    const settings_first_slider = {
      speed:0,
      //  rtl: true,
    }
    const settings = {
    rtl: true,
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
          slidesToShow: 3,
          slidesToScroll: 7,
          initialSlide: 1,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 7,
          initialSlide: 1,
          dots: false
        }
      }
    ]
  }
    return (
      <div className={`row`}>
              <div className="col-sm-12">
              <div className={`${styles.ServiceSction}`} >
              <div className=" m-auto col-xl-8 col-lg-10 col-md-12">
                <div className=" text-center ">
      <div>
        <Slider
        {...settings_first_slider}
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
        >
          <div className={` row ${styles.mainCard}`} >
              <div className={`col-lg-6 col-xl-6 col-md-6 col-sm-12 col-xs-12`}>
                  <Image src={image1} className={`${styles.objImage} `} width={450} height={450} alt=""/>
              </div>
              <div className={`  col-lg-5 col-xl-5 col-md-6 col-sm-12 col-xs-12  ${styles.itemContent}`}>
                  <span className={` ${styles.itemTitle} fs-3 fw-bold  `} data-trans='Ourobjective'>Our Objective</span> 
                  <p className={` ${styles.itemText}`} data-trans="OurobjectiveP">{`The CASCO Group aims to enhance its standing, accomplish its objectives, and reinforce its infrastructure by adopting best practices recognized globally and partnering with international entities in the accreditation sector.`}</p>
              </div>
          </div>
          <div className={` row  ${styles.mainCard}`} >
              <div className={`col-lg-6 col-xl-6 col-md-6 col-sm-12 col-xs-12`}>
                  <Image src={image2} className={`${styles.objImage} `} width={550} height={450} alt=""/>
              </div>
              <div className={`  col-lg-6 col-xl-6 col-md-6 col-sm-12 col-xs-12  ${styles.itemContent}`}>
                  <span className={` ${styles.itemTitle} fs-3 fw-bold  `} data-trans='Ourobjective'>Our Objective</span> 
                  <p className={` ${styles.itemText}`} data-trans="OurobjectiveP">{`The CASCO Group aims to enhance its standing, accomplish its objectives, and reinforce its infrastructure by adopting best practices recognized globally and partnering with international entities in the accreditation sector.`}</p>
              </div>
          </div>
          <div className={` row ${styles.mainCard}`} >
              <div className={`col-lg-6 col-xl-6 col-md-6 col-sm-12 col-xs-12`}>
                  <Image src={image3} className={`${styles.objImage} `} width={550} height={450} alt=""/>
              </div>
              <div className={`  col-lg-5 col-xl-5 col-md-6 col-sm-12 col-xs-12  ${styles.itemContent}`}>
                  <span className={` ${styles.itemTitle} fs-3 fw-bold  `} data-trans='Ourobjective'>Our Objective</span> 
                  <p className={` ${styles.itemText}`} data-trans="OurobjectiveP">{`The CASCO Group aims to enhance its standing, accomplish its objectives, and reinforce its infrastructure by adopting best practices recognized globally and partnering with international entities in the accreditation sector.`}</p>
              </div>
          </div>
          <div className={` row ${styles.mainCard}`} >
              <div className={`col-lg-6 col-xl-6 col-md-6 col-sm-12 col-xs-12`}>
                  <Image src={image4} className={`${styles.objImage} `} width={550} height={450} alt=""/>
              </div>
              <div className={`  col-lg-5 col-xl-5 col-md-6 col-sm-12 col-xs-12  ${styles.itemContent}`}>
                  <span className={` ${styles.itemTitle} fs-3 fw-bold  `} data-trans='Ourobjective'>Our Objective</span> 
                  <p className={` ${styles.itemText}`} data-trans="OurobjectiveP">{`The CASCO Group aims to enhance its standing, accomplish its objectives, and reinforce its infrastructure by adopting best practices recognized globally and partnering with international entities in the accreditation sector.`}</p>
              </div>
          </div>
          <div className={` row ${styles.mainCard}`} >
              <div className={`col-lg-6 col-xl-6 col-md-6 col-sm-12 col-xs-12`}>
                  <Image src={image5} className={`${styles.objImage} `} width={550} height={450} alt=""/>
              </div>
              <div className={`  col-lg-5 col-xl-5 col-md-5 col-sm-12 col-xs-12  ${styles.itemContent}`}>
                  <span className={` ${styles.itemTitle} fs-3 fw-bold  `} data-trans='Ourobjective'>Our Objective</span> 
                  <p className={` ${styles.itemText}`} data-trans="OurobjectiveP">{`The CASCO Group aims to enhance its standing, accomplish its objectives, and reinforce its infrastructure by adopting best practices recognized globally and partnering with international entities in the accreditation sector.`}</p>
              </div>
          </div>
          <div className={` row ${styles.mainCard}`} >
              <div className={`col-lg-6 col-xl-6 col-md-6 col-sm-12 col-xs-12`}>
                  <Image src={image6} className={`${styles.objImage} `} width={550} height={450} alt=""/>
              </div>
              <div className={`  col-lg-5 col-xl-5 col-md-5 col-sm-12 col-xs-12  ${styles.itemContent}`}>
                  <span className={` ${styles.itemTitle} fs-3 fw-bold  `} data-trans='Ourobjective'>Our Objective</span> 
                  <p className={` ${styles.itemText}`} data-trans="OurobjectiveP">{`The CASCO Group aims to enhance its standing, accomplish its objectives, and reinforce its infrastructure by adopting best practices recognized globally and partnering with international entities in the accreditation sector.`}</p>
              </div>
          </div>
          <div className={` row ${styles.mainCard}`} >
              <div className={`col-lg-6 col-xl-6 col-md-6 col-sm-12 col-xs-12`}>
                  <Image src={image7} className={`${styles.objImage} `} width={550} height={450} alt=""/>
              </div>
              <div className={`  col-lg-5 col-xl-5 col-md-5 col-sm-12 col-xs-12  ${styles.itemContent}`}>
                  <span className={` ${styles.itemTitle} fs-3 fw-bold  `} data-trans='Ourobjective'>Our Objective</span> 
                  <p className={` ${styles.itemText}`} data-trans="OurobjectiveP">{`The CASCO Group aims to enhance its standing, accomplish its objectives, and reinforce its infrastructure by adopting best practices recognized globally and partnering with international entities in the accreditation sector.`}</p>
              </div>
          </div>
        </Slider>
{/* Second Slider */}
        <Slider
        {...settings}
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={4}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          <div className={` ${styles.secondContainer} d-flex flex-column   `}>
          <Image src={image1} className={`${styles.objImage} `} width={170} height={210} alt=""/>
          <span className="fw-bold mt-5 text-start">Accreditation of Inspection Bodies</span>
          </div>
          <div className={` ${styles.secondContainer} d-flex flex-column   `}>
          <Image src={image2} className={`${styles.objImage} `} width={170} height={210} alt=""/>
          <span className="fw-bold mt-5 text-start">Accreditation of Inspection Bodies</span>
          </div>
          <div className={` ${styles.secondContainer} d-flex flex-column   `}>
          <Image src={image3} className={`${styles.objImage} `} width={170} height={210} alt=""/>
          <span className="fw-bold mt-5 text-start">Accreditation of Inspection Bodies</span>
          </div>
          <div className={` ${styles.secondContainer} d-flex flex-column   `}>
          <Image src={image4} className={`${styles.objImage} `} width={170} height={210} alt=""/>
          <span className="fw-bold mt-5 text-start">Accreditation of Inspection Bodies</span>
          </div>
          <div className={` ${styles.secondContainer} d-flex flex-column   `}>
          <Image src={image5} className={`${styles.objImage} `} width={170} height={210} alt=""/>
          <span className="fw-bold mt-5 text-start">Accreditation of Inspection Bodies</span>
          </div>
          <div className={` ${styles.secondContainer} d-flex flex-column   `}>
          <Image src={image6} className={`${styles.objImage} `} width={170} height={210} alt=""/>
          <span className="fw-bold mt-5 text-start">Accreditation of Inspection Bodies</span>
          </div>
          <div className={` ${styles.secondContainer} d-flex flex-column   `}>
          <Image src={image7} className={`${styles.objImage} `} width={170} height={210} alt=""/>
          <span className="fw-bold mt-5 text-start">Accreditation of Inspection Bodies</span>
          </div>
        </Slider>
      </div>
      </div>
      </div>
      </div>
      </div>
   </div>
   );
  }
}