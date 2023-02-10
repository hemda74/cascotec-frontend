import React from 'react';
import styles from '../styles/OperHoursList.module.css';
import NewBtn from './NewBtn';
import OperHourCalender from './OperHourCalender';
import Pagination from './Pagination';
import {
  getOperHours,
  organization_details_Selector,
  currentPageAction,
} from '../features/organization_details/opertional_hours';
import { useAppSelector } from '../app/hooks';

type Props = {
  [key: string]: any;
};

type OperHour = {
  [key: string]: any;
};

//Operational Hours List component used in Operational Hours page.
const OperHoursList = (props: Props) => {
  const operational_hours_list = props.operational_hours_list;
  const { previous, next, currentPage } = useAppSelector(
    organization_details_Selector
  );
  return (
    <div className="d-flex flex-column mb-4">
      <div className={`d-flex justify-content-end ${styles.newOpHourBtn}`}>
        <NewBtn
          href="/tenant-admin/organization_details/operational_hours/create_new"
          imageWidth={22}
          imageHeigth={22}
        />
      </div>
      {operational_hours_list.results.map(
        (operHour: OperHour, index: number) => (
          <OperHourCalender key={index} operational_hour={operHour} />
        )
      )}
      <div className="d-flex justify-content-center mt-4">
        <Pagination
          paginationCount={Math.ceil(operational_hours_list.count / 4)}
          pagiBaseUrl={'/tenant-admin/organization_details/operational_hours'}
          action={getOperHours}
          previous={previous}
          next={next}
          currentPage={currentPage}
          currentPageAction={currentPageAction}
        />
      </div>
    </div>
  );
};

export default OperHoursList;
