import React from "react";
import { Icon } from "react-icons-kit";
import { ic_play_arrow } from "react-icons-kit/md/ic_play_arrow";
import { openModal } from "@redq/reuse-modal";
import Button from "common/components/Button";

import { VideoWrapper, VideoArea } from "./video-top.style";
import "@redq/reuse-modal/lib/index.css";
import Image from "common/components/Image";

const ModalContent = ({ url }) => (
  <VideoWrapper>
    <iframe title="Video" src={url} frameBorder="0" />
  </VideoWrapper>
);

const VideoTop = ({ url, image, disableVideo }) => {
  const handleVideoModal = () => {
    if (disableVideo) {
      return;
    }
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
    <VideoArea onClick={handleVideoModal}>
      <Image src={image} alt="Aut Video" />

      {!disableVideo && (
        <Button
          className="video__btn"
          icon={<Icon className="plus" icon={ic_play_arrow} />}
        />
      )}
    </VideoArea>
  );
};

export default VideoTop;
