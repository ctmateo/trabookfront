import "../sass/components/_bestVacation.scss";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import axios from "axios";

const BestVacationSection = () => {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        const endpointData = await axios.get(
          "https://trabookback-production.up.railway.app/bestvacation"
        );
        setData(endpointData.data);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    getData();
  }, []);
  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };
  const style = {
    width: "521px",
  };
  return (
    <div className="container-bestvacation">
      <div className="info-section">
        <h1 id="title">
          Best <span id="second_color">Vacation Plan</span>
        </h1>
        <p id="paragraph" style={style}>
          Plan your perfect vacation with our travel agency. Choose among
          hundreds of all-inclusive offers!
        </p>
      </div>
      <div className="buttons">
        <button className="prev-button" onClick={handlePrevClick}>
          <FaArrowLeft className="arrow-left" />
        </button>
        <button className="next-button" onClick={handleNextClick}>
          <FaArrowRight className="arrow-right" />
        </button>
      </div>
      <div className="container_cards">
        {data.map((dato, index) => (
          <div
            key={dato.id}
            className="card_bestvacation"
            style={{
              order: (index - currentIndex + data.length) % data.length,
            }}
          >
            <div className="image-contain">
              <img
                src={`${process.env.PUBLIC_URL}/images/bestVacation/${dato.img}.png`}
                alt="logo"
              />
            </div>
            <div className="info">
              <div className="firstline">
                <h1>{dato.located}</h1>
                <p id="price">${dato.price}K</p>
              </div>
              <div className="secondline">
                <div className="days_trip">
                  <img
                    src={`${process.env.PUBLIC_URL}/icons/cards/aeroplane.svg`}
                    alt="aeroplane"
                  />
                  <h3>{dato.days_trip} Days Trip</h3>
                </div>
                <div className="scored">
                  <img
                    src={`${process.env.PUBLIC_URL}/icons/cards/star.png`}
                    alt="star"
                  />
                  <p>{dato.score}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestVacationSection;
