import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/NavBar.module.css';
import Logo from '../components/Logo';
import logo from '../public/logo.png'
import Link from 'next/link';
import Image from 'next/image';
import InputEmail from '../components/InputEmail';
import InputPassword from '../components/InputPassword';
import DomainSelect from '../components/DomainSelect';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { userLogin, userDataSelector } from '../features/user';
import LocalizationBtn from '../components/LocalizationBtn';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import deleteCookie from '../helper/deleteCookie';
import getCookie from '../helper/getCookie';
import TANavBar from '../components/TANavBar';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import AboutLand from '../components/AboutLand';
import Services from '../components/ServicesComp';
import Footer from '../components/Footer';
import About from '../components/AboutPage1';

const Login: NextPage = () => {
  // binding useDispatch to dispatch.
  const dispatch = useAppDispatch();
  // graping user data from the store.
  const { userData, pending, error } = useAppSelector(userDataSelector);

  // declaring next/router in variable to use it in the component.
  const router = useRouter();

  // a function to grap user email an password and pass it to userlogin action.
  const handleUserInputs = () => {
    let userEmail = document.getElementById('emailInput') as HTMLInputElement;
    let userPassword = document.getElementById(
      'passwordInput'
    ) as HTMLInputElement;
    let userInputs: object = {
      email: userEmail.value,
      password: userPassword.value,
    };
    return userInputs;
  };

  // a handle function to redirect user based on his role.
  const handleUserRedirect = () => {
    router.push('/tenant-admin');
  };
  // a UseEffect hook watchs when the userData state changes it invokes handleUserRedirect func.
  useEffect(() => {
    // checking if userData object is not empty.
    // if (Object.entries(userData).length !== 0) {
    // handleUserRedirect();
    // }
  }, [userData]);

  return (
    <>
      <Head>
        <title>CASCO</title>
   </Head>
   <NavBar/>
   <Hero/>
   <AboutLand/>
   <Services/>
   <Footer/>
   </>
  );
};

export default Login;
