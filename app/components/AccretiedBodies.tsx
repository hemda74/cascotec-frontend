import React from 'react'
import styles from '../styles/AccretiedBodies.module.css'
import Link from 'next/link'
import Image from 'next/image'
import mohamed from '../public/imagess/mohamedhamdy.jpg'
import oman from '../public/imagess/oman.png'
import kuwait from '../public/imagess/kuwait.png'
import bahreen from '../public/imagess/accretied flags/bahreen.png'
import qater from '../public/imagess/qater.png'
import egypt from '../public/imagess/egypt.png'
import uae from '../public/imagess/uae.png'
import halal from '../public/imagess/halal.png'
import ksa from '../public/imagess/ksa.png'
const AccretiedBodies = () => {
  return (
    <>
     <div className={`text-center ${styles.titleWord}`}>
        <h6 className="text-white fw-semibold mb-4" >{`Home > Accretied Bodies`}</h6>
        <h2 className={`text-white fw-bold mb-5 `} >Accretied Bodies</h2>
    </div>
    <div className={` container ${styles.formConatiner}`}>
        <div className="row gy-5 gx-lg-5">
          <div className={`col-lg-12 ${styles.contactCard}`}>
            <form action="forms/contact.php" method="post" role="form" className={` php-email-form ${styles.searchCard}`}>
            <p> 500  Accretied </p>
              <div className="row">
                <div className={`col-md-4 col-lg-4 col-sm-6 col-xs-6  form-group mt-4 ${styles.formGroup}`}>
                  <input type="text" name="name" className={`form-control ${styles.formControl}`} id="name" placeholder="Your Name" required/>
                </div>
                <div className={`col-md-4 col-lg-4 col-sm-6 col-xs-6 form-group mt-4 ${styles.formGroup}`}>
                    <select  className={`form-select ${styles.formControl}`}  id="site-holidayes-input" >
                        <option>Acrredited</option>
                        <option>Suspended</option>
                        <option>Withdrawn</option>
                        <option>Expired</option>
                        <option>All</option>
                    </select>                
                  </div>
                  <div className={`col-md-4 col-lg-4 col-sm-6 col-xs-6 form-group mt-4  ${styles.formGroup}`}>
                    <select  className={`form-select ${styles.formControl}`}  id="site-holidayes-input" >
                        <option>Select All</option>
                        <option>Testing Lap</option>
                        <option>Calibration Lab</option>
                        <option>Medical Lab</option>
                        <option>Mangment System Cetifcation</option>
                        <option>Halal Product Certification</option>
                        <option>Inspection Body</option>
                        <option>Prof Testing Provider</option>
                        <option>Product Certification</option>
                        <option>Personnel Certification Body</option>
                        <option>Reference Material Producer</option>
                    </select>
                  </div>
                <div className={`col-md-6 col-lg-2 col-sm-6 col-xl-2 form-group mt-3 mt-4 ${styles.formGroup}`}>
                <input type="date" name="from_date" className={`form-control datepicker from_date ${styles.dateInput}`} value="" autoComplete="off"/>            
                </div>
                <div className={`col-md-6 col-lg-2 col-sm-6 col-xl-2 form-group mt-3 mt-4 ${styles.formGroup}`}>
                <input type="date" name="from_date" className={`form-control datepicker from_date ${styles.dateInput}`} value="" autoComplete="off"/>            
                </div>
              
              <div className={`col-md-4 col-lg-4 col-sm-6 col-xs-6 form-group mt-4 ${styles.formGroup}`}>
              <select  className={`form-select ${styles.formControl}`}  id="site-holidayes-input" >
    <option>Country</option>
    <option value="AF">Afghanistan</option>
    <option value="AX">Aland Islands</option>
    <option value="AL">Albania</option>
    <option value="DZ">Algeria</option>
    <option value="AS">American Samoa</option>
    <option value="AD">Andorra</option>
    <option value="AO">Angola</option>
    <option value="AI">Anguilla</option>
    <option value="AQ">Antarctica</option>
    <option value="AG">Antigua and Barbuda</option>
    <option value="AR">Argentina</option>
    <option value="AM">Armenia</option>
    <option value="AW">Aruba</option>
    <option value="AU">Australia</option>
    <option value="AT">Austria</option>
    <option value="AZ">Azerbaijan</option>
    <option value="BS">Bahamas</option>
    <option value="BH">Bahrain</option>
    <option value="BD">Bangladesh</option>
    <option value="BB">Barbados</option>
    <option value="BY">Belarus</option>
    <option value="BE">Belgium</option>
    <option value="BZ">Belize</option>
    <option value="BJ">Benin</option>
    <option value="BM">Bermuda</option>
    <option value="BT">Bhutan</option>
    <option value="BO">Bolivia</option>
    <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
    <option value="BA">Bosnia and Herzegovina</option>
    <option value="BW">Botswana</option>
    <option value="BV">Bouvet Island</option>
    <option value="BR">Brazil</option>
    <option value="IO">British Indian Ocean Territory</option>
    <option value="BN">Brunei Darussalam</option>
    <option value="BG">Bulgaria</option>
    <option value="BF">Burkina Faso</option>
    <option value="BI">Burundi</option>
    <option value="KH">Cambodia</option>
    <option value="CM">Cameroon</option>
    <option value="CA">Canada</option>
    <option value="CV">Cape Verde</option>
    <option value="KY">Cayman Islands</option>
    <option value="CF">Central African Republic</option>
    <option value="TD">Chad</option>
    <option value="CL">Chile</option>
    <option value="CN">China</option>
    <option value="CX">Christmas Island</option>
    <option value="CC">Cocos (Keeling) Islands</option>
    <option value="CO">Colombia</option>
    <option value="KM">Comoros</option>
    <option value="CG">Congo</option>
    <option value="CD">Congo, Democratic Republic of the Congo</option>
    <option value="CK">Cook Islands</option>
    <option value="CR">Costa Rica</option>
    <option value="CI">Cote D'Ivoire</option>
    <option value="HR">Croatia</option>
    <option value="CU">Cuba</option>
    <option value="CW">Curacao</option>
    <option value="CY">Cyprus</option>
    <option value="CZ">Czech Republic</option>
    <option value="DK">Denmark</option>
    <option value="DJ">Djibouti</option>
    <option value="DM">Dominica</option>
    <option value="DO">Dominican Republic</option>
    <option value="EC">Ecuador</option>
    <option value="EG">Egypt</option>
    <option value="SV">El Salvador</option>
    <option value="GQ">Equatorial Guinea</option>
    <option value="ER">Eritrea</option>
    <option value="EE">Estonia</option>
    <option value="ET">Ethiopia</option>
    <option value="FK">Falkland Islands (Malvinas)</option>
    <option value="FO">Faroe Islands</option>
    <option value="FJ">Fiji</option>
    <option value="FI">Finland</option>
    <option value="FR">France</option>
    <option value="GF">French Guiana</option>
    <option value="PF">French Polynesia</option>
    <option value="TF">French Southern Territories</option>
    <option value="GA">Gabon</option>
    <option value="GM">Gambia</option>
    <option value="GE">Georgia</option>
    <option value="DE">Germany</option>
    <option value="GH">Ghana</option>
    <option value="GI">Gibraltar</option>
    <option value="GR">Greece</option>
    <option value="GL">Greenland</option>
    <option value="GD">Grenada</option>
    <option value="GP">Guadeloupe</option>
    <option value="GU">Guam</option>
    <option value="GT">Guatemala</option>
    <option value="GG">Guernsey</option>
    <option value="GN">Guinea</option>
    <option value="GW">Guinea-Bissau</option>
    <option value="GY">Guyana</option>
    <option value="HT">Haiti</option>
    <option value="HM">Heard Island and Mcdonald Islands</option>
    <option value="VA">Holy See (Vatican City State)</option>
    <option value="HN">Honduras</option>
    <option value="HK">Hong Kong</option>
    <option value="HU">Hungary</option>
    <option value="IS">Iceland</option>
    <option value="IN">India</option>
    <option value="ID">Indonesia</option>
    <option value="IR">Iran, Islamic Republic of</option>
    <option value="IQ">Iraq</option>
    <option value="IE">Ireland</option>
    <option value="IM">Isle of Man</option>
    <option value="IL">Israel</option>
    <option value="IT">Italy</option>
    <option value="JM">Jamaica</option>
    <option value="JP">Japan</option>
    <option value="JE">Jersey</option>
    <option value="JO">Jordan</option>
    <option value="KZ">Kazakhstan</option>
    <option value="KE">Kenya</option>
    <option value="KI">Kiribati</option>
    <option value="KP">Korea, Democratic People's Republic of</option>
    <option value="KR">Korea, Republic of</option>
    <option value="XK">Kosovo</option>
    <option value="KW">Kuwait</option>
    <option value="KG">Kyrgyzstan</option>
    <option value="LA">Lao People's Democratic Republic</option>
    <option value="LV">Latvia</option>
    <option value="LB">Lebanon</option>
    <option value="LS">Lesotho</option>
    <option value="LR">Liberia</option>
    <option value="LY">Libyan Arab Jamahiriya</option>
    <option value="LI">Liechtenstein</option>
    <option value="LT">Lithuania</option>
    <option value="LU">Luxembourg</option>
    <option value="MO">Macao</option>
    <option value="MK">Macedonia, the Former Yugoslav Republic of</option>
    <option value="MG">Madagascar</option>
    <option value="MW">Malawi</option>
    <option value="MY">Malaysia</option>
    <option value="MV">Maldives</option>
    <option value="ML">Mali</option>
    <option value="MT">Malta</option>
    <option value="MH">Marshall Islands</option>
    <option value="MQ">Martinique</option>
    <option value="MR">Mauritania</option>
    <option value="MU">Mauritius</option>
    <option value="YT">Mayotte</option>
    <option value="MX">Mexico</option>
    <option value="FM">Micronesia, Federated States of</option>
    <option value="MD">Moldova, Republic of</option>
    <option value="MC">Monaco</option>
    <option value="MN">Mongolia</option>
    <option value="ME">Montenegro</option>
    <option value="MS">Montserrat</option>
    <option value="MA">Morocco</option>
    <option value="MZ">Mozambique</option>
    <option value="MM">Myanmar</option>
    <option value="NA">Namibia</option>
    <option value="NR">Nauru</option>
    <option value="NP">Nepal</option>
    <option value="NL">Netherlands</option>
    <option value="AN">Netherlands Antilles</option>
    <option value="NC">New Caledonia</option>
    <option value="NZ">New Zealand</option>
    <option value="NI">Nicaragua</option>
    <option value="NE">Niger</option>
    <option value="NG">Nigeria</option>
    <option value="NU">Niue</option>
    <option value="NF">Norfolk Island</option>
    <option value="MP">Northern Mariana Islands</option>
    <option value="NO">Norway</option>
    <option value="OM">Oman</option>
    <option value="PK">Pakistan</option>
    <option value="PW">Palau</option>
    <option value="PS">Palestinian Territory, Occupied</option>
    <option value="PA">Panama</option>
    <option value="PG">Papua New Guinea</option>
    <option value="PY">Paraguay</option>
    <option value="PE">Peru</option>
    <option value="PH">Philippines</option>
    <option value="PN">Pitcairn</option>
    <option value="PL">Poland</option>
    <option value="PT">Portugal</option>
    <option value="PR">Puerto Rico</option>
    <option value="QA">Qatar</option>
    <option value="RE">Reunion</option>
    <option value="RO">Romania</option>
    <option value="RU">Russian Federation</option>
    <option value="RW">Rwanda</option>
    <option value="BL">Saint Barthelemy</option>
    <option value="SH">Saint Helena</option>
    <option value="KN">Saint Kitts and Nevis</option>
    <option value="LC">Saint Lucia</option>
    <option value="MF">Saint Martin</option>
    <option value="PM">Saint Pierre and Miquelon</option>
    <option value="VC">Saint Vincent and the Grenadines</option>
    <option value="WS">Samoa</option>
    <option value="SM">San Marino</option>
    <option value="ST">Sao Tome and Principe</option>
    <option value="SA">Saudi Arabia</option>
    <option value="SN">Senegal</option>
    <option value="RS">Serbia</option>
    <option value="CS">Serbia and Montenegro</option>
    <option value="SC">Seychelles</option>
    <option value="SL">Sierra Leone</option>
    <option value="SG">Singapore</option>
    <option value="SX">Sint Maarten</option>
    <option value="SK">Slovakia</option>
    <option value="SI">Slovenia</option>
    <option value="SB">Solomon Islands</option>
    <option value="SO">Somalia</option>
    <option value="ZA">South Africa</option>
    <option value="GS">South Georgia and the South Sandwich Islands</option>
    <option value="SS">South Sudan</option>
    <option value="ES">Spain</option>
    <option value="LK">Sri Lanka</option>
    <option value="SD">Sudan</option>
    <option value="SR">Suriname</option>
    <option value="SJ">Svalbard and Jan Mayen</option>
    <option value="SZ">Swaziland</option>
    <option value="SE">Sweden</option>
    <option value="CH">Switzerland</option>
    <option value="SY">Syrian Arab Republic</option>
    <option value="TW">Taiwan, Province of China</option>
    <option value="TJ">Tajikistan</option>
    <option value="TZ">Tanzania, United Republic of</option>
    <option value="TH">Thailand</option>
    <option value="TL">Timor-Leste</option>
    <option value="TG">Togo</option>
    <option value="TK">Tokelau</option>
    <option value="TO">Tonga</option>
    <option value="TT">Trinidad and Tobago</option>
    <option value="TN">Tunisia</option>
    <option value="TR">Turkey</option>
    <option value="TM">Turkmenistan</option>
    <option value="TC">Turks and Caicos Islands</option>
    <option value="TV">Tuvalu</option>
    <option value="UG">Uganda</option>
    <option value="UA">Ukraine</option>
    <option value="AE">United Arab Emirates</option>
    <option value="GB">United Kingdom</option>
    <option value="US">United States</option>
    <option value="UM">United States Minor Outlying Islands</option>
    <option value="UY">Uruguay</option>
    <option value="UZ">Uzbekistan</option>
    <option value="VU">Vanuatu</option>
    <option value="VE">Venezuela</option>
    <option value="VN">Viet Nam</option>
    <option value="VG">Virgin Islands, British</option>
    <option value="VI">Virgin Islands, U.s.</option>
    <option value="WF">Wallis and Futuna</option>
    <option value="EH">Western Sahara</option>
    <option value="YE">Yemen</option>
    <option value="ZM">Zambia</option>
    <option value="ZW">Zimbabwe</option>
</select>               
                  </div>
                  </div>
              
              <div className={`form-group mt-4 ${styles.formGroup}`}>
                <p>Accredited date falls between the two dates</p>
              </div>
              <div className="text-end"><button className={` myInfo rounded ${styles.SearchButton}`} type="submit"> Search </button></div>
            </form>
          </div>
        </div>
      </div>
      <div className={`row gy-5  container justify-content-center align-items-center m-auto ${styles.formConatiner}`}>
          <div className="col-xl-3 col-md-6 col-sm-12 col-xs-12 d-flex" data-aos="zoom-in" data-aos-delay="200">
              <Link href={`https://www.linkedin.com/in/ahmed-hemdan-695408201/`} target="_blank" rel="noreferrer">
                <a>
                    <div className={`${styles.teamMember2}`}>
                        <figure className={`${styles.teamMemberFigure}`}>
                          <Image src={halal} height={900} alt="" className="img-responsive rounded"/>
                          <figcaption className={`${styles.figCaption} text-start`}>
                            <div className='mt-5'>
                              <p className='' data-trans="MrAhmedMahrous">Mr. Ahmed Mahrous</p>
                              <p className='' data-trans='BusinessDevelopmentManager'>Business Development Manager</p>
                            </div>
                            <div className='d-flex justify-content-end'>
                            <Image src={bahreen} alt="" className={`${styles.flagImage}`} />
                            </div>
                          </figcaption>
                        </figure>
                    </div>
                </a>
            </Link>
          </div>
          <div className="col-xl-3 col-md-6 col-sm-12 col-xs-12 d-flex" data-aos="zoom-in" data-aos-delay="200">
              <Link href={`https://www.linkedin.com/in/ahmed-hemdan-695408201/`} target="_blank" rel="noreferrer">
                <a>
                    <div className={`${styles.teamMember2}`}>
                        <figure className={`${styles.teamMemberFigure}`}>
                          <Image src={mohamed} height={250} alt="" className="img-responsive rounded"/>
                          <figcaption className={`${styles.figCaption} text-center`}>
                            <div className='mt-5'>
                              <p className='fs-3' data-trans="MrMostafaFarag">Mr. Mostafa Farag</p>
                              <p className='fs-5' data-trans="ChiefFinancialOfficerCFO">Chief Financial Officer (CFO)</p>
                            </div>
                            <div className='d-flex justify-content-end'>
                            <Image src={ksa} alt="" className={`${styles.flagImage}`} />
                            </div>
                          </figcaption>
                        </figure>
                    </div>
                </a>
            </Link>
          </div>
          <div className="col-xl-3 col-md-6 col-sm-12 col-xs-12 d-flex" >
              <Link href={`https://www.linkedin.com/in/ahmed-hemdan-695408201/`} target="_blank" rel="noreferrer">
                <a>
                    <div className={`${styles.teamMember2}`}>
                        <figure className={`${styles.teamMemberFigure}`}>
                          <Image src={mohamed} height={250} alt="" className="img-responsive rounded"/>
                          <figcaption className={`${styles.figCaption} text-center`}>
                           <div className='mt-5'>
                              <p className='fs-3' data-trans="MsJihadMohamed">Ms. Jihad Mohamed</p>
                              <p className='fs-5' data-trans="ChiefOperationsOfficerCFO">Chief Operations Officer (CFO)</p>
                            </div>
                            <div className='d-flex justify-content-end'>
                            <Image src={uae} alt="" className={`${styles.flagImage}`} />
                            </div>
                          </figcaption>
                        </figure>
                    </div>
                </a>
            </Link>
          </div>
          <div className="col-xl-3 col-md-6 col-sm-12 col-xs-12 d-flex">
              <Link href={`https://www.linkedin.com/in/ahmed-hemdan-695408201/`} target="_blank" rel="noreferrer">
                <a>
                    <div className={`${styles.teamMember2}`}>
                        <figure className={`${styles.teamMemberFigure}`}>
                          <Image src={mohamed} height={250} alt="" className="img-responsive rounded"/>
                          <figcaption className={`${styles.figCaption} text-center`}>
                            <div className='mt-5'>
                                <p className='fs-3' data-trans="MrsEsraaAbdelHafez">Mrs. Esraa Abdel Hafez</p>
                                <p className='fs-5' data-trans="HumanResourcesDirector">Human Resources Director</p>
                            </div>
                            <div className='d-flex justify-content-end'>
                            <Image src={egypt} alt=""  className={`${styles.flagImage}`} />
                            </div>
                          </figcaption>
                        </figure>
                    </div>
                </a>
            </Link>
          </div>
          <div className="col-xl-3 col-md-6 col-sm-12 col-xs-12 d-flex" data-aos="zoom-in" data-aos-delay="200">
              <Link href={`https://www.linkedin.com/in/ahmed-hemdan-695408201/`} target="_blank" rel="noreferrer">
                <a>
                    <div className={`${styles.teamMember2}`}>
                        <figure className={`${styles.teamMemberFigure}`}>
                          <Image src={mohamed} height={250} alt="" className="img-responsive rounded"/>
                          <figcaption className={`${styles.figCaption} text-center`}>
                            <div className='mt-5'>
                                <p className='fs-3' data-trans="DrAhmedBedawi">Dr. Ahmed Bedawi</p>
                                <p className='fs-5' data-trans="TrainingAcademyManager">Training Academy Manager</p>
                              </div>
                              <div className='d-flex justify-content-end'>
                            <Image src={qater} alt="" className={`${styles.flagImage}`} />
                            </div>
                          </figcaption>
                        </figure>
                    </div>
                </a>
            </Link>
          </div>
          <div className="col-xl-3 col-md-6 col-sm-12 col-xs-12 d-flex" data-aos="zoom-in" data-aos-delay="200">
              <Link href={`https://www.linkedin.com/in/ahmed-hemdan-695408201/`} target="_blank" rel="noreferrer">
                <a>
                    <div className={`${styles.teamMember2}`}>
                        <figure className={`${styles.teamMemberFigure}`}>
                          <Image src={mohamed} height={250} alt="" className="img-responsive rounded"/>
                          <figcaption className={`${styles.figCaption} text-center`}>
                            <div className='mt-5'>
                                <p className='fs-3' data-trans="ProfDrAbdelrhamanFarahat">Prof. Dr. Abdelrhaman Farahat</p>
                                <p className='fs-5' data-trans="TechnicalSchemeManager">Technical Scheme Manager</p>
                              </div>
                              <div className='d-flex justify-content-end'>
                            <Image src={ksa} alt="" className={`${styles.flagImage}`} />
                            </div>
                          </figcaption>
                        </figure>
                    </div>
                </a>
            </Link>
          </div>
          <div className="col-xl-3 col-md-6 col-sm-12 col-xs-12 d-flex" data-aos="zoom-in" data-aos-delay="200">
              <Link href={`https://www.linkedin.com/in/ahmed-hemdan-695408201/`} target="_blank" rel="noreferrer">
                <a>
                    <div className={`${styles.teamMember2}`}>
                        <figure className={`${styles.teamMemberFigure}`}>
                          <Image src={mohamed} height={250} alt="" className="img-responsive rounded"/>
                          <figcaption className={`${styles.figCaption} text-center`}>
                           <div className='mt-5'>
                              <p className='fs-3' data-trans="ProfDrMagdyElMahdy">Prof Dr. Magdy El Mahdy</p>
                              <p className='fs-5' data-trans="ChiefInspectorOfficerCIO">Chief Inspector Officer (CIO)</p>
                            </div>
                            <div className='d-flex justify-content-end'>
                            <Image src={egypt} alt="" className={`${styles.flagImage}`} />
                            </div>
                          </figcaption>
                        </figure>
                    </div>
                </a>
            </Link>
          </div>
          <div className="col-xl-3 col-md-6 col-sm-12 col-xs-12 d-flex" data-aos="zoom-in" data-aos-delay="200">
              <Link href={`https://www.linkedin.com/in/ahmed-hemdan-695408201/`} target="_blank" rel="noreferrer">
                <a>
                    <div className={`${styles.teamMember2}`}>
                        <figure className={`${styles.teamMemberFigure}`}>
                          <Image src={mohamed} height={250} alt="" className="img-responsive rounded"/>
                          <figcaption className={`${styles.figCaption} text-center`}>
                           <div className='mt-5'>
                              <p className='fs-3' data-trans="DrFred">Dr. Fred</p>
                              <p className='fs-5' data-trans="InformationSecurityBCMDirector">Information Security & BCM Director</p>
                            </div>
                            <div className='d-flex justify-content-end'>
                            <Image src={bahreen} alt=""  className={`${styles.flagImage}`} />
                            </div>
                          </figcaption>
                        </figure>
                    </div>
                </a>
            </Link>
          </div>
          <div className="col-xl-3 col-md-6 col-sm-12 col-xs-12 d-flex" data-aos="zoom-in" data-aos-delay="200">
              <Link href={`https://www.linkedin.com/in/ahmed-hemdan-695408201/`} target="_blank" rel="noreferrer">
                <a>
                    <div className={`${styles.teamMember2}`}>
                        <figure className={`${styles.teamMemberFigure}`}>
                          <Image src={mohamed} height={250} alt="" className="img-responsive rounded"/>
                          <figcaption className={`${styles.figCaption} text-center`}>
                          <div className='mt-5'>
                              <p className='fs-3'data-trans="ShehabAlAref">Shehab Al Aref</p>
                              <p className='fs-5'data-trans="DigitalTransformationDirector">Digital Transformation Director</p>
                            </div>
                            <div className='d-flex justify-content-end'>
                            <Image src={kuwait}  alt="" className={`${styles.flagImage}`} />
                            </div>
                          </figcaption>
                        </figure>
                    </div>
                </a>
            </Link>
          </div>
          <div className="col-xl-3 col-md-6 col-sm-12 col-xs-12 d-flex" data-aos="zoom-in" data-aos-delay="200">
              <Link href={`https://www.linkedin.com/in/ahmed-hemdan-695408201/`} target="_blank" rel="noreferrer">
                <a>
                    <div className={`${styles.teamMember2}`}>
                        <figure className={`${styles.teamMemberFigure}`}>
                          <Image src={mohamed} height={250} alt="" className="img-responsive rounded"/>
                          <figcaption className={`${styles.figCaption} text-center`}>
                            <div className='mt-5'>
                            <p className='fs-3'data-trans="DinaMohi">Dina Mohi</p>
                            <p className='fs-5'data-trans="ArchitecturalGraphicDirector">Architectural Graphic Director</p>
                            </div>
                            <div className='d-flex justify-content-end'>
                            <Image src={uae}  alt="" className={`${styles.flagImage}`} />
                            </div>
                          </figcaption>
                        </figure>
                    </div>
                </a>
            </Link>
          </div>
            </div>
    </>
  )
}

export default AccretiedBodies
