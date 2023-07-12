import PropertyFrom from "../Form/PropertyFrom";
import Header from "../Header";
import Footer from "../Footer";
import DownloadApp from "../DownloadApp";
import Breadcrumbs from "../Breadcrumbs";
import HistoryLinks from "../Breadcrumbs/HistoryLinks";
import Preloader from "../Loader";
import { useEffect, useState } from "react";
import GoTopBtn from "../Button/GoTopBtn";

function EditProperty() {
  const [isLoading, setisLoadingg] = useState(true);
  useEffect(() => {
    setisLoadingg(false);
  }, []);

  const propertyInfo = {
    title: "",
    slug: "",
    propertyType: "",
    purpose: "",
    rentPeriod: "",
    propertyPrice: "",
    area: "",
    unit: "",
    bedroom: "",
    bathroom: "",
    garage: "",
    kitchen: "",
    description: "",
    propertyImage: [
      { id: 1, img: "img/slide-thumb1.png" },
      { id: 2, img: "img/slide-thumb2.png" },
      { id: 3, img: "img/slide-thumb3.png" },
    ],
    thumbnail: "img/bg-uploaded-img.png",
    video: {
      videoImg: "img/property-video-bg.jpg",
      video: "",
      description: "",
      YTVideoId: "",
    },
    location: { city: "", address: "", addressDetails: "", googleMap: "" },
    aminities: {
      Breakfast: true,
      Lunch: false,
      ["Free Wifi"]: false,
      ["Swimming Pool"]: false,
      Cleaning: false,
    },
    nearestLocation: [
      { id: 1, key: "", value: "" },
      { id: 2, key: "", value: "" },
      { id: 3, key: "", value: "" },
    ],
    additionalInformation: [
      { id: 1, key: "", value: "" },
      { id: 2, key: "", value: "" },
      { id: 3, key: "", value: "" },
    ],
    propertyPlan: [
      {
        id: 1,
        videoId: "",
        thumbnail: "img/property-map-img.jpg",
        desc: "",
      },
      {
        id: 2,
        videoId: "",
        thumbnail: "img/property-map-img.jpg",
        desc: "",
      },
      {
        id: 3,
        videoId: "",
        thumbnail: "img/property-map-img.jpg",
        desc: "",
      },
    ],
    seoInfo: {
      title: "",
      desc: "",
      status: true,
      urgentProperty: false,
      featured: true,
      topProperty: false,
    },
  };

  let component = undefined;
  if (isLoading) {
    component = <Preloader />;
  } else {
    component = (
      <>
        <Header />
        <Breadcrumbs
          title="Edit Property"
          titlePosition="bottom"
          background="url(img/bread-overlay.jpg)"
        >
          <HistoryLinks link="/home" text="Home" />
          <HistoryLinks
            link="/edit-property"
            text="Edit Property"
            isActive={true}
          />
        </Breadcrumbs>
        <PropertyFrom propertyInfo={propertyInfo} />
        <DownloadApp />
        <Footer />
        <GoTopBtn />
      </>
    );
  }
  return component;
}

export default EditProperty;
