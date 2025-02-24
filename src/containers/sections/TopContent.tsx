import { useTransform, motion, useScroll, motionValue } from "framer-motion";
import Container from "common/components/Container";
import Typography from "common/components/Typography";
import Box from "common/components/Box";
import Image from "common/components/Image";
import NewLogo from "common/assets/image/new_logo.svg";
import Button from "common/components/Button";
import { PopupButton } from "@typeform/embed-react";
import useWindowSize from "common/components/window-size";
import { stylesWithCssVar } from "utils/motion";
import {
  createContext,
  memo,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from "react";
import Link from "next/link";
import { LinkWrapper } from "./OSFooter";
const formId = "yfd7X6z1";

const initialState = {
  scrollYProgress: motionValue(0),
};

export const TopContentContext =
  createContext<typeof initialState>(initialState);

export const TopContentProvider = ({ children }) => {
  return (
    <TopContentContext.Provider value={initialState}>
      {children}
    </TopContentContext.Provider>
  );
};

const TopContent = () => {
  const { scrollYProgress: scrollY } = useContext(TopContentContext);
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  useEffect(() => {
    scrollYProgress.on("change", (v) => {
      scrollY.set(v);
    });
  }, []);

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const translateY = useTransform(scrollYProgress, [0, 0.5], ["0", "-4rem"]);
  const translateX = useTransform(scrollYProgress, [0, 0.5], ["0", "16rem"]);
  const { width } = useWindowSize();
  const isMobile = useMemo(() => width < 768, [width]);
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const zIndex = useTransform(scrollYProgress, (pos) => (pos >= 0.3 ? 0 : 1));

  return (
    <motion.section
      className="top-content relative mb-[8rem] h-screen"
      style={{ zIndex }}
      ref={targetRef}
    >
      <Container
        pt={{
          _: "122px",
          xs: "122px",
          sm: "84px",
          md: "84px",
          xxl: "112px",
        }}
      >
        <Box
          style={{
            position: "fixed",
            transform: "translate(-50%, -50%)",
            left: "50%",
            top: "50%",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* Logo and desc start */}
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
            mt={{
              _: "-100px",
              sm: "0",
            }}
          >
            <motion.div
              style={stylesWithCssVar({
                scale,
                opacity,
                y: translateY,
              })}
            >
              <Image
                height={{
                  _: "56px",
                  xs: "80px",
                  sm: "80px",
                  md: "80px",
                  xxl: "120px",
                }}
                display={{
                  _: "none",
                  md: "block",
                }}
                width="100%"
                src={NewLogo.src}
                alt="New_logo"
              />
              {/* <Typography
                color="white"
                fontWeight="400"
                as="subtitle2"
                textAlign="center"
              >
                The Operating System of yourself
              </Typography> */}
              <Typography
                my={{
                  _: "7",
                  sm: "8",
                }}
                color="white"
                as="subtitle1"
                textAlign="center"
                p={{
                  _: "0px 10px",
                  md: "0px",
                }}
              >
                ĀutOS is your gateway to the Participation Economy. <br />
                Measure & monetize the value you have for your peers,
                <br /> and connect with others based on the on-chain actions you share.
              </Typography>
            </motion.div>
          </Box>

          {/* Logo and desc end */}
          {/* Button start */}
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
            }}
            mb={{ _: "6", sm: "12" }}
          >

            <motion.div
              style={stylesWithCssVar({
                opacity,
                x: translateX,
              })}
            >
              <Link href={'https://os.aut.id'} target="_self">
                <Button
                  title="Enter Āut/OS"
                  variant="roundOutlined"
                  className="gradient"
                  fontWeight="bold"
                  size="normal"
                  colors="primary"
                />
              </Link>

            </motion.div>
          </Box>
          {/* Button end */}
          <motion.div
            className="absolute bottom-14 flex w-full justify-center"
            style={{
              opacity,
            }}
          >
            <Box
              flexBox
              style={{
                padding: "12px 16px",
                justifyContent: "center",
                alignItems: "center",
                gap: "4px",
                flexShrink: 0,
                borderRadius: "6px",
                border: "1.5px solid #2F3746",
                background: "rgba(0, 0, 0, 0.64)",
                boxShadow:
                  "0px 16px 80px 0px #256BB0, 0px 0px 16px 0px rgba(37, 107, 176, 1), 0px 0px 16px 0px rgba(37, 107, 176, 1)",
                backdropFilter: "blur(8px)",
              }}
              height={{
                _: "100%",
                sm: "48px",
              }}
            >
              <Box
                flexBox
                flexDirection={{ _: "column", sm: "row" }}
                justifyContent="center"
              >
                <div
                  style={{
                    display: "inline-flex",
                  }}
                >
                  <Typography
                    m="0"
                    lineHeight={{
                      _: "125%",
                      sm: "48px",
                    }}
                    style={{
                      fontVariantNumeric: "lining-nums proportional-nums",
                      color: "#F0F5FF",
                      fontFize: "16px",
                      fontStyle: "normal",
                      fontWeight: 700,
                    }}
                  >
                    Āut{" "}
                  </Typography>{" "}
                  <Typography
                    m="0"
                    lineHeight={{
                      _: "125%",
                      sm: "48px",
                    }}
                    style={{
                      fontVariantNumeric: "lining-nums proportional-nums",
                      fontFize: "16px",
                      fontStyle: "normal",
                      color: "#F0F5FF",
                      fontWeight: 400,
                    }}
                  >
                    /ˈa͡ʊt/
                  </Typography>{" "}
                  <Typography
                    m="0"
                    lineHeight={{
                      _: "125%",
                      sm: "48px",
                    }}
                    style={{
                      fontVariantNumeric: "lining-nums proportional-nums",
                      fontFize: "16px",
                      fontStyle: "normal",
                      color: "#818CA2",
                      fontWeight: 400,
                      padding: "0px 5px",
                    }}
                  >
                    • noun •
                  </Typography>{" "}
                </div>
                <Typography
                  m="0"
                  lineHeight={{
                    _: "125%",
                    sm: "48px",
                  }}
                  style={{
                    fontVariantNumeric: "lining-nums proportional-nums",
                    fontStyle: "normal",
                    color: "#F0F5FF",
                    fontWeight: 400,
                  }}
                  fontSize={{
                    _: "14px",
                    sm: "16px",
                  }}
                >
                  {isMobile ? (
                    <>
                      “Self” [greek] as in Self-Sovereign <br></br>
                      or Self-governance
                    </>
                  ) : (
                    `“Self” [greek] as in Self-Sovereign, or Self-governance`
                  )}
                </Typography>
              </Box>
            </Box>
          </motion.div>

          {/* <ArrowLoading></ArrowLoading> */}
        </Box>
      </Container>
    </motion.section>
  );
};

export default memo(TopContent);
