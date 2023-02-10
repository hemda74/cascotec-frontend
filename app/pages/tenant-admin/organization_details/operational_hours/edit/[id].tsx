import { ReactElement, useState, useEffect } from 'react';
import OrgDetailsLayout from '../../../../../layouts/OrgDetailsLayout';
import type { NextPageWithLayout } from '../../../../_app';
import Head from 'next/head';
import OperHoursNameInput from '../../../../../components/OperHoursNameInput';
import OperHoursWeekday from '../../../../../components/OperHoursWeekday';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../../../../styles/OperHourEdit.module.css';
import LocationIcon from '../../../../../public/icons/location-white-icon.svg';
import TrashIcon from '../../../../../public/icons/trash-red-icon.svg';
import TenantAdminService from '../../../../../servcies/TenantAdminService';
import { useRouter } from 'next/router';
import LoadinSpinnerGrow from '../../../../../components/LoadinSpinnerGrow';
import LocationGrayIcon from '../../../../../public/icons/location-gray-icon.svg';

type Props = {};

type Data = {
  [key: string]: any;
};

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

// Operational hour edit page as dynamic Route with {ID}.
const OperHourEdit: NextPageWithLayout = (props: Props) => {
  // declaring some Logical states.
  const [isPending, setIsPending] = useState(false);
  const [isData, setIsData] = useState({});
  const [isFetching, setIsFetching] = useState(true);
  const [isDefault, setisDefault] = useState(false);
  const [isError, setIsError] = useState(false);
  // data object is the holder for presented data
  const data: Data = isData;
  // decalring next router hook and geting id from url params.
  const router = useRouter();
  const { id } = router.query;
  // a logical funtion to set operhour as default
  const handleSetAsDefault = () => {
    const nameInput = document.getElementById(
      'OperHoursNameInput'
    ) as HTMLInputElement;
    const inputsData = {
      name: nameInput.value,
      as_default: true,
    };
    TenantAdminService.setOperHourAsDefault(id, inputsData).then(res => {
      if (res.status === 200) {
        setisDefault(true);
      }
    });
  };
  // a logiccal fun to handle oper hour delete.
  const handleDelete = () => {
    setIsFetching(true);
    TenantAdminService.deleteOperHour(id).then(res => {
      if (res.status === 204) {
        router.push('/tenant-admin/organization_details/operational_hours');
      }
    });
  };
  // a logical funtion to handle oper hour edit.
  const handleSaveChanges = () => {
    setIsPending(true);
    setIsError(false);
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
      as_default: isDefault,
      days: weekdaysData['days'],
    };
    // logical selector to make sure there are at least one checkbox is checked.
    const checkBoxes: any = document.querySelectorAll(
      'input[type="checkbox"]:checked'
    );

    if (nameInput.value.trim() === '' || checkBoxes.length === 0) {
      setIsError(true);
      setIsPending(false);
    } else {
      TenantAdminService.updateOperHour(id, requestBody).then(res => {
        if (res.status === 200) {
          setIsPending(false);
        }
      });
    }
  };
  // effect hook to get oper hour data when component is mounted at first time.
  useEffect(() => {
    const handleGetData = async () => {
      const response = await TenantAdminService.getCurrentOperHour(id).then(
        res => {
          if (res.status === 200) {
            setIsData(res.data);
            setIsFetching(false);
            setisDefault(res.data.as_default);
          }
        }
      );
    };
    handleGetData();
  }, []);

  // showing loader til data is fetched.
  if (isFetching) {
    return (
      <div className="d-flex mt-4">
        <div className="pe-2 ps-2">
          <LoadinSpinnerGrow />
        </div>
        <div className="pe-2 ps-2">
          <LoadinSpinnerGrow />
        </div>
        <div className="pe-2 ps-2">
          <LoadinSpinnerGrow />
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>TicoSys | Edit Operational Hour</title>
      </Head>
      <div className="d-flex flex-column w-100 h-100 mt-4">
        <div className="card border-light mb-3">
          <div className={`card-body pe-5 ps-5 pb-4`}>
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex flex-column">
                <span className="fs-4 fw-semibold" data-trans="">
                  Operational Hours Name
                </span>
                <div className={`${styles.operHourNameInputContainer}`}>
                  <OperHoursNameInput name={data.name} disabled={false} />
                </div>
              </div>
              <div
                className={`d-flex justify-content-center align-items-center`}>
                <a
                  type="button"
                  className={`text-decoration-none me-4 ms-4 d-flex align-items-center`}
                  onClick={() => handleDelete()}>
                  <Image
                    alt="trash icon"
                    src={TrashIcon}
                    width={24}
                    height={24}
                  />
                  <span
                    className="fs-6 fw-semibold myWarning-Text"
                    data-trans="">
                    Delete
                  </span>
                </a>
                <button
                  type="button"
                  className={`btn ${
                    isDefault ? 'myDisabledBtn' : 'myInfo'
                  } d-flex align-items-center ${styles.setAsDeafultBtn}`}
                  disabled={isDefault}
                  onClick={() => handleSetAsDefault()}>
                  {!isDefault && (
                    <Image
                      alt="loaction icon"
                      src={LocationIcon}
                      width={24}
                      height={24}
                    />
                  )}
                  {isDefault && (
                    <Image
                      alt="loaction icon"
                      src={LocationGrayIcon}
                      width={24}
                      height={24}
                    />
                  )}
                  <span className="fw-bold fs-6 me-1 ms-1" data-trans="">
                    Set As Default
                  </span>
                </button>
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
              <OperHoursWeekday
                weekday="Saturday"
                start_time={data.days[0].start_time}
                end_time={data.days[0].end_time}
                closed={data.days[0].closed}
              />
              <OperHoursWeekday
                weekday="Sunday"
                start_time={data.days[1].start_time}
                end_time={data.days[1].end_time}
                closed={data.days[1].closed}
              />
              <OperHoursWeekday
                weekday="Monday"
                start_time={data.days[2].start_time}
                end_time={data.days[2].end_time}
                closed={data.days[2].closed}
              />
              <OperHoursWeekday
                weekday="Tuesday"
                start_time={data.days[3].start_time}
                end_time={data.days[3].end_time}
                closed={data.days[3].closed}
              />
              <OperHoursWeekday
                weekday="Wednesday"
                start_time={data.days[4].start_time}
                end_time={data.days[4].end_time}
                closed={data.days[4].closed}
              />
              <OperHoursWeekday
                weekday="Thursday"
                start_time={data.days[5].start_time}
                end_time={data.days[5].end_time}
                closed={data.days[5].closed}
              />
              <OperHoursWeekday
                weekday="Friday"
                start_time={data.days[6].start_time}
                end_time={data.days[6].end_time}
                closed={data.days[6].closed}
              />
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
              className={`d-flex justify-content-end ${styles.btnsContainer} w-100`}>
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
                onClick={() => handleSaveChanges()}>
                {!isPending && (
                  <span className="fs-5 fw-semibold" data-trans="">
                    Save
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
OperHourEdit.getLayout = function getLayout(index: ReactElement) {
  return <OrgDetailsLayout childern={index}></OrgDetailsLayout>;
};

export default OperHourEdit;
