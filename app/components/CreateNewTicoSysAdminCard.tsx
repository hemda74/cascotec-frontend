import React from 'react';
import Image from 'next/image';
import AddCircleIcon from '../public/icons/add-circle-icon.svg';
import Link from 'next/link';
import styles from '../styles/CreateNewTicoSysAdminCard.module.css';

// this a link whid redirect to create new ticosys admin page.
const CreateNewTicoSysAdminCard = () => {
  return (
    <>
      <Link href="/itr-admin/create_new_ticosys_admin">
        <a className="text-decoration-none">
          <div
            className={`card border-light shadow mb-3 ${styles.myCustomCard}`}>
            <div className="card-body p-3">
              <div className="d-flex flex-column">
                <div className="d-flex justify-content-center pt-4">
                  <Image
                    alt="AddCircleIcon"
                    src={AddCircleIcon}
                    width={70}
                    height={70}
                  />
                </div>
                <div className="d-flex justify-content-center pt-3">
                  <h5
                    className="fw-semibold text-black"
                    data-trans="newTicoSysAdmin">
                    New TicoSys Admin
                  </h5>
                </div>
                <div className="d-flex justify-content-center text-center pt-2 pb-4">
                  <small
                    className="myText-gray"
                    data-trans="createANewAdminInTicoSys">
                    Create A New Admin In TicoSys
                  </small>
                </div>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </>
  );
};

export default CreateNewTicoSysAdminCard;
