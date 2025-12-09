import { useContext, useEffect, useMemo, useState } from "react";
import React from "react";
import dynamic from "next/dynamic";
import { useDeviceSize } from "common/utils/use-device-size";
import Navbar from "containers/Navbar";
import { Loading } from "containers/Loading";
import { SloganContext } from "containers/sections/Slogan";
import { useTransform } from "framer-motion";

import MainBackground from "containers/MainBackground";
import BlackScreen from "containers/sections/BlackScreen";
const TopContent = dynamic(() => import("containers/sections/TopContent"));
const Slogan = dynamic(() => import("containers/sections/Slogan"));
const AutFeatures = dynamic(() => import("containers/sections/AutFeatures"));
// const AutOS = dynamic(() => import("containers/sections/AutOS"));
const OsFooter = dynamic(() => import("containers/sections/OSFooter"));

import MapBG from "common/assets/image/map.png";

export default function Home() {
  const { width, height } = useDeviceSize();
  const [loading, setLoading] = React.useState(true);
  const { scrollYProgress } = useContext(SloganContext);
  const [isBottomVisible, setIsBottomVisible] = useState(false);
  const visibilityChange = useTransform(scrollYProgress, (pos) => pos > 0);
  const desktop = useMemo(() => width > 768, [width]);

  useEffect(() => {
    visibilityChange.on("change", setIsBottomVisible);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setTimeout(() => {
        document.querySelector("html").classList.add("scrollable");
      }, 1000);
    }, 1000);
  }, []);

  return (
    <>
      {!loading && <Navbar />}
      {loading && <Loading />}

      <>
        <div className="relative z-10 overflow-y-scroll">
          {desktop && !loading && <MainBackground width={width} height={height} />}
          {!desktop && !loading && <div style={{
            position: "fixed",
            backgroundImage: `url(${MapBG.src})`,
            backgroundSize: 'cover', // Cover the entire div
            backgroundPosition: 'center' // Center the image in the div
          }} />}
          {!loading && (
            <>
              <BlackScreen />
              <TopContent />
              <Slogan />
            </>
          )}
        </div>

        {isBottomVisible && (
          <>
            <AutFeatures />
            {/* <AutOS /> */}
            <OsFooter />
          </>
        )}
      </>
    </>
  );
}
