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
  // const dispatch = useAppDispatch();
  // // a state to contorl loaclization btn apperance when language change.
  // const [isLangEn, setIsLangEn] = useState(true);
  // // declaring Next router to use it.
  // const router = useRouter();
  // // a useEffect hook to ensure that localization btn apperance is correct.
  // useEffect(() => {
  //   let currentLang: string | null = localStorage.getItem('lang');
  //   if (currentLang === 'ar') {
  //     setIsLangEn(false);
  //   } else {
  //     setIsLangEn(true);
  //   }
  // });
  // // a function to handle localization apperance btn when language is changed.
  // const handelLocalizationBtn = () => {
  //   let currentLang: string | null = localStorage.getItem('lang');
  //   if (currentLang === 'ar') {
  //     setIsLangEn(false);
  //   } else {
  //     setIsLangEn(true);
  //   }
  // };
  // // a funtion to handle toggling settings card when action is clicked.
  // const handleToggleSettingCard = () => {
  //   let settingsCard = document.getElementById(
  //     'settingsCard'
  //   ) as HTMLDivElement;
  //   settingsCard.classList.toggle('d-none');
  // };
  // // a handle function to handle user logout logic.
  // const handleUserLogout = async () => {
  //   const token: string = getCookie('access_token');
  //   const refresh_token: string = getCookie('refresch_token');
  //   const tokenObj: object = {
  //     token: refresh_token,
  //   };
  //   await UserService.userLogout(tokenObj, token).then(response => {
  //     if (response.status === 205) {
  //       deleteCookie('access_token', '/', '');
  //       deleteCookie('refresh_token', '/', '');
  //     }
  //   });
  //   setTimeout(() => {
  //     window.location.reload();
  //   }, 100);
  // };

  return (
    // 
    <></>
  );
};

export default SettingCard;
