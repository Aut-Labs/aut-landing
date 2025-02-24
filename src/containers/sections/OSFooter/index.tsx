import React, { memo, useContext, useEffect, useRef } from "react";
import AutOSLogo from "common/assets/AutOSLogoV2.svg";
import DiscordLogo from "common/assets/image/discord-social.svg";
import XLogo from "common/assets/image/x-social.svg";
import Container from "common/components/Container";
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap.css";
import Typography from "common/components/Typography";
import Button from "common/components/Button";
import Image from "common/components/Image";
import Link from "common/components/Link";
import {
  Social,
  SocialLinks,
  OsFooterSection,
  Grid,
  AboutUs,
  ColumnWrapper,
  ColumnTitle,
} from "./footer.style";
import { motionValue, useScroll, useTransform } from "framer-motion";
import Box from "common/components/Box";

const socials = [
  {
    link: "https://x.com/aut_foundation",
    icon: XLogo,
    name: "X",
  },
  {
    link: "http://discord.gg/aXJFGgcvUk",
    icon: DiscordLogo,
    name: "Discord",
  },
];

const developerLinks = [
  {
    title: "Github",
    target: "_blank",
    link: "https://github.com/Aut-Labs",
  },
  {
    title: "Docs",
    target: "_blank",
    link: "https://docs.aut.id",
  },
];
const firstLinks = [
  {
    title: "Āut Labs",
    target: "_blank",
    link: "https://aut.gg",
  },
  // {
  //   title: "Manifesto",
  //   target: "_blank",
  //   link: "https://manifesto.aut.id",
  // },
  {
    title: "Hub",
    target: "_blank",
    link: "https://hub.sbs",
  },
];

const productSuite = [
  {
    title: "Āut Labs",
    target: "_blank",
    link: "https://aut.gg",
  },
  {
    title: "Hub",
    target: "_blank",
    link: "https://hub.sbs",
  },
];

export const SocialWrapper = ({ socialStyles, socialLinksStyles }: any) => {
  return (
    <Social {...socialStyles}>
      <SocialLinks {...socialLinksStyles}>
        {socials.map(({ link, icon, name }, index) => (
          <Tooltip
            placement="top"
            key={`footer-social-key-${index}`}
            overlay={name}
          >
            <a href={link} target="_blank" rel="noreferrer">
              <Image
                height={{
                  _: "18px",
                  md: "18px",
                  xxl: "18px",
                }}
                width={{
                  _: "18px",
                  md: "18px",
                  xxl: "18px",
                }}
                src={icon.src}
                alt="social image"
              />
            </a>
          </Tooltip>
        ))}
      </SocialLinks>
    </Social>
  );
};
export const LinkWrapper = ({ item }: any) => {
  return (
    // @ts-ignore
    <Link legacyBehavior href={item.link}>
      <Button
        title={item.title}
        className="footer-link"
        variant="text"
        colors="nav"
        as="a"
        target={item.target}
        href={item.link}
        style={{
          fontSize: "16px",
          textTransform: "none",
          color: "#F0F5FF",
          height: "50px",
          fontFamily: "var(--fractul-regular)",
        }}
      />
    </Link>
  );
};

const initialState = {
  scrollYProgress: motionValue(0), // Initial value
};

export const OSFooterContext = React.createContext<typeof initialState>(initialState);

export const OSFooterProvider = ({ children }) => {
  return (
    <OSFooterContext.Provider value={initialState}>
      {children}
    </OSFooterContext.Provider>
  );
};

const OsFooter = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress: scrollY } = useContext(OSFooterContext);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
    axis: "y",
  });

  const footerTranslateY = useTransform(
    scrollYProgress,
    [0, 1],
    ["100%", "0%"]
  );

  useEffect(() => {
    scrollYProgress.on("change", (v) => {
      scrollY.set(v);
    });
  }, [scrollYProgress]);

  return (
    <section className="aut-footer relative z-30 h-[50vh]" ref={targetRef}>
      <OsFooterSection
        style={{
          bottom: 0,
          y: footerTranslateY,
        }}
      >
        <Container
          style={{
            padding: "30px",
            height: "50vh",
            display: "flex",
            alignItems: "flex-end",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
          noGutter
        >
          <Grid
            gridTemplateColumns={{
              _: "1fr",
              md: "2fr 1fr 1fr 1fr",
            }}
          >
            <AboutUs
              alignItems={{
                _: "start",
              }}
            >
              <Image
                src={AutOSLogo}
                alt="Aut Logo"
                height="50px"
                style={{
                  marginBottom: "15px",
                }}
              />
              <Typography as="body" color="white" marginBottom="10px">
                Native, role-based Membership & Governance for Web3 Communities
              </Typography>
              <SocialWrapper
                style={{
                  alignSelf: "flex-end",
                }}
                socialStyles={{
                  display: {
                    _: "none",
                    md: "inherit",
                  },
                  alignItems: "center",
                }}
                socialLinksStyles={{
                  gridGap: {
                    _: "10px",
                    md: "10px",
                    xxl: "10px",
                  },
                  flexDirection: {
                    _: "row",
                  },
                }}
              />
            </AboutUs>
            <ColumnWrapper>
              <ColumnTitle>Links</ColumnTitle>
              {firstLinks.map((item, index) => (
                <LinkWrapper item={item} key={index}></LinkWrapper>
              ))}
            </ColumnWrapper>

            <ColumnWrapper>
              <ColumnTitle>For Developers</ColumnTitle>
              {developerLinks.map((item, index) => (
                <LinkWrapper item={item} key={index}></LinkWrapper>
              ))}
            </ColumnWrapper>
            <ColumnWrapper>
              <ColumnTitle>Product Suite</ColumnTitle>
              {productSuite.map((item, index) => (
                <LinkWrapper item={item} key={index}></LinkWrapper>
              ))}
            </ColumnWrapper>
          </Grid>

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
              fontSize="12px"

              textAlign="center"
              margin={{
                _: "10px 0px 10px 0px",
                sm: "10px 0px 10px 0px",
              }}
            >
              Made with &#128293; by Āut Labs
            </Typography>
          </Box>
        </Container>
      </OsFooterSection>
    </section>
  );
};

export default memo(OsFooter);
