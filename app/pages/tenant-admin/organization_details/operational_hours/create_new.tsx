import { ReactElement, useState } from 'react';
import type { NextPageWithLayout } from '../../../_app';
import OrgDetailsLayout from '../../../../layouts/OrgDetailsLayout';
import Head from 'next/head';
import styles from '../../../../styles/OperHoursCreateNew.module.css';
import OperHoursNameInput from '../../../../components/OperHoursNameInput';
import OperHoursWeekday from '../../../../components/OperHoursWeekday';
import Link from 'next/link';
import TenantAdminService from '../../../../servcies/TenantAdminService';

type Props = {};

type WeekdaysData = {
  [key: string]: {
    [key: string]: any;
  };
};

const weekdays = [
  'Saturday',
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
];

// create new Operational hours use in tenant admin organtization details operational hours page.
const create_new: NextPageWithLayout = (props: Props) => {
  // declaring some Logical states.
  const [isPending, setIsPending] = useState(false);
  const [isError, setIsError] = useState(false);
  // a logical funtion to handle oper hour creation.
  const handleCreateBtn = () => {
    setIsError(false);
    setIsPending(true);
    let weekdaysData: WeekdaysData = {
      days: [],
    };
    weekdays.forEach((weekday: string, index: number) => {
      const closed = document.getElementById(
        `${weekday}SwitchCheck`
      ) as HTMLInputElement;
      const from = document.getElementById(
        `${weekday}From`
      ) as HTMLInputElement;
      const to = document.getElementById(`${weekday}To`) as HTMLInputElement;
      const elem = {
        day: (index + 1).toString(),
        closed: closed.checked,
        start_time: from.value,
        end_time: to.value,
      };
      weekdaysData['days'].push(elem);
    });
    const nameInput = document.getElementById(
      'OperHoursNameInput'
    ) as HTMLInputElement;

    const requestBody = {
      name: nameInput.value,
      days: weekdaysData['days'],
    };
    // logical selector to make sure there are at least one checkbox is checked.
    const checkBoxes: any = document.querySelectorAll(
      'input[type="checkbox"]:checked'
    );

    if (nameInput.value.trim() === '' || checkBoxes.length === 0) {
      setIsError(true);
    } else {
      TenantAdminService.createOperHour(requestBody).then(res => {
        if (res.status === 200) {
          setIsPending(false);
        }
      });
    }
  };

  return (
    <>
      <Head>
        <title>TicoSys | Create New</title>
      </Head>
      <div className="d-flex flex-column w-100 h-100 mt-4">
        <div className="card border-light mb-3">
          <div className={`card-body pe-5 ps-5 pb-4`}>
            <div className="d-flex flex-column">
              <span className="fs-4 fw-semibold" data-trans="">
                Operational Hours Name
              </span>
              <div className={`${styles.operHourNameInputContainer}`}>
                <OperHoursNameInput disabled={false} />
              </div>
            </div>
            <div
              className={`d-flex flex-column ${styles.setOperHoursContainer}`}>
              <span className="fs-3" data-trans="">
                Set Operational Hours
              </span>
              <span className="fs-5 myText-gray" data-trans="">
                Configure The Operational Hours For Each Day Of The Week
              </span>
            </div>
            <div className={`d-flex flex-column`}>
              {weekdays.map((weekday: string, index: number) => (
                <OperHoursWeekday key={index} weekday={weekday} />
              ))}
            </div>
            {isError && (
              <div className="d-flex justify-content-center mt-2">
                <span className="myWarning-Text">
                  Please set an opertional hours name and at least one day
                  checked!
                </span>
              </div>
            )}
            <div
              className={`d-flex justify-content-end ${styles.btnsContainer}`}>
              <Link href="/tenant-admin/organization_details/operational_hours">
                <a
                  type="button"
                  className={`btn myPrimary-outline ${styles.confirmBtn} me-2 ms-2`}>
                  <span className="fs-5 fw-semibold" data-trans="cancel">
                    Cancel
                  </span>
                </a>
              </Link>
              <button
                type="button"
                className={`btn myPrimary ${styles.confirmBtn}`}
                disabled={isPending}
                onClick={() => handleCreateBtn()}>
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
    </>
  );
};

// tenant admin orgnaizations details pages shares an OrgDetails layout which includes navbar and site nav.
create_new.getLayout = function getLayout(index: ReactElement) {
  return <OrgDetailsLayout childern={index}></OrgDetailsLayout>;
};

export default create_new;
