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
        <div className="navbar__inputs">
          <input
            placeholder="Siz nima qidiryapsiz?"
            type="search"
            className="navbar__input"
          />
          <button className="navbar__button">
            <span className="navbar__icon">
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.16616 3.93075L4.62891 1.002C4.33641 0.664505 3.80016 0.666005 3.46041 1.0065L1.37391 3.09675C0.752913 3.7185 0.575162 4.64176 0.934412 5.38201C3.08063 9.82573 6.66445 13.4146 11.1052 15.567C11.8447 15.9263 12.7672 15.7485 13.3882 15.1268L15.4942 13.017C15.8354 12.6758 15.8362 12.1365 15.4957 11.844L12.5557 9.32025C12.2482 9.05625 11.7704 9.09075 11.4622 9.39975L10.4392 10.4243C10.3868 10.4791 10.3178 10.5153 10.2429 10.5272C10.168 10.5392 10.0912 10.5262 10.0244 10.4903C8.35225 9.52733 6.96516 8.13843 6.00441 6.46501C5.96843 6.39807 5.9554 6.32118 5.96733 6.24612C5.97925 6.17107 6.01546 6.102 6.07041 6.0495L7.09041 5.02875C7.39941 4.71825 7.43316 4.23825 7.16616 3.93V3.93075Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            Aloqaga chiqish
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
