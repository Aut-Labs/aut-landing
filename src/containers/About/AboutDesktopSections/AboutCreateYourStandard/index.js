import { AboutData } from "common/data";
import Container from "common/components/Container";
import Typography from "common/components/Typography";
import NextImage from "common/components/NextImage";
import {
  Content,
  ImageWrapper,
  Section,
  TypographyWrapper,
} from "./aboutCreateYourStandard.style";
import Image from "common/components/Image";

const AboutCreateYourStandard = () => {
  const { createYourStandard, bottom } = AboutData;

  return (
    <Section id="section_desktop">
      <ImageWrapper>
        <Image src={createYourStandard.image} alt="Image" />
      </ImageWrapper>
      <Container
        pt={{
          _: "50px",
          md: "84px",
          xxl: "112px",
        }}
      >
        <Content>
          <Typography
            m="0"
            color="white"
            as="h2"
            textAlign="center"
            fontSize={{
              _: "40px",
              md: "52px",
              xxl: "72px",
            }}
          >
            {bottom.paragraphHeading2}
          </Typography>
          <TypographyWrapper>
            <Typography mb="0" color="white" as="subtitle2" fontWeight="normal">
              {bottom.paragraph2}
            </Typography>
          </TypographyWrapper>
        </Content>
      </Container>
    </Section>
  );
};

export default AboutCreateYourStandard;
