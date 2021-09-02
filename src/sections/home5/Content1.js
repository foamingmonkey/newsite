import React from "react";
import { Link } from "gatsby";

import tylt from "../../assets/image/home-5/png/tyltHero.jpg";

const Content1 = ({ className, ...rest }) => {
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
               TYLT
              </h2>
                <h6 className="font-size-3 text-dodger-blue-1 text-uppercase mb-8 letter-spacing-5">
               UX/UI and Shopify Front End
              </h6>
              <p className="font-size-7 mb-0 pr-sm-16 pr-md-15 pr-lg-19 pr-xl-20 pb-4 text-stone">
                While at Tylt I quickly discovered that Tylt was struggling to diferencent from its mother brand Technocel. Tylt had the same branding, & user base and didn’t understand the american market in fact their compactor Belkin was selling identical units at a higher price point. Next the Old Tylt website was built on a duplicated 
                website of technocell which was slow, and not mobile friendly and not to modern standards . 
              </p>
                            <p className="font-size-7 mb-0 pr-sm-16 pr-md-15 pr-lg-19 pr-xl-20 text-stone">
         With the relaunch of a user friendly website  I helped bridge the gap and brought Tylt 25% more sales in the relaunch of the new website
              </p>
              <div className="mt-12">
                <Link
                  to="https://www.tylt.com/"
                  className="btn btn-sunset
                   btn-xl h-55 rounded-5 font-weight-normal"
               target="_blank" >
                 View  Website
                </Link>
              </div>
            </div>
          </div>
          {/* Right Image */}
          <div className="col-xl-6 col-lg-5 col-md-8 col-xs-11 order-1 order-lg-2">
            <div className="l5-content-2 ml-lg-10 ml-xl-14 rounded-10">
            
              <img
                className="w-100 am rounded"
                src={tylt}
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

export default Content1;
