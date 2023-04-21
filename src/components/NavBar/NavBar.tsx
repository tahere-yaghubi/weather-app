import React from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

function HomeIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

function NavBar() {
  return (
    <div>
      <HomeIcon fontSize="large" />
    </div>
  );
}

export default NavBar;
