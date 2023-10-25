import './header.css';
// import {link} from 'react-router-dom';

function Header() {
    return (
        
      <div className="header">
        <div className="flex-row-space">
            <div className="headerBox">
                <h1 className="title">GameZon</h1>  
            </div>
            <div className="navBox">
                <a href="#" className="text">Tournaments</a>
                <a href="#" className="text"><img src=""></img>Search</a>
                <a href="#" className="profileBtn">Profile</a>
                <button className="nav-Btn">
                  <div className="nav-lines"></div>
                  <div className="nav-lines"></div>
                  <div className="nav-lines"></div>
                </button>
            </div>
        </div>
      </div>
    );
  }
  
  export default Header;