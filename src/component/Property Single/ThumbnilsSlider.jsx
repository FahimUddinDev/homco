import Carousel from "react-multi-carousel";
import ThumbnilsCard from "../Cards/ThumbnilsCard";
import { responsiveLogoSlider2 } from "../../utils/responsiveSlider";
import ButtonGroup from "../CustomDot/CustomArrow";

function ThumbnailsSlider() {
  return (
    <div className="mg-top-10">
      <Carousel
        responsive={responsiveLogoSlider2}
        showDots={false}
        infinite={true}
        arrows={false}
        customButtonGroup={<ButtonGroup />}
      >
        <ThumbnilsCard img="img/homec-gallery-thumb1.jpg" />
        <ThumbnilsCard img="img/homec-gallery-thumb2.jpg" />
        <ThumbnilsCard img="img/homec-gallery-thumb3.jpg" />
        <ThumbnilsCard img="img/homec-gallery-thumb2.jpg" />
        <ThumbnilsCard img="img/homec-gallery-thumb1.jpg" />
        <ThumbnilsCard img="img/homec-gallery-thumb3.jpg" />
        <ThumbnilsCard img="img/homec-gallery-thumb2.jpg" />
        <ThumbnilsCard img="img/homec-gallery-thumb1.jpg" />
        <ThumbnilsCard img="img/homec-gallery-thumb3.jpg" />
        <ThumbnilsCard img="img/homec-gallery-thumb1.jpg" />
        <ThumbnilsCard img="img/homec-gallery-thumb2.jpg" />
      </Carousel>
    </div>
  );
}

export default ThumbnailsSlider;
