import { ManifestoData } from "common/data";
import Container from "common/components/Container";
import Section, { Content } from "./sectionTop.style";
import Typography from "common/components/Typography";

const ManifestoTop = () => {
  const { title, description } = ManifestoData;
  return (
    <Section id="section_top">
      <Container>
        <Content>
          <Typography as="h1">{title}</Typography>
          <Typography>{description}</Typography>
        </Content>
      </Container>
    </Section>
  );
};

export default ManifestoTop;
