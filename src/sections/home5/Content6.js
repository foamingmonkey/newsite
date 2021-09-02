import React from "react";
import { Link } from "gatsby";

import imgC from "../../assets/image/home-5/png/icfHeroic.jpg";

const Content6 = ({ className, ...rest }) => {
  return (
    <div className={className} {...rest}>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-9 order-2 order-lg-1">
            <div
              className="mt-13 mt-lg-0 pr pr-lg-0"
              data-aos="fade-right"
              data-aos-delay={500}
            >
            
              <h2 className="font-size-10 mb-8 letter-spacing-n83 pr-sm-10 pr-md-0 text-dark-cloud">
            ICF International
              </h2>
                <h6 className="font-size-3 text-dodger-blue-1 text-uppercase mb-8 letter-spacing-5">
               UX/UI and Shopify Front End
              </h6>
              <p className="font-size-7 mb-0 pr-sm-16 pr-md-15 pr-lg-19 pb-4 pr-xl-20 text-stone">
                While contracted with ICF International I helped build a custom Shopify plus E-commerce app. The development was required to be implemented to a custom Cart and ordering process within shopify. I helped set up a custom webhook that made a custom 
                form that only people from the state of Mississippi 
                could buy products because the client of ICF 
                required custom Json to pull data to verify addresses
                 for free products within the state of Mississippi.
                 
              </p>
                            <p className="font-size-7 mb-0 pr-sm-16 pr-md-15 pr-lg-19 pr-xl-20 text-stone">
          I also did some graphic design and UX persona’s to make the website more accessible to customers.
              </p>
              <div className="mt-12">
                <Link
                  to="https://www.dtemarketplace.com/"
                  className="btn btn-sunset btn-xl h-55 rounded-5 font-weight-normal"
                target="_blank">
               View Website
                </Link>
              </div>
            </div>
          </div>
          {/* Right Image */}
          <div className="col-xl-6 col-lg-5 col-md-8 col-xs-11 order-1 order-lg-2">
            <div className="l5-content-2 ml-lg-10 ml-xl-14 rounded-10">
              <img
                className="w-100 am rounded"
                src={imgC}
                alt=""
                data-aos="flip-right"
                data-aos-delay={500}
              />
       
            </div>
          </div>
          {/* End Right Image */}
        </div>
      </div>
    </div>
  );
};

export default Content6;
