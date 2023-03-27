import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import styles from '../styles/News.module.css'
import {HiOutlineArrowRight} from 'react-icons/hi'
let productsp = [
  {
    id: 0,
    name: "Product Number 1",
    brand: "Brand Name",
    url: "products-number-1",
    price: 100,
    image: '/imagess/newsone.jpg',
  },
  {
    id: 1,
    name: "Product Number 1",
    brand: "Brand Name",
    url: "products-number-1",
    price: 100,
    image: '/imagess/newsone.jpg',
  },
  {
    id: 2,
    name: "Product Number 1",
    brand: "Brand Name",
    url: "products-number-1",
    price: 100,
    image: '/imagess/newsone.jpg',
  },
  {
    id: 3,
    name: "Product Number 1",
    brand: "Brand Name",
    url: "products-number-1",
    price: 100,
    image: '/imagess/newsone.jpg',
  },
  {
    id: 4,
    name: "Product Number 1",
    brand: "Brand Name",
    url: "products-number-1",
    price: 100,
    image: '/imagess/newsone.jpg',
  },
  {
    id: 5,
    name: "Product Number 1",
    brand: "Brand Name",
    url: "products-number-1",
    price: 100,
    image: '/imagess/newsone.jpg',
  },
  {
    id: 6,
    name: "Product Number 1",
    brand: "Brand Name",
    url: "products-number-1",
    price: 100,
    image: '/imagess/newsone.jpg',
  },
  {
    id: 7,
    name: "Product Number 7",
    brand: "Brand Name",
    url: "products-number-1",
    price: 100,
    image: '/imagess/newsone.jpg',
  },
  {
    id: 8,
    name: "Product Number 8",
    brand: "Brand Name",
    url: "products-number-1",
    price: 100,
    image: '/imagess/newsone.jpg',
  },
  {
    id: 9,
    name: "Product Number 9",
    brand: "Brand Name",
    url: "products-number-1",
    price: 100,
    image: '/imagess/newsone.jpg',
  },
  {
    id: 10,
    name: "Product Number 1",
    brand: "Brand Name",
    url: "products-number-1",
    price: 100,
    image: '/imagess/newsone.jpg',
  },
  
];
var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

// This is for Next.js. On Rect JS remove this line
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

// This is for React JS, Remove this for Next.js
// import OwlCarousel from 'react-owl-carousel';

const Slider = () => {
  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: true,
    autoplay: false,
    smartSpeed: 1000,
    navClass: ["owl-prev", "owl-next"],
    navText: [
      '<HiOutlineArrowRight/>',
      '<HiOutlineArrowRight/>',
    ],
    responsive: {
      500: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 3,
      },

    },
  };

  return (
    <div className=" col-lg-8 m-auto  row">
      <div
        className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-3 pb-2 bg-white"
        id="owl-carousel-products"
      >
        <h3 className="text-center">
          <span className="heading float-left w-100">{`Don't miss our most recent news`}</span>
        </h3>
        <ul id="owl-carousel-ul" className="owl-carousel owl-loaded owl-drag">
          <OwlCarousel
            className="owl-theme"
            loop
            margin={4}
            nav={true}
            navText={[
              '<img src="../../../../../Downloads/left-svgrepo-com.svg" />',
              '<img src="../../../../../Downloads/right-arrow-in-circular-button-svgrepo-com.svg" />',
            ]}
            dots={false}
            animateIn={true}
            {...options}
          >
            {productsp && productsp.length > 0
              ? productsp.map((product) => {
                  return (
                    <>
                      <div
                        id="featuredProducts"
                        className={`${styles.postBox}`}
                        key={product.id}
                      >
                      
                        <div className="productListing col-lg-5th col-md-4 col-sm-6 col-xs-12">
                          <a href={product.url}>
                            <a className="product float-left">
                            <div className={`${styles.postImage}`}>
                                <img
                                  id={"img" + product.id}
                                  src={product.image}
                                  alt={product.name}
                                  title={product.name}
                                />
                              </div>
                              <span className="w-100 text-center mt-1 ">
                                <h5 className="brand text-capitalize float-left">
                                  {product.brand}
                                </h5>
                                <span className="name">{product.name}</span>
                                <strong className="itemPrice p-0">
                                  Price: {product.price}
                                </strong>
                              </span>
                            </a>
                          </a>
                        </div>
                      </div>
                    </>
                  );
                })
              : ""}
          </OwlCarousel>
        </ul>
      </div>
    </div>
  );
};
export default Slider;
