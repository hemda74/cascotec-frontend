import React from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import FourOhFourShape from '../public/shape-404.png';

type Props = {};

// a customized 404 page.
const FourOhFour: NextPage = (props: Props) => {
  return (
    <>
      <div className="container-fluid">
        <div className="row min-vh-100 align-items-center">
          <div className="col-6">
            <div className="d-flex flex-column justify-content-center align-items-center w-100">
              <h1 className="fw-bold display-1" data-trans="fourOhfourNotFound">
                404 Not Found
              </h1>
              <h2 className="myPrimary-Text" data-trans="fourOhfourMsg">
                Woops. Looks Like this page doesn't Exist.
              </h2>
            </div>
          </div>
          <div className="col-6">
            <Image
              alt="FourOhFourShape"
              src={FourOhFourShape}
              width={650}
              height={650}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FourOhFour;
