import Title from "../Title";
import ReviewCardV2 from "../Cards/ReviewCardV2";
import LogoCard from "../Cards/LogoCard";
import Carousel from "react-multi-carousel";
import {
  responsiveCustomerReviewSlider,
  responsiveLogoSlider,
} from "../../utils/responsiveSlider";
import reviews from "../../data/reviews";

function CustomerReviews() {
  return (
    <section
      className="homec-bg-third-color pd-top-120 pd-btm-120 homec-bg-cover"
      style={{ backgroundImage: "url('img/bg-shape-three.svg'" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* <!-- Section TItle --> */}
            <Title
              firstText="CUSTOMER REVIEWS"
              secondText="What’s Our Customer Say"
              marginSize="60"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            {/* <!-- Testimonial Slider --> */}

            <Carousel
              responsive={responsiveCustomerReviewSlider}
              showDots={false}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={3000}
              removeArrowOnDeviceType={[
                "superLargeDesktop",
                "desktop",
                "tablet",
                "mobile",
              ]}
            >
              {reviews?.map((review) => (
                <ReviewCardV2
                  key={review.id}
                  dating={review.rating}
                  text={review.text}
                  authorName={review.authorName}
                  authorPosition={review.authorPosition}
                  authorImg={review.img}
                />
              ))}
            </Carousel>

            {/* <!-- End Testimonial Slider --> */}
          </div>
        </div>

        <div className="row mg-top-50">
          <div className="col-12">
            <h4 className="homec-medium-title text-center mg-btm-30">
              Trusted by big brands
            </h4>
            {/* <!-- Clients Logo Slider --> */}
            <div className="swiper mySwiper homec-slider-client loading">
              <Carousel
                responsive={responsiveLogoSlider}
                showDots={false}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                removeArrowOnDeviceType={[
                  "superLargeDesktop",
                  "desktop",
                  "tablet",
                  "mobile",
                ]}
              >
                <LogoCard link="#" img="img/cl-logo-1.png" />
                <LogoCard link="#" img="img/cl-logo-2.png" />
                <LogoCard link="#" img="img/cl-logo-3.png" />
                <LogoCard link="#" img="img/cl-logo-4.png" />
                <LogoCard link="#" img="img/cl-logo-3.png" />
                <LogoCard link="#" img="img/cl-logo-2.png" />
                <LogoCard link="#" img="img/cl-logo-1.png" />
                <LogoCard link="#" img="img/cl-logo-4.png" />
                <LogoCard link="#" img="img/cl-logo-2.png" />
                <LogoCard link="#" img="img/cl-logo-3.png" />
                <LogoCard link="#" img="img/cl-logo-4.png" />
              </Carousel>
            </div>
            {/* <!-- End Clients Logo Slider --> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CustomerReviews;
