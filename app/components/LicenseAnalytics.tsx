import React from 'react';
import styles from '../styles/LicenseAnalytics.module.css';

type Props = {
  [key: string]: any;
};

// license analytics box component used in licnese info page.
const LicenseAnalytics = (props: Props) => {
  // a handle function to calculate consumed percentage.
  const handleConsumedPercent = (currentNum: number, totalNum: number) => {
    return (currentNum / totalNum) * 100;
  };
  return (
    <div className={`card border-0 ${styles.cardConatiner}`}>
      <div
        className={`card-body mylightPrimary-bg ${styles.cardBodyContainer}`}>
        <div className={`d-felx ${styles.headerContainr}`}>
          <span className="fw-semibold myPrimary-Text" data-trans="">
            License Analytics
          </span>
        </div>
        <div
          className={`d-felx flex-column w-75 ${styles.progressbarContainer}`}>
          <div className="d-flex justify-content-between">
            <small>
              {props.current_num_of_users}/{props.total_num_of_users}{' '}
              <span>Users</span>
            </small>
            <small>
              <span className="fw-semibold">
                {handleConsumedPercent(
                  props.current_num_of_users,
                  props.total_num_of_users
                )}
                %
              </span>{' '}
              <span className="fw-semibold myText-gray">Consumed</span>
            </small>
          </div>
          <div className="d-flex">
            <div className="progress w-100 bg-white">
              <div
                className="progress-bar myPrimary-bg"
                role="progressbar"
                aria-valuenow={handleConsumedPercent(
                  props.current_num_of_users,
                  props.total_num_of_users
                )}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{
                  width: handleConsumedPercent(
                    props.current_num_of_users,
                    props.total_num_of_users
                  ),
                }}></div>
            </div>
          </div>
        </div>
        <div
          className={`d-felx flex-column w-75 ${styles.progressbarContainer}`}>
          <div className="d-flex justify-content-between">
            <small>
              {props.current_num_of_technicians}/
              {props.total_num_of_technicians} <span>Users</span>
            </small>
            <small>
              <span className="fw-semibold">
                {handleConsumedPercent(
                  props.current_num_of_technicians,
                  props.total_num_of_technicians
                )}
                %
              </span>{' '}
              <span className="fw-semibold myText-gray">Consumed</span>
            </small>
          </div>
          <div className="d-flex">
            <div className="progress w-100 bg-white">
              <div
                className="progress-bar myPrimary-bg"
                role="progressbar"
                aria-valuenow={handleConsumedPercent(
                  props.current_num_of_technicians,
                  props.total_num_of_technicians
                )}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{
                  width: handleConsumedPercent(
                    props.current_num_of_technicians,
                    props.total_num_of_technicians
                  ),
                }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LicenseAnalytics;
