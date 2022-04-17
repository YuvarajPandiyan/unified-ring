import { useState } from "react";
import classNames from "classnames";
import "./plan-hero.scss";
export const PlanHero = () => {
  const [buttonIndex, setButtonIndex] = useState<number>(1);

  return (
    <div className="plan-hero-container">
      <h1>Find the Right Plan for your Communication</h1>

      <div className="">
        <span className="users-range-container">
          <div className="users-range">
            <h2>Users Range</h2>
            {/* rang btn */}
            <div className="range-btn">
              <button
                onClick={() => setButtonIndex(0)}
                className={classNames({
                  "range-btn--selected": buttonIndex === 0,
                })}
              >
                1-19
              </button>
              <button
                onClick={() => setButtonIndex(1)}
                className={classNames({
                  "range-btn--selected": buttonIndex === 1,
                })}
              >
                20-99
              </button>
              <button
                onClick={() => setButtonIndex(2)}
                className={classNames({
                  "range-btn--selected": buttonIndex === 2,
                })}
              >
                100+
              </button>
            </div>
          </div>
          <span className="monthly">
            <h2>Monthly</h2>
            <div className="plan-time">
              <p className="plan-time--active">12 Months</p>
              <p className="plan-time--not_active">24 Months</p>
              <p className="plan-time--not_active">36 Months</p>
            </div>
          </span>
        </span>
        <div className="line"></div>
      </div>
    </div>
  );
};
