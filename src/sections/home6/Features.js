import React from "react";

import imgR from "../../assets/image/home-5/png/tyltHero.jpg";

const Features = ({ className, ...rest }) => {
  return (
    <div className={className} {...rest}>
      <div className="pt-15 pt-md-18 pt-lg-26 pb-15 pb-md-18 pb-lg-26 bg-default-6">
        <div className="container">
     
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-6 col-lg-7 col-md-8 order-2 order-lg-1">
              <div className="">
                {/* Services */}
                <div className="row justify-content-center">
                  <div className="col-lg-12 col-md-12 col-xs-12">

                  <h2 class="font-size-11 mb-9 pr-xs-23 pr-sm-8 pr-md-18 pr-lg-18 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">ICF International</h2>
        While contracted with ICF International I helped build a custom Shopify plus E-commerce app. The development was required to be implemented to a custom Cart and ordering process within shopify. I helped set up a custom webhook that made a custom form that only people from the state of Mississippi could buy products because the client of ICF required custom Json to pull data to verify addresses for free products within the state of Mississippi. I also did some graphic design and 
        UX persona’s to make the website more accessible to customers.
                  </div>
            <div class="mt-13"><a class="btn btn-dark-green btn-3 rounded-5" href="/#">Request Free Access</a></div>
         
                </div>
                {/* End Services */}
              </div>
            </div>
            <div className="col-xl-6 col-lg-5 col-md-8 order-1 order-lg-2">
              <div
                className="mb-10 mb-lg-0 mt-lg-16 mr-lg-n20 mr-xl-n25"
                data-aos="fade-left"
                data-aos-delay={500}
              >
                <img className="w-100" src={imgR} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
