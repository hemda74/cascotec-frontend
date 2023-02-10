import { ReactElement, useState } from 'react';
import type { NextPageWithLayout } from '../../_app';
import OrgDetailsLayout from '../../../layouts/OrgDetailsLayout';
import Head from 'next/head';
import TenantImageUpload from '../../../components/TenantImageUpload';
import TenantNameInput from '../../../components/TenantNameInput';
import ContactPhoneNumber from '../../../components/ContactPhoneNumber';
import ContactEmailInput from '../../../components/ContactEmailInput';
import Logo from '../../../public/logo.svg';
import Image from 'next/image';
import EditIcon from '../../../public/icons/edit-icon.svg';
import styles from '../../../styles/OrganizationInfo.module.css';

type Props = {};

// -----------------All comented Codes will be used in future don't delete them.------------------

// this data will be replaced with api call and setting it in redux
const dummyData = {
  tenant_id: 239048,
  tenant_name: 'Elraghy Steel',
  tenant_contact_email: 'info@Elraghysteel.com',
  tenant_contact_phone: '+2010000000000',
};

// Tenant admin Orgnaization Info page .
const organization_info: NextPageWithLayout = (props: Props) => {
  const [isImage, setIsImage] = useState();
  const [isEdit, setIsEdit] = useState(false);
  const [isPending, setIsPending] = useState(false);

  // a handle function to switch between edit and readonly phases.
  const handleEditBtn = () => {
    setIsEdit(!isEdit);
  };

  return (
    <>
      <Head>
        <title>TicoSys | Organization Info</title>
      </Head>
      <div className="d-flex flex-column w-100 h-100 mt-4">
        <div className="card border-light mb-3">
          <div className="card-body pe-5 ps-5 pt-4 pb-4">
            <div className="d-flex align-items-center justify-content-between">
              <span className="card-title myPrimary-Text fs-3">
                <span
                  className="border-bottom border-2 myPrimary-border"
                  data-trans="tenantId">
                  Tenant Id
                </span>
                &nbsp;
                <span>#{dummyData.tenant_id}</span>
              </span>
            </div>
            <div className="row">
              <div className="col-8 mt-3">
                <TenantImageUpload
                  isImage={Logo}
                  setIsImage={setIsImage}
                  isEditable={true}
                  isEdit={isEdit}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-5">
                <label
                  className="form-label fw-light myText-gray"
                  data-trans="tenantName">
                  Tenant Name
                </label>
                <TenantNameInput
                  name={dummyData.tenant_name}
                  disabled={!isEdit}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-5">
                <div className="mt-1">
                  <label
                    className="form-label fw-light myText-gray"
                    data-trans="contactPhoneNumber">
                    Contact Phone Number
                  </label>
                  <ContactPhoneNumber
                    contactPhoneNumber={dummyData.tenant_contact_phone}
                    disabled={!isEdit}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-5">
                <div className="mt-1">
                  <label
                    className="form-label fw-light myText-gray"
                    data-trans="conatctEmail">
                    Contact Email
                  </label>
                  <ContactEmailInput
                    contactEmail={dummyData.tenant_contact_email}
                    disabled={!isEdit}
                  />
                </div>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-12 align-self-end">
                {/* <div className="d-flex justify-content-center">
                  {isErr && (
                    <span
                      className="myDanger-Text text-center"
                      data-trans="allInputsAreRequired">
                      All inputs are required
                    </span>
                  )}
                  {isEmailErr && (
                    <span
                      className="myDanger-Text"
                      data-trans="emailIsNotValid">
                      Email is not valid
                    </span>
                  )}
                  {isEmailUsed && (
                    <span
                      className="myDanger-Text"
                      data-trans="emailIsAlreadyExists">
                      Email is already exists
                    </span>
                  )}
                  {isPasswordErr && (
                    <span
                      className="myDanger-Text"
                      data-trans="passwordCriteriaError">
                      Password should contain at least one uppercase letter, one
                      lowercase letter, one digit, one special symbol and should
                      be more than 8 character.
                    </span>
                  )}
                  {isPassMatchedErr && (
                    <span
                      className="myDanger-Text"
                      data-trans="passwordsMatchError">
                      Passwords should match!!
                    </span>
                  )}
                  {isDomainValid && (
                    <span className="myDanger-Text" data-trans="subdomainError">
                      Sub-Domain name is invalid please change it and try again.
                    </span>
                  )}
                  {isSuccess && (
                    <span
                      className="mySuccess-Text"
                      data-trans="tenantSuccessCreationMsg">
                      A new Tenant has been created successfully
                    </span>
                  )}
                </div> */}
                <div className={`d-flex ${'justify-content-end'}`}>
                  {!isEdit && (
                    <button
                      type="button"
                      className={`btn mylightPrimary-bg myPrimary-Text ${styles.editBtn}`}
                      onClick={() => handleEditBtn()}>
                      <div className="d-flex align-items-center">
                        <Image
                          alt="EditIcon"
                          src={EditIcon}
                          width={24}
                          height={24}
                        />
                        <span
                          className="fs-6 fw-semibold pe-2 ps-2"
                          data-trans="edit">
                          Edit
                        </span>
                      </div>
                    </button>
                  )}
                  {isEdit && (
                    <>
                      <button
                        type="button"
                        className={`btn myPrimary-outline ${styles.editBtn} ms-2 me-2`}
                        onClick={() => handleEditBtn()}>
                        <span
                          className="fs-6 fw-semibold pe-2 ps-2"
                          data-trans="cancel">
                          Cancel
                        </span>
                      </button>
                      <button
                        type="button"
                        className={`btn myPrimary ${styles.editBtn}`}
                        // onClick={() => handleConfirmBtn()}
                        disabled={isPending}>
                        {!isPending && (
                          <span
                            className="fs-6 fw-semibold pe-2 ps-2"
                            data-trans="confirm">
                            Confirm
                          </span>
                        )}
                        {isPending && (
                          <span className="fs-6 fw-semibold pe-2 ps-2">
                            Loading...
                          </span>
                        )}
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// tenant admin orgnaizations details pages shares an OrgDetails layout which includes navbar and site nav.
organization_info.getLayout = function getLayout(index: ReactElement) {
  return <OrgDetailsLayout childern={index}></OrgDetailsLayout>;
};

export default organization_info;
