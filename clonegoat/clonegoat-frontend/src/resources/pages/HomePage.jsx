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

import ProductGrid from "./ProductGrid";
import "../styles/ProductGird.css";
import "../styles/HomePage.css";

const shoes = [
  { image: AirMax, name: "Nike Air Max 95", year: 2025 },
  { image: Dunk, name: "Nike Dunk Low 'Year of the Snake'", year: 2025 },
  {
    image: WmnsJordan,
    name: "Wmns Air Jordan 4 Retro 'Net Black'",
    year: 2024,
  },
  {
    image: DarkMocha,
    name: "Travis Scott x Jordan Jumpman Jack TR 'Dark Mocha'",
    year: 2025,
  },
  {
    image: RetroHigh85OGB,
    name: "Air Jordan 1 Retro High 85 OG 'Bred Banned'",
    year: 2025,
  },
  { image: AirDiamondTurf49ers, name: "Air Diamond Turf 49ers", year: 2025 },
  { image: RetroFear, name: "Air Jordan 4 Retro 'Fear'", year: 2024 },
  {
    image: AirZoomSpiridonSP,
    name: "Air Zoom Spiridon SP 'Silver Red'",
    year: 2024,
  },
  { image: DunkLowSBAluminum, name: "Dunk Low SB 'Aluminum'", year: 2024 },
  {
    image: RetroLowOGSPReverseOlive,
    name: "Travis Scott x Air Jordan 1 Retro Low OG SP 'Reverse Olive'",
    year: 2024,
  },
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

const trendingShoes = [
  { image: AirMax, name: "Nike Air Max 95", year: 2025 },
  { image: Dunk, name: "Nike Dunk Low 'Year of the Snake'", year: 2025 },
  {
    image: WmnsJordan,
    name: "Wmns Air Jordan 4 Retro 'Net Black'",
    year: 2024,
  },
  {
    image: DarkMocha,
    name: "Travis Scott x Jordan Jumpman Jack TR 'Dark Mocha'",
    year: 2025,
  },
  { image: AirMax, name: "Nike Air Max 95", year: 2025 },
  { image: Dunk, name: "Nike Dunk Low 'Year of the Snake'", year: 2025 },
  {
    image: WmnsJordan,
    name: "Wmns Air Jordan 4 Retro 'Net Black'",
    year: 2024,
  },
  {
    image: DarkMocha,
    name: "Travis Scott x Jordan Jumpman Jack TR 'Dark Mocha'",
    year: 2025,
  },
  { image: AirMax, name: "Nike Air Max 95", year: 2025 },
  { image: Dunk, name: "Nike Dunk Low 'Year of the Snake'", year: 2025 },
  {
    image: WmnsJordan,
    name: "Wmns Air Jordan 4 Retro 'Net Black'",
    year: 2024,
  },
  {
    image: DarkMocha,
    name: "Travis Scott x Jordan Jumpman Jack TR 'Dark Mocha'",
    year: 2025,
  },
];

function ProductSection({ title, items, className }) {
  return (
    <div className="homepage-container">
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
        <span className="item-count">{items.length} Items</span>
      </div>
      <div className={className}>
        {items.map((item, index) => (
          <img
            key={index}
            src={item}
            alt={`${title} ${index}`}
            style={{ width: "200px", height: "200px" }}
          />
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
        items={[...shoes.map((s) => s.image), ...shoes.map((s) => s.image)]}
        className="shoes-container"
      />
      <ProductSection
        title="New Hoodies"
        items={hoodies}
        className="hoodies-container"
      />
      <ProductGrid title="Top Trending" products={trendingShoes} />
    </div>
  );
}

export default HomePage;
