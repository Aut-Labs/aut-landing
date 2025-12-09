import { OptOutData } from "common/data";
import SectionTop from "containers/SectionTop";
import CircleImage from "./CircleImage";

const OptOutTop = () => {
  const { pulseButtons, title, subtitle, link } = OptOutData;
  return (
    <SectionTop
      hideRightOnMobile
      image={<CircleImage pulseButtons={pulseButtons} />}
      title={title}
      subtitle={subtitle}
      link={link}
      className="snap center"
    />
  );
};

export default OptOutTop;
