import React from 'react'
import GalleryImages from '../../components/GalleryImages'
import Head from 'next/head'
const images = () => {
  return (
    <>
    <Head><title>CASCO | Images Gallery</title></Head>
    <GalleryImages/>
    </>
  )
}

export default images