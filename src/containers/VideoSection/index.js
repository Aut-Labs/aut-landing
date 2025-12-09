import React from "react";
import { Icon } from "react-icons-kit";
import { ic_play_arrow } from "react-icons-kit/md/ic_play_arrow";
import { openModal } from "@redq/reuse-modal";
import Button from "common/components/Button";
import Container from "common/components/Container";
import Text from "common/components/Text";

import SectionWrapper, { VideoWrapper, VideoArea } from "./experience.style";
import "@redq/reuse-modal/lib/index.css";
import Image from "common/components/Image";
import Typography from "common/components/Typography";

const ModalContent = ({ url }) => (
  <VideoWrapper>
    <iframe title="Video" src={url} frameBorder="0" />
  </VideoWrapper>
);

const VideoSection = ({ url, image, title, subtitle }) => {
  // modal handler
  const handleVideoModal = () => {
    openModal({
      config: {
        className: "video-modal",
        disableDragging: true,
        default: {
          width: "auto",
          height: "auto",
          x: 0,
          y: 0,
        },
      },
      component: ModalContent,
      componentProps: { url },
      closeOnClickOutside: true,
    });
  };

  return (
    <SectionWrapper id="experience">
      <Container>
        {title && (
          <Typography as="h2" className="title">
            {title}
          </Typography>
        )}
        {subtitle && <Text as="h3" className="subtitle" content={subtitle} />}
        <VideoArea onClick={handleVideoModal}>
          <Image src={image} alt="Aut Video" />
          <Button
            className="video__btn"
            icon={<Icon className="plus" icon={ic_play_arrow} />}
          />
        </VideoArea>
      </Container>
    </SectionWrapper>
  );
};

export default VideoSection;
