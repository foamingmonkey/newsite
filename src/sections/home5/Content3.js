import React from "react";
import { Link } from "gatsby";

import top from "../../assets/image/home-5/png/thomasJaneTop.jpg";
import middle from "../../assets/image/home-5/png/thomasJaneMiddle.jpg";
import bottom from "../../assets/image/home-5/png/thomasJaneBottom.jpg";

const Content3 = ({ className, ...rest }) => {
  return (
    <div className={className} {...rest}>
      <div className="container position-static">
        <div className="row align-items-center justify-content-center position-static">
          {/* Right Image */}
          <div className="col-xl-6 col-lg-5 col-md-9 position-static">
            {/* content-2 start */}
            <div className="l5-content-gallery-img">
              {/* content img start */}
              <div className="d-xs-flex ml-lg-15 mx-xl-n3">
                <div className="d-flex flex-column px-3 px-sm-6 w-100 mr-xl-14">
                  {/* single image start */}
                  <img
                    src={top}
                    alt=""
                    data-aos="zoom-in"
                    data-aos-duration={500}
                    className="w-100 pb-6 pb-sm-9 rounded-bottom-10"
                  />
                  {/* single image end */}
                  {/* single image */}
                  <img
                    src={middle}
                    alt=""
                    data-aos="zoom-in"
                    data-aos-duration={500}
                    data-aos-delay={700}
                    className="w-100 pb-6 pb-sm-9 rounded-10"
                  />
                  {/* single image end */}
                  {/* single image */}
                  <img
                    src={bottom}
                    alt=""
                    data-aos="zoom-in"
                    data-aos-duration={500}
                    data-aos-delay={700}
                    className="w-100 rounded-top-10"
                  />
                  {/* single image end */}
                </div>
              </div>
              {/* abs-content end */}
            </div>
            {/* content-2 end */}
          </div>
          {/* End Right Image */}
          <div className="col-xl-6 col-lg-7 col-md-9">
            <div className="dark-mode-texts mt-10 mt-lg-0 pr-xs-15 pr-sm-14 pr-md-13 pr-lg-0">
   
              <h2
                className="font-size-10 mb-8 letter-spacing-n83  pr-xs-25 pr-sm-15 pr-md-15 pr-lg-0"
                data-aos="fade-up"
                data-aos-delay={500}
              >
            Thomas Jane LA
              </h2>
                         <h6
                className="font-size-3 text-white text-uppercase mb-10 letter-spacing-5"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                UX/UI and Shopify
              </h6>
              <p
                className="font-size-7 mb-4"
                data-aos="fade-up"
                data-aos-delay={800}
              >
                Before working at Thomas Jane  they added every shopify plugin that shopify has to offer, sometimes  known in the industry as shiny object syndrome.  This not only slowed down the website to a crawl but added mixed messing across the website and brand.
              </p>

                  <p
                className="font-size-7 mb-4"
                data-aos="fade-up"
                data-aos-delay={800}
              >
                I helped Thomas Jane in a user experience session to clarify brand goals, have a defined voice, and grow  revenue  by 20%  all while increasing web speed and getting rid of all the bloated code apps tend to leave.
              </p>

       <p
                className="font-size-7 mb-4"
                data-aos="fade-up"
                data-aos-delay={800}
              >
                First I helped clean up the user experience with clear hierarchical messaging and helped build the email list from 200 to over 3,000.  Which helped bring the conversion rate up by 45% in the first 3 months
              </p>

              <div className="mt-12" data-aos="fade-up" data-aos-delay={900}>
                <Link to="https://www.thomasjamesla.com/" className="btn btn-sunset btn-xl h-55 rounded-5" target="_blank">
                   View  Website
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content3;
