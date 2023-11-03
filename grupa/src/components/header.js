import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import "./header.css";
import {isAuth} from "./isAuth";

function Header() {
  const [isBoxOpen, setIsBoxOpen] = useState(false);
  const [isTitleVisible, setIsTitleVisible] = useState(true);
  const[result, setResult] = useState(false);
  useEffect(() => {
  }, [result]);

  const toggleBox = () => {
    setIsBoxOpen(!isBoxOpen);
    setIsTitleVisible(!isTitleVisible);
  };

  let token = localStorage.getItem('token')

  useEffect( () => {
    const isAuth = async (token) => {

      let cleanData = { token };

      let response = await fetch('http://localhost/gamezon/GameZon/grupa/selects/Auth.php', {
        method: 'POST',
        body: JSON.stringify(cleanData),
        headers: {
          "Content-Type": 'application/json',
          "Accept": 'application/json'
        }
      });

      response = await response.json();

      if(response.status === 200) {
        setResult(true);
      }
      if(response.status === 403) {
        setResult(false);
      }
    }
    isAuth(token);
    console.log(result);
  }, [result]);



  return (
    <>
      <div className={`header ${isTitleVisible ? "" : "hidden"}`}>
        <div className="flex-row-space">
          <div className="headerBox">
            <Link className={`title ${isTitleVisible ? "" : "hidden"}`} to="/">
              GameZon
            </Link>
          </div>
          <div className="navBox">
            <Link className="text" to="/Tournaments">
              Tournaments
            </Link>
            <Link className="text" to="/Search">
              Search
            </Link>
            <Link className="profileBtn" to="/Profile">
              Profile
            </Link>
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
            <Link className="mobileText" to="/Tournaments">
              Tournaments
            </Link>
            <Link className="mobileText" to="/Search">
              Search
            </Link>
            <div className="mobileText">
              <Link className="mobileProfileBtn" to="/Profile">
                Profile
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
