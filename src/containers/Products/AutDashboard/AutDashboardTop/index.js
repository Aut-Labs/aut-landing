import { ProductsData } from "common/data";
import SectionTop from "containers/SectionTop";
import VideoTop from "containers/SectionTop/VideoTop";

const ProductsDashboardTop = () => {
  const { title, subtitle, subtitle2, subtitle3, video } =
    ProductsData.dashboard;
  return (
    <SectionTop
      image={<VideoTop {...video} />}
      title={title}
      subtitle={subtitle}
      subtitle2={subtitle2}
      subtitle3={subtitle3}
    />
  );
};

export default ProductsDashboardTop;
