import { motion, motionValue, useMotionValue, useScroll, useTransform } from "framer-motion";
import AutFeaturesBg from "common/assets/image/features-bg.png";
import FreedomIcon from "common/assets/image/features/freedom-icon.png";
import SelfIcon from "common/assets/image/features/self-icon.png";
import AutonomyIcon from "common/assets/image/features/autonomy-icon.png";
import GovernanceIcon from "common/assets/image/features/governance-icon.png";
import PermissionlessIcon from "common/assets/image/features/permissionless-icon.png";
import SustainabilityIcon from "common/assets/image/features/sustainability-icon.png";
import Box from "common/components/Box";
import Image from "common/components/Image";
import Typography from "common/components/Typography";
import styled from "styled-components";
import themeGet from "@styled-system/theme-get";
import { Fragment, memo, useContext, useEffect, useRef } from "react";
import { DrawerContext } from "common/contexts/DrawerContext";
import React from "react";
import { AutOSContext } from "./AutOS";
import { OSFooterContext } from "./OSFooter";

const FeaturesContainer = styled(Box)`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
  padding: 20px;

  ${themeGet("mediaQueries.sm")} {
    grid-template-columns: repeat(2, 1fr);
    padding: 30px;
  }

  ${themeGet("mediaQueries.md")} {
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    padding: 50px;
  }
`;

const AutFeaturesData = [
  {
    icon: FreedomIcon,
    title: "Personal freedom",
    description: "Empower individual Āutonomy and liberty within Āut.",
  },
  {
    icon: SelfIcon,
    title: "Āut means “Self”",
    description: "Embrace self-governance and self‑identity at the core.",
  },
  {
    icon: AutonomyIcon,
    title: "Collective Āutonomy",
    description: "Forge a united path to āutonomous decision-making.",
  },
  {
    icon: GovernanceIcon,
    title: "Merit Governance",
    description: "Reward expertise and dedication with role-based governance.",
  },
  {
    icon: PermissionlessIcon,
    title: "Permissionless",
    description: "Join freely, no barriers to access or participate.",
  },
  {
    icon: SustainabilityIcon,
    title: "Self-sustainability",
    description: "Ensure the enduring strength and independence of Āut.",
  },
];

interface IndividualFeatureProps {
  icon: any;
  title: string;
  description: string;
}

const IndividualFeature = ({
  icon,
  title,
  description,
}: IndividualFeatureProps) => {
  return (
    <div
      style={{
        maxWidth: "288px",
      }}
    >
      <Box>
        <Image
          width={{
            _: "48px",
            xs: "72px",
          }}
          style={{
            marginBottom: "16px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          src={icon.src}
          alt="New_logo"
        />
        <Typography color="white" fontSize="24px" textAlign="center">
          {title}
        </Typography>
        <Typography as="body" fontSize="16px" textAlign="center">
          {description}
        </Typography>
      </Box>
    </div>
  );
};

const initialState = {
  scrollYProgress: motionValue(0), // Initial value
};

export const AutFeaturesContext = React.createContext<typeof initialState>(initialState);

export const AutFeaturesProvider = ({ children }) => {
  return (
    <AutFeaturesContext.Provider value={initialState}>
      {children}
    </AutFeaturesContext.Provider>
  );
};

const AutFeatures = () => {
  const { scrollYProgress: scrollY } = useContext(AutFeaturesContext);
  const { dispatch }: any = useContext(DrawerContext);
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress: footerScrollYProgress } =
    useContext(OSFooterContext);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
    axis: "y",
  });

  // Additional translateY for the footer (starts from 0% to -50vh)
  const footerTranslateY = useTransform(
    footerScrollYProgress,
    [0, 1],
    ["0%", "-50vh"]
  );

  const started = useRef(false);

  useEffect(() => {
    scrollYProgress.on("change", (v) => {
      scrollY.set(v);
      if (v > 0 && !started.current) {
        dispatch({
          type: "MODE",
          payload: "dark",
        });
      }
    });
  }, [scrollYProgress]);

  return (
    <section className="features relative h-[100vh]" ref={targetRef}>
      <motion.div
        className="absolute sm:fixed flex origin-center justify-center h-[150vh] sm:h-[100vh] text-white"
        style={{
          top: "0",
          left: "0",
          bottom: "0",
          backgroundImage: `url(${AutFeaturesBg.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          y: footerTranslateY,
        }}
      >
        <FeaturesContainer>
          {AutFeaturesData.map(({ icon, title, description }, index) => (
            <Fragment key={title}>
              <IndividualFeature
                icon={icon}
                title={title}
                description={description}
              ></IndividualFeature>
            </Fragment>
          ))}
        </FeaturesContainer>
      </motion.div>
    </section>
  );
};

export default memo(AutFeatures);
