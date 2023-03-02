import React from 'react';
import Image from 'next/image';
import logo from '../public/logo.png';

// the logo component takes Brand logo, width and heiht as params.
const Logo = (width: number, height: number) => {
  return <Image src={logo} alt="Logo" width={width} height={height} />;
};

export default Logo;
