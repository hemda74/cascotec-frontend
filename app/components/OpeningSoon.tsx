import React from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import soon from '../public/soon.svg'
type Props = {};
// a customized 404 page.
const FourOhFour: NextPage = (props: Props) => {
  return (
    <>
      <div className="container d-flex align-items-center justify-content-center ">
        <div className="vh-100 align-items-center justify-content-center">
          <div className="">
            <div className="d-flex flex-column justify-content-center align-items-center w-80">
              <h1 className="fw-bold " >
                Page Under Construction
              </h1>
              <h4 className="myPrimary-Text mt-3" >
                 {`Sorry. this page is under construction`}
              </h4>
            </div>
          </div>
          <div className=" d-flex align-items-center justify-content-center ">
            <Image
              alt="ComingSoonImage"
              src={soon}
              width={350}
              height={350}
            />
          </div>
        </div>
        <style jsx>{`
        .container {
          margin-top: 15rem;
        }
        
      `}</style>
      </div>
    </>
  );
};

export default FourOhFour;
