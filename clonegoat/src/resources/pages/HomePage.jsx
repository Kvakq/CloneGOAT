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

import Hoodie1 from "../img/YeezyGapHoodie.png";
import Hoodie2 from "../img/YeezyGapHoodie.png";
import Hoodie3 from "../img/YeezyGapHoodie.png";
import Hoodie4 from "../img/YeezyGapHoodie.png";
import Hoodie5 from "../img/YeezyGapHoodie.png";
import Hoodie6 from "../img/YeezyGapHoodie.png";
import Hoodie7 from "../img/YeezyGapHoodie.png";
import Hoodie8 from "../img/YeezyGapHoodie.png";

import "../styles/HomePage.css";

const shoes = [
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
];

const hoodies = [
  Hoodie1,
  Hoodie2,
  Hoodie3,
  Hoodie4,
  Hoodie5,
  Hoodie6,
  Hoodie7,
  Hoodie8,
];

function ProductSection({ title, items, className }) {
  return (
    <div className="homepage-container">
      <h2 className="section-title">{title}</h2>
      <div className={className}>
        {items.map((item, index) => (
          <img key={index} src={item} alt={`${title} ${index}`} />
        ))}
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <div>
      <ProductSection
        title="Just Dropped"
        items={[...shoes, ...shoes]}
        className="shoes-container"
      />
      <ProductSection
        title="New Hoodies"
        items={hoodies}
        className="hoodies-container"
      />
    </div>
  );
}

export default HomePage;
