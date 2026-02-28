import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      {/* <h1>Navbar</h1> */}
      <div className="navbar__top">
        <p className="navbar__text">
          <span className="navbar__icon">
            <svg
              width={20}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"></path>
            </svg>
          </span>
          Shahar:Toshkent
        </p>
        <p className="navbar__text">
          Buyurtmalaringizni bepul yetkazib beramiz - atiga 1 kun ichida
        </p>
        <p className="navbar__text navbar__right-text">
          Uzbek{" "}
          <span className="navbar__icon">
            <svg
              width="13"
              height="8"
              viewBox="0 0 13 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.36403 4.95L11.314 0L12.728 1.414L6.36403 7.778L2.67029e-05 1.414L1.41403 0L6.36403 4.95Z"
                fill="white"
              />
            </svg>
          </span>
        </p>
      </div>
      <div className="navbar__bottom">
        <h2 className="navbar__title">BrandLogo</h2>
        <ul className="navbar__list">
          <li className="navbar__item">Bosh sahifa</li>
          <li className="navbar__item">Katalog</li>
          <li className="navbar__item">Haqimizda</li>
          <li className="navbar__item">Aloqa</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
