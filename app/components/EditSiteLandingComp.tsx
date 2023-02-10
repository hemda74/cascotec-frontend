import React,{useState} from 'react'
import styles from'../styles/EditSiteInfo.module.css'
import { number } from 'prop-types';
import { useRouter } from 'next/router';
import TrashIcon from '../public/icons/delete-icon.svg'
import edit_icon from '../public/icons/edit-icon.svg'
import Image from 'next/image'
import DeleteSiteModal from './DeleteSiteModal'
import DeleteDepartmentModal from '../components/DeleteDepartmentModal'
type Props={[key:string]:any};
// type Zones={[key:string]:any};
// const [isPending, setIsPending] = useState(false);
// const router=useRouter();
// const handleCancelBtn = () => {
//     router.push('/tenant-admin');
//   };

const EditSiteInfoComp =function (props: Props)  {
       // using timezones list prop to set zones list in the component
       const site=props.site;
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
       setISNotEditable(false); 
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
   
      };
    
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
                                                    <option>GMT+2</option>
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
                            </div>):       <div className={`d-flex justify-content-end mb-5 me-5 ${styles.buttonsStyles}`}>
                        <button
                            type="button"
                            className={`btn myPrimary-outline ${styles.confirmBtn} me-2 ms-2`}
                            onClick={() => handleCancelBtn()}
                            disabled={isPending}>
                            <span className="fs-5 fw-semibold" data-trans="cancel">
                            Cancel
                            </span>
                        </button>
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
            <DeleteDepartmentModal />
             <DeleteSiteModal /> 
        </>
    );
}

export default EditSiteInfoComp