import React from 'react';
import Image from 'next/image';
import styles from '../styles/EditSiteDiscardChangesModal.module.css';
import WarningIcon from '../public/icons/warning-therid-icon.svg'
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
            <div className="d-flex flex-column align-items-center">
              <span
                className={`fs-2 fw-semibold text-center  ${styles.headerContainer}`}
                data-trans="">
                      Are you sure to discard
                      <br />
                        changes?
              </span>
              <div
                className={`d-flex align-items-center justify-content-center ${styles.iconContainer}`}>
                <Image
                  alt="Warning Icon"
                  src={WarningIcon}
                  width={86}
                  height={77}
                />
              </div>
              <div className="d-flex align-items-center justify-content-center mb-4">
                <button
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  className={`btn myPrimary-outline me-2 ms-2 ${styles.btnContainer}`}>
                  <span className="fw-bold fs-6" data-trans="">
                    Cancel
                  </span>
                </button>
                <button
                  className={`btn myPrimary me-2 ms-2 ${styles.btnContainer}`}>
                  <span className="fw-bold fs-6" data-trans="">
                    Confirm
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditSiteDiscardChangesModal;
