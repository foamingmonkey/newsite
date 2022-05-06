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
                  <h5 className="font-size-8 mb-lg-13 pr-sm-15 pr-lg-8 pr-xl-15 text-dodger-blue-1">
                Web Design, Shopify &amp; Front End Development
              </h5>
              <p>
                I am an experienced UX/Web designer and front-end developer who
                is passionate about communication and digital solutions. I am a
                self-starter with a strong background in user experience and
                visual design and a proactive problem-solver who understands
                business needs and takes full responsibility for the entire
                process from problem definition to solution. When it comes to
                solving complex challenges, I take a roll-up-your-sleeves,
                entrepreneurial approach. In offering recommendations, I display
                professionalism and confidence as both an individual worker and
                a team player. I am service-oriented, flexible, friendly, and
                thorough. I am Shopify and E-commerce expert. Social media
                marketing, Amazon FBA, Adobe Creative Suite, Axure, and creative
                direction are some of my other skills.
              </p>

 <div class="d-flex align-items-center py-6 mr-xl-15">
              <div class="mr-7">
                <a
                  class="bg-sunset text-white circle-50 video-btn"
                  href="https://docs.google.com/document/d/1hlnVEf9AyHZ4a9_HPxRDuWzpqtdke_MN1MIfM0acLYU/edit?usp=sharing"
                >
                  <i class="fas fa-file-pdf"></i>
                </a>
              </div>
              <div class="mt-0">
                <a
                  class="font-size-6 mb-0 text-dodger-blue-1"
                  href="https://docs.google.com/document/d/1hlnVEf9AyHZ4a9_HPxRDuWzpqtdke_MN1MIfM0acLYU/edit?usp=sharing"
                >
                  View My Resume
                </a>
              </div>

              <div class="mx-7">
                <a
                  class="bg-sunset text-white circle-50 video-btn"
                  id="Thomas"
                  href="#Thomas"
                >
                  <i class="fas fa-solid fa-bolt"></i>
                </a>
              </div>
              <div class="mt-0">
                <a
                  href="#Thomas"
                  id="Thomas"
                  class="font-size-6 mb-0 text-dodger-blue-1"
                >
                  View My Portfolio
                </a>
              </div>
            </div>
           
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
