import React from 'react';
import Image from 'next/image';
import BrandLogo from '../public/logo.svg';

// the logo component takes Brand logo, width and heiht as params.
const Logo = (width: number, height: number) => {
  return <Image src={BrandLogo} alt="Logo" width={width} height={height} />;
};

export default Logo;
