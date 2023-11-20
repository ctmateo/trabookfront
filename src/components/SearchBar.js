import React from "react";
import "../sass/components/_searchbar.scss";

const SearchBar = () => {
  return (
    <div className="containerBar">
      <div className="content_bar">
        <div className="col">
          <div className="title">Location</div>
          <div className="subtitle">Where are you going</div>
        </div>
        <div className="col">
          <div className="title">Date</div>
          <div className="subtitle">When you will go</div>
        </div>
        <div className="col">
          <div className="title">Guest</div>
          <div className="subtitle">Number of guest</div>
        </div>
        <div className="button_search">
          <button>Explore Now</button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
