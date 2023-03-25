import React from 'react'
import styles from '../styles/CoursesSectionHomePage.module.css'
const CoursesSectionHomePage = () => {
  return (
    <>
    <div className="row">
        <div className="col-sm-12">
            <section className="section_courses">
                <div className="container-fluid">
            <div className="row justify-content-end">
                <div className="col-xl-10 col-lg-11 col-md-12 pr-0">
                    <div className="row mx-0">
                        <div className="col-xl-4 col-lg-4 col-md-12">
                            <div className="section_services_head">
                                <span className="span_feature">Courses</span>
                                <h4 className="heading_feature">Find your perfect program</h4>
                                <p className="pargraph_feature">The GCC was distinguished by providing courses, seminars, and training programs via online technology in line with the circumstances that may arise, and in keeping with the progress and development of information technology. In addition, we offer offline courses.</p>
                                <img src="https://gac.org.sa/wp-content/uploads/2022/10/section_courses.png" className="img_blog" alt="" />
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

export default CoursesSectionHomePage