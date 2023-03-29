import React, { Component } from "react";
import Slider from "react-slick";
import styles from '../styles/Services.module.css'
export default class AppendDots extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
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
            <h3>1</h3>
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