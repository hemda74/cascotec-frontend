import React from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link'
import soon from '../public/soon.svg'
import styles from '../styles/AssessorOrCAB.module.css'
type Props = {};
// a customized 404 page.
const FourOhFour: NextPage = (props: Props) => {
  return (
    <>
      <div className="container d-flex align-items-center justify-content-center ">
        <div className=" row align-items-center justify-content-center">
          <div className="">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <h1 className="fw-bold" data-trans="pageunderconstruction">
                Page Under Construction
              </h1>
              <h4 className="myPrimary-Text mt-3">
                 {`Sorry. this page is under construction`}
              </h4>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <Image
              alt="ComingSoonImage"
              src={soon}
              width={500}
              height={500}
            />
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <Link href={'/'}>
          <button className={`myInfo rounded ${styles.btnClassCab}`} data-trans="BackToCASCO">{``}</button>
          </Link>
          </div>
        </div>
        <style jsx>{`
        .container {
          margin-top: 3rem;
        }
        
      `}</style>
      </div>
    </>
  );
};

export default FourOhFour;
