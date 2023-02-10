import { ReactElement, useState } from 'react';
import OrgDetailsLayout from '../../../../layouts/OrgDetailsLayout';
import type { NextPageWithLayout } from '../../../_app';
import Head from 'next/head';
import DepartmentsLanding from '../../../../components/DepartmentsLanding';
import DepartmentsList from '../../../../components/DepartmentsList';

type Props = {};

const dummyData = {
  departments: [
    {
      department_id: 0,
      department_name: 'Administration',
      department_description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto similique ea, nulla eligendi nihil dolorum tempore odio beatae numquam facilis accusantium minus recusandae repudiandae saepe quam ducimus. Laboriosam, labore voluptatem!',
    },
    {
      department_id: 1,
      department_name: 'Design',
      department_description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto similique ea, nulla eligendi nihil dolorum tempore odio beatae numquam facilis accusantium minus recusandae repudiandae saepe quam ducimus. Laboriosam, labore voluptatem!',
    },
    {
      department_id: 2,
      department_name: 'Engineering',
      department_description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto similique ea, nulla eligendi nihil dolorum tempore odio beatae numquam facilis accusantium minus recusandae repudiandae saepe quam ducimus. Laboriosam, labore voluptatem!',
    },
    {
      department_id: 3,
      department_name: 'Facilities',
      department_description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto similique ea, nulla eligendi nihil dolorum tempore odio beatae numquam facilis accusantium minus recusandae repudiandae saepe quam ducimus. Laboriosam, labore voluptatem!',
    },
    {
      department_id: 4,
      department_name: 'Finance',
      department_description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto similique ea, nulla eligendi nihil dolorum tempore odio beatae numquam facilis accusantium minus recusandae repudiandae saepe quam ducimus. Laboriosam, labore voluptatem!',
    },
    {
      department_id: 5,
      department_name: 'House Keeping',
      department_description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto similique ea, nulla eligendi nihil dolorum tempore odio beatae numquam facilis accusantium minus recusandae repudiandae saepe quam ducimus. Laboriosam, labore voluptatem!',
    },
  ],
};

// tenant admin orgnaization details departmens page.
const departments: NextPageWithLayout = (props: Props) => {
  return (
    <>
      <Head>
        <title>TicoSys | Operational Hours</title>
      </Head>
      {Object.entries(dummyData.departments).length === 0 && (
        <DepartmentsLanding />
      )}
      {Object.entries(dummyData.departments).length !== 0 && (
        <DepartmentsList departments={dummyData.departments} />
      )}
    </>
  );
};

// tenant admin orgnaizations details pages shares an OrgDetails layout which includes navbar and site nav.
departments.getLayout = function getLayout(index: ReactElement) {
  return <OrgDetailsLayout childern={index}></OrgDetailsLayout>;
};

export default departments;
