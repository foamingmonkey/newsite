import React from "react";
import { Link } from "gatsby";

import logoB from "../../assets/image/logo-main-black.png";
import logoW from "../../assets/image/logo-main-white.png";

const Logo = ({ className = "", ...rest }) => {
  return (
   <Link to="/">
                 <h5> Anthony Morlett</h5>
                </Link>
  );
};

export default Logo;
