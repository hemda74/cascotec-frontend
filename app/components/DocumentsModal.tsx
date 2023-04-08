import React from 'react';
import styles from '../styles/DocumentsModal.module.css';
type Props = {};
// Edit Site Discard Changes Modal component
const DocumentsModal = (props: Props) => {
  return (
    <div
      className="modal fade"
      id="DocumentsModal"
      data-bs-keyboard="false"
      tabIndex={-1}
      aria-labelledby="DocumentsModal"
      aria-hidden="true">
      <div
        className={`modal-dialog modal-lg modal-dialog-centered ${styles.modalWidth}`}>
        <div className="modal-content">
        <div className="modal-header">
        <p className="modal-title fs-5 me-2 ms-2 fw-semibold">Changelog</p>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
          <div className="modal-body p-0">
            <div className="d-flex flex-column align-items-start col-sm-12">
              <div className='p-4 '>
              <small className=''>Minor updates to document the current practices: Added about selection and appointment of the ADC & FMs, reference to AC 4.2 added for such records. Rejection of assessors/experts when objected by the client of the CAB. References to IAF MD documents added</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentsModal;
