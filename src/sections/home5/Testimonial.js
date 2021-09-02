import React from "react";
import Slider from "react-slick";

import imgCR from "../../assets/image/home-5/png/directvLogo.png";
import imgRS from "../../assets/image/home-5/png/hboLogo.jpg";
import imgU1 from "../../assets/image/home-5/png/symantecLogo.jpg";
import imgU2 from "../../assets/image/home-5/png/gameflyLogo.jpg";
import kern from "../../assets/image/home-5/png/kernLogo.jpg";
import midnight from "../../assets/image/home-5/png/midnightOilLogo.jpg";
import enervee from "../../assets/image/home-5/png/enerveeLogo.jpg";
import umeken from "../../assets/image/home-5/png/umekenLogo.jpg";

const Testimonial = ({ className, ...rest }) => {
  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    centerMode: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          centerPadding: "20%",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 769,
        settings: {
          centerPadding: "0",
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className={className} {...rest}>
 
        <div className="container">
          {/* Section Title */}
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8 col-md-10">
              <div className="text-center mb-13 mb-lg-21">
                <h2 className="font-size-11 mb-7">Past Clients</h2>
                <p className="font-size-7 mb-0 px-xl-10">
                  Working with some of the biggest brands in the world
                </p>
              </div>
            </div>
          </div>
          {/* End Section Title */}
          <div className="row">
            <div className="col-12">
              <Slider
                {...slickSettings}
                css={`
                  .slick-slide {
                    margin: 0 1rem;
                  }
                  .slick-dots {
                    display: flex !important;
                  }
                `}
                className="l6-testimonial">
                {/* Single Testimonial */}
                <div className="single-testimoial bg-white border border-default-color-5 rounded-10 pl-8 focus-reset">
                  <div className="ml-4">
                    <img src={imgRS} alt="" />
                  </div>
                  
          
                </div>
                {/* End Single Testimonial */}

       {/* Single Testimonial */}
                <div className="single-testimoial bg-white border border-default-color-5 rounded-10 pl-8 focus-reset">
                  <div className="ml-4">
                    <img src={imgU2} alt="" />
                  </div>
                  
          
                </div>
                {/* End Single Testimonial */}

                {/* Single Testimonial */}
                <div className="single-testimoial bg-white border border-default-color-5 rounded-10 pl-8 focus-reset">
                  <div className="ml-4">
                    <img src={kern} alt="" />
                  </div>
         
              
                </div>
                {/* End Single Testimonial */}

       {/* Single Testimonial */}
                <div className="single-testimoial bg-white border border-default-color-5 rounded-10 pl-8 focus-reset">
                  <div className=" ml-4">
                    <img src={imgCR} alt="" />
                  </div>
         
              
                </div>
                {/* End Single Testimonial */}

                 {/* Single Testimonial */}
                <div className="single-testimoial bg-white border border-default-color-5 rounded-10 pl-8 focus-reset">
                  <div className="ml-4">
                    <img src={midnight} alt="" />
                  </div>
         
              
                </div>
                {/* End Single Testimonial */}

                {/* Single Testimonial */}
                <div className="single-testimoial bg-white border border-default-color-5 rounded-10 pl-8 focus-reset">
            
              
                  <div className="d-flex align-items-center">
                    <div className="mr-6  ml-4" >
                      <img src={imgU1} alt="" />
                    </div>
                 
                  </div>
                </div>
                {/* End Single Testimonial */}
   {/* Single Testimonial */}
                <div className="single-testimoial bg-white border border-default-color-5 rounded-10 pl-8 focus-reset">
            
              
                  <div className="d-flex align-items-center">
                    <div className="mr-6  ml-4" >
                      <img src={enervee} alt="" />
                    </div>
                 
                  </div>
                </div>
                {/* End Single Testimonial */}

                  {/* Single Testimonial */}
                <div className="single-testimoial bg-white border border-default-color-5 rounded-10 pl-8 focus-reset">
            
              
                  <div className="d-flex align-items-center">
                    <div className="mr-6  ml-4" >
                      <img src={umeken} alt="" />
                    </div>
                 
                  </div>
                </div>
                {/* End Single Testimonial */}

              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
