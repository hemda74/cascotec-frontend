import { ReactElement,useState } from 'react';
import type { NextPageWithLayout } from '../../../../_app';
import OrgDetailsLayout from '../../../../../layouts/OrgDetailsLayout';
import EditSiteInfoComp from '../../../../../components/EditSiteLandingComp'
import styles from'../../../../../styles/EditSiteInfo.module.css'
import { number } from 'prop-types';
import { useRouter } from 'next/router';
import TrashIcon from '../../../../../public/icons/delete-icon.svg'
import edit_icon from '../../../../../public/icons/edit-icon.svg'
import Image from 'next/image'
import DeleteSiteModal from '../../../../../components/DeleteSiteModal'
import EditSiteDiscardChangesModal from '../../../../../components/EditSiteDiscardChangesModal'
type Props={[key:string]:any};
// type Zones={[key:string]:any};
// const [isPending, setIsPending] = useState(false);
// const router=useRouter();
// const handleCancelBtn = () => {
//     router.push('/tenant-admin');
//   };
// type Props = {};
const dummyData={
    timezones:["	(GMT+00:00)","(GMT-12:00)","(GMT-11:00)","(GMT-10:00)","(GMT-9:30)","(GMT-9:00)","(GMT-8:00)","(GMT-7:00)",
    "(GMT-6:00)","(GMT-5:00)","(GMT-4:30)","(GMT-4:00)","(GMT-3:30)","(GMT-3:00)","(GMT-2:00)","(GMT-1:00)","(GMT+1:00)",
    "(GMT+2:00)","(GMT+3:00)","(GMT+3:30)","(GMT4:00)","(GMT+4:30)","(GMT+5:00)","(GMT+5:30)","(GMT+5:45)","(GMT+6:00)",
    "(GMT+7:00)","(GMT+8:00)","(GMT+8:30)","(GMT+9:00)","(GMT+9:30)","(GMT+10:00)","(GMT+10:30)","(GMT+11:00)","(GMT+12:00)",
    "(GMT+12:45)","(GMT+13:00)","(GMT+14:00)"],
      site:  {
  sitename:'nasr city',
  sitedescription:'nasr city site',
  sitetimezone:'(GMT+2)',
  sitephonenumber:'+2012345679',
  sitefaxnumber:'+201234567',
  siteemail:'ticosys@admin.com',
  sitecountry:'egypt',
  sitecity:'cairo',
  siteadressline:'mokkatm st',
  siteoperationalhours:'defult operational hours',
  sitehoyldays:'hello world'
  }}
export const index:NextPageWithLayout = (props:Props) =>{ // using timezones list prop to set zones list in the component
const site=dummyData.site;
 // const timezones=props.timezones;
 // const listZones = timezones.map((zone:any) =>
 // <option>{zone}</option>);
const [isPassError, setIsPassError] = useState(false);
const [isPassMatchError, setIsPassMatchError] = useState(false);
const [isOldPassError, setIsOldPassError] = useState(false);
const [isSuccess, setIsSuccess] = useState(false);
const [isPending, setIsPending] = useState(false);
// declaring next router in a variable.
const router = useRouter();
// handel cancel button
const handleCancelBtn = () => {
 router.push('/tenant-admin');
};
//handel if inputs editable or not 
const[isNotEditable,setISNotEditable]=useState(true);
// handle if data apper or not by handle edit function
const [dataApperance,setDataApperance]=useState({
 sitename:site.sitename, 
 sitedescription:site.sitedescription,
 sitetimezone:site.sitetimezone,
 sitephonenumber:site.sitefaxnumber,
 sitefaxnumber:site.sitefaxnumber,
 siteemail:site.siteemail,
 sitecountry:site.sitecountry,
 sitecity:site.sitecity,
 siteadressline:site.siteadressline,
 siteoperationalhours:site.siteoperationalhours,
 sitehoyldays:site.sitehoyldays,
     })
     
const handleEditBtn = () => {
setISNotEditable(false); };
//    setDataApperance({
//     sitename:site.sitename, 
//     sitedescription:site.sitedescription,
//     sitetimezone:site.sitetimezone,
//     sitephonenumber:site.sitefaxnumber,
//     sitefaxnumber:site.sitefaxnumber,
//     siteemail:site.siteemail,
//     sitecountry:site.sitecountry,
//     sitecity:site.sitecity,
//     siteadressline:site.siteadressline,
//     siteoperationalhours:site.siteoperationalhours,
//     sitehoyldays:site.sitehoyldays,
//    })      

// i want to make Selections of time zones and holidayes apper when press edit button

// using timezones list prop to set zones list in the component
 // const timezones=props.timezones;
 // const listZones = timezones.map((zone:any) =>
 // <option>{zone}</option>);
return (
 <>
     <div className="d-flex flex-column w-100 h-100 mt-4">
         <div className="card border-light mb-3">
             <div className={`card-body pe-5 ps-5 pb-4 ${styles.cardBodyContainer}`}>
                     {/* design heading section */}
                     <div className={`${styles.headingArea}`}>
                                 <div className={`${styles.headingSection}`}>
                                         <h3 className='mb-2'data-trans="">Site Infomation</h3>
                                 </div>
                                 <div className={` d-flex justify-content-end color-red ${styles.deleteButton}`}>
                                     <a  data-bs-toggle="modal"
                                             data-bs-target="#DeleteSiteModal"
                                             type="button"
                                             className={`text-decoration-none me-4 ms-4 d-flex align-items-center`}>
                                             <Image   alt="trash icon"
                                             src={TrashIcon}
                                             width={24}
                                             height={24} 
                                     />
                                         <span
                                             className="fs-6 fw-semibold myWarning-Text"
                                             data-trans="">
                                             Delete
                                         </span>
                                     </a>
                                 </div>
                     </div> 
                     <div className='all inputs conainer row '>
                         <div className="firstinputs pt-5 col-12">
                                 <span className='fs-2 fw-semibold pt-0 data-trans=""'>Site Details</span>
                                 <div className="form-group pt-4">
                                         <label className={`col-form-label mt-4${styles.colFormLabel}}`} htmlFor="site-name-input" data-trans=""><span className={`${styles.inputLabel}`}>Site Name*</span></label>
                                         <input  disabled={isNotEditable} type="text" className={`form-control ${styles.inputWidth}`} placeholder={dataApperance.sitename} id="site-name-input" />
                                 </div>
                                 <div className="form-group mt-3">
                                         <label className={`col-form-label mt-4${styles.colFormLabel}}`} htmlFor="site-name-input" data-trans=""><span className={`${styles.inputLabel}`}>Description</span></label>
                                         <textarea className={`form-control ${styles.textAreainput}`} disabled={isNotEditable} id="description-input" placeholder={dataApperance.sitedescription} rows={3} />
                                 </div>
                                 <div className="form-group">
                                     <label htmlFor="timezone-select" className={`form-label mt-4 ${styles.formSelection}`}><span className={`${styles.inputLabel}`}>Time Zone*</span></label>
                                     <select className={`form-select ${styles.timeZonesList} ${styles.formSelection}`} disabled={isNotEditable} id="timezone-select">
                                             {dummyData.timezones.map((timezone: string, index:number) => (
                                             <option key={index} value={index}>{timezone}</option>)
                                             )}
                                     </select>
                                 </div>
                         </div>
                         <div className="secend-inputs pt-5 col-12 pt-5">
                             <span className='fs-2 fw-semibold pt-0' data-trans="">Contact Information</span>
                             <div className="form-group pt-4">
                                 <label className={`col-form-label mt-4${styles.colFormLabel}}`} htmlFor="phone-number-input" data-trans=""><span className={`${styles.inputLabel}`}>Phone Number</span></label>
                                 <input type="number" className={`form-control ${styles.inputWidth}`} disabled={isNotEditable} placeholder={dataApperance.sitephonenumber} id="phone-number-input" />
                             </div>
                             <div className="form-group pt-4">
                                 <label className={`col-form-label mt-4${styles.colFormLabel}}`} htmlFor="fax-number-input" data-trans=""><span className={`${styles.inputLabel}`}>Fax Number</span></label>
                                 <input type="number" className={`form-control ${styles.inputWidth}`} disabled={isNotEditable} placeholder={dataApperance.sitefaxnumber} id="fax-number-input" />
                             </div>
                             <div className="form-group pt-4">
                                 <label className={`col-form-label mt-4${styles.colFormLabel}}`} htmlFor="site-email-input" data-trans=""><span className={`${styles.inputLabel}`}>Contact E-Mail</span></label>
                                 <input type="email" className={`form-control ${styles.inputWidth}`} disabled={isNotEditable} placeholder={dataApperance.siteemail} id="site-email-input" />
                             </div>

                         </div>
                         <div className="third-inputs pt-5 col-12 pt-5">
                             <span className='fs-2 fw-semibold pt-0 ' data-trans="">Location Information</span>
                             <div className="form-group pt-4">
                                 <label className={`col-form-label mt-4${styles.colFormLabel}}`} htmlFor="site-country-input" data-trans=""><span className={`${styles.inputLabel}`}>Country</span></label>
                                 <input type="text" className={`form-control ${styles.inputWidth}`} disabled={isNotEditable} placeholder={dataApperance.sitecountry} id="site-country-input" />
                             </div>
                             <div className="form-group pt-4">
                                 <label className={`col-form-label mt-4${styles.colFormLabel}}`} htmlFor="site-city-input" data-trans=""><span className={`${styles.inputLabel}`}>City</span></label>
                                 <input type="text" className={`form-control ${styles.inputWidth}`} disabled={isNotEditable} placeholder={dataApperance.sitecity} id="site-city-input" />
                             </div>
                             <div className="form-group pt-4">
                                 <label className={`col-form-label mt-4${styles.colFormLabel}}`} htmlFor="site-adress-input" data-trans=""><span className={`${styles.inputLabel}`}>Adress Line</span></label>
                                 <input type="text" className={`form-control ${styles.inputWidth}`} disabled={isNotEditable} placeholder={dataApperance.siteadressline} id="site-adress-input" />
                             </div>
                         </div>
                         <div className="third-inputs pt-5 col-12 pt-5">
                             <span className='fs-2 fw-semibold pt-0' data-trans="">Related Settings</span>
                             <div className="form-group pt-4">
                                 <label className={`col-form-label mt-4${styles.colFormLabel}}`} htmlFor="site-operhours-input" data-trans=""><span className={`${styles.inputLabel}`}>Operational Hours</span></label>
                                 <input type="text" className={`form-control ${styles.inputWidth}`} disabled={isNotEditable} placeholder={dataApperance.siteoperationalhours} id="site-operhours-input" />
                             </div>
                             <div className="form-group pt-4">
                                 <label className={`col-form-label mt-4${styles.colFormLabel}}`} htmlFor="site-holidayes-input" data-trans=""><span className={`${styles.inputLabel}`}>Holidayes</span></label>
                                 <select className={`form-select ${styles.timeZonesList} ${styles.formSelection}`} disabled={isNotEditable} id="timezone-select">
                                             <option>Egypt</option>
                                     </select>
                             </div>
                         </div>    
                     </div>
             </div>
             {/* condiotional rendering based on click of edit button */}
             {isNotEditable==true ?
                     (<div className="d-flex justify-content-end mb-5 me-5 pe-3">
                         <button
                             type="button"
                             className={`btn me-2 ms-2 mt-0  ${styles.confirmBtn2}`}
                             onClick={() => 
                                 {handleEditBtn()
                                 }}
                             disabled={isPending}>
                                 <div className="d-flex me-1 ms-1  ">
                                         <Image 
                                         src={edit_icon}
                                         alt="operational-hours-landing-image"
                                         width={22.3}
                                         height={24}
                                         />
                                             <span className={`fs-5 m-2 fw-bold `} data-trans="edit">
                                                 Edit
                                             </span>
                                 </div>
                         </button>
                     </div>):       <div className={`d-flex justify-content-end mb-5 me-5 `}>
                                          <a  data-bs-toggle="modal"
                                                  data-bs-target="#EditSiteDiscardChangesModal"
                                                  type="button"
                                                  className={`btn myPrimary-outline text-decoration-none me-4 ms-4 pb-0 d-flex align-items-center ${styles.confirmBtn2}`}>
                                              <span
                                                  className="fs-5 fw-semibold "
                                                  data-trans="">
                                                  Cancel
                                              </span>
                                          </a>
                 <button
                     type="button"
                     className={`btn myPrimary ${styles.confirmBtn}`}
                     disabled={isPending}>
                     {!isPending && (
                     <span className="fs-5 fw-semibold" data-trans="confirm">
                         Confirm
                     </span>
                     )}
                     {isPending && <span>Loading...</span>}
                 </button>
         </div>}  
         </div>
     </div>
       <DeleteSiteModal />
       <EditSiteDiscardChangesModal /> 
 </>
);
}

// export default EditSiteInfoComp
// // tenant admin orgnaizations details pages shares an OrgDetails layout which includes navbar and site nav.
// index.getLayout = function getLayout(index: ReactElement) {
//     return <OrgDetailsLayout childern={index}></OrgDetailsLayout>;
//   };
  
    export default index;

