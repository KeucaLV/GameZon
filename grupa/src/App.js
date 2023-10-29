import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./components/profile.js";
import "./App.css";
import Games from "./components/games.js";
import Header from "./components/header.js";

function App() {
  return (
    <>
      <BrowserRouter>
        {" "}
        {/* Changed this line */}
        <Header />
        <Routes>
          <Route exact path="/" element={<Games />} />
          <Route exact path="/Profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>{" "}
      {/* Changed this line */}
    </>
  );
}

export default App;
