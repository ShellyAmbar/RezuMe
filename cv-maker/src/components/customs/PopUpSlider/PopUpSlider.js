import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PopUpSlider.scss";

function PopUpSlider(props) {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
  };
  const photos = [
    "images2/1.jpg",
    "images2/2.jpg",
    "images2/3.jpg",
    "images2/4.jpg",
    "images2/5.jpg",
  ];
  return (
    <div className="slider">
      <div className="slider-title">{props.sliderTitle}</div>
      <Slider {...settings}>
        <div className="card-wrapper-slider">
          <div className="card-slider">
            <div className="card-image-slider">
              <img src={photos[0]} />
            </div>
            <ul className="social-icons-slider">
              <li>
                <a href="#">
                  <i class="fab fa-youtube"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-github"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-staylinked"></i>
                </a>
              </li>
            </ul>

            <div className="details-slider">
              <h2>
                Vecation <span className="title-slider">Title</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="card-wrapper-slider">
          <div className="card-slider">
            <div className="card-image-slider">
              <img src={photos[1]} />
            </div>
            <ul className="social-icons-slider">
              <li>
                <a href="#">
                  <i class="fab fa-youtube"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-github"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-staylinked"></i>
                </a>
              </li>
            </ul>

            <div className="details-slider">
              <h1>
                {" "}
                Shelly Amber{" "}
                <span className="sub-title-card">React DEveloper</span>
              </h1>
            </div>
          </div>
        </div>

        <div className="card-wrapper-slider">
          <div className="card-slider">
            <div className="card-image-slider">
              <img src={photos[2]} />
            </div>
            <ul className="social-icons-slider">
              <li>
                <a href="#">
                  <i class="fab fa-youtube"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-github"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-staylinked"></i>
                </a>
              </li>
            </ul>

            <div className="details-slider">
              <h2>
                Vecation <span className="title-slider">Title</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="card-wrapper-slider">
          <div className="card-slider">
            <div className="card-image-slider">
              <img src={photos[3]} />
            </div>
            <ul className="social-icons-slider">
              <li>
                <a href="#">
                  <i class="fab fa-youtube"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-github"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-staylinked"></i>
                </a>
              </li>
            </ul>
            <div className="details-slider">
              <h2>
                John Doe <span className="sub-title-card">UI Developer</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="card-wrapper-slider">
          <div className="card-slider">
            <div className="card-image-slider">
              <img src={photos[4]} />
            </div>
            <ul className="social-icons-slider">
              <li>
                <a href="#">
                  <i class="fab fa-youtube"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-github"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-staylinked"></i>
                </a>
              </li>
            </ul>

            <div className="details-slider">
              <h2>
                Vecation <span className="title-slider">Title</span>
              </h2>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default PopUpSlider;
