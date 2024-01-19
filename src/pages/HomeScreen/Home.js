import React from "react";
import IconPlay from "../../assets/images/basil_play-solid.webp";
import IconSearch from "../../assets/images/icon-search.webp";
import IconGetStarted from "../../assets/images/icon_getStarted.webp";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="hero-container">
        <div className="sub-hero-container">
          <div className="sub-hero-top">
            <div className="card-title-hero">
              Course Platform with Great Vision for Everyone!
            </div>
            <div className="card-desc">
              <div className="text-desc">
                Improve your skills for a better future and start focusing on
                learning new things from selected classes available at
                InvestHub. We expected to facilitate and bridge capital market
                stakeholders to convey education to all Indonesian people.
              </div>
              <div className="button-container-desc">
                <button className="btn-get-started">
                  Get Started
                  <img
                    src={IconGetStarted}
                    alt="ic-getStarted"
                    className="ic-getStarted"
                  />
                </button>
                <div className="icon-play">
                  <img src={IconPlay} alt="ic-play" className="ic-play" />
                </div>
                <div className="icon-play-desc">
                  <div className="icon-play-desc-title">How it works</div>
                  <div className="icon-play-desc-subtitle">See Details</div>
                </div>
              </div>
            </div>
          </div>
          <div className="sub-hero-bottom">
            <ul className="nav-hero">
              <li className="nav-item-hero">
                <div className="nav-sub-item">
                  <div className="nav-text">8200</div>
                  <div className="nav-sub-text">Success Stories</div>
                </div>
                <div className="nav-border" />
              </li>
              <li className="nav-item-hero">
                <div className="nav-sub-item">
                  <div className="nav-text">12200</div>
                  <div className="nav-sub-text">Expert Mentors</div>
                </div>
                <div className="nav-border" />
              </li>
              <li className="nav-item-hero">
                <div className="nav-sub-item">
                  <div className="nav-text">50000</div>
                  <div className="nav-sub-text">Hours Course</div>
                </div>
                <div className="nav-border" />
              </li>
              <li className="nav-item-hero">
                <div className="nav-sub-item">
                  <div className="nav-text">70000</div>
                  <div className="nav-sub-text">Active Student</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container-body">
        {/* searching */}
        <div className="search-container">
          <input
            type="text"
            name="Search course here"
            id="input-search"
            className="input-search"
            placeholder="Search course here"
          />
          <img src={IconSearch} alt="ic-search" className="ic-search" />
        </div>
      </div>
    </>
  );
}

export default Home;
