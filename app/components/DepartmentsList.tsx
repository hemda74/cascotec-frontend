import Head from 'next/head';
import React from 'react';
import AllDepartmentSiteDepartments from './AllDepartmentSiteDepartments';
import NewBtn from './NewBtn';
import SelectBtn from './SelectBtn';
import styles from '../styles/DepartmentsList.module.css';
import DepartmentCard from './DepartmentCard';
import Pagination from './Pagination';

type Props = {
  [key: string]: any;
};

type Department = {
  [key: string]: any;
};

// Departments List used as Landing page for demaprtment page if there are Departments.
const DepartmentsList = (props: Props) => {
  return (
    <>
      <Head>
        <title>TicoSys | Departments</title>
      </Head>
      <div className="d-flex flex-column w-100 h-100 mt-4">
        <div className="card border-light mb-3">
          <div className={`card-body pe-5 ps-5 pb-4`}>
            <AllDepartmentSiteDepartments />
            <div
              className={`d-flex align-items-center justify-content-end ${styles.selectNewBtnsContainer}`}>
              <div className="me-3 ms-3">
                <SelectBtn />
              </div>
              <NewBtn
                href="/tenant-admin/organization_details/departments/create_new"
                imageWidth={24}
                imageHeigth={24}
              />
            </div>
            <div className={`row ${styles.cardsContainer}`}>
              {props.departments.map(
                (department: Department, index: number) => (
                  <div key={index} className={`col-4 ${styles.cardMargin}`}>
                    <DepartmentCard
                      department_id={department.department_id}
                      department_name={department.department_name}
                      department_description={department.department_description}
                    />
                  </div>
                )
              )}
            </div>
            <div className="d-flex justify-content-center">
              <Pagination
                paginationCount={10}
                pagiBaseUrl={'/tenant-admin/organization_details/departments'}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DepartmentsList;
