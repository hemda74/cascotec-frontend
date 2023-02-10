import React from 'react';
import TANavBar from '../components/TANavBar';
import styles from '../styles/OrgDetailsLayout.module.css';
import OrgDetailsSiteNav from '../components/OrgDetailsSiteNav';

// decaling an alias for layout childern
type LayoutProps = {
  childern: React.ReactNode;
};

//  Orgnaization details Layout.
const OrgDetailsLayout = ({ childern }: LayoutProps) => {
  return (
    <>
      <div className="container-fluid d-flex flex-column w-100 min-vh-100 p-0 myBody-bg">
        <TANavBar />
        <div
          className={`row w-100 h-100 flex-grow-1 align-self-center ${styles.mainContainer} pe-3 ps-3`}>
          <div className="col-12 pe-2 ps-2">
            <OrgDetailsSiteNav />
            <main>{childern}</main>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrgDetailsLayout;
