import React, { Component } from "react";
import Slider from "react-slick";
import g1 from '../public/images/gallery_section/g1.jpg'
import g2 from '../public/images/gallery_section/g2.jpg'
import g3 from '../public/images/gallery_section/g3.jpg'
import g4 from '../public/images/gallery_section/g4.jpg'
import g5 from '../public/images/gallery_section/g5.jpg'
import Image from "next/image";
import styles from '../styles/GalleryImages.module.css'
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
      <div className={`bg-dark ${styles.galleryMainDiv}`}>
        
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
        >
          <div>
              <Image src={g1} width={1500} height={800} alt=""/>
          </div>
          <div>
              <Image src={g2} width={1500} height={800} alt=""/>
          </div>
          <div>
              <Image src={g3} width={1500} height={800} alt=""/>
          </div>
          <div>
              <Image src={g4} width={1500} height={800} alt=""/>
          </div>
          <div>
              <Image src={g5} width={1500} height={800} alt=""/>
          </div>
        </Slider>
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={4}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          <div className={` bg-dark ${styles.secondContainer}`}>
              <Image src={g1} width={500} height={300} alt=""/>
          </div>
          <div className={` ${styles.secondContainer}`}>
              <Image src={g2} width={500} height={300} alt=""/>
          </div>
          <div className={` ${styles.secondContainer}`}>
              <Image src={g3} width={500} height={300} alt=""/>
          </div>
          <div className={` ${styles.secondContainer}`}>
              <Image src={g4} width={500} height={300} alt=""/>
          </div>
          <div className={` ${styles.secondContainer}`}>
              <Image src={g5} width={500} height={300} alt=""/>
          </div>
        </Slider>
      </div>
    );
  }
}