import React, { useContext } from "react";

import GlobalContext from "../../context/GlobalContext";
import imgH from "../../assets/image/home-5/png/hero2top.jpg";

const Hero = ({ className, ...rest }) => {
  const gContext = useContext(GlobalContext);

  return (
    <div className={className} {...rest}>
      <div className="container">
        <div className="row align-items-center">
          {/* Hero Content */}
          <div className="col-lg-7 col-md-10 col-sm-12 order-2 order-lg-1">
            <div
              className="mt-8 mt-lg-0 mr-xl-13"
              data-aos="fade-right"
              data-aos-delay={500}
            >
              <h1 className="font-size-12 mb-9">Anthony Morlett</h1>
              <p className="font-size-8 mb-lg-13 pr-sm-15 pr-lg-8 pr-xl-15">
               Web Design, Shopify Development, &amp; Front End
              </p>
           
            </div>
          </div>
          {/* End Hero Content */}
          {/* Hero Image */}
          <div className="col-lg-5 col-md-7 col-xs-8 order-1 order-lg-2">
            <div className="pt-lg-3" data-aos="flip-right" data-aos-delay={900}>
              <img className="w-100 am rounded" src={imgH} alt="" />
            </div>
          </div>
          {/* End Hero Image */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
