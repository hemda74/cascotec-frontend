import React,{useState} from 'react'
import styles from'../styles/CreateNewSite.module.css'
import { number } from 'prop-types';
import { useRouter } from 'next/router';

type Props={[key:string]:any};
// type Zones={[key:string]:any};
// const [isPending, setIsPending] = useState(false);
// const router=useRouter();
// const handleCancelBtn = () => {
//     router.push('/tenant-admin');
//   };

const CreateNewSiteComp = function (props: Props) {
    const [isPassError, setIsPassError] = useState(false);
    const [isPassMatchError, setIsPassMatchError] = useState(false);
    const [isOldPassError, setIsOldPassError] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isPending, setIsPending] = useState(false);
    // declaring next router in a variable.
    const router = useRouter();
    const handleCancelBtn = () => {
        router.push('/tenant-admin');
      };
    // using timezones list prop to set zones list in the component
    const timezones=props.timezones;
    const listZones = timezones.map((zone:any) =>
    <option>{zone}</option>);
    return (
        <>
            <div className="d-flex flex-column w-100 h-100 mt-4">
                <div className="card border-light mb-3">
                    <div className={`card-body pe-5 ps-5 pb-4 ${styles.cardBodyContainer}`}>
                        {/* design heading section */}
                        <div className={`${styles.headingSection}`}>
                            <h3 className='m-0' data-trans="">New Site</h3>
                        </div>
                        <div className='all inputs conainer row '>
                            <div className="firstinputs pt-5 col-12">
                                <span className='fs-2 fw-semibold pt-0 data-trans=""'>Site Details</span>
                                <div className="form-group pt-4">
                                    <label className={`col-form-label mt-4${styles.colFormLabel}}`} htmlFor="site-name-input" data-trans=""><span className={`${styles.inputLabel}`}>Site Name*</span></label>
                                    <input type="text" className={`form-control ${styles.inputWidth}`} placeholder="Design" id="site-name-input" />
                                </div>
                                <div className="form-group mt-3">
                                    <label className={`col-form-label mt-4${styles.colFormLabel}}`} htmlFor="site-name-input" data-trans=""><span className={`${styles.inputLabel}`}>Description</span></label>
                                    <textarea className={`form-control ${styles.textAreainput}`} id="description-input"placeholder="Description of site" rows={3} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="timezone-select" className={`form-label mt-4 ${styles.formSelection}`}><span className={`${styles.inputLabel}`}>Time Zone*</span></label>
                                    <select className={`form-select ${styles.timeZonesList} ${styles.formSelection}`} id="timezone-select">
                                      {listZones}
                                    </select>
                                </div>
                            </div>
                            <div className="secend-inputs pt-5 col-12 pt-5">
                                <span className='fs-2 fw-semibold pt-0' data-trans="">Contact Information</span>
                                <div className="form-group pt-4">
                                    <label className={`col-form-label mt-4${styles.colFormLabel}}`} htmlFor="phone-number-input" data-trans=""><span className={`${styles.inputLabel}`}>Phone Number</span></label>
                                    <input type="number" className={`form-control ${styles.inputWidth}`} placeholder="+01000000" id="phone-number-input" />
                                </div>
                                <div className="form-group pt-4">
                                    <label className={`col-form-label mt-4${styles.colFormLabel}}`} htmlFor="fax-number-input" data-trans=""><span className={`${styles.inputLabel}`}>Fax Number</span></label>
                                    <input type="number" className={`form-control ${styles.inputWidth}`} placeholder="+0200000" id="fax-number-input" />
                                </div>
                                <div className="form-group pt-4">
                                    <label className={`col-form-label mt-4${styles.colFormLabel}}`} htmlFor="site-email-input" data-trans=""><span className={`${styles.inputLabel}`}>Contact E-Mail</span></label>
                                    <input type="email" className={`form-control ${styles.inputWidth}`} placeholder="Ticosys@Admin.com" id="site-email-input" />
                                </div>

                            </div>
                            <div className="third-inputs pt-5 col-12 pt-5">
                                <span className='fs-2 fw-semibold pt-0 ' data-trans="">Location Information</span>
                                <div className="form-group pt-4">
                                    <label className={`col-form-label mt-4${styles.colFormLabel}}`} htmlFor="site-country-input" data-trans=""><span className={`${styles.inputLabel}`}>Country</span></label>
                                    <input type="text" className={`form-control ${styles.inputWidth}`} placeholder="Egypt" id="site-country-input" />
                                </div>
                                <div className="form-group pt-4">
                                    <label className={`col-form-label mt-4${styles.colFormLabel}}`} htmlFor="site-city-input" data-trans=""><span className={`${styles.inputLabel}`}>City</span></label>
                                    <input type="text" className={`form-control ${styles.inputWidth}`} placeholder="Cairo" id="site-city-input" />
                                </div>
                                <div className="form-group pt-4">
                                    <label className={`col-form-label mt-4${styles.colFormLabel}}`} htmlFor="site-adress-input" data-trans=""><span className={`${styles.inputLabel}`}>City</span></label>
                                    <input type="text" className={`form-control ${styles.inputWidth}`} placeholder="55 Mokkatam St" id="site-adress-input" />
                                </div>
                            </div>
                            <div className="third-inputs pt-5 col-12 pt-5">
                                <span className='fs-2 fw-semibold pt-0' data-trans="">Related Settings</span>
                                <div className="form-group pt-4">
                                    <label className={`col-form-label mt-4${styles.colFormLabel}}`} htmlFor="site-operhours-input" data-trans=""><span className={`${styles.inputLabel}`}>Operational Hours</span></label>
                                    <input type="text" className={`form-control ${styles.inputWidth}`} placeholder="Defult operational hours" id="site-operhours-input" />
                                </div>
                                <div className="form-group pt-4">
                                    <label className={`col-form-label mt-4${styles.colFormLabel}`} htmlFor="site-holidayes-input" data-trans=""><span className={`${styles.inputLabel}`}>Holidayes</span></label>
                                    <select  className={`form-select ${styles.timeZonesList} ${styles.formSelection}`} placeholder="Egypt" id="site-holidayes-input" >
                                        <option>Egypt</option>
                                        <option>Ksa</option>
                               </select>
                                </div>
                            </div>    
                        </div>
                    </div>
                    <div className={`d-flex justify-content-end mb-5 ${styles.buttonsStyles}`}>
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
                </div>
                </div>
            </div>
        </>
    );
}

export default CreateNewSiteComp