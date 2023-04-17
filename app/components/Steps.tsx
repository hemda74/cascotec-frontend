import React from 'react'
import styles from '../styles/Steps.module.css'
const Steps = () => {
  return (
    <>
    <section className={` ${styles.SectionBeCertified} ${styles.infoGraph}`}>
		<div className={`row container ${styles.innerContainer}`}>
			<div className="col-sm-12">
				<div className="row justify-content-center">
					<div className={`col-xl-9 col-lg-10 col-md-12 ${styles.innerContainer2}`}>
                    	<div className="row justify-content-center">
                        	<div className="col-md-8">
                            	<div className={`${styles.sectionServicesHead} `}>
                                	<span className={`${styles.spanFeature}`}>Be Certified</span>
                                	<div className="row justify-content-center ">
                                    	<div className="">
										<p className={`${styles.pargraphFeature}`}>{`CASCO recognizes the importance of accreditation in global trade as it provides a reliable means of mutual recognition between countries and economies. Accreditation ensures that products and services meet international standards and boosts the reputation and competitiveness of businesses. CASCO helps clients in the accreditation process to meet requirements and enjoy the benefits of recognition.`}</p>
                                    	</div>
									</div>
                                	{/* <p className={`${styles.pargraphFeature}`}>The significance of accreditation is in its ability to be a dependable means of international trade through mutual acknowledgment between countries and economic</p> */}
                                	<ul className={`${styles.listCheckTage}`}>
										<li className="mt-3">
											<div className={`${styles.itemCkeckTage}`}>
												<span className={styles.spanSteps}>Designing</span>
											</div>
										</li>
										<li className="mt-3">
											<div className={`${styles.itemCkeckTage}`}>
												<span className={styles.spanSteps}>Manufacturing</span>
											</div>
										</li>
										<li className="mt-3">
											<div className={`${styles.itemCkeckTage}`}>
												<span className={styles.spanSteps}>Producing</span>
											</div>
										</li>
										<li className="mt-3">
											<div className={`${styles.itemCkeckTage}`}>
												<span className={styles.spanSteps}>Testing</span>
											</div>
										</li>
										<li className="mt-3">
											<div className={`${styles.itemCkeckTage}`}>
												<span className={styles.spanSteps}>Inspecting</span>
											</div>
										</li>
									</ul>
                            	</div>
                        	</div>
                    	</div>
                	</div>
					<div className={`col-10 ${styles.cirtifiedGraph}  `}>
						<div className="row justify-content-center  ">
							<div className="col-xl-11">
								<div className={` row   ${styles.itemsList}`}>
									<div className={`top col-12 row `}>
										<div className={`${styles.item} col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12  `}>
											<div>
												<div className={`${styles.imgContainer}`}>
													<img src="/images/home_page/steps_section/steps_images/1.svg" alt="" />
													<label className={`${styles.number}`}>1</label>
												</div>
												<div>
													<h4 data-trans="step1Title">{`Apply For the requested Standard.`}</h4>
													<p data-trans="step1">{`Apply For the requested Standard. Submitting an application form through the website or email.`}</p>
												</div>
											</div>
										</div>
										<div className={`${styles.item} col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12`}>
											<div>
												<div className={`${styles.imgContainer}`}>
													<img src="/images/home_page/steps_section/steps_images/2.svg" alt="" />
													<label className={`${styles.number}`}>2</label>
												</div>
												<div>
													<h4 data-trans="step2Title">{`Gap Assessment.`}</h4>
													<p data-trans="step2">{`Determining the Current status of the CBs with Desired Stanrad.`}</p>
												</div>
											</div>
										</div>
										<div className={`${styles.item} col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12`}>
											<div>
												<div className={`${styles.imgContainer}`}>
													<img src="/images/home_page/steps_section/steps_images/3.svg" alt="step_image" />
													<label className={`${styles.number}`}>3</label>
												</div>
												<div>
												<h4 data-trans="step3Title">{``}</h4>
													<p data-trans="step3">{`Providing the required Awareness training for CBs Staff.`}</p>
												</div>
											</div>
										</div>
									</div>
									<div className="bottom col-12 row">
										<div className={`${styles.item} col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 `}>
											<div>
												<div className={`${styles.imgContainer}`}>
													<img src="/images/home_page/steps_section/steps_images/4.svg" alt="" />
													<label className={`${styles.number}`}>4</label>
												</div>
												<div>
													<h4 data-trans="step4Title">{``}</h4>
													<p data-trans="step4">{`Carrying out all procedures, Forms, SOPs and technical Schemes.`}</p>
												</div>
											</div>
										</div>
										<div className={`${styles.item} col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 `}>
												<div>
													<div className={`${styles.imgContainer}`}>
														<img src="/images/home_page/steps_section/steps_images/5.svg" alt="" />
														<label className={`${styles.number}`}>5</label>
													</div>

													<div>
														<h4 data-trans="step5Title">{`step5Title:`}</h4>
														<p data-trans="step5">{`Ensuring that the management system is effective by conducting internal audits and MRM.`}</p>
													</div>
												</div>
											</div>
											<div className={`${styles.item} col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 `}>
											<div>
												<div className={`${styles.imgContainer}`}>
													<img src="/images/home_page/steps_section/steps_images/6.svg" alt="" />
													<label className={`${styles.number}`}>6</label>
												</div>
												<div>
													<h4 data-trans="step6Title">{``}</h4>
													<p data-trans="step6">{`Preparing for AB site visit assessment and closing out all raised improvement Areas.`}</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    </>
  )
}

export default Steps