import React, {useState} from "react";
import Styles from "./services.module.css";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  {
    src: "/images/sliderimg1.png",
    logo: "/images/icon.svg",
    heading: "WEB DEVELOPMENT",
    para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, quod impedit?",
    button: "READ MORE",
  },
  {
    src: "/images/sliderimg2.png",
    logo: "/images/icon.svg",
    heading: "WEB DEVELOPMENT",
    para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, quod impedit?",
    button: "READ MORE",
  },
  {
    src: "/images/sliderimg3.png",
    logo: "/images/icon.svg",
    heading: "WEB DEVELOPMENT",
    para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, quod impedit?",
    button: "READ MORE",
  },
  // Add more images as needed
];

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dotsClass: "slick-dots slick-dots-bottom-right",
  };

  return (
    <div className={Styles.service}>
    <div className={Styles.services}>
      <div className={Styles.whatwedo}>
        <div>
          <h3>WHAT WE DO</h3>
        </div>
        <div className={Styles.para}>
          <h2>SERVICES PROVIDED FOR YOU</h2>
          <p>
            Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
            Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed
            lacus nec risus finibus feugiat et fermentum
          </p>
        </div>
      </div>
      <div className={Styles.slider}>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div
              key={index}
              className={Styles.slider_item}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {hoveredIndex === index ? (
                <div className={Styles.image_description}>
                  <img src={image.logo} alt="icon" />
                  <h2>{image.heading}</h2>
                  <p>{image.para}</p>
                  <button><a href="https://www.fylehq.com/">Read More</a></button>
                  {/* {image.description} */}
                </div>
              ) : (
                <img src={image.src} alt={`Slide ${index}`} />
              )}
            </div>
          ))}
        </Slider>
      </div>
    </div>
    </div>
  );
};

export default Services;
