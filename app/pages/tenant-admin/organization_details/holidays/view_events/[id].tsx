import { ReactElement, useState } from 'react';
import OrgDetailsLayout from '../../../../../layouts/OrgDetailsLayout';
import type { NextPageWithLayout } from '../../../../_app';
import Head from 'next/head';
import ViewEventsLanding from '../../../../../components/ViewEventsLanding';
import CreateNewHolidayEventModal from '../../../../../components/CreateNewHolidayEventModal';

type Props = {};

const dummyData = {};

const ViewEventsHolidayGroup: NextPageWithLayout = (props: Props) => {
  return (
    <>
      <Head>
        <title>TicoSys | View Events</title>
      </Head>
      {Object.entries(dummyData).length === 0 && <ViewEventsLanding />}
      {/* {Object.entries(dummyData.holidays_groups).length !== 0 && (
            <HolidaysGroupsList holidays_groups={dummyData.holidays_groups} />
          )} */}
      <CreateNewHolidayEventModal />
    </>
  );
};

// tenant admin orgnaizations details pages shares an OrgDetails layout which includes navbar and site nav.
ViewEventsHolidayGroup.getLayout = function getLayout(index: ReactElement) {
  return <OrgDetailsLayout childern={index}></OrgDetailsLayout>;
};

export default ViewEventsHolidayGroup;
