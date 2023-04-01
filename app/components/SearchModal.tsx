import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import styles from '../styles/SearchModal.module.css';
type Props = {};
// Search  Modal component
const SearchModal = (props: Props) => {
  return (
    <div
      className="modal fade"
      id="SearchModal"
      data-bs-keyboard="false"
      tabIndex={-1}
      aria-labelledby="SearchModal"
      aria-hidden="true">
      <div
        className={`modal-dialog modal-fullscreen modal-dialog-centered ${styles.modalWidth}`}>
        <div className="modal-content">
          <div className="modal-body p-0">
            <div className="d-flex justify-content-between  col-sm-12">
            <button type="button" className="btn-close fs-3 p-5" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
              <div className={`d-flex align-items-center justify-content-center ${styles.modalContent}`}>
              <form className="d-flex align-items-center justify-content-center">
                  <button className="btn my-2 my-sm-0" type="submit"><AiOutlineSearch size={33}/></button>
                  <input className={`form-control me-sm-2 ${styles.searchInput}`} type="search" placeholder="Search"/>
                    </form>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
