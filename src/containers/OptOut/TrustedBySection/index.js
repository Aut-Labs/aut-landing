/* eslint-disable @next/next/no-img-element */
import React from "react";
import Container from "common/components/Container";
import SectionWrapper, {
  ButtonWrapper,
  Content,
  Grid,
  ImagePreview,
  LeftWrapper,
  SvgContainer,
  SwiperContainer,
} from "./trustedBySection.style";
import { OptOutData } from "common/data";
import Button from "common/components/Button";
import Typography from "common/components/Typography";
import Footer from "containers/Footer";
import Image from "common/components/Image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Box from "common/components/Box";

const TrustedBySection = () => {
  const { title, description } = OptOutData.trustedBy;
  return (
    <SectionWrapper id="expander" className="snap space-between">
      <Container
        pt={{
          _: "50px",
          md: "84px",
          xxl: "112px",
        }}
      >
        <Content>
          <Typography
            mb={{
              md: "10px",
              xl: "25px",
              xxl: "50px",
            }}
            mt="0"
            color="white"
            as="h3"
            textAlign="center"
          >
            {title}
          </Typography>

          <SwiperContainer>
            <Swiper
              breakpoints={{
                320: {
                  slidesPerView: 'auto'
                },
                768: {
                  slidesPerView: 2,
                },
                990: {
                  slidesPerView: 3,
                },
                1220: {
                  slidesPerView: 4,
                },
                1366: {
                  slidesPerView: 5,
                },
                1920: {
                  slidesPerView: 5,
                },
              }}
              spaceBetween={20}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <SvgContainer>SVG Here</SvgContainer>
              </SwiperSlide>
              <SwiperSlide>
                <SvgContainer>SVG Here</SvgContainer>
              </SwiperSlide>
              <SwiperSlide>
                <SvgContainer>SVG Here</SvgContainer>
              </SwiperSlide>
              <SwiperSlide>
                <SvgContainer>SVG Here</SvgContainer>
              </SwiperSlide>
              <SwiperSlide>
                <SvgContainer>SVG Here</SvgContainer>
              </SwiperSlide>
              <SwiperSlide>
                <SvgContainer>SVG Here</SvgContainer>
              </SwiperSlide>
              <SwiperSlide>
                <SvgContainer>SVG Here</SvgContainer>
              </SwiperSlide>
              <SwiperSlide>
                <SvgContainer>SVG Here</SvgContainer>
              </SwiperSlide>
              <SwiperSlide>
                <SvgContainer>SVG Here</SvgContainer>
              </SwiperSlide>
              <SwiperSlide>
                <SvgContainer>SVG Here</SvgContainer>
              </SwiperSlide>
            </Swiper>
          </SwiperContainer>

          <Typography
            mt={{
              md: "10px",
              xl: "25px",
              xxl: "50px",
            }}
            color="white"
            as="body"
            fontWeight="normal"
            textAlign="center"
          >
            {description}
          </Typography>
        </Content>
      </Container>
      <Footer />
    </SectionWrapper>
  );
};

export default TrustedBySection;
