import { ProductsData } from "common/data";
import SectionTop from "containers/SectionTop";
import VideoTop from "containers/SectionTop/VideoTop";

const DaoExpanderTop = () => {
  const { title, subtitle, subtitle2, video, variant } = ProductsData.daoExpander;
  return (
    <SectionTop
      image={<VideoTop {...video} />}
      title={title}
      subtitle={subtitle}
      subtitle2={subtitle2}
      variant={variant}
    />
  );
};

export default DaoExpanderTop;
