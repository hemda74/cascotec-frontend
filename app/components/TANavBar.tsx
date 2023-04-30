import React from 'react';
import Link from 'next/link';
import Logo from './Logo';
import ProfileImage from './ProfileImage';
import Image from 'next/image';
import NotificationIcon from '../public/icons/notification.svg';
import SettingIcon from '../public/icons/setting-icon.svg';
import styles from '../styles/TANavBar.module.css';
import SettingCard from './SettingCard';
import { useAppSelector } from '../app/hooks';
import { userDataSelector } from '../features/user';

// this is It ranks Navbar.
const TANavBar = () => {
  // this function is to handle toggling settings card.
  const handleSettingsToggle = () => {
    let settingsCard = document.getElementById(
      'settingsCard'
    ) as HTMLDivElement;
    settingsCard.classList.toggle('d-none');
  };

  const { userData } = useAppSelector(userDataSelector);

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-light bg-white shadow-sm ${styles.NavbarLightBg}`}>
        <div className="row align-items-center w-100">
          <div className="col-2">
            <div className="d-flex align-items-center">
              <Link href={'/tenant-admin'}>
                <a className="navbar-brand d-flex me-3 ms-3">
                  {/* width and height */}
                  {Logo(80.37, 32.75)}
                </a>
              </Link>
            </div>
          </div>
          <div className="col-10">
            <div className="row align-items-center">
              <div className="col-4">
                <div
                  className={`input-group ms-3 me-3 ${styles.searchInputBtn}`}></div>
              </div>
              <div className="col-8">
                <div className="d-flex justify-content-end align-items-center ">
                  <div className={`d-flex justify-content-center ps-3 pe-3 `}>
                    <button className="d-flex btn btn-link">
                      <Image
                        src={NotificationIcon}
                        alt="notification Icon"
                        width={24}
                        height={24}
                      />
                    </button>
                  </div>
                  <div className="ps-3 pe-3 border-start border-end">
                    <button
                      className="d-flex btn btn-link"
                      onClick={() => handleSettingsToggle()}>
                      <Image
                        src={SettingIcon}
                        alt="refresh icon"
                        width={24}
                        height={24}
                      />
                    </button>
                    <SettingCard />
                  </div>
                  <Link href="/itr-admin/profile">
                    <a className="d-flex align-items-center text-decoration-none text-black ps-2 pe-2">
                      <div className="d-flex ps-2 pe-2">
                        {/* (src: string | any, width: number, height: number) */}
                        {ProfileImage('', 42, 42)}
                      </div>
                      <small className="fw-semibold">{`${
                        userData.user.first_name.charAt(0).toUpperCase() +
                        userData.user.first_name.slice(1)
                      } ${
                        userData.user.last_name.charAt(0).toUpperCase() +
                        userData.user.last_name.slice(1)
                      }`}</small>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default TANavBar;
