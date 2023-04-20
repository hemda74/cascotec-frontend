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
										<img src="/images/home_page/about.png" alt="flags image" />
									</div>
								<div className={`${styles.sectionAboutContent}`}>
									<div className={`${styles.sectionAboutBody}`}>
										<span className={`${styles.spanFeature}`}>Who are we</span>
										<h4 className={`${styles.headingFeature} fw-bold mt-2`} data-trans="AboutCASCOAbout">About CASCO</h4>
										<h6 className={`${styles.pargraphFeature}`} data-trans="AboutCascoText">{`CASCO For Assessment Services Co. helps certification bodies adopt and adhere to international standards through streamlined processes and expert training. CASCO provides independent technical assessments to ensure compliance with product standards and simplify the implementation and maintenance of these standards.`}</h6>
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