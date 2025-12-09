import { AboutData } from "common/data";
import Container from "common/components/Container";
import {
  Content,
  ContentHalf,
  ContentImage,
  Description,
  Section,
  TitleBox,
} from "./aboutBottom.style";
import Typography from "common/components/Typography";
import NextImage from "common/components/NextImage";
import Image from "common/components/Image";

const AboutBottom = () => {
  const { bottom } = AboutData;
  return (
    <Section id="section_bottom">
      <Container>
        <TitleBox>
          <Typography m="20px" color="white" as="h4" textAlign="center" fontSize="30px">
            {bottom.title}
          </Typography>
          <Typography
            m="0 20px 20px 20px"
            color="white"
            as="h3"
            textAlign="center"
            display={{
              _: "none",
              md: "flex",
            }}
          >
            {bottom.subtitle}
          </Typography>
        </TitleBox>
        <Content>
          <Description>
            <ContentHalf>
              <Typography m="0" color="white" as="body" textAlign="left">
                {bottom.description1}
              </Typography>
              <Typography
                m="30px 0"
                color="white"
                as="body"
                textAlign="left"
                fontWeight="bold"
              >
                {bottom.paragraphHeading1}
              </Typography>
              <Typography m="0" color="white" as="body" textAlign="left">
                {bottom.paragraph1}
              </Typography>
            </ContentHalf>
            <ContentHalf>
              <Typography m="50px" color="white" as="h3" textAlign="center">
                {bottom.subtitle}
              </Typography>
              <Typography m="0" color="white" as="body" textAlign="left">
                {bottom.description2}
              </Typography>
              <Typography
                m="30px 0"
                color="white"
                as="body"
                textAlign="left"
                fontWeight="bold"
              >
                {bottom.paragraphHeading2}
              </Typography>
              <Typography m="0" color="white" as="body" textAlign="left">
                {bottom.paragraph2}
              </Typography>
            </ContentHalf>
          </Description>
        </Content>
        <ContentImage>
          <Image alt="Image" src={bottom.image}></Image>
        </ContentImage>
      </Container>
    </Section>
  );
};

export default AboutBottom;
