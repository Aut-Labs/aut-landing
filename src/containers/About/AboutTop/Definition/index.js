import { AboutData } from "common/data";
import Section, {
  Content,
  DefinitionBox,
  DefinitionItem,
  DefinitionTop,
  SameLineContainer,
} from "./definition.style";
import Typography from "common/components/Typography";

const Definition = () => {
  const { definition } = AboutData;

  return (
    <Section id="about_subtitles">
      <Content>
        <DefinitionBox>
          <DefinitionTop>
            <Typography m="0 5px 0 0" color="white" as="h3">
              {definition?.term}
            </Typography>
            <Typography
              m="0"
              color="white"
              as="h3"
              fontWeight="normal"
              fontFamily="var(--fractul-regular)" 
            >
              {definition?.noun}
            </Typography>
          </DefinitionTop>
          <Typography
            m="10px 0"
            color="white"
            as="subtitle2"
            fontWeight="normal"
          >
            {definition.pronunciation}
          </Typography>
          <SameLineContainer
            style={{
              marginBottom: "20px",
            }}
          >
            <Typography m="0" color="white" as="subtitle2" fontWeight="normal">
              {definition.pluralTitle}
            </Typography>
            <Typography m="0" color="white" as="subtitle2">
              {definition.pluralValue}
            </Typography>
          </SameLineContainer>

          <SameLineContainer
            style={{
              marginBottom: "20px",
            }}
          >
            <Typography m="0" color="white" as="subtitle1" fontWeight="bold">
              {definition.defintionTitle}
            </Typography>
            <Typography m="0" color="white" as="subtitle1" fontWeight="bold">
              {definition.term}
            </Typography>
          </SameLineContainer>
          {definition.definitions.map((n, i) => {
            return (
              <DefinitionItem style={{
                marginBottom: i !== definition.definitions.length - 1 ? '20px' : '0',
                
              }}key={i}>
                <Typography m="0" color="white" as="body">
                  {`${i + 1}.`}
                </Typography>
                <Typography m="0" color="white" as="body">
                  {n}
                </Typography>
              </DefinitionItem>
            );
          })}
        </DefinitionBox>
      </Content>
    </Section>
  );
};

export default Definition;
