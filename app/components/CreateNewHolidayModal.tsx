import React, { useState } from 'react';
import styles from '../styles/CreateNewHolidayModal.module.css';
import NameGroupInput from './NameGroupInput';

type Props = {};

// CreateNew Holiday Modal Component.
const CreateNewHolidayModal = (props: Props) => {
  const [isPending, setIsPending] = useState(false);
  return (
    <div
      className="modal fade"
      id="CreateNewHolidayModal"
      data-bs-keyboard="false"
      tabIndex={-1}
      aria-labelledby="CreateNewHolidayModal"
      aria-hidden="true">
      <div
        className={`modal-dialog modal-dialog-centered ${styles.modalWidth}`}>
        <div className="modal-content">
          <div className={`modal-body ${styles.modalBodyContainer}`}>
            <div className="d-flex flex-column">
              <span className="fs-4 fw-semibold text-black" data-trans="">
                Add A Holidays Group
              </span>
              <div
                className={`d-flex flex-column mt-4 ${styles.inputContainer}`}>
                <small className="myText-gray mb-1" data-trans="">
                  Holidays Group Name
                </small>
                <NameGroupInput
                  inputId={'HolidayNameGroupInput'}
                  placeholder={'Cairo Holidays'}
                />
              </div>
              <div
                className={`d-flex justify-content-end ${styles.btnsContainer}`}>
                <button
                  type="button"
                  className={`btn myPrimary-outline ${styles.confirmBtn} me-2 ms-2`}
                  data-bs-dismiss="modal"
                  aria-label="Close"
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
        </div>
      </div>
    </div>
  );
};

export default CreateNewHolidayModal;
