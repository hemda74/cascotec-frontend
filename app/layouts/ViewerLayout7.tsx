import React from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import PagesHeader from '../components/PagesHeader7';
import WhatsLink from '../components/WhatsLink';
// decaling an alias for layout childern
// decaling an alias for layout childern
type LayoutProps = {
  childern: React.ReactNode;
};
// vieweres Layout.
const ViewerLayout = ({ childern }:LayoutProps) => {
  return (
    <>
            <NavBar />
            <PagesHeader/>
            <WhatsLink/>
            <main>{childern}</main>  
            <Footer />
     
    </>
  );
};

export default ViewerLayout;
