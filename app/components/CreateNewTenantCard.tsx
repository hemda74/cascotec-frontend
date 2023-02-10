import React from 'react';
import Image from 'next/image';
import AddCircleIcon from '../public/icons/add-circle-icon.svg';
import Link from 'next/link';
import styles from '../styles/CreateNewTenantCard.module.css';

// this a link which redirect to create new tenant page.
const CreateNewTenantCard = () => {
  return (
    <>
      <Link href="/itr-admin/create_new_tenant">
        <a className="text-decoration-none">
          <div
            className={`card border-light shadow mb-3 ${styles.myCustomCard}`}>
            <div className="card-body p-3">
              <div className="d-flex flex-column">
                <div className="d-flex justify-content-center pt-4">
                  <Image
                    alt="AddCircleIcon"
                    src={AddCircleIcon}
                    width={70}
                    height={70}
                  />
                </div>
                <div className="d-flex justify-content-center pt-3">
                  <h5 className="fw-semibold text-black" data-trans="newTenant">
                    New Tenant
                  </h5>
                </div>
                <div className="d-flex flex-column justify-content-center text-center pt-2 pb-4">
                  <small
                    className="myText-gray"
                    data-trans="createNewTenantMsgFirst">
                    Create A New Tenant And
                  </small>
                  <small
                    className="myText-gray"
                    data-trans="createNewTenantMsgTwo">
                    Configure The Tenant Admin
                  </small>
                </div>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </>
  );
};

export default CreateNewTenantCard;
