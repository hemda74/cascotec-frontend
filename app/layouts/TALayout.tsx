import React from 'react';
import TANavBar from '../components/TANavBar';
import styles from '../styles/TALayout.module.css';
import { useRouter } from 'next/router';

// decaling an alias for layout childern
type LayoutProps = {
  childern: React.ReactNode;
};
// this Tenant admin layout
const TALayout = ({ childern }: LayoutProps) => {
  const router = useRouter();
  return (
    <>
      <div className="container-fluid d-flex flex-column w-100 min-vh-100 p-0 myBody-bg">
        <TANavBar />
        <div
          className={`row w-100 h-100 flex-grow-1 align-self-center ${
            router.pathname === '/tenant-admin' ? '' : styles.mainContainer
          }`}>
          <div className="col-12">
            <main>{childern}</main>
          </div>
        </div>
      </div>
    </>
  );
};

export default TALayout;
