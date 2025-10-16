/* eslint-disable @next/next/no-img-element */
import React from "react";
import PropTypes from "prop-types";
import { ProductList } from "common/data";
import ProductListSectionWrapper, {
  Content,
  Grid,
  ImagePreview,
  ProductsWrapper,
  RightWrapper,
} from "./productList.style";
import Container from "common/components/Container";
import Button from "common/components/Button";
import ProductSection from "common/components/ProductSection";
import Typography from "common/components/Typography";
import Image from "common/components/Image";

const ProductListSection = ({ contentStyle, blockWrapperStyle }) => {
  return (
    <>
      <ProductsWrapper>
        {ProductList.map((product, index) =>
          product.isActive ? (
            <ProductListSectionWrapper
              key={`section-${index}`}
              className={`wrapper-${index}`}
            >
              <Container>
                <Grid>
                  <Content>
                    <ProductSection
                      icon={
                        <Image
                          height={{
                            _: "36px",
                            xxl: "50px",
                          }}
                          width={{
                            _: "36px",
                            xxl: "50px",
                          }}
                          src={product?.icon?.src}
                          alt="Icon Image"
                        />
                      }
                      wrapperStyle={blockWrapperStyle}
                      contentStyle={contentStyle}
                      iconPosition="right"
                      title={
                        <Typography
                          m="0"
                          color="white"
                          as="h3"
                          fontWeight="normal"
                        >
                          {product?.title}
                        </Typography>
                      }
                      description={
                        <Typography
                          m="0"
                          color="white"
                          as="subtitle2"
                          textAlign="left"
                          fontWeight="normal"
                        >
                          {product?.description}
                        </Typography>
                      }
                      className="productList"
                      button={
                        <Button
                          title="Learn More"
                          href={product.link}
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
                      }
                    />
                  </Content>
                  <RightWrapper>
                    <ImagePreview>
                      <img src={product.image} alt="Product Image" />
                    </ImagePreview>
                  </RightWrapper>
                </Grid>
              </Container>
            </ProductListSectionWrapper>
          ) : (
            <></>
          )
        )}
      </ProductsWrapper>
    </>
  );
};

// ProductListSection style props
ProductListSection.propTypes = {
  sectionHeader: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  productTitle: PropTypes.object,
  productDescription: PropTypes.object,
};

export default ProductListSection;
