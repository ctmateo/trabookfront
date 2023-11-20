import React from "react";
import "../sass/components/_footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-section">
        <div className="data-company">
          <a className="footer-logo">
            <span className="brand">
              <h1>Trabook</h1>
              <img
                src={`${process.env.PUBLIC_URL}/icons/Vector.svg`}
                alt="Logo"
                width="25px"
                className="d-inline ml-2 align-middle"
              />
            </span>
          </a>
          <p style={{ color: "#666" }}>
            Book your trip in a minute, get full 
            control for much longer.
          </p>
        </div>

        <div className="col">
          <h4>Company</h4>
          <a>About</a>
          <a>Careers</a>
          <a>Logistics</a>
          <a>Privacy & Policy</a>
        </div>
        <div className="col">
          <h4>Contact</h4>
          <a>Help/FAQ</a>
          <a>Press</a>
          <a>Affiliates</a>
        </div>
        <div className="col">
          <h4>More</h4>
          <a>Press Centre</a>
          <a>Our Blog</a>
          <a>Low fare tips</a>
        </div>
      </div>

      <div
        className="container"
        style={{
          backgroundColor: "rgba(153, 153, 153, 0.56)",
          height: "1px",
          marginTop: "40px",
        }}
      ></div>
      <div
        className="container"
        style={{ paddingTop: "10px", paddingBottom: "20px" }}
      >
        <div className="term">
          <span style={{ fontSize: "13px", color: "#666" }}>
            Copyright, Trabook 2022. All rights reserved.
          </span>
          <a
            style={{ textDecoration: "none", color: "#666", fontSize: "13px" }}
          >
            Terms & Conditions
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
