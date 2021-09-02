import React from "react";
import { Link } from "gatsby";

import zoggsTop from "../../assets/image/home-5/png/zoggsTop.jpg";
import zoggsMiddle from "../../assets/image/home-5/png/zoggsMiddle.jpg";
import zoggsBottom from "../../assets/image/home-5/png/zoggsBottom.jpg";

const Content5 = ({ className, ...rest }) => {
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
                    src={zoggsTop}
                    alt=""
                    data-aos="zoom-in"
                    data-aos-duration={500}
                    className="w-100 pb-6 pb-sm-9 rounded-bottom-10"
                  />
                  {/* single image end */}
                  {/* single image */}
                  <img
                    src={zoggsMiddle}
                    alt=""
                    data-aos="zoom-in"
                    data-aos-duration={500}
                    data-aos-delay={700}
                    className="w-100 pb-6 pb-sm-9 rounded-10"
                  />
                  {/* single image end */}
                  {/* single image */}
                  <img
                    src={zoggsBottom}
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
            Zoggs USA
              </h2>
                         <h6
                className="font-size-3 text-white text-uppercase mb-10 letter-spacing-5"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                UX/UI and Shopify Dev
              </h6>
              <p
                className="font-size-7 mb-4"
                data-aos="fade-up"
                data-aos-delay={800}
              >
                While at zoggs I helped to reposition the brand across all platforms to engage with core users but not separate the causal users of the product. 
                Not only did we want to empower the casual users to try triathlons, 
                we wanted them to interact and engage with each other. 
              </p>

                  <p
                className="font-size-7 mb-4"
                data-aos="fade-up"
                data-aos-delay={800}
              >
                Not only did we raise revenue by 8% but we built a great 4,000+ facebook group and drove up all
                 other social media which helped the brand stand apart.
                 In august 2021 Zoggs USA reported selling off its business for an undisclosed amount.  
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content5;
