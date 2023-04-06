import React from 'react';
import Image from 'next/image';
import OpenSoonImage from '../public/images/opening_soon.jpg'
type Props = {};
// a customized  Opening Soon Component.
const OpeningSoon = (props: Props) => {
  return (
    <>
      <div className="container d-flex align-items-center justify-content-center ">
        <div className="vh-100 align-items-center justify-content-center">
          <div className="">
            <div className="d-flex flex-column justify-content-center align-items-center w-80">
              <h1 className="fw-bold">
              Will
              </h1>
              <h3 className="myPrimary-Text">
                 {`This page is under Construction.`}
              </h3>
            </div>
          </div>
          <div className=" mt-5 d-flex align-items-center justify-content-center ">
            <Image
              alt="OpenSoonImage"
              src={OpenSoonImage}
              
            />
          </div>
        </div>
        <style jsx>{`
        .container {
          margin-top: 5rem;
        }
        
      `}</style>
      </div>
    </>
  );
};

export default OpeningSoon;
