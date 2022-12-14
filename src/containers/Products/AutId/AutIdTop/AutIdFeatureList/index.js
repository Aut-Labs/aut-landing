import React from "react";
import PropTypes from "prop-types";
import Box from "common/components/Box";
import { ProductsData } from "common/data";
import Container from "common/components/Container";

import FeatureListSectionWrapper from "./featureList.style";
import SimpleCard from "common/components/SimpleCard";
import Typography from "common/components/Typography";
import Image from "common/components/Image";

const AutIdFeatureListSection = ({
  row,
  col,
  contentStyle,
  blockWrapperStyle,
  featureTitle,
  featureDescription,
}) => {
  const { features, featureHeader, featureSubtitle } = ProductsData.autId;
  return (
    <FeatureListSectionWrapper>
      <Container>
        <Box className="featureWrapper">
          <Typography>{featureTitle}</Typography>
          <Typography>{featureDescription}</Typography>
        </Box>
        <Box className="row" {...row} style={{ gap: "50px" }}>
          {features.map((feature, index) => (
            <Box
              className="col"
              {...col}
              key={index}
              style={{
                border: "1px solid white",
                maxWidth: "24rem",
                height: "24rem",
              }}
            >
              <SimpleCard
                icon={<Image src={feature?.icon?.src} alt="Icon Image" />}
                wrapperStyle={blockWrapperStyle}
                contentStyle={contentStyle}
                title={<Typography as="h1">{feature.title}</Typography>}
                description={<Typography>{feature.description}</Typography>}
                className="featureList"
              />
            </Box>
          ))}
        </Box>
      </Container>
    </FeatureListSectionWrapper>
  );
};

// ProductListSection style props
AutIdFeatureListSection.propTypes = {
  sectionHeader: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  featureTitle: PropTypes.object,
  featureDescription: PropTypes.object,
};

// ProductListSection default style
AutIdFeatureListSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: "wrap",
    display: "flex",
    justifyContent: "center",
  },
  // ProductListSection col default style
  col: {
    width: [1, 1, 1 / 2, 1 / 3, 1 / 3],
  },
  // ProductListSection block wrapper default style
  blockWrapperStyle: {
    p: ["30px", "20px", "20px", "20px"],
  },

  // ProductListSection content default style
  contentStyle: {
    textAlign: "center",
  },
  // ProductListSection title default style
  featureTitle: {
    fontWeight: "400",
    color: "#fff",
    lineHeight: "1.5",
    mb: ["10px", "10px", "10px", "10px"],
    letterSpacing: "-0.025em",
    mt: ["10px", "10px", "10px", "10px"],
  },
  // ProductListSection description default style
  featureDescription: {
    lineHeight: "1.6",
    color: "#fff",
  },
};

export default AutIdFeatureListSection;
