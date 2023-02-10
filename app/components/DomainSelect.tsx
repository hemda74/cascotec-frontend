import React from 'react';
import Image from 'next/image';
import GlobalSearchIcon from '../public/icons/global-search.svg';
import EllipseFilledIcon from '../public/icons/ellipse-filled-icon.svg';
import EllipseEmptyIcon from '../public/icons/ellipse-empty-icon.svg';

type Props = {
  [key: string]: any;
};

// This Domain Select component used only in tenants Login page.
const DomainSelect = (props: Props) => {
  const domainsList = props.domainsList;
  return (
    <div className="input-group domain-select-conatiner">
      <ul className="nav-tabs domain-select-list w-100">
        <li className="nav-item dropdown d-flex">
          <label className="input-group-text domain-select-Icon">
            <Image
              src={GlobalSearchIcon}
              alt="global search icon"
              width={20}
              height={20}
            />
          </label>
          <div
            className="nav-link dropdown-toggle show flex-grow-1 domain-select-selected "
            data-bs-toggle="dropdown"
            role="button"
            aria-haspopup="true"
            aria-expanded="true">
            TICOSYS
          </div>
          <div
            className="dropdown-menu position-absolute w-100 domain-select-dropdown p-0"
            data-popper-placement="bottom-start">
            <div
              role="button"
              className="dropdown-item border-bottom pt-3 pb-3 myText-gray domain-dropdown-item">
              <div className="d-flex align-items-center">
                <Image
                  alt="EllipseFilledIcon"
                  src={EllipseFilledIcon}
                  width={24}
                  height={24}
                />
                <span className="pe-2 ps-2">TICOSYS</span>
              </div>
            </div>
            <div
              role="button"
              className="dropdown-item border-bottom pt-3 pb-3 myText-gray domain-dropdown-item">
              <div className="d-flex align-items-center">
                <Image
                  alt="EllipseEmptyIcon"
                  src={EllipseEmptyIcon}
                  width={24}
                  height={24}
                />
                <span className="pe-2 ps-2">LOCAL USER</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default DomainSelect;
