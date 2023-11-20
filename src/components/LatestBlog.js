import React, { useState, useEffect } from "react";
import axios from "axios";
import "../sass/components/_latestBlog.scss";

const LatestBlog = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const endpointData = await axios.get("https://trabookback-production.up.railway.app/blog");
        setData(endpointData.data);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    getData();
  }, []);

  const styletitle = {
    textAlign: "left",
    fontSize: 18,
  };

  return (
    <div className="container_latestblog">
      <div className="info-section">
        <h1 id="title">
          Get update with <span id="second_color">latest blog</span>
        </h1>
      </div>
      <div className="container_cards_blog">
        {data.map((dato) => (
          <div
            key={dato.id}
            className="card_latestblog"
          >
            <div className="image_card_blog">
              <img
                src={`${process.env.PUBLIC_URL}/images/latestBlog/${dato.img}.png`}
                alt="logo"
              />
            </div>
            <div className="info-blog">
              <div className="firstline">
                <h1 style={styletitle}>{dato.title}</h1>
              </div>
              <div className="secondline">
                <h3>{dato.date}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestBlog;
