import React, { useState } from "react";
import "./header.css";

function Header() {
  const [isBoxOpen, setIsBoxOpen] = useState(false);
  const [isTitleVisible, setIsTitleVisible] = useState(true);

  const toggleBox = () => {
    setIsBoxOpen(!isBoxOpen);
    setIsTitleVisible(!isTitleVisible);
  };

  return (
    <>
      <div className={`header ${isTitleVisible ? "" : "hidden"}`}>
        <div className="flex-row-space">
          <div className="headerBox">
            <h1 className={`title ${isTitleVisible ? "" : "hidden"}`}>
              GameZon
            </h1>
          </div>
          <div className="navBox">
            <a href="#" className="text">
              Tournaments
            </a>
            <a href="#" className="text">
              Search
            </a>
            <a href="#" className="profileBtn">
              Profile
            </a>
            <button
              className={`nav-Btn ${isBoxOpen ? "open" : ""} `}
              onClick={toggleBox}
            >
              <div className="nav-lines"></div>
              <div className="nav-lines"></div>
              <div className="nav-lines"></div>
            </button>
          </div>
        </div>
      </div>
      {isBoxOpen && (
        <div className="fortnite">
          <div className={`header ${isTitleVisible ? "hidden" : ""}`}>
            <button className="backBtn" onClick={toggleBox}>
              <h1>➡</h1>
            </button>
          </div>
          <div className="mobileNav">
            <a href="#" className="mobileText">
              Home
            </a>
            <a href="#" className="mobileText">
              Tournaments
            </a>
            <a href="#" className="mobileText">
              Search
            </a>
            <div className="mobileText">
              <a href="#" className="mobileProfileBtn">
                Profile
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
