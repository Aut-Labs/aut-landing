import useWindowSize from "common/components/window-size";
import AboutCircleHalo from "./AboutCircleHalo";

const { default: Container } = require("common/components/Container");
const { AboutData } = require("common/data");
const {
  default: Section,
  ImageRow,
  CircleWrapper,
} = require("./aboutRoles.style");

const AboutRoles = () => {
  const { roles } = AboutData;
  const { width } = useWindowSize();
  return (
    <Section id="section_desktop">
      <Container
        pt={{
          _: "50px",
          md: "84px",
          xxl: "112px",
        }}
      >
        <ImageRow>
          {roles.map((role, index) => (
            <CircleWrapper
              key={`roles-${index}`}
              style={{
                marginRight: index === roles.length - 1 ? "0px" : "-30px",
              }}
            >
              <AboutCircleHalo
                height={width < 1280 ? 250 : width < 1920 ? 300 : 445}
                width={width < 1280 ? 250 : width < 1920 ? 300 : 445}
                text={role.title}
              ></AboutCircleHalo>
            </CircleWrapper>
          ))}
        </ImageRow>
      </Container>
    </Section>
  );
};

export default AboutRoles;
