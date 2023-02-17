import React from 'react';
import styles from '../styles/SettingCard.module.css';
import Link from 'next/link';
import Image from 'next/image';
import LocalizationIcon from '../public/icons/localization-icon.svg';
import ChangePassIcon from '../public/icons/change-password-icon.svg';
import LogoutIcon from '../public/icons/logout-icon.svg';
import ContactSupportIcon from '../public/icons/contact-support-icon.svg';
import EmailIcon from '../public/icons/email-icon.svg';
import changeLang from '../helper/changeLang';
import { useState, useEffect } from 'react';
import { useAppDispatch } from '../app/hooks';
// import { langDir } from '../features/user';
import UserService from '../servcies/UserService';
import getCookie from '../helper/getCookie';
import deleteCookie from '../helper/deleteCookie';
import { useRouter } from 'next/router';

// this card component contains all setting functionalites
const SettingCard = () => {
  const dispatch = useAppDispatch();
  // a state to contorl loaclization btn apperance when language change.
  const [isLangEn, setIsLangEn] = useState(true);
  // declaring Next router to use it.
  const router = useRouter();
  // a useEffect hook to ensure that localization btn apperance is correct.
  useEffect(() => {
    let currentLang: string | null = localStorage.getItem('lang');
    if (currentLang === 'ar') {
      setIsLangEn(false);
    } else {
      setIsLangEn(true);
    }
  });
  // a function to handle localization apperance btn when language is changed.
  const handelLocalizationBtn = () => {
    let currentLang: string | null = localStorage.getItem('lang');
    if (currentLang === 'ar') {
      setIsLangEn(false);
    } else {
      setIsLangEn(true);
    }
  };
  // a funtion to handle toggling settings card when action is clicked.
  const handleToggleSettingCard = () => {
    let settingsCard = document.getElementById(
      'settingsCard'
    ) as HTMLDivElement;
    settingsCard.classList.toggle('d-none');
  };
  // a handle function to handle user logout logic.
  const handleUserLogout = async () => {
    const token: string = getCookie('access_token');
    const refresh_token: string = getCookie('refresch_token');
    const tokenObj: object = {
      token: refresh_token,
    };
    await UserService.userLogout(tokenObj, token).then(response => {
      if (response.status === 205) {
        deleteCookie('access_token', '/', '');
        deleteCookie('refresh_token', '/', '');
      }
    });
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  return (
    <div
      id="settingsCard"
      className={`d-none position-absolute ${styles.cardContainer}`}>
      <div className={`card border-light shadow ${styles.settingsCard}`}>
        <div className="card-body">
          <span className="card-title fw-bold fs-5">Settings</span>
          <ul className={`list-group border-0 p-0 ${styles.settingsList}`}>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <div className="d-flex justify-content-between align-items-center">
                <Image
                  src={LocalizationIcon}
                  alt="change lang icon"
                  width={48}
                  height={48}
                />
                <span
                  className="pe-2 ps-2 fw-semibold"
                  data-trans="changeLanguage">
                  Change language
                </span>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <a
                  type="button"
                  onClick={() => {
                    // changeLang();
                    // handelLocalizationBtn();
                    handleToggleSettingCard();
                    // !isLangEn && dispatch(langDir('ltr'));
                    // isLangEn && dispatch(langDir('rtl'));
                  }}
                  className={`mylightPrimary-bg text-decoration-none p-2 ${styles.localtizationBtn}`}>
                  {!isLangEn && (
                    <>
                      <span
                        className={`me-1 ms-1 pe-2 ps-2 myPrimary-bg text-white ${styles.localtizationLangs}`}>
                        AR
                      </span>
                      <span
                        className={`me-1 ms-1 pe-2 ps-2 text-black ${styles.localtizationLangs}`}>
                        EN
                      </span>
                    </>
                  )}
                  {isLangEn && (
                    <>
                      <span
                        className={`me-1 ms-1 pe-2 ps-2 text-black ${styles.localtizationLangs}`}>
                        AR
                      </span>
                      <span
                        className={`me-1 ms-1 pe-2 ps-2 myPrimary-bg text-white ${styles.localtizationLangs}`}>
                        EN
                      </span>
                    </>
                  )}
                </a>
              </div>
            </li>
            <li className="list-group-item d-flex align-items-center">
              <Image
                src={ChangePassIcon}
                alt="change pass icon"
                width={48}
                height={48}
              />
              <Link href="/tenant-admin/change_password">
                <a
                  onClick={() => handleToggleSettingCard()}
                  className="text-decoration-none text-black">
                  <span
                    className="pe-2 ps-2 fw-semibold"
                    data-trans="changePassword">
                    Change password
                  </span>
                </a>
              </Link>
            </li>
            <li className="list-group-item d-flex align-items-center">
              <Image
                src={LogoutIcon}
                alt="logout icon"
                width={48}
                height={48}
              />
              <a
                type="button"
                className="text-decoration-none text-black"
                onClick={() => handleUserLogout()}>
                <span className="pe-2 ps-2 fw-semibold" data-trans="logout">
                  Logout From This Account
                </span>
              </a>
            </li>
            <li className="list-group-item d-flex align-items-center border-bottom-0">
              <Image
                src={ContactSupportIcon}
                alt="logout icon"
                width={48}
                height={48}
              />
              <a
                type="button"
                className="d-flex flex-column text-decoration-none text-black">
                <span className="pe-2 ps-2 fw-semibold" data-trans="logout">
                  Logout From This Account
                </span>
                <span
                  className="d-flex align-items-center pe-2 ps-2"
                  data-trans="">
                  <Image
                    src={EmailIcon}
                    alt="email icon"
                    width={18}
                    height={18}
                  />
                  <span className="pe-2 ps-2" data-trans="">
                    <span>Email:</span>{' '}
                    <span className="pe-2 ps-2 myInfo-Text">
                      Info@itranks.com
                    </span>
                  </span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SettingCard;
