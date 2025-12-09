import { AboutData } from "common/data";
import Container from "common/components/Container";
import Section, { Content, ContentHalf } from "./aboutTop.style";
import AboutSubtitles from "./AboutSubtitles";
import Definition from "./Definition";
import Typography from "common/components/Typography";

const AboutTop = () => {
  const { title, bottom } = AboutData;
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
        <Content>
          <ContentHalf>
            <Typography
              m="0"
              color="white"
              as="h1"
              fontSize={{
                _: "50px",
                xxl: "72px",

              }}
              mb={{
                _: '30px'
              }}
            >
              {title}
            </Typography>
            <AboutSubtitles />
          </ContentHalf>
          <ContentHalf className="right">
            <Definition />
          </ContentHalf>
        </Content>
      </Container>
    </Section>
  );
};

export default AboutTop;
