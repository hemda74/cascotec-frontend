import React, { useState } from 'react';
import styles from '../styles/OperHoursWeekday.module.css';

type Props = {
  weekday: string;
  start_time?: any;
  end_time?: any;
  closed?: boolean;
};

// operational day and timing used in operational hours create new page.
const OperHoursWeekday = (props: Props) => {
  const [isOpend, setIsOpend] = useState(false);

  const handlSwitchChange = () => {
    const checkBox = document.getElementById(
      `${props.weekday}SwitchCheck`
    ) as HTMLInputElement;
    if (checkBox.checked) {
      setIsOpend(true);
    } else {
      setIsOpend(false);
    }
  };
  return (
    <div className={`row align-items-center ${styles.mainContainer}`}>
      <div className="col-2">
        <span className={`${styles.weekdayName}`} data-trans={props.weekday}>
          {props.weekday}
        </span>
      </div>
      <div className="col-1">
        <fieldset className={`form-group`}>
          <div className="form-check form-switch">
            <input
              className={`form-check-input ${styles.switchCheckInput}`}
              type="checkbox"
              id={`${props.weekday}SwitchCheck`}
              onChange={() => {
                handlSwitchChange();
              }}
              defaultChecked={props.closed}
            />
          </div>
        </fieldset>
      </div>
      <div className="col-1">
        {(props.closed ? !props.closed : !isOpend) && (
          <span data-trans="">Closed</span>
        )}
        {(props.closed ? props.closed : isOpend) && (
          <span data-trans="">Open</span>
        )}
      </div>
      <div className="col-8">
        <div
          className={`d-flex align-items-center ${styles.inputTimesContainer}`}>
          <input
            type="time"
            className={`pt-2 pb-2 ${styles.inputTime}`}
            id={`${props.weekday}From`}
            defaultValue={props.start_time ? props.start_time : '09:00'}
          />
          <span className={`${styles.toSpan}`} data-trans="">
            To
          </span>
          <input
            type="time"
            className={`pt-2 pb-2 ${styles.inputTime}`}
            id={`${props.weekday}To`}
            defaultValue={props.end_time ? props.end_time : '17:00'}
          />
        </div>
      </div>
    </div>
  );
};

export default OperHoursWeekday;
