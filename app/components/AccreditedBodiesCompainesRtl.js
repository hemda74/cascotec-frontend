import React, { Component } from "react";
import Slider from "react-slick";
import styles from '../styles/AccreditedBodiesCompaines.module.css'
export default class SwipeToSlide extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "50px",
      slidesToShow: 5,
      swipeToSlide: true,
      dots: false,
      infinite: true,
      slidesToShow: 8,
      speed:500,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      rtl: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 2,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            dots: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            dots: false
          }
        }
      ]
    };
    return (
      <div className="mt-3">
        <Slider {...settings}>
        <div className={``}>
            <img className={`${styles.imageDiv}`} src="/images/home_page/Companies_Section/image1.png" alt=" " />
          </div>
          <div className={``}>
            <img className={`${styles.imageDiv}`}src="/images/home_page/Companies_Section/image2.png" alt=" " />
          </div>
          <div className={``}>
            <img className={`${styles.imageDiv}`} src="/images/home_page/Companies_Section/image3.png" alt=" " />
          </div>
          <div className={``}>
            <img className={`${styles.imageDiv}`} src="/images/home_page/Companies_Section/image4.jpg" alt=" " />
          </div>
          <div className={``}>
            <img className={`${styles.imageDiv}`} src="/images/home_page/Companies_Section/image5.jpg" alt=" " />
          </div>
          <div className={``}>
            <img className={`${styles.imageDiv}`} src="/images/home_page/Companies_Section/image6.png" alt=" " />
          </div>
          <div className={``}>
            <img className={`${styles.imageDiv}`} src="/images/home_page/Companies_Section/image7.jpg" alt=" " />
          </div>
          <div className="">
            <img className={`${styles.imageDiv}`} src="/images/home_page/Companies_Section/image8.png" alt=" " />
          </div>
          <div className={``}>
            <img className={`${styles.imageDiv}`} src="/images/home_page/Companies_Section/image9.png" alt=" " />
          </div>
          <div className={``}>
            <img className={`${styles.imageDiv}`} src="/images/home_page/Companies_Section/image1.png" alt=" " />
          </div>
          <div className={``}>
            <img className={`${styles.imageDiv}`}src="/images/home_page/Companies_Section/image2.png" alt=" " />
          </div>
          <div className={``}>
            <img className={`${styles.imageDiv}`} src="/images/home_page/Companies_Section/image3.png" alt=" " />
          </div>
          <div className={``}>
            <img className={`${styles.imageDiv}`} src="/images/home_page/Companies_Section/image4.jpg" alt=" " />
          </div>
          <div className={``}>
            <img className={`${styles.imageDiv}`} src="/images/home_page/Companies_Section/image5.jpg" alt=" " />
          </div>
          <div className={``}>
            <img className={`${styles.imageDiv}`} src="/images/home_page/Companies_Section/image6.png" alt=" " />
          </div>
          <div className={``}>
            <img className={`${styles.imageDiv}`} src="/images/home_page/Companies_Section/image7.jpg" alt=" " />
          </div>
          <div className="">
            <img className={`${styles.imageDiv}`} src="/images/home_page/Companies_Section/image8.png" alt=" " />
          </div>
          <div className={``}>
            <img className={`${styles.imageDiv}`} src="/images/home_page/Companies_Section/image9.png" alt=" " />
          </div>
        </Slider>
      </div>
    );
  }
}