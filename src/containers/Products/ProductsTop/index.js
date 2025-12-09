import { ProductsData } from "common/data";
import Container from "common/components/Container";
import Typography from "common/components/Typography";
import {
  Content,
  ImageWrapper,
  ProductTopSectionWrapper,
} from "./productsTop.style";
import NextImage from "common/components/NextImage";
import Image from "common/components/Image";

const ProductsTop = () => {
  const { title, subtitle, image } = ProductsData;

  return (
    <ProductTopSectionWrapper id="section_top" style={{}}>
      <ImageWrapper>
        <Image src={image} alt="Image" />
      </ImageWrapper>
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
          <Typography
            m="0"
            color="white"
            as="h1"
            fontSize={{
              _: "50px",
              md: "84px",
              xxl: "120px",
            }}
          >
            {title}
          </Typography>
          <Typography
            mb="0"
            color="white"
            as="h3"
            fontWeight="normal"
            fontFamily="var(--fractul-regular)" 
            fontSize={{
              _: "16px",
              md: "33px",
              xxl: "48px",
            }}
          >
            {subtitle}
          </Typography>
        </Content>
      </Container>
    </ProductTopSectionWrapper>
  );
};

export default ProductsTop;
