import Link from 'next/link'
import React from 'react'
import styles from '../styles/Documents.module.css'
import {CiFilter} from 'react-icons/ci'
import {VscFilePdf} from 'react-icons/vsc'
import {SlReload} from 'react-icons/sl'
import DocumentsModal from './DocumentsModal'
import DocumentCard from './DocumentCard'
type Props = {
  [key: string]: any;
};
type Document_Data = {
  [key: string]: any;
};
const Documents = (props: Props) => {
  return (
<>
    <div className={`text-center ${styles.titleWord}`}>
        <div className={`container mb-4`}>
            <Link href={"/"}><a className="text-white fw-semibold mb-4">{`Home`}</a></Link>
            <Link href={"/documents"}><a className="text-white fw-semibold mb-4">{` > Documents`}</a></Link>
        </div>
        <h2 className={`text-white fw-bold mb-5 `}>Documents</h2>
    </div>
    <div className={` container pe-4 ps-4`}>
        <div className="row justify-content-center">
            <div className='col-xl-8 col-lg-10 col-md-12 col-sm-12 col-xs-12'>
                <div className={`col-lg-12 ${styles.contactCard}`}>
                    <div className=" d-flex justify-content-between">
                        <small className='mt-2 text-black-50'>25 Document</small>
                        <button className={`rounded mb-3 ${styles.filterButton}`} type="submit"><small>Filter</small><CiFilter size={15}/></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container">
        <div className="row justify-content-center">
            <div className='col-xl-8 col-lg-10 col-md-12 col-sm-12 col-xs-12'>
                <div className="accordion" id="accordionPanelsStayOpenExample">
                  {/* passing props to inner card for each document */}
                {props.ducoments.map 
                  (
                    (document_Data:Document_Data,index:number)=>(
                      <DocumentCard
                      key={index}
                      document_name={document_Data.document_name}
                      document_pdf={document_Data.document_pdf}
                      document_id={document_Data.document_id}
                      document_issued_date={document_Data.document_issued_date}
                      document_category={document_Data.document_category}
                      document_sub_category={document_Data.document_sub_category}
                      document_accrediation_type={document_Data.document_accrediation_type}
                      document_changelog={document_Data.document_changelog}
                      document_for_Code={document_Data.document_for_Code}
                      document_version={document_Data.document_version}
                      />
                    ) 
                  )
                }
                </div>
            </div>
        </div>
    </div>
 
</>
  )
}
export default Documents;