import Card from "common/components/Card";
import LockCountdown from "common/components/LockCountdown";
import Typography from "common/components/Typography";
import { FooterData } from "common/data";
import { CountDownNewsletterForm } from "common/components/NewsletterForm/NewsletterForm";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import styled from "styled-components";
import themeGet from "@styled-system/theme-get";
import ToggleBgPng from "common/assets/image/toggle-bg-png.png";
import ToggleBgSvg from "common/assets/image/toggle-bg-svg.svg";
import CrackOverToggleBgSvg from "common/assets/image/crack-over-toggle-bg-svg.svg";
import CrackOverToggleBgPng from "common/assets/image/crack-over-toggle-bg-png.png";

import CrackBg from "common/assets/image/crack-bg.svg";
import ClockBackground from "common/assets/image/clock-crack-piece.png";
import AutOSLogo from "common/assets/AutOSLogoV2.svg";
import ToggleOn from "common/assets/toggle-on.svg";
import ToggleOff from "common/assets/toggle-off.svg";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  useScroll,
  useTransform,
  motion,
  motionValue,
  useAnimate,
  useAnimation,
} from "framer-motion";
import Box from "common/components/Box";
import useWindowSize from "common/components/window-size";
import ArrowLoading from "./ArrowLoading";

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CountDownWidget = styled("li")`
  &:last-child {
    margin-bottom: 0;
  }
  a {
    text-transform: inherit;
    color: ${themeGet("colors.textColor")};
    &:hover {
      color: ${themeGet("colors.white")};
    }
  }
`;

export const WidgetList = styled("ul")`
  display: flex;
  gap: 10px;
  position: absolute;
  bottom: 30px;
  right: 30px;
`;

export const LogoWrapper = styled.div`
  position: absolute;
  left: 20px;
  top: 20px;
`;

const logoStyles = {
  height: {
    _: "42px",
    xs: "42px",
    sm: "42px",
    md: "42px",
    xxl: "56px",
  },
  width: {
    _: "186px",
    xs: "186px",
    sm: "186px",
    md: "186px",
    xxl: "252px",
  },
};

const OptOutButton = styled(motion.div)`
  cursor: pointer;
  background: #e7edf9;
  display: inline-flex;
  color: #1e2430;
  border-radius: 12px;
  height: 40px;
  min-width: 128px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;

  &:hover {
    background: #2e90fa;
    color: white;
  }

  ${themeGet("mediaQueries.sm")} {
    height: 48px;
    min-width: 128px;
  }
`;

const CountDownCard = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  border: none;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${CrackBg.src});
  background-color: transparent;
  box-shadow: none;

  ${themeGet("mediaQueries.xs")} {
    background-size: 100%;
    width: 482px;
    height: 362px;
  }

  ${themeGet("mediaQueries.md")} {
    background-size: cover;
    width: 536px;
    height: 402px;
  }

  ${themeGet("mediaQueries.xxl")} {
    width: 656px;
    height: 494px;
  }
`;

const CrackBackground = styled(motion.div)`
  ${themeGet("mediaQueries.xs")} {
    background-position: center;
    background-size: cover;
  }

  ${themeGet("mediaQueries.sm")} {
    background-size: 768px 426px;
  }

  ${themeGet("mediaQueries.md")} {
    background-size: 990px 551px;
  }

  ${themeGet("mediaQueries.lg")} {
    background-size: 1220px 679px;
  }

  ${themeGet("mediaQueries.xl")} {
    background-size: 1366px 760px;
  }

  ${themeGet("mediaQueries.xxl")} {
    background-size: 1920px 1067px;
  }
`;

const ScrollArrow = styled(motion.div)`
  padding-bottom: 30px;
  ${themeGet("mediaQueries.sm")} {
    padding-bottom: 50px;
  }
`;

const ToggleBackground = styled(motion.div)`
  ${themeGet("mediaQueries.xs")} {
    background-position: center;
    background-size: cover;
  }

  ${themeGet("mediaQueries.sm")} {
    background-size: 768px 426px;
  }

  ${themeGet("mediaQueries.md")} {
    background-size: 990px 551px;
  }

  ${themeGet("mediaQueries.lg")} {
    background-size: 1220px 679px;
  }

  ${themeGet("mediaQueries.xl")} {
    background-size: 1366px 760px;
  }

  ${themeGet("mediaQueries.xxl")} {
    background-size: 1920px 1067px;
  }
`;

const LogoContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  ${themeGet("mediaQueries.sm")} {
    margin-bottom: 30px;
  }
`;

const OptOutButtonWrapper = styled("div")`
  min-height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${themeGet("mediaQueries.sm")} {
    min-height: 80px;
  }
`;

const AutOSLogoContainer = styled(Image)`
  width: 150px;
  ${themeGet("mediaQueries.sm")} {
    width: 200px;
  }
`;

const StyledPlayer = styled("div")`
  height: 75px;
  width: 75px;
  ${themeGet("mediaQueries.xxl")} {
    width: 100px;
    height: 100px;
  }
`;

const date = new Date(Date.UTC(2023, 10, 19, 15, 0, 0));

const Countdown = () => {
  const { height, width } = useWindowSize();

  const { mailchimpUrl } = FooterData;
  const scroll = useScroll();
  const [optOut, setOptOut] = useState(false);
  const scaleFirst = useTransform(scroll.scrollYProgress, [0, 0.25], [1, 0.8]);
  const scaleArrow = useTransform(scroll.scrollYProgress, [0, 0.25], [1, 1]);

  const opacityFirst = useTransform(
    scroll.scrollYProgress,
    [0, 0.25, 0.26],
    [1, 0, 0]
  );
  const scaleSecond = useTransform(
    scroll.scrollYProgress,
    [0.24, 0.5, 0.75, 1],
    [0.8, 1, 1, 1]
  );
  const opacitySecond = useTransform(
    scroll.scrollYProgress,
    [0.24, 0.25, 0.75, 0.76, 1],
    [0, 1, 1, 1, 1]
  );
  const scaleThird = useTransform(
    scroll.scrollYProgress,
    [0.55, 0.85, 0.9, 1],
    [0.1, 0.9, 1, 1]
  );
  const opacityThird = useTransform(
    scroll.scrollYProgress,
    [0.55, 0.6, 0.84, 0.85, 0.95, 1],
    [0, 0.9, 1, 1, 1, 1]
  );

  const ySecond = useTransform(
    scroll.scrollYProgress,
    [0.25, 0.5, 0.9, 1],
    [`0px`, `0px`, `-${height / 2 - 50}px`, `-${height / 2 - 50}px`]
  );
  const [bgClockOpacity, setBgClockOpacity] = useState(motionValue(0));

  const bgStartOpacity = useTransform(
    scroll.scrollYProgress,
    [0, 0.125, 0.5, 0.9],
    [0, 0, 1, 1]
  );
  const bgFormOpacity = useTransform(
    scroll.scrollYProgress,
    [0, 0.55, 0.84, 0.85, 0.9, 1],
    [0, 0, 0.5, 0.5, 1, 1]
  );

  const bgClockBackgroundOpacity = useTransform(
    scroll.scrollYProgress,
    [0.55, 0.6, 0.84, 0.85, 0.95, 1],
    [0, 0.9, 1, 1, 1, 1]
  );

  const bgStartOpacityControls = useAnimation();
  const bgFormOpacityControls = useAnimation();

  // Watcher for bgOpacity changes
  bgStartOpacity.on("change", function (value) {
    if (value >= 1) {
      bgClockOpacity.set(scroll.scrollYProgress.get() * 1.0);
    }
  });

  useEffect(() => {
    opacitySecond.on("change", function (value) {});
  }, [opacitySecond]);

  const [scope, animate] = useAnimate();
  // Opt out button hover animation
  const [isHovered, setHovered] = useState(false);
  const controls = useAnimation();
  const startHover = async () => {
    await controls.start({ opacity: 0.7 });
    setHovered(true);
    controls.start({ opacity: 1 });
  };

  const endHover = async () => {
    await controls.start({ opacity: 0.7 });
    setHovered(false);
    controls.start({ opacity: 1 });
  };

  useEffect(() => {}, [scroll.scrollYProgress]);

  return (
    <>
      <section
        style={{
          height: "300vh",
          width: "100%",
          background: "#0F1319",
        }}
      >
        <Box
          style={{
            mt: 20,
            position: "fixed",
            overflow: "unset",
            width: "100%",
            height: "100vh",
          }}
        >
          <CrackBackground
            animate={bgStartOpacityControls}
            style={{
              position: "absolute",
              opacity: bgStartOpacity,
              width: "100%",
              height: "100vh",
              backgroundImage: `url(${CrackOverToggleBgPng.src})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          />
          <ToggleBackground
            animate={bgFormOpacityControls}
            style={{
              position: "absolute",
              opacity: bgFormOpacity,
              width: "100%",
              height: "100vh",
              backgroundImage: `url(${
                width < 768 ? ToggleBgPng.src : ToggleBgSvg.src
              })`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          />
          <motion.div
            style={{
              backgroundImage: `url(${ClockBackground.src})`,
              opacity: bgClockBackgroundOpacity,
              position: "absolute",
              backgroundSize: "cover",
              left: "calc(50% - 225px)",
              width: "450px",
              height: "110px",
              backgroundRepeat: "no-repeat",
              position: "absolute",
            }}
          ></motion.div>
          <div
            style={{
              position: "absolute",
              transform: "translatex(-50%)",
              left: "50%",
              textAlign: "center",
              height: "100vh",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                height: "100%",
                width: "100%",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  height: "100vh",
                  width: "80%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <motion.div
                  style={{
                    scale: scaleFirst,
                    opacity: opacityFirst,
                  }}
                >
                  <Typography
                    fontFamily="var(--fractul-regular)"
                    variant="h2"
                    color="white"
                    fontSize="24px"
                  >
                    Measure the True Value of your Participation.
                  </Typography>
                </motion.div>
              </div>
              <div
                style={{
                  position: "fixed",
                  bottom: 0,
                }}
              >
                <ScrollArrow
                  style={{
                    scale: scaleArrow,
                    opacity: opacityFirst,
                  }}
                >
                  <StyledPlayer>
                    <ArrowLoading />
                  </StyledPlayer>
                </ScrollArrow>
              
              </div>
            </div>
          </div>

          <div
            style={{
              position: "absolute",
              transform: "translate(-50%, -50%)",
              top: "50%",
              left: "50%",
              textAlign: "center",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <motion.div
              style={{
                y: ySecond,
                scale: scaleSecond,
                opacity: opacitySecond,
                width: "50vw",
              }}
            >
              <LockCountdown to={date}></LockCountdown>
            </motion.div>
          </div>
          <div
            style={{
              position: "absolute",
              transform: "translatex(-50%)",
              left: "50%",
              textAlign: "center",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <motion.div
              style={{
                scale: scaleThird,
                opacity: opacityThird,
              }}
            >
              <CountDownCard>
                <LogoContainer>
                  {/* <AutLogoVideo
                autoPlay
                loop
                muted
                src={require("./../../common/assets/AutOSLogoVideo.mp4")}
              /> */}
                  <AutOSLogoContainer
                    style={{
                      width: {
                        _: "150px",
                        sm: "200px",
                      },
                    }}
                    src={AutOSLogo}
                    alt="Aut Logo"
                  />
                  <Typography
                    color="white"
                    textAlign="center"
                    fontWeight="normal"
                    fontFamily="var(--fractul-regular)"
                    style={{
                      margin: "0",
                    }}
                    fontSize={{
                      _: "14px",
                      sm: "16px",
                    }}
                  >
                    The Operating System of yourself
                  </Typography>
                </LogoContainer>
                <Typography
                  color="white"
                  textAlign="center"
                  fontWeight="normal"
                  fontFamily="var(--fractul-regular)"
                  fontSize={{
                    _: "16px",
                    sm: "18px",
                  }}
                >
                 ĀutOS is the map of your Web3 Interactions. 
                  <br /> A Web of Trust - where you get in, by opting out.
                </Typography>
                <>
                  {optOut ? (
                    <ContactInfo>
                      <MailchimpSubscribe
                        url={mailchimpUrl}
                        render={(props) => {
                          const { subscribe, status, message } = props || {};
                          return (
                            <CountDownNewsletterForm
                              status={status}
                              message={message}
                              onValidated={(formData) => subscribe(formData)}
                            />
                          );
                        }}
                      />
                    </ContactInfo>
                  ) : (
                    <OptOutButtonWrapper>
                      <OptOutButton
                        onClick={setOptOut}
                        onHoverStart={startHover}
                        onHoverEnd={endHover}
                      >
                        <motion.div
                          animate={controls}
                          transition={{ duration: 0.1, type: "keyframes" }}
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          {isHovered ? (
                            <Image src={ToggleOn} alt="toggle-on" width={20} />
                          ) : (
                            <Image
                              src={ToggleOff.src}
                              alt="toggle-off"
                              width={20}
                              height={20}
                            />
                          )}
                        </motion.div>
                        <Typography
                          fontFamily="var(--fractul-bold)"
                          fontWeight="700"
                          fontSize="16px"
                        >
                          Opt Out
                        </Typography>
                      </OptOutButton>
                    </OptOutButtonWrapper>
                  )}
                </>
              </CountDownCard>
            </motion.div>
          </div>
        </Box>
      </section>
    </>
  );
};

export default Countdown;
