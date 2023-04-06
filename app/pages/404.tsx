import React from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import FourOhFourImage from '../public/404.svg'
type Props = {};
// a customized 404 page.
const FourOhFour: NextPage = (props: Props) => {
  return (
    <>
      <div className="container d-flex align-items-center justify-content-center ">
        <div className="vh-100 align-items-center justify-content-center">
          <div className="">
            <div className="d-flex flex-column justify-content-center align-items-center w-80">
              <h1 className="fw-bold " data-trans="fourOhfourNotFound">
                Page Not Found
              </h1>
              <h3 className="myPrimary-Text" data-trans="fourOhfourMsg">
                 {`Looks Like this page doesn't Exist.`}
              </h3>
            </div>
          </div>
          <div className=" d-flex align-items-center justify-content-center ">
            <Image
              alt="FourOhFourShape"
              src={FourOhFourImage}
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
