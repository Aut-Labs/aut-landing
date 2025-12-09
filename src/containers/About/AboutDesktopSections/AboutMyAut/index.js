/* eslint-disable @next/next/no-img-element */
import Container from "common/components/Container";
import Image from "common/components/Image";
import NextImage from "common/components/NextImage";
import Typography from "common/components/Typography";
import useWindowSize from "common/components/window-size";
import { AboutData } from "common/data";
import AboutCircle from "./AboutCircle";
import Section, { ImageRow, ImageWrapper, TitleBox } from "./aboutMyAut.style";

const AboutMyAut = () => {
  const { myAut } = AboutData;
  const { width } = useWindowSize();
  return (
    <Section id="section_top">
      <Container
        pt={{
          _: "122px",
          xs: "122px",
          sm: "84px",
          md: "84px",
          xxl: "112px",
        }}
      >
        <TitleBox>
          <Typography m="20px" color="white" as="h3" textAlign="center">
            {myAut.title}
          </Typography>
        </TitleBox>
        <ImageRow
          style={{
            marginBottom: "-30px",
          }}
        >
          <AboutCircle
            height={width < 1920 ? 310 : 380}
            width={width < 1920 ? 310 : 380}
            text={myAut.desc1}
          ></AboutCircle>
          <ImageWrapper>
            <img src={myAut.image} alt="Image" />
          </ImageWrapper>
          <AboutCircle
            height={width < 1920 ? 310 : 380}
            width={width < 1920 ? 310 : 380}
            text={myAut.desc2}
          ></AboutCircle>
        </ImageRow>
        <ImageRow>
          <AboutCircle
            height={width < 1920 ? 310 : 380}
            width={width < 1920 ? 310 : 380}
            text={myAut.desc3}
          ></AboutCircle>
        </ImageRow>
      </Container>
    </Section>
  );
};

export default AboutMyAut;
