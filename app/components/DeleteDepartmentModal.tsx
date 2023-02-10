import React from 'react';
import Image from 'next/image';
import TrashIcon from '../public/icons/trash-red-icon.svg';
import styles from '../styles/DeleteDepartmentModal.module.css';

type Props = {};

// Delete Department Modal component
const DeleteDepartmentModal = (props: Props) => {
  return (
    <div
      className="modal fade"
      id="DeleteDepartmentModal"
      data-bs-keyboard="false"
      tabIndex={-1}
      aria-labelledby="DeleteDepartmentModal"
      aria-hidden="true">
      <div
        className={`modal-dialog modal-lg modal-dialog-centered ${styles.modalWidth}`}>
        <div className="modal-content">
          <div className="modal-body p-0">
            <div className="d-flex flex-column align-items-center">
              <span
                className={`fs-2 fw-semibold myWarning-Text ${styles.headerContainer}`}
                data-trans="">
                Delete Department ?
              </span>
              <div
                className={`d-flex align-items-center justify-content-center ${styles.iconContainer}`}>
                <Image
                  alt="trash icon"
                  src={TrashIcon}
                  width={54}
                  height={54}
                />
              </div>
              <span className="fs-5 fw-semibold" data-trans="">
                Are You Sure You Want To
              </span>
              <span className="fs-5 fw-semibold mb-5">
                <span data-trans="">Delete</span>{' '}
                <span className="myPrimary-Text">Administration</span>{' '}
                <span data-trans="">Department ?</span>
              </span>
              <div className="d-flex align-items-center justify-content-center mb-4">
                <button
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  className={`btn btn-light me-2 ms-2 ${styles.btnContainer}`}>
                  <span className="fw-bold fs-6" data-trans="">
                    Cancel
                  </span>
                </button>
                <button
                  className={`btn myWarning me-2 ms-2 ${styles.btnContainer}`}>
                  <span className="fw-bold fs-6" data-trans="">
                    Delete
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

export default DeleteDepartmentModal;
