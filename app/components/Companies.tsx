import React from 'react'
import styles from '../styles/Companies.module.css'
import Image from 'next/image'
import client1 from '../public/images/clients/client-1.png'
import client2 from '../public/images/clients/client-2.png'
import client3 from '../public/images/clients/client-3.png'
import client4 from '../public/images/clients/client-4.png'
import client5 from '../public/images/clients/client-5.png'
import client6 from '../public/images/clients/client-6.png'
import client7 from '../public/images/clients/client-7.png'
import client8 from '../public/images/clients/client-8.png'
const Companies = () => {
  return (
    <>
     <section id="clients" className={`${styles.clients}`}>
      <div className="container" >
        <div className="clients-slider swiper">
          <div className="swiper-wrapper align-items-center">
            <div className="swiper-slide"><Image src={client1} className="img-fluid" alt=""/></div>
            <div className="swiper-slide"><Image src={client2} className="img-fluid" alt=""/></div>
            <div className="swiper-slide"><Image src={client3} className="img-fluid" alt=""/></div>
            <div className="swiper-slide"><Image src={client4} className="img-fluid" alt=""/></div>
            <div className="swiper-slide"><Image src={client5} className="img-fluid" alt=""/></div>
            <div className="swiper-slide"><Image src={client6} className="img-fluid" alt=""/></div>
            <div className="swiper-slide"><Image src={client7} className="img-fluid" alt=""/></div>
            <div className="swiper-slide"><Image src={client8} className="img-fluid" alt=""/></div>
          </div>
        </div>

      </div>
    </section>
    </>
  )
}

export default Companies