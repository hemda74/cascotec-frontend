import { ReactElement,useState } from 'react';
import type { NextPageWithLayout } from '../../../_app';
import OrgDetailsLayout from '../../../../layouts/OrgDetailsLayout';
import CreateNewSiteComp from '../../../../components/CreateNewSiteComp';

type Props = {};
const dummyData={
timezones:["	(GMT+00:00)","(GMT-12:00)","(GMT-11:00)","(GMT-10:00)","(GMT-9:30)","(GMT-9:00)","(GMT-8:00)","(GMT-7:00)",
"(GMT-6:00)","(GMT-5:00)","(GMT-4:30)","(GMT-4:00)","(GMT-3:30)","(GMT-3:00)","(GMT-2:00)","(GMT-1:00)","(GMT+1:00)",
"(GMT+2:00)","(GMT+3:00)","(GMT+3:30)","(GMT4:00)","(GMT+4:30)","(GMT+5:00)","(GMT+5:30)","(GMT+5:45)","(GMT+6:00)",
"(GMT+7:00)","(GMT+8:00)","(GMT+8:30)","(GMT+9:00)","(GMT+9:30)","(GMT+10:00)","(GMT+10:30)","(GMT+11:00)","(GMT+12:00)",
"(GMT+12:45)","(GMT+13:00)","(GMT+14:00)"]}


const create_new_site:NextPageWithLayout = ( props: Props) => {
  return (
    <>
    <CreateNewSiteComp timezones={dummyData.timezones}/>
    </>
  );
};

// tenant admin orgnaizations details pages shares an OrgDetails layout which includes navbar and site nav.
create_new_site.getLayout = function getLayout(index: ReactElement) {
  return <OrgDetailsLayout childern={index}></OrgDetailsLayout>;
};

export default create_new_site;
