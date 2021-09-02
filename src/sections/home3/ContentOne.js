import React from "react";
import imageOne from "../../assets/image/home-3/png/desktop-dashboard-full.png";
import tylt from "../../assets/image/home-5/png/tyltHero.jpg";

const ContentOne = ({ className, ...rest }) => {
  

  return (
    <div className={`position-relative ${className}`} {...rest}>
      <div className="container position-static">
        <div className="row position-static justify-content-center justify-content-lg-start">
          <div className="col-xl-5 col-lg-7 col-md-10 col-sm-10 order-2 order-lg-1">
            <div className="pr-md-20 pr-xl-5">
              {/* Section Title */}
              <div
                className="mb-5 mb-lg-13 pr-md-15 pr-lg-10 pr-xl-0"
                data-aos="fade-right"
                data-aos-delay={500}
              >
                <h2 className="font-size-10 mb-8">
                  Tylt
                </h2>
                  <h6 className="font-size-3 text-dodger-blue-1 text-uppercase mb-8 letter-spacing-5">
               UX/UI and Shopify Front End
              </h6>
              
                <p className="font-size-6 mb-4">
                While at Tylt I quickly discovered that Tylt was struggling to diferencent from its mother brand Technocel. 
                Tylt had the same branding, &amp; user base and didn’t understand the american market in fact their
                 compactor Belkin was selling identical units at a higher price point. Next the Old Tylt website was built on a 
                duplicated website of technocell which was slow, and not mobile friendly and not to modern standards . {" "}
                </p>
                             <p className="font-size-6 mb-4">
         With the relaunch of a user friendly website
           I helped bridge the gap and brought Tylt 25% more sales in the relaunch of the new website {" "}
                </p>
              </div>
              {/* End Section Title */}
         
            </div>
          </div>
          <div className="col-xl-7 col-lg-6 col-xs-10 position-static order-1 order-lg-2">
            <div className="l3-content-image-group-4 position-lg-absolute mb-13 mb-lg-0">
              <div className="img-1 shadow-5">
                <img className="w-100 w-lg-auto" src={tylt} alt="" />
          
           
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentOne;
