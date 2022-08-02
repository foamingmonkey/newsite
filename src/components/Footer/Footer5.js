import React from "react";
import { Link } from "gatsby";

const Footer = ({ className, ...rest }) => {
  return (
    <>
      <div className={`bg-dark-cloud pt-8 pb-9 ${className}`} {...rest}>
        <div className="container">
          <div className="pb-5 pb-lg-22">
            <div className="row justify-content-lg-between">
              {/* End Brand Logo */}
              <div className="col-xl-12 col-md-12">
                <div className="row">
                  <div class="col-sm-4 col-xs-8">
                    <div class="mb-10 mb-lg-0 mr-xl-12">
                      <div class="mt-7">  
                      </div>
                      <div class="">
                        <ul class="d-flex align-items-center list-unstyled mb-0">
                          <li>
                            <a
                              class="pl-5 text-white gr-hover-text-dodger-blue-1 font-size-10 px-3"
                              href="https://github.com/anthonymBD"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i class="fab fa-github"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              class="pl-5 text-white gr-hover-text-dodger-blue-1 font-size-10 px-3"
                              href="https://www.linkedin.com/in/anthony-morlett-47471039/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i class="fab fa-linkedin"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div
                    className="mt-12"
                    data-aos="fade-up"
                    data-aos-delay={900}
                  >
                    <Link
                      to="https://docs.google.com/document/d/1hlnVEf9AyHZ4a9_HPxRDuWzpqtdke_MN1MIfM0acLYU/edit?usp=sharing"
                      className="btn btn-sunset btn-xl h-55 rounded-5"
                      target="_blank"
                    >
                      Other works
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
