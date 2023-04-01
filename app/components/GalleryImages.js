import React, { Component } from "react";
import Slider from "react-slick";
import g1 from '../public/images/gallery_section/g1.jpg'
import g2 from '../public/images/gallery_section/g2.jpg'
import g3 from '../public/images/gallery_section/g3.jpg'
import g4 from '../public/images/gallery_section/g4.jpg'
import g5 from '../public/images/gallery_section/g5.jpg'
import Image from "next/image";

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
    return (
      <div>
        <h2>Slider Syncing (AsNavFor)</h2>
        <h4>First Slider</h4>
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
        >
          <div>
              <Image src={g1} alt=""/>
          </div>
          <div>
              <Image src={g2} alt=""/>
          </div>
          <div>
              <Image src={g3} alt=""/>
          </div>
          <div>
              <Image src={g4} alt=""/>
          </div>
          <div>
              <Image src={g5} alt=""/>
          </div>
        </Slider>
        <h4>Second Slider</h4>
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          <div>
              <Image src={g1} alt=""/>
          </div>
          <div>
              <Image src={g2} alt=""/>
          </div>
          <div>
              <Image src={g3} alt=""/>
          </div>
          <div>
              <Image src={g4} alt=""/>
          </div>
          <div>
              <Image src={g5} alt=""/>
          </div>
        </Slider>
      </div>
    );
  }
}