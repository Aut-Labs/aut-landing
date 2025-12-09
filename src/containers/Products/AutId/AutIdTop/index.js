import { ProductsData } from "common/data";
import SectionTop from "containers/SectionTop";
import VideoTop from "containers/SectionTop/VideoTop";

const AutIdTop = () => {
  const { title, subtitle, video } = ProductsData.autId;
  return (
    <SectionTop
      image={<VideoTop {...video} />}
      title={title}
      subtitle={subtitle}
    />
  );
};

export default AutIdTop;
