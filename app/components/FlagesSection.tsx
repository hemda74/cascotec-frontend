import React from 'react'
import Link from 'next/link'
import styles from '../styles/FlagesSection.module.css'
const FlagesSection = () => {
  return (
    <>
    <div className="row">
		<div className="col-sm-12">
			<section className={`${styles.sectionAbout} d-block`}>
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-xl-8 col-lg-10 col-md-12">
							<div className={`${styles.sectionAboutInner}`}>
									<div className={`${styles.bgImageHolder}`}>
										<img src="/images/home_page/about.png" alt="" />
									</div>
								<div className={`${styles.sectionAboutContent}`}>
									<div className={`${styles.sectionAboutBody}`}>
										<span className={`${styles.spanFeature}`}>Who are we</span>
										<h4 className={`${styles.headingFeature} fw-bold mt-2 `}>About GAC</h4>
										<p className={`${styles.pargraphFeature}`}>The GCC Accreditation Center is one of the most visible successes of the Gulf Cooperation Council countries, as it is the first and fastest multi-economy accreditation agency in the Middle East, Asia, and the Pacific to gain international recognition.</p>
										<Link href="/about" title="About us">Learn more
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	</div>
    </>
  )
}

export default FlagesSection