import { RoadmapData } from "common/data";
import SectionTop from "containers/SectionTop";
import VideoTop from "containers/SectionTop/VideoTop";

const RoadmapTop = () => {
  const { title, subtitle, video } = RoadmapData;
  return (
    <SectionTop
      image={<VideoTop {...video} />}
      title={title}
      subtitle={subtitle}
    />
  );
};

export default RoadmapTop;
