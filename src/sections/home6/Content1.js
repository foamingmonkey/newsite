import React from "react";

import imgM from "../../assets/image/home-5/png/icfHero.jpg";


const Content1 = ({ className, ...rest }) => {
  return (
    <div className={className} {...rest}>
      <div className="container">
        <div className="row align-items-center justify-content-center justify-content-lg-start">
          {/* Image Section */}
          <div className="col-xl-5 col-xs-4">
            <div className="l6-content-image-group">
             
              <div className="img-2">
                <img
                  className="w-100 "
                  src={imgM}
                  alt=""
                  data-aos="fade-right"
                  data-aos-delay={500}
                />
              </div>
            </div>
          </div>
          {/* Content Section */}
          <div className="col-lg-6 col-md-8 col-xs-10 ml-lg-10 ml-xl-10">
            <div className="pt-7 pb-7 pb-lg-17 pl-sm-5 pl-md-9 pl-lg-10">
              <h2
                className="font-size-11 mb-9 pr-xs-23 pr-sm-8 pr-md-18 pr-lg-18"
                data-aos="fade-up"
                data-aos-delay={300}
              >
            ICF International
              </h2>

              <h6 class="font-size-3 text-dodger-blue-1 text-uppercase mb-8 letter-spacing-5">Shopify Front End Dev</h6>
              <p
                className="font-size-7 mb-0 pr-xl-13"
                data-aos="fade-up"
                data-aos-delay={600}
              >
While contracted with ICF International I helped build a custom Shopify plus E-commerce app.  The development was required to be implemented to a
 custom Cart and ordering process within shopify.
  I helped set up a custom webhook that made a custom 
  form that only people from the state of Mississippi 
  could buy products because the client of ICF required
   custom Json to pull data to verify addresses for
    free products within the state of Mississippi.
     I also did some graphic design and UX persona’s to make the website more accessible to customers.               
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content1;
