import React from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import PagesHeader from '../components/PagesHeader';
import PagesHeader2 from '../components/PagesHeader2';
// decaling an alias for layout childern
// decaling an alias for layout childern
type LayoutProps = {
  childern: React.ReactNode;
};
// Course Layout.
const CourseLayout = ({ childern }:LayoutProps) => {
  return (
    <>
            <NavBar />
            <PagesHeader2/>
            <main>{childern}</main>  
            <Footer />
     
    </>
  );
};

export default CourseLayout;
