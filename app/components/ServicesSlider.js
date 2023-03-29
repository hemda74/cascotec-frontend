import React, { Component } from "react";
import Slider from "react-slick";
import styles from '../styles/Services.module.css'
import image1 from '../public/images/home_page/sevices_section/image1.jpg'
import image2 from '../public/images/home_page/sevices_section/image2.jpg'
import image3 from '../public/images/home_page/sevices_section/image3.jpg'
import image4 from '../public/images/home_page/sevices_section/image4.jpg'
import image5 from '../public/images/home_page/sevices_section/image5.jpg'
import image6 from '../public/images/home_page/sevices_section/image6.jpg'
import image7 from '../public/images/home_page/sevices_section/image7.jpg'
export default class AppendDots extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 0,
      slidesToShow: 1,
      slidesToScroll: 1,
      appendDots: dots => (
        <div
          style={{
            backgroundColor: "#ddd",
            borderRadius: "10px",
            padding: "1px",
          }}
        >
          <ul style={{ margin: "0px" }}> {dots} </ul>
        </div>
      ),
      customPaging: i => (
        <div
          style={{
            width: "30px",
            color: "blue",
            border: "1px blue solid"
          }}
        >
          {i + 1}
        </div>
      )
    };
    return (
      <div className={` text-center ${styles.serviceSection}`}>
        <span className={`${styles.servicesTitle}`} data-trans='servicesTitle'>SERVICES</span>
                <span className={`fs-4 fw-bold`} data-trans='servicesSubTitle'>Accreditation made simple for you</span>
                     <p className="text-black-50 mt-2" data-trans='servicesbrief'>
                     The services we offer foster mutual confidence between service providers and consumers
                    </p>
        <Slider {...settings}>
          <div>
            <img src="../public/images/home_page/sevices_section/image1.jpg" alt=""/>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}