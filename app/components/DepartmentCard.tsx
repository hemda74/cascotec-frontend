import React from 'react';
import styles from '../styles/DepartmentCard.module.css';
import Link from 'next/link';

type Props = {
  department_id: number;
  department_name: string;
  department_description: string;
};

// Department Card component.
const DepartmentCard = (props: Props) => {
  return (
    <Link
      href={`/tenant-admin/organization_details/departments/edit/${props.department_id}`}>
      <a type="button" className="text-decoration-none">
        <div
          className={`d-flex align-items-center justify-content-center ${styles.cardContainer}`}>
          <div className="d-flex flex-column text-center p-5">
            <span className="fs-5 fw-semibold text-black">
              {props.department_name}
            </span>
            <small className={`mt-4 ${styles.descrpitionText}`}>
              {props.department_description}
            </small>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default DepartmentCard;
