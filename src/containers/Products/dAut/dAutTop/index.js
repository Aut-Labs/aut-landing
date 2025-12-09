import { ProductsData } from "common/data";
import SectionTop from "containers/SectionTop";
import VideoTop from "containers/SectionTop/VideoTop";

const DAutTop = () => {
  const {
    title,
    subtitle,
    subtitle2,
    subtitle3,
    headerButton,
    video,
    className,
  } = ProductsData.dAut;
  return (
    <SectionTop
      image={<VideoTop {...video} />}
      title={title}
      subtitle={subtitle}
      subtitle2={subtitle2}
      subtitle3={subtitle3}
      className={className}
      headerButton={headerButton}
    />
  );
};

export default DAutTop;
