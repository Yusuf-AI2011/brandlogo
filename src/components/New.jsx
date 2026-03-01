import React from "react";

const New = () => {
  return (
    <div className="New">
      <div className="new__left">
        <div className="new__infos">
          <h3 className="new__subtitle">PlayStation 5</h3>
          <p className="new__text">
            Black and White version of the PS5 coming out on sale.
          </p>
          <p className="new__link">Shop Now</p>
        </div>
      </div>
      <div className="new__right">
        <div className="new__up">
          <div className="new__infos">
            <h3 className="new__subtitle">Women’s Collections</h3>
            <p className="new__text">
              Featured woman collections that give you another vibe.
            </p>
            <p className="new__link">Shop Now</p>
          </div>
        </div>
        <div className="new__down">
          <div className="new__subleft">
            <div className="new__infos">
              <h3 className="new__subtitle">Speakers</h3>
              <p className="new__text">Amazon wireless speakers</p>
              <p className="new__link">Shop Now</p>
            </div>
          </div>
          <div className="new__subright">
            <div className="new__infos">
              <h3 className="new__subtitle">Perfume</h3>
              <p className="new__text">GUCCI INTENSE OUD EDP</p>
              <p className="new__link">Shop Now</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
