import "../sass/components/_exclusiveDeals.scss";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import axios from "axios";

const ExclusiveDeals = () => {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        const endpointData = await axios.get("https://trabookback-production.up.railway.app/");
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

  return (
    <div className="containerExclusiveDeals">
      <div className="info-section">
        <h1 id="title">
          Exclusive <span id="second_color">deals & discounts</span>
        </h1>
        <p id="paragraph">
          Discover our fantastic early booking discounts & start planning your
          journey.
        </p>
        <div className="containerCards">
          {data.map((dato, index) => (
            <div
              key={dato.id}
              className="cardExclusiveDeals"
              style={{
                order: (index - currentIndex + data.length) % data.length,
              }}
            >
              <div className="image-container">
                <img
                  src={`${process.env.PUBLIC_URL}/images/exclusiveDeals/${dato.img}.png`}
                  alt="logo"
                  className="image"
                />
              </div>
              <div className="overlay">
                <button className="button">Book Now</button>
              </div>
              <div className="info">
                <div className="firstline">
                  <h1>{dato.located}</h1>
                  <div className="scored">
                    <img
                      src={`${process.env.PUBLIC_URL}/icons/cards/star.png`}
                      alt="star"
                    />
                    <p>{dato.score}</p>
                  </div>
                </div>
                <div className="secondline">
                  <div className="located">
                    <img
                      src={`${process.env.PUBLIC_URL}/icons/cards/located.svg`}
                      alt="iconcapital"
                    />
                    <h3>{dato.capital}</h3>
                  </div>
                  <div className="prices">
                    <p id="inline">${dato.price}</p>
                    <div className="rectangle">
                      <span>${dato.discount}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="buttons">
          <button className="prev-button" onClick={handlePrevClick}>
            <FaArrowLeft className="arrow-left" />
          </button>
          <button className="next-button" onClick={handleNextClick}>
            <FaArrowRight className="arrow-right" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default ExclusiveDeals;
