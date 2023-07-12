import { responsiveSmallAgentsSlider } from "../../utils/responsiveSlider";
import ImageCard from "../Cards/ImageCard";
import Carousel from "react-multi-carousel";

function SingleSlider() {
  return (
    <Carousel
      responsive={responsiveSmallAgentsSlider}
      infinite={true}
      autoPlay={true}
      showDots={false}
      customTransition="all ease 0.5"
      autoPlaySpeed={5000}
      removeArrowOnDeviceType={[
        "superLargeDesktop",
        "desktop",
        "tablet",
        "mobile",
      ]}
    >
      <ImageCard
        price="3,976"
        duration="Month"
        title="Modern House With Pool"
        text="1901 Thornridge Cir. Shiloh, Hawaii 81063"
        img="img/homec-gallery-1.jpg"
      />
      <ImageCard
        price="3,976"
        duration="Month"
        title="Affordable Green Villa House"
        text="1901 Thornridge Cir. Shiloh, Hawaii 81063"
        img="img/homec-gallery-2.jpg"
      />
      <ImageCard
        price="3,976"
        duration="Month"
        title="Modern House With Pool"
        text="1901 Thornridge Cir. Shiloh, Hawaii 81063"
        img="img/homec-gallery-1.jpg"
      />
      <ImageCard
        price="3,976"
        duration="Month"
        title="Affordable Green Villa House"
        text="1901 Thornridge Cir. Shiloh, Hawaii 81063"
        img="img/homec-gallery-2.jpg"
      />
    </Carousel>
  );
}

export default SingleSlider;
