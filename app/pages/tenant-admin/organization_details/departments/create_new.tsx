import { ReactElement, useState } from 'react';
import type { NextPageWithLayout } from '../../../_app';
import OrgDetailsLayout from '../../../../layouts/OrgDetailsLayout';
import Head from 'next/head';
import styles from '../../../../styles/DepartmentsCreteNew.module.css';
import Link from 'next/link';
import DepartmentNameInput from '../../../../components/DepartmentNameInput';
import WarningIcon from '../../../../public/icons/warning-icon.svg';
import Image from 'next/image';

type Props = {};

// create new department page.
const create_new: NextPageWithLayout = (props: Props) => {
  const [isPending, setIsPending] = useState(false);
  const [isError, setIsError] = useState(false);
  return (
    <>
      <Head>
        <title>TicoSys | Create New</title>
      </Head>
      <div className="d-flex flex-column w-100 h-100 mt-4">
        <div className="card border-light mb-3">
          <div className={`card-body pe-5 ps-5 pb-4`}>
            <div className="d-flex flex-column">
              <span className={`fs-3 myPrimary-Text`} data-trans="">
                Department Information
              </span>
              <hr className={`${styles.mainHeadingUnderLine} m-0`} />
              <div className="d-flex align-items-center">
                <div className={`mt-4 ${styles.operHourNameInputContainer}`}>
                  <small className="myText-gray" data-trans="">
                    Department Name*
                  </small>
                  <div className="d-flex w-100">
                    <DepartmentNameInput />
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
                rows={3}></textarea>
            </div>
            <div
              className={`d-flex justify-content-end ${styles.btnsContainer}`}>
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
    </>
  );
};

// tenant admin orgnaizations details pages shares an OrgDetails layout which includes navbar and site nav.
create_new.getLayout = function getLayout(index: ReactElement) {
  return <OrgDetailsLayout childern={index}></OrgDetailsLayout>;
};

export default create_new;
