import React from "react";
import "../sass/components/_banner.scss"
const Banner = () => {
  return (
    <div className="banner-container">
      <div className="column-left">
        <h1 className="title-banner">
          Get started your exciting <span>journey</span> with us.
        </h1>
        <p className="paragraph">
          A Team of experienced tourism professionals will provide you with the
          best advice and tips for your desired place.
        </p>
        <button className="outline-button">Discover Now</button>
      </div>
      <div className="column-right">
        <img src={`${process.env.PUBLIC_URL}/images/tourist_banner.png`} alt="img" id="img-banner" />
        <div className="square-cover"></div>
        <div className="semi-circle"></div>
      </div>
    </div>
  );
};

export default Banner;
