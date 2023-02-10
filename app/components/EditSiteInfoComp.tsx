import React,{useState} from 'react'
import styles from'../styles/EditSiteInfo.module.css'
import Image from 'next/image';
import edit_icon from '../public/icons/edit-icon.svg'
import { useRouter } from 'next/router';
import DeleteButton from './DeleteButton'

type Props={[key:string]:any};
// type Zones={[key:string]:any};
// const [isPending, setIsPending] = useState(false);
// const router=useRouter();
// const handleCancelBtn = () => {
//     router.push('/tenant-admin');
//   };

const EditSiteInfoComp  =(props: Props)=>  {
    const [isPending, setIsPending] = useState(false);
    const [isEditable, setIsEditable] = useState('');
    const handleEditBtn=()=>{

    }

    // declaring next router in a variable.
    const router = useRouter();
    const site=props.site;
    // const handleCancelBtn = () => {
    //     router.push(`/${props}`);
    //   };
    // // using timezones list prop to set zones list in the component
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
                                <DeleteButton
                                    href="/tenant-admin/organization_details/sites/Delete_site"
                                imageWidth={22}
                                imageHeigth={22}
                                />
                        </div>
                </div> 
                        <div className='all inputs conainer row '>
                            <div className="firstinputs pt-5 col-12">
                                <span className='fs-2 fw-semibold pt-0 data-trans=""'>Site Details</span>
                                <div className="form-group pt-4">
                                    <label className={`col-form-label mt-4${styles.colFormLabel}}`} htmlFor="site-name-input" data-trans=""><span className={`${styles.inputLabel}`}>Site Name</span></label>
                                    <input type="text" className={`form-control ${styles.inputWidth}`} placeholder={`${site.sitename}`} id="site-name-input" />
                                </div>
                                <div className="form-group mt-3">
                                    <label className={`col-form-label mt-4${styles.colFormLabel}}`} htmlFor="site-name-input" data-trans=""><span className={`${styles.inputLabel}`}>Description</span></label>
                                    <textarea className={`form-control ${styles.textAreainput}`} id="description-input"placeholder={`${site.sitedescription}`} rows={3} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="timezone-select" className={`form-label mt-4 ${styles.formSelection}`}><span className={`${styles.inputLabel}`}></span></label>
                                    <select className={`form-select ${styles.timeZonesList} ${styles.formSelection}`} id="timezone-select">
                                    <option>{site.sitetimezone}</option>
                                    </select>
                                </div>
                            </div>
                            <div className="secend-inputs pt-5 col-12 pt-5">
                                <span className='fs-2 fw-semibold pt-0' data-trans="">Contact Information</span>
                                <div className="form-group pt-4">
                                    <label className={`col-form-label mt-4${styles.colFormLabel}}`} htmlFor="phone-number-input" data-trans=""><span className={`${styles.inputLabel}`}>Phone Number</span></label>
                                    <input type="number" className={`form-control ${styles.inputWidth}`} placeholder={`${site.sitephonenumber}`} id="phone-number-input" />
                                </div>
                                <div className="form-group pt-4">
                                    <label className={`col-form-label mt-4${styles.colFormLabel}}`} htmlFor="fax-number-input" data-trans=""><span className={`${styles.inputLabel}`}>Fax Number</span></label>
                                    <input type="number" className={`form-control ${styles.inputWidth}`} placeholder={`${site.sitefaxnumber}`} id="fax-number-input" />
                                </div>
                                <div className="form-group pt-4">
                                    <label className={`col-form-label mt-4${styles.colFormLabel}}`} htmlFor="site-email-input" data-trans=""><span className={`${styles.inputLabel}`}>Contact E-Mail</span></label>
                                    <input type="email" className={`form-control ${styles.inputWidth}`} placeholder={`${site.siteemail}`} id="site-email-input" />
                                </div>

                            </div>
                            <div className="third-inputs pt-5 col-12 pt-5">
                                <span className='fs-2 fw-semibold pt-0 ' data-trans="">Location Information</span>
                                <div className="form-group pt-4">
                                    <label className={`col-form-label mt-4${styles.colFormLabel}}`} htmlFor="site-country-input" data-trans=""><span className={`${styles.inputLabel}`}>Country</span></label>
                                    <input type="text" className={`form-control ${styles.inputWidth}`} placeholder={`${site.sitecountry}`}  id="site-country-input" />
                                </div>
                                <div className="form-group pt-4">
                                    <label className={`col-form-label mt-4${styles.colFormLabel}}`} htmlFor="site-city-input" data-trans=""><span className={`${styles.inputLabel}`}>City</span></label>
                                    <input type="text" className={`form-control ${styles.inputWidth}`} placeholder={`${site.sitecity}`} id="site-city-input" />
                                </div>
                                <div className="form-group pt-4">
                                    <label className={`col-form-label mt-4${styles.colFormLabel}}`} htmlFor="site-adress-input" data-trans=""><span className={`${styles.inputLabel}`}>Adress Line</span></label>
                                    <input type="text" className={`form-control ${styles.inputWidth}`} placeholder={`${site.siteadressline}`} id="site-adress-input" />
                                </div>
                            </div>
                            <div className="third-inputs pt-5 col-12 pt-5">
                                <span className='fs-2 fw-semibold pt-0' data-trans="">Related Settings</span>
                                <div className="form-group pt-4">
                                    <label className={`col-form-label mt-4${styles.colFormLabel}}`} htmlFor="site-operhours-input" data-trans=""><span className={`${styles.inputLabel}`}>Operational Hours</span></label>
                                    <input type="text" className={`form-control ${styles.inputWidth}`} placeholder={`${site.siteoperationalhours}`} id="site-operhours-input" />
                                </div>
                                <div className="form-group pt-4">
                                         <fieldset disabled>
                                    <label className={`col-form-label mt-4${styles.colFormLabel}}`} htmlFor="site-holidayes-input" data-trans=""><span className={`${styles.inputLabel}`}>Holidayes</span></label>
                                    <input type="text" className={`form-control ${styles.inputWidth}`} placeholder={`${site.sitehoyldays}`} id="site-holidayes-input" disabled />
                                </fieldset></div>
                            </div>    
                        </div>
                    </div>
                    <div className="d-flex justify-content-end mb-5 me-5 pe-3">
                        <button
                            type="button"
                            className={` me-2 ms-2 ${styles.confirmBtn} ${styles.confirmBtnStyle}`}
                            onClick={() => handleEditBtn()}
                            disabled={isPending}>
                                 <div className={`d-flex me-1 ms-1`} >
                                        <Image
                                        src={edit_icon}
                                        alt="operational-hours-landing-image"
                                        width={22.3}
                                        height={24}
                                        />
                                            <span className={`fs-5 m-2 fw-semibold`} data-trans="edit">
                                                        Editt
                                            </span>
                                </div>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EditSiteInfoComp