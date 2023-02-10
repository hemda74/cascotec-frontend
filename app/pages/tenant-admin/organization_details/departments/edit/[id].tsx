import { ReactElement, useState } from 'react';
import OrgDetailsLayout from '../../../../../layouts/OrgDetailsLayout';
import type { NextPageWithLayout } from '../../../../_app';
import Head from 'next/head';
import DepartmentNameInput from '../../../../../components/DepartmentNameInput';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../../../../styles/DepartmentEdit.module.css';
import TrashIcon from '../../../../../public/icons/trash-red-icon.svg';
import WarningIcon from '../../../../../public/icons/warning-icon.svg';
import DeleteDepartmentModal from '../../../../../components/DeleteDepartmentModal';

type Props = {};
type Site = {
  [key: string]: any;
};

const dummyData = {
  department: {
    departmen_name: 'Administration',
    department_description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore rerum iusto consectetur obcaecati iure quae tempora qui veritatis delectus omnis saepe illum ad odio modi, laboriosam ab dolorem natus aspernatur.',
    related_sites: [
      {
        site_name: 'Cairo site',
      },
      {
        site_name: 'Suddan site',
      },
      {
        site_name: 'Jaddah site',
      },
      {
        site_name: 'Alex site',
      },
      {
        site_name: 'Paris site',
      },
    ],
  },
};

// department edit page takes [id] as a dynamic route.
const DepartmentEdit: NextPageWithLayout = (props: Props) => {
  const [isPending, setIsPending] = useState(false);
  const [isError, setIsError] = useState(false);
  return (
    <>
      <Head>
        <title>TicoSys | Department Edit</title>
      </Head>
      <div className="d-flex flex-column w-100 h-100 mt-4">
        <div className="card border-light mb-3">
          <div className={`card-body pe-5 ps-5 pb-4`}>
            <div className="d-flex flex-column">
              <div className="d-flex justify-content-between">
                <span className={`fs-3 myPrimary-Text`} data-trans="">
                  Department Information
                </span>
                <div
                  className={`d-flex justify-content-center align-items-center`}>
                  <a
                    data-bs-toggle="modal"
                    data-bs-target="#DeleteDepartmentModal"
                    type="button"
                    className={`text-decoration-none me-4 ms-4 d-flex align-items-center`}>
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
                </div>
              </div>
              <hr className={`${styles.mainHeadingUnderLine} m-0`} />
              <div className="d-flex align-items-center">
                <div className={`mt-4 ${styles.operHourNameInputContainer}`}>
                  <small className="myText-gray" data-trans="">
                    Department Name*
                  </small>
                  <div className="d-flex w-100">
                    <DepartmentNameInput
                      departmen_name={dummyData.department.departmen_name}
                    />
                  </div>
                </div>
                {isError && (
                  <div className="d-flex align-items-center mt-5 me-4 ms-4">
                    <Image
                      src={WarningIcon}
                      alt="warning icon"
                      width={18}
                      height={18}
                    />
                    <span className="myDanger-Text ms-1 me-1" data-trans="">
                      Another Department Has The Same Name
                    </span>
                  </div>
                )}
              </div>
            </div>
            <div className={`${styles.operHourNameInputContainer} mt-4`}>
              <small className="myText-gray" data-trans="">
                Description
              </small>
              <textarea
                name="department description"
                id="departmentDescriptionInput"
                className={`w-100 bg-white text-black ${styles.textArea}`}
                rows={3}
                defaultValue={
                  dummyData.department.department_description
                }></textarea>
            </div>
            <div className="d-flex flex-column mt-4">
              <span className="fs-4 fw-semibold mb-2" data-trans="">
                Related Sites
              </span>
              <div
                className={`d-flex w-100 ${styles.relatedSitesMainContainer}`}>
                <div className="row w-100">
                  {dummyData.department.related_sites.map(
                    (site: Site, index: number) => (
                      <div key={index} className="col-4 mt-2 mb-2">
                        <div
                          className={`d-flex align-items-center rounded w-100 ${styles.relatedSitesContainer} p-1`}>
                          <span className="pe-3 ps-3 fs-6 text-black">
                            {site.site_name}
                          </span>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
            <div className={`d-flex justify-content-end mt-5`}>
              <Link href="/tenant-admin/organization_details/departments">
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
                disabled={isPending}>
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
      <DeleteDepartmentModal />
    </>
  );
};

// tenant admin orgnaizations details pages shares an OrgDetails layout which includes navbar and site nav.
DepartmentEdit.getLayout = function getLayout(index: ReactElement) {
  return <OrgDetailsLayout childern={index}></OrgDetailsLayout>;
};

export default DepartmentEdit;
