import Container from "common/components/Container";
import { RoadmapData } from "common/data";
import Section from "./roadmap.styles";

const isOdd = (i) => (i % 2 === 0 ? "left" : "right");

const Roadmap = () => {
  const { items } = RoadmapData;
  return (
    <Section id="roadmap">
      <Container>
        {items.map(({ title, subtitle }, index) => (
          <div
            key={`roadmap-item-${index}`}
            className={`timeline-block timeline-block-${isOdd(index)}`}
          >
            <div className="marker" />
            <div className="timeline-content">
              <h3>{title}</h3>
              <p>{subtitle}</p>
            </div>
          </div>
        ))}
      </Container>
    </Section>
  );
};

export default Roadmap;
