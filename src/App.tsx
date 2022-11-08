import React from "react";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Slider from "react-slick";
import { carouselData } from "./constants";
import { Settings } from "react-slick";
import classNames from "classnames";
import BottomTabs from "./BottomTabs";

const App: React.FC = () => {
  const sliderSettings: Settings = {
    infinite: false,
    variableWidth: true,
    className: "bg-white",
    rows: 1,
  };

  const renderSliders = () => {
    return carouselData.map((item, index) => (
      <div className="slider-list-container">
        <h4
          className={classNames("mx-24 mb-24 fs-18 color-grey-01", {
            "mt-24": index === 0,
            "mt-48": index > 0,
          })}
        >
          {item.name}
        </h4>
        <Slider key={`slider_${item.name}_${index}`} {...sliderSettings}>
          {item.data.map((e, i) => (
            <div key={`slider_${item.name}_item_${i}`} className="slider-item">
              <img src={e.banner} alt="" className="slider-img" />
              <div className="p-16">
                <div className="d-flex align-items-center">
                  {e.coin >= 1000 ? (
                    <img
                      src="/images/L_Icon.png"
                      alt=""
                      width={16}
                      height={16}
                    />
                  ) : null}
                  <h4
                    className={classNames("fs-16 line-height-24", {
                      "color-blue-dark": e.coin < 1000,
                      "color-grey-03 ml-4": e.coin >= 1000,
                    })}
                  >
                    {`${e.coin} Coin${e.coin > 1 ? "s" : ""}`}
                  </h4>
                </div>
                <div className="slider-item-description">{e.description}</div>
                <div className="mt-8">
                  {e.tags
                    ? e.tags.map((tag) => (
                        <a className="color-blue-dark">{tag}</a>
                      ))
                    : null}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    ));
  };

  return (
    <React.Fragment>
      <div className="page-container">
        <div className="h-100 overflow-y-auto">
          <div className="tier-header">
            <button className="back-button">
              <FaChevronLeft size={16} />
            </button>
            <div className="mt-16">
              <h3 className="fs-32">Silver Tier</h3>
              <div className="mt-8 fs-16 color-grey-05">
                In Silver Tier, every $1 in rental fee paid, you get 2 coins to
                redeem exclusive rewards.
              </div>
            </div>
          </div>

          <div className="available-coin-container">
            <h3 className="fs-14 color-grey-05 line-height-24">
              Available Coin balance
            </h3>
            <div className="fs-48 color-grey-01 mt-8 letter-spacing-n05">
              340
            </div>
            <div className="slider-container mt-24">
              <div className="active-slider" style={{ width: "60%" }}></div>
            </div>
            <div className="mt-24 color-grey-04 line-height-24 fs-16">
              You have paid rental fee for $1,200. Pay more $800 to achieve Gold
              Tier.
            </div>
            <button className="btn-transparent color-blue-dark ml-n6 mt-16 fs-16">
              View tier benefits
              <span className="ml-4">
                <FaChevronRight size={16} />
              </span>
            </button>
            <button className="my-coupons-btn">My Coupons</button>
            <div className="mt-16 color-grey-05 text-center">
              Updated : 02/11/2021
            </div>
          </div>
          {renderSliders()}
          <div className="h-13rem" />
        </div>
        <BottomTabs />
      </div>
    </React.Fragment>
  );
};

export default App;
