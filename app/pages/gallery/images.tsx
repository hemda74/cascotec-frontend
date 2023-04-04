import React from 'react'
import GalleryImages from '../../components/GalleryImages'
import Head from 'next/head'
import styles from '../../styles/Main.module.css'
const images = () => {
  return (
    <>
    <Head><title>CASCO | Images Gallery</title></Head>
    <main className={`${styles.bodyContainer}`}>
    <GalleryImages/>
    </main>
    </>
  )
}

export default images