import React from 'react';
import styles from '../styles/OperHourCalender.module.css';
import Image from 'next/image';
import OperHourIcon from '../public/icons/operational-hour-icon.svg';
import LocationTickIcon from '../public/icons/location-tick-icon.svg';
import Link from 'next/link';
import EditIcon from '../public/icons/edit-white-icon.svg';

type Props = {
  [key: string]: any;
};

//Operational Hours Calender component usen in OperHour list
const OperHourCalender = (props: Props) => {
  // getting data from parent component as it is stored in redux
  const operational_hour = props.operational_hour;
  // logical meaning of days nums to days shortcutted names.
  const handleDayNumName = (dayNum: number) => {
    if (dayNum === 1) return 'Sat';
    if (dayNum === 2) return 'Sun';
    if (dayNum === 3) return 'Mon';
    if (dayNum === 4) return 'Tue';
    if (dayNum === 5) return 'Wed';
    if (dayNum === 6) return 'Thu';
    if (dayNum === 7) return 'Fri';
  };

  return (
    <div className="card border-0 mt-4">
      <div
        className={`card-header pt-2 pb-2 myPrimary-bg ${styles.headerContainer}`}>
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center">
            {operational_hour.as_default && (
              <div
                className={`d-flex align-items-center justify-content-center ${styles.defaultConatiner}`}>
                <Image
                  alt="location tick icon"
                  src={LocationTickIcon}
                  width={24}
                  height={24}
                />
                <span
                  className="text-white fw-bold fs-6 pe-1 ps-1"
                  data-trans="">
                  Default
                </span>
              </div>
            )}
            <div
              className={`d-flex align-items-center ${
                operational_hour.as_default ? styles.operNameContainer : ''
              }`}>
              <Image
                alt="operational hour icon"
                src={OperHourIcon}
                width={48}
                height={48}
              />
              <span className="text-white ps-3 pe-3 fs-4">
                {operational_hour.name}
              </span>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <Link
              href={`/tenant-admin/organization_details/operational_hours/edit/${operational_hour.id}`}>
              <a
                type="button"
                className="d-flex align-items-center text-decoration-none">
                <Image alt="edit icon" src={EditIcon} width={24} height={24} />
                <span
                  className="text-white fw-bold fs-6 ps-1 pe-1"
                  data-trans="">
                  Edit
                </span>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="d-flex align-items-center ">
          {operational_hour.days.map((timing: Props, i: number) => (
            <div key={i} className={`${styles.keyHolder}`}>
              <div
                className={`d-flex flex-column ${styles.dayAndHoursConatiner}`}>
                <span className="fw-semibold" data-tran="">
                  {handleDayNumName(timing.day)}
                </span>
                {timing.closed && (
                  <>
                    <span className="mt-3">{timing.start_time}</span>
                    <span className="text-end" data-trans="">
                      TO
                    </span>
                    <span>{timing.end_time}</span>
                  </>
                )}
                {!timing.closed && (
                  <>
                    <div className="d-flex flex-column align-items-center mt-3">
                      <span className="fw-semibold">Closed</span>
                    </div>
                  </>
                )}
              </div>
              {operational_hour.days.length - 1 !== i && (
                <hr className={`${styles.verticalLine}`} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OperHourCalender;
