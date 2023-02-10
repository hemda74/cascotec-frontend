import { ReactElement } from 'react';
import type { NextPageWithLayout } from '../../../_app';
import OrgDetailsLayout from '../../../../layouts/OrgDetailsLayout';
import Head from 'next/head';
import styles from '../../../../styles/OperationalHours.module.css';
import OperHoursList from '../../../../components/OperHoursList';
import HolidaysLanding from '../../../../components/HolidaysLanding';
import CreateNewHolidayModal from '../../../../components/CreateNewHolidayModal';
import HolidaysGroupsList from '../../../../components/HolidaysGroupsList';

type Props = {};

const dummyData = {
  holidays_groups: [
    {
      holidays_group_id: 0,
      holidays_group_name: 'Cairo Holidays',
    },
    {
      holidays_group_id: 1,
      holidays_group_name: 'Paris Holidays',
    },
  ],
};

// tenant admin orgnaization details holidays page.
const holidays: NextPageWithLayout = (props: Props) => {
  return (
    <>
      <Head>
        <title>TicoSys | Holidays</title>
      </Head>
      {Object.entries(dummyData.holidays_groups).length === 0 && (
        <HolidaysLanding />
      )}
      {Object.entries(dummyData.holidays_groups).length !== 0 && (
        <HolidaysGroupsList holidays_groups={dummyData.holidays_groups} />
      )}
      <CreateNewHolidayModal />
    </>
  );
};

// tenant admin orgnaizations details pages shares an OrgDetails layout which includes navbar and site nav.
holidays.getLayout = function getLayout(index: ReactElement) {
  return <OrgDetailsLayout childern={index}></OrgDetailsLayout>;
};

export default holidays;
