import { ManifestoData } from "common/data";
import Container from "common/components/Container";
import Section, { Content } from "./chapters.style";
import Image from "common/components/Image";
import Typography from "common/components/Typography";

const ManifestoChapters = () => {
  const { list, divider } = ManifestoData.chapter;
  return (
    <Section id="manifesto_chapters">
      <Container width="50%">
        <Content>
          {list.map(({ title, subtitle, description }, index) => (
            <>
              <Typography as="h3">{title}</Typography>
              <Typography as="h4">{subtitle}</Typography>
              <Typography>{description}</Typography>
              {list.length - 1 > index && (
                <Image className="aut-line" src={divider.src} alt="Aut Line" />
              )}
            </>
          ))}
        </Content>
      </Container>
    </Section>
  );
};

export default ManifestoChapters;
