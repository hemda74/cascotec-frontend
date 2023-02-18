import React from 'react'
import styles from '../styles/BoardOfDirectors.module.css'
import mohamed from '../public/imagess/mohamedhamdy.jpg'
import Link from 'next/link'
import Image from 'next/image'
import { BsFacebook } from 'react-icons/bs'
const BoardOfDirectors = () => {
  return (
    <>
   <section id="team" className={`${styles.boardOfDirc}`}>
      <div  className="container" data-aos="fade-up">
        <div className={`section-header text-center mt-5 ${styles.sectionHeader}`}>
          <span className={`fs-3  ${styles.sctionTitle}`} >Our Team</span>
          <p>Architecto nobis eos vel nam quidem vitae temporibus voluptates qui hic deserunt iusto omnis nam voluptas asperiores sequi tenetur dolores incidunt enim voluptatem magnam cumque fuga.</p>
        </div>
        <div className="row gy-5">
        <div className="col-xl-4 col-md-6 d-flex">
        <a href='https://www.linkedin.com/in/ahmed-hemdan-695408201/' target="_blank" rel="noreferrer">
        <div className={`${styles.card2}`}>
        <Image className={` w-90 ${styles.cardImage}`} src={mohamed}  alt=""/>
          <div className={`${styles.cardoverlay}`}>
            <div className={` text-center w-100 p-2" ${styles.overlayText}`}>
            <h4>Mohamed Hamdy</h4>
            <span className='text-white'>Chief Executive Officer</span>
          </div>
        </div>
        </div>
      </a>
    </div >
          <div className="col-xl-4 col-md-6 d-flex" data-aos="zoom-in" data-aos-delay="200">
         <a href='https://www.linkedin.com/in/ahmed-hemdan-695408201/' target="_blank" rel="noreferrer">
            <div className={`${styles.teamMember}`}>
              <div className={`${styles.teamImg}`}>
                <Image src={mohamed}  alt=""/>
              </div>
              <div className={`${styles.teamInfo}`}>
                <div className={`${styles.socialMedia}`}>
                <a href="/" className={`${styles.socialMediaLink}`}>< BsFacebook size={25} className={`${styles.iconI}`}/></a>
                <a href="/" className={`${styles.socialMediaLink}`}>< BsFacebook size={25} className={`${styles.iconI}`}/></a>
                <a href="/" className={`${styles.socialMediaLink}`}>< BsFacebook size={25} className={`${styles.iconI}`}/></a>
                <a href="/" className={`${styles.socialMediaLink}`}>< BsFacebook size={25} className={`${styles.iconI}`}/></a>
                </div>
                <div className={`${styles.nameTitle}`}>
                    <h4>Mohamed Hamdy</h4>
                    <span className='text-white'>Chief Executive Officer</span>
                </div>
              </div>
            </div>
            </a>
          </div>
          <div className="col-xl-4 col-md-6 d-flex" data-aos="zoom-in" data-aos-delay="200">
         <a href='https://www.linkedin.com/in/ahmed-hemdan-695408201/' target="_blank" rel="noreferrer">
          <div className={`${styles.teamMember2}`}>
              <figure className={`${styles.teamMemberFigure}`}>
                <Image src={mohamed} alt="" className="img-responsive"/>
                <figcaption className={`${styles.figCaption}`}>
                  <p className='fs-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae asperiores mollitia.</p>
                  <ul className={`list-unstyled m-0 p-0 ${styles.figcaptionUl}`}>
                    <li className={`${styles.figcaptionUlLi}`}><a href="/" className={`${styles.socialMediaLink}`}>< BsFacebook size={25} className={`${styles.iconI}`}/></a></li>
                    <li className={`${styles.figcaptionUlLi}`}><a href="/" className={`${styles.socialMediaLink}`}>< BsFacebook size={25} className={`${styles.iconI}`}/></a></li>
                    <li className={`${styles.figcaptionUlLi}`}><a href="/" className={`${styles.socialMediaLink}`}>< BsFacebook size={25} className={`${styles.iconI}`}/></a></li>
                    <li className={`${styles.figcaptionUlLi}`}><a href="/" className={`${styles.socialMediaLink}`}>< BsFacebook size={25} className={`${styles.iconI}`}/></a></li>
                  </ul>
                </figcaption>
              </figure>
              <div className="text-center text-black fw-bold">
              <h4 className='fw-bold' >Mohamed Hamdy</h4>
              <p>Creative Director</p>
              </div>
            </div>
            </a>
            </div>
            </div>
            </div>
    </section>
    {/* <!-- End Team Section --> */}
    </>
  )
}

export default BoardOfDirectors