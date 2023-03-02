import React from 'react';
import Image from 'next/image';
import styles from '../styles/EditSiteDiscardChangesModal.module.css';
import WarningIcon from '../public/icons/warning-therid-icon.svg'
import accrimage from'../public/imagess/accrimage2.png'
import uae from '../public/imagess/accretied flags/uae.png'
type Props = {};

// Edit Site Discard Changes Modal component
const EditSiteDiscardChangesModal = (props: Props) => {
  return (
    <div
      className="modal fade"
      id="EditSiteDiscardChangesModal"
      data-bs-keyboard="false"
      tabIndex={-1}
      aria-labelledby="EditSiteDiscardChangesModal"
      aria-hidden="true">
      <div
        className={`modal-dialog modal-lg modal-dialog-centered ${styles.modalWidth}`}>
        <div className="modal-content">
          <div className="modal-body p-0">
            <div className="d-flex flex-column align-items-start">
              <div
                className={`d-flex align-items-center justify-content-start ${styles.iconContainer}`}>
                <Image
                  alt="Warning Icon"
                  src={accrimage}
                  // width={86}
                  // height={77}
                  className="me-2 mb-0 mt-0 ms-2"
                />
              </div>
              <p className="fs-5 fw-semibold">Arab Shipbuilding and Repair Yard (ASRY)</p>
              <small className=' text-black-50'>ACL 0021</small>
              <div className="d-flex">
              <Image
              className='mt-1'
                src={uae}
                width={30}
                height={30}
/>
<span className='me-1 ms-1'>Emirates</span></div>
                          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditSiteDiscardChangesModal;
