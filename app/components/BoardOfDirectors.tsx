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
        <div className="row gy-5">
          <div className="col-xl-4 col-md-6 d-flex" data-aos="zoom-in" data-aos-delay="200">
         <Link href={`https://www.linkedin.com/in/ahmed-hemdan-695408201/`} target="_blank" rel="noreferrer">
          <a>
          <div className={`${styles.teamMember2}`}>
              <figure className={`${styles.teamMemberFigure}`}>
                <Image src={mohamed} height={550} alt="" className="img-responsive"/>
                <figcaption className={`${styles.figCaption}`}>
                  <p className='fs-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae asperiores mollitia.</p>
                  
                </figcaption>
              </figure>
            </div>
            </a>
            </Link>
            </div>
            </div>
            </div>
    </section>
    {/* <!-- End Team Section --> */}
    </>
  )
}

export default BoardOfDirectors