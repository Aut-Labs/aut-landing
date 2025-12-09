import { AboutData } from "common/data";
import Section, { Content } from "./aboutSubtitles.style";
import Typography from "common/components/Typography";

const AboutSubtitles = () => {
  const { subtitles } = AboutData;
  return (
    <Section id="about_subtitles">
      {subtitles.map(({ title, description }, index) => (
        <Content key={index}>
          <span>
            <Typography m="0" color="white" as="subtitle2">
              {title}
            </Typography>
            <Typography m="0" color="white" as="subtitle2" fontWeight="normal">
              {description}
            </Typography>
          </span>
          {index !== subtitles.length - 1 ? <br /> : ""}
        </Content>
      ))}
    </Section>
  );
};

export default AboutSubtitles;
