import HomeSearch from "../Filter/HomeSearch";
import Title from "../Title";
import SingleList from "./SingleList";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import TitleBtn from "../Button/TitleBtn";

function PropertyListing() {
  return (
    <section className="pd-top-120 pd-btm-120">
      <div className="container homec-listing__container">
        <div className="row">
          <div className="col-12">
            <Title
              firstText="View All 329 New Listings"
              secondText="Explore a Neighborhood or City"
              marginSize="60"
            />
            <HomeSearch />
          </div>
        </div>

        <div className="row" style={{ zIndex: "-1" }}>
          <div className="col-12" data-aos="fade-up" data-aos-delay="600">
            {/* Homec Listing  */}
            <div className=" mg-top-40 container">
              <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}
              >
                <Masonry gutter="30px">
                  <SingleList
                    listing="4"
                    place="Hong Kong"
                    img="img/listing-img1.jpg"
                    link="#"
                  />
                  <SingleList
                    listing="4"
                    place="New Castle"
                    img="img/listing-img2.jpg"
                    link="#"
                  />
                  <SingleList
                    listing="4"
                    place="Tokyo"
                    img="img/listing-img3.jpg"
                    link="#"
                  />
                  <SingleList
                    listing="4"
                    place="Boston"
                    img="img/listing-img4.jpg"
                    link="#"
                  />{" "}
                  <SingleList
                    listing="4"
                    place="New Castle"
                    img="img/listing-img5.jpg"
                    link="#"
                  />
                  <SingleList
                    listing="4"
                    place="New Castle"
                    img="img/listing-img6.jpg"
                    link="#"
                  />
                </Masonry>
              </ResponsiveMasonry>
            </div>
            {/* Homec listing end  */}
          </div>
        </div>
        <div className="row">
          <TitleBtn link="property" text="See all City" delay="700" />
        </div>
      </div>
    </section>
  );
}

export default PropertyListing;
