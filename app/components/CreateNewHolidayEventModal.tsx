import React, { useState } from 'react';
import styles from '../styles/CreateNewHolidayEventModal.module.css';
import DateInput from './DateInput';
import NameGroupInput from './NameGroupInput';
import TimeInput from './TimeInput';

type Props = {};

// create new holiday event Modal component.
const CreateNewHolidayEventModal = (props: Props) => {
  const [isPending, setIsPending] = useState(false);
  return (
    <div
      className="modal fade"
      id="CreateNewHolidayEventModal"
      data-bs-keyboard="false"
      tabIndex={-1}
      aria-labelledby="CreateNewHolidayEventModal"
      aria-hidden="true">
      <div
        className={`modal-dialog modal-dialog-centered ${styles.modalWidth}`}>
        <div className="modal-content">
          <div className={`modal-body ${styles.modalBodyContainer}`}>
            <div className="d-flex flex-column">
              <span className="fs-4 fw-semibold text-black" data-trans="">
                Create A Event
              </span>
              <div
                className={`d-flex flex-column mt-4 ${styles.inputContainer}`}>
                <small className="myText-gray mb-1" data-trans="">
                  Event Name
                </small>
                <NameGroupInput
                  inputId={'HolidayNameGroupInput'}
                  placeholder={'New Year'}
                />
              </div>
              <div className="d-flex align-items-center mt-2 mb-3">
                <div className={`${styles.inputContainer}`}>
                  <span className="text-black mb-1">Start Date</span>
                  <DateInput inputId="startDate" />
                </div>
                <div className="me-4 ms-4">
                  <span className="text-black mb-1">Start Time</span>
                  <TimeInput inputId="startTime" />
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className={`${styles.inputContainer}`}>
                  <span className="text-black mb-1">End Date</span>
                  <DateInput inputId="endDate" />
                </div>
                <div className="me-4 ms-4">
                  <span className="text-black mb-1">End Time</span>
                  <TimeInput inputId="endTime" />
                </div>
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

export default CreateNewHolidayEventModal;
