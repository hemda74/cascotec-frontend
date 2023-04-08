import Link from 'next/link'
import React from 'react'
import styles from '../styles/Documents.module.css'
import {CiFilter} from 'react-icons/ci'
import {VscFilePdf} from 'react-icons/vsc'
import {SlReload} from 'react-icons/sl'
import DocumentsModal from './DocumentsModal'
type Props = {
    document_name:string;
    document_pdf: string;
    document_id:number;
    document_issued_date:string;
    document_category:string;
    document_sub_category:string;
    document_accrediation_type:string;
    document_changelog:string;
    document_for_Code:string;
    document_version:string;
};
const DocumentCard = (props:Props) => {
  return (
    <>
     <div className="accordion-item border-top mt-3">
     <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${props.document_for_Code}`} aria-expanded="false" aria-controls={props.document_for_Code}>
        {props.document_name}
      </button>
    </h2>
    <div id={props.document_for_Code} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div className="accordion-body">
            <div className="content_card">
                <div className="row mx-0">
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <small className="accredited_bodies_code text-black-50">Version</small>
                        <p className="accredited_bodies_desc mt-2">{props.document_version}</p>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <small className=" text-black-50 accredited_bodies_code">
                            Accreditation type
                        </small>
                        <small className={`${styles.accreditationType} mt-2`}>
                            {props.document_accrediation_type}
                        </small>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <small className=" accredited_bodies_code text-black-50">
                            Category
                        </small>
                        <p className="mt-2 accredited_bodies_desc">
                            {props.document_category}
                        </p>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <small className="accredited_bodies_code text-black-50">
                            Subcategory
                        </small>
                        <p className="accredited_bodies_desc mt-2">
                            {props.document_sub_category}
                        </p>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <p className="accredited_bodies_code">
                            Issued date
                        </p>
                        <p className="accredited_bodies_desc">
                            {props.document_issued_date}
                        </p>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <p className="accredited_bodies_code">
                            Recent actions
                        </p>
                        <p className="accredited_bodies_desc">
                        {props.document_issued_date}
                        </p>
                    </div>
                </div>
                <div className="row mx-0 mt-3">
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <a href={props.document_pdf} download>
                            <div className={`${styles.fileDownloader}`}>
                                <div className="d-flex justify-content-between ">
                                    <div className={ `mt-3 ms-3 me-3 ${styles.iconHolder}`}>
                                        <VscFilePdf size={30}/>
                                    </div>
                                    <div className="ms-3 me-3">
                                        <p className=' text-black mt-3'>Download</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mt-2">
                        <a data-bs-toggle="modal" data-bs-target="#DocumentsModal">
                            <button className={` btn ${styles.changeLog}`} >
                                <small >
                                <SlReload className='me-1 ms-1'/>
                                Changelog</small>
                            </button>
                        </a>
                    </div>
                </div>
            </div>   
        </div>
    </div>
</div> 
<DocumentsModal/>
    </>
  )
}

export default DocumentCard