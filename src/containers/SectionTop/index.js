import Container from "common/components/Container";
import Section, {
  ImagePreview,
  Content,
  Grid,
  RightWrapper,
  ButtonWrapper,
} from "./sectionTop.style";
import Typography from "common/components/Typography";
import Button from "common/components/Button";

const SectionTop = ({
  image,
  title,
  subtitle,
  headerButton,
  link,
  className,
}) => {
  return (
    <Section id="section_top" className={className}>
      <Container
        pt={{
          _: "122px",
          xs: "122px",
          sm: "84px",
          md: "84px",
          xxl: "112px",
        }}
      >
        <Grid>
          <Content>
            <Typography m="0" color="white" as="h1">
              {title}
            </Typography>
            <Typography mb="0" color="white" as="subtitle2" fontWeight="normal">
              {subtitle}
            </Typography>

            {link ? (
              <ButtonWrapper>
                <Button
                  title={link?.title}
                  href={link?.path}
                  target="_blank"
                  as="a"
                  variant="roundOutlined"
                  fontWeight="bold"
                  size="normal"
                  colors="primary"
                  mt={{
                    _: "33px",
                    md: "40px",
                    xxl: "56px",
                  }}
                />
              </ButtonWrapper>
            ) : (
              ""
            )}
          </Content>
          <RightWrapper>
            <ImagePreview>{image}</ImagePreview>
            {headerButton ? <ButtonWrapper>{headerButton}</ButtonWrapper> : ""}
          </RightWrapper>
        </Grid>
      </Container>
    </Section>
  );
};

export default SectionTop;
