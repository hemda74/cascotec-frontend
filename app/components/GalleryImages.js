import React, { Component } from "react";
import Slider from "react-slick";
import g1 from '../public/images/gallery_section/g1.jpg'
import g2 from '../public/images/gallery_section/g2.jpg'
import g3 from '../public/images/gallery_section/g3.jpg'
import g4 from '../public/images/gallery_section/g4.jpg'
import g5 from '../public/images/gallery_section/g5.jpg'
import Image from "next/image";

export default class AppendDots extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 0,
      slidesToShow: 1,
      slidesToScroll: 1,
      appendDots: dots => (
        <div
          style={{
            backgroundColor: "#ddd",
            borderRadius: "10px",
            padding: "10px"
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
      <div className="container">
      <div className="m-auto">
        <h2>Append Dots</h2>
        <Slider {...settings}>
          <div>
            <Image src={g1} width={900} height={900} alt=""/>
          </div>
          <div>
          <Image src={g2}  alt=""/>
          </div>
          <div>
          <Image src={g3}  alt=""/>
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
      </div>
    );
  }
}