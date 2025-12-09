import React from "react";
import SectionStyle from "./section.style";

const Section = ({ as = "section", ...props }) => {
  return <SectionStyle as={as} {...props}>{props.children}</SectionStyle>;
};

export default Section;
