import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Container from "common/components/Container";
import Typography from "common/components/Typography";
import Box from "common/components/Box";
import Image from "common/components/Image";
import NewLogo from "common/assets/image/new_logo.svg";
import Button from "common/components/Button";
import { PopupButton } from "@typeform/embed-react";
import Link from "common/components/Link";
import { NavbarData } from "common/data";
import useWindowSize from "common/components/window-size";
import { stylesWithCssVar } from "utils/motion";
const formId = "yfd7X6z1";

export const TopContent = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const translateY = useTransform(scrollYProgress, [0, 0.5], ["0", "-4rem"]);
  const translateX = useTransform(scrollYProgress, [0, 0.5], ["0", "16rem"]);
  const { width } = useWindowSize();
  const isMobile = width < 768;

  return (
    <section
      ref={targetRef}
      className="relative mb-[8rem] flex h-screen flex-col items-center justify-center py-16 text-white before:pointer-events-none before:fixed"
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
                width="100%"
                src={NewLogo.src}
                alt="New_logo"
              />
              <Typography
                color="white"
                fontWeight="400"
                as="subtitle2"
                textAlign="center"
              >
                The Operating System of yourself
              </Typography>
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
                ĀutOS is the social map of your Web3 reputation. <br />A Web of
                Trust - where you get in, by opting out.
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
            <PopupButton id={formId} as="span">
              <motion.div
                style={stylesWithCssVar({
                  opacity,
                  x: translateX,
                })}
              >
                <Button
                  type="submit"
                  title="Interact"
                  variant="roundOutlined"
                  className="gradient"
                  fontWeight="bold"
                  size="normal"
                  colors="primary"
                />
              </motion.div>
            </PopupButton>
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
                    style={{
                      fontVariantNumeric: "lining-nums proportional-nums",
                      color: "#F0F5FF",
                      fontFize: "16px",
                      fontStyle: "normal",
                      fontWeight: 700,
                      lineLeight: "125%",
                    }}
                  >
                    Āut{" "}
                  </Typography>{" "}
                  <Typography
                    m="0"
                    style={{
                      fontVariantNumeric: "lining-nums proportional-nums",
                      fontFize: "16px",
                      fontStyle: "normal",
                      color: "#F0F5FF",
                      fontWeight: 400,
                      lineLeight: "125%",
                    }}
                  >
                    /ˈa͡ʊt/
                  </Typography>{" "}
                  <Typography
                    m="0"
                    style={{
                      fontVariantNumeric: "lining-nums proportional-nums",
                      fontFize: "16px",
                      fontStyle: "normal",
                      color: "#818CA2",
                      fontWeight: 400,
                      lineLeight: "125%",
                      padding: "0px 5px",
                    }}
                  >
                    • noun •
                  </Typography>{" "}
                </div>
                <Typography
                  m="0"
                  style={{
                    fontVariantNumeric: "lining-nums proportional-nums",
                    fontStyle: "normal",
                    color: "#F0F5FF",
                    fontWeight: 400,
                    lineLeight: "125%",
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

          {/* <Box
            style={{
              position: "absolute",
              display: "flex",
              justifyContent: "center",
              bottom: "10px",
              width: "100%",
            }}
          >
            <Box
              flexBox
              style={{
                height: "48px",
                padding: "12px 16px",
                justifyContent: "center",
                alignItems: "center",

                position: "relative",
              }}
              width={{
                _: "90%",
                sm: "60%",
              }}
            >
              <Box
                className="bottom-nav-new"
                flexBox
                flexDirection={{
                  _: "column",
                  sm: "row",
                }}
                style={{
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Typography
                  color="white"
                  as="body"
                  textAlign="center"
                  margin={{
                    _: "0px 0px 10px 0px",
                    sm: "unset",
                  }}
                >
                  Made with &#128293; by Āut Labs
                </Typography>

                <ul
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gridGap: "8px",
                  }}
                  className="main_menu_bottom"
                >
                  {NavbarData.menuItems.map((menu, index) => (
                    <li key={`menu-item-${index}`}>
                      <Link
                        legacyBehavior
                        href={menu.path}
                        target={menu.target}
                      >
                        <Button
                          target={menu.target}
                          href={menu.path}
                          variant="navLink"
                          colors="nav"
                          title={menu.label}
                          fontSize={{
                            _: "14px",
                            xs: "16px",
                            sm: "16px",
                            md: "16px",
                            xxl: "20px",
                          }}
                          ml={{
                            md: "44px",
                            lg: "50px",
                            xxl: "60px",
                          }}
                          as="a"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </Box>
            </Box>
          </Box> */}
        </Box>
      </Container>
    </section>
  );
};
