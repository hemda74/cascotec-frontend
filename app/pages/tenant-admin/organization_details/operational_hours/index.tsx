import { ReactElement, useEffect, useState } from 'react';
import type { NextPageWithLayout } from '../../../_app';
import OrgDetailsLayout from '../../../../layouts/OrgDetailsLayout';
import Head from 'next/head';
// import styles from '../../../../styles/OperationalHours.module.css';
import OperHoursLanding from '../../../../components/OperHoursLanding';
import OperHoursList from '../../../../components/OperHoursList';
import LoadinSpinnerGrow from '../../../../components/LoadinSpinnerGrow';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import {
  organization_details_Selector,
  getOperHours,
} from '../../../../features/organization_details/opertional_hours';

type Props = {};

// tenant admin orgnaization details operational hours page.
const operational_hours: NextPageWithLayout = (props: Props) => {
  // selecteing data from redux store.
  const { OperHours, pending, error } = useAppSelector(
    organization_details_Selector
  );
  // declaring dispatcher in a variable.
  const dispatch = useAppDispatch();
  // on fisrt render call the effect hook to get Oper hour data and save it in the store.
  useEffect(() => {
    dispatch(
      getOperHours(
        `/operational_hours/operational-hours/all/days/?page=1&page_size=4`
      )
    );
  }, []);

  // showing loading till the data is fetched
  if (pending) {
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
        <title>TicoSys | Operational Hours</title>
      </Head>
      {!pending && !OperHours && <OperHoursLanding />}
      {!pending && OperHours && (
        <OperHoursList operational_hours_list={OperHours} />
      )}
    </>
  );
};

// tenant admin orgnaizations details pages shares an OrgDetails layout which includes navbar and site nav.
operational_hours.getLayout = function getLayout(index: ReactElement) {
  return <OrgDetailsLayout childern={index}></OrgDetailsLayout>;
};

export default operational_hours;
