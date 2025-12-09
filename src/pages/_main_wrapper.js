import { ContentWrapper } from "containers/app.style";

import Footer from "containers/Footer";
import React from "react";
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";

const MainWrapper = ({ children }) => {
  return (
    <PerfectScrollbar
      style={{
        height: "100vh",
      }}
      options={{
        suppressScrollX: true,
        useBothWheelAxes: false,
      }}
    >
      {children}
      {/* <Footer /> */}
    </PerfectScrollbar>
  );
};

export default MainWrapper;