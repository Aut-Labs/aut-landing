import AboutCreateYourStandard from "./AboutCreateYourStandard";
import Section from "./aboutDesktopSections.style";
import AboutDoMore from "./AboutDoMore";
import AboutMyAut from "./AboutMyAut";
import AboutRoles from "./AboutRoles";

const AboutDesktopSection = () => {
  return (
    <Section>
      <AboutMyAut></AboutMyAut>
      <AboutRoles></AboutRoles>
      <AboutDoMore></AboutDoMore>
      {/* <AboutCreateYourStandard></AboutCreateYourStandard> */}
    </Section>
  );
};

export default AboutDesktopSection;
