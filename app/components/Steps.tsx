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
                            	<div className={`${styles.sectionServicesHead}`}>
                                	<span className={`${styles.spanFeature}`}>Be Certified</span>
                                	<div className="row justify-content-center">
                                    	<div className="col-md-9">
                                        	<h4 className={`${styles.headingFeature}`}>The significance of accreditation and the process of obtaining it</h4>
                                    	</div>
									</div>
                                	<p className={`${styles.pargraphFeature}`}>The significance of accreditation is in its ability to be a dependable means of international trade through mutual acknowledgment between countries and economic</p>
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
					<div className={` col-10   ${styles.cirtifiedGraph}  `}>
						<div className="row justify-content-center  ">
							<div className="col-xl-9  ">
								<div className={` row m-auto  ${styles.itemsList}`}>
									<div className={`top col-12 row `}>
										<div className={`${styles.item} col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12  `}>
											<div>
												<div className={`${styles.imgContainer}`}>
													<img src="https://gac.org.sa/wp-content/uploads/2022/09/1.svg" alt="" />
													<label className={`${styles.number}`}>1</label>
												</div>
												<div>
													<h4>Apply for Accreditation</h4>
													<p>Submit an application form through website or email</p>
												</div>
											</div>
										</div>
										<div className={`${styles.item} col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12`}>
											<div>
												<div className={`${styles.imgContainer}`}>
													<img src="https://gac.org.sa/wp-content/uploads/2022/09/2.svg" alt="" />
													<label className={`${styles.number}`}>2</label>
												</div>
												<div>
													<h4>Document Review</h4>
													<p>GCC Accreditation Center reviews the documentations as part of assessment preparation.</p>
												</div>
											</div>
										</div>
										<div className={`${styles.item} col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12`}>
											<div>
												<div className={`${styles.imgContainer}`}>
													<img src="https://gac.org.sa/wp-content/uploads/2022/09/3.svg" alt="" />
													<label className={`${styles.number}`}>3</label>
												</div>
												<div>
													<h4>Initial Assessment</h4>
													<p>Assigned assessment team conducts the initial assessment</p>
												</div>
											</div>
										</div>
									</div>
									<div className="bottom col-12 row">
									<div className={`${styles.item} col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 `}>
											<div>
												<div className={`${styles.imgContainer}`}>
													<img src="https://gac.org.sa/wp-content/uploads/2022/09/6.svg" alt="" />
													<label className={`${styles.number}`}>6</label>
												</div>
												<div>
													<h4>Decision Making Process</h4>
													<p>Accreditation decision committee and accreditation decision manager reviews the assessment's deliverables &amp; make accreditation decision issuance of accreditation.</p>
												</div>
											</div>
										</div>
										<div className={`${styles.item} col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 `}>
											<div>
												<div className={`${styles.imgContainer}`}>
													<img src="https://gac.org.sa/wp-content/uploads/2022/09/5.svg" alt="" />
													<label className={`${styles.number}`}>5</label>
												</div>

												<div>
													<h4>Outcomes of the Assessment</h4>
													<p>Assessment reports, the nonconformity cases, scope of accreditation, corrective action evidence, assessment team recommendation on accreditation, etc.</p>
												</div>
											</div>
										</div>
										<div className={`${styles.item} col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 `}>
											<div>
												<div className={`${styles.imgContainer}`}>
													<img src="https://gac.org.sa/wp-content/uploads/2022/09/4.svg" alt="" />
													<label className={`${styles.number}`}>4</label>
												</div>
												<div>
													<h4>Closure of Findings</h4>
													<p>CAB submits corrective action evidence for closure of findings within allowed time limit</p>
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