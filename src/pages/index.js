import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/home5/Hero";
import Content1 from "../sections/home5/Content1";
import Content2 from "../sections/home5/Content2";
import Content3 from "../sections/home5/Content3";
import Testimonial from "../sections/home5/Testimonial";
import Content4 from "../sections/home5/Content4";
import Content5 from "../sections/home5/Content5";
import Content6 from "../sections/home5/Content6";

const IndexPage = () => {
  return (
    <>
      <PageWrapper
        themeConfig={{
          headerClassName: "site-header--menu-right",
          headerFluid: false,
          footerStyle: "style5",
        }}
      >
      <Hero id="Home" className="position-relative pt-22 pt-lg-31 pb-13 pb-lg-25" />
      
        <Testimonial  id="Clients" className="bg-default-5 pt-13 pt-md-18 pt-lg-24 pb-9 pb-md-13 pb-lg-28" />
            <div id="Portfolio"> </div>
        <Content3  id="Thomas" className="bg-dark-cloud pt-15 pt-md-19 pt-lg-33 pt-xl-0 pb-15 pb-md-19 pb-lg-31 pb-xl-0 position-relative overflow-hidden" />
        <Content1  id="Tylt" className="bg-default-5 pt-13 pt-md-18 pt-lg-24 pb-9 pb-md-13 pb-lg-28" />
        <Content2  id="Agent" className="bg-dark-cloud pt-15 pt-md-19 pt-lg-33 pt-xl-0 pb-15 pb-md-19 pb-lg-31 pb-xl-0 position-relative overflow-hidden" />
         <Content4   id="PCA" className="bg-default-5 pt-13 pt-md-18 pt-lg-24 pb-9 pb-md-13 pb-lg-28" />
         <Content5  id="Zoggs"  className="bg-dark-cloud pt-15 pt-md-19 pt-lg-33 pt-xl-0 pb-15 pb-md-19 pb-lg-31 pb-xl-0 position-relative overflow-hidden" />
        <Content6  id="ICF" className="bg-default-5 pt-13 pt-md-18 pt-lg-24 pb-9 pb-md-13 pb-lg-28" />
      </PageWrapper>
    </>
  );
};
export default IndexPage;



