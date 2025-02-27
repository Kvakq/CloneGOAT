import React from "react";

import AirMax from "../img/Airmax95.png";
import Dunk from "../img/DunkLowYearoftheSnake.png";
import WmnsJordan from "../img/WmnsAirJordan4RetroNetBlack.png";
import DarkMocha from "../img/TravisScottxJordanJumpmanJackTRDarkMocha.png";
import RetroHigh85OGB from "../img/AirJordan1RetroHigh85OGBredBanned2025.png";
import AirDiamondTurf49ers from "../img/AirDiamondTurf49ers2025.png";
import RetroFear from "../img/AirJordan4RetroFear2024.png";
import AirZoomSpiridonSP from "../img/AirZoomSpiridonSPSilverRed2024.png";
import DunkLowSBAluminum from "../img/DunkLowSBAluminum.png";
import RetroLowOGSPReverseOlive from "../img/TRAirJordan1RetroLowOGSPReverseOlive.png";

import "../styles/HomePage.css";

function HomePage() {
  return (
    <div className="homepage-container">
      <h2 className="section-title">Just Dropped</h2>
      <div className="shoes-container">
        {[
          AirMax,
          Dunk,
          WmnsJordan,
          DarkMocha,
          RetroHigh85OGB,
          AirDiamondTurf49ers,
          RetroFear,
          AirZoomSpiridonSP,
          DunkLowSBAluminum,
          RetroLowOGSPReverseOlive,
          AirMax,
          Dunk,
          WmnsJordan,
          DarkMocha,
          RetroHigh85OGB,
          AirDiamondTurf49ers,
          RetroFear,
          AirZoomSpiridonSP,
          DunkLowSBAluminum,
          RetroLowOGSPReverseOlive,
        ].map((shoe, index) => (
          <img key={index} src={shoe} alt={`Shoe ${index}`} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
