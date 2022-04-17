import classNames from "classnames";
import { useEffect, useRef } from "react";
import { PLAN_DATA } from "../../data/plan";
import { Btn } from "../button/btn";
import "./plan-card.scss";
export const PlanCard = () => {
  useEffect(() => {});
  const accordionRefs = [
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
  ];
  return (
    <div className="plan-container">
      <div className="plan-sub">
        {PLAN_DATA.map(
          (
            {
              planName,
              planDetails,
              planDetailsTitle,
              planPrice,
              isRecommended = false,
            },
            index
          ) => (
            <div
              className={classNames("plan", {
                "highlight": isRecommended,
              })}
            >
              {isRecommended && <div className="recommended">RECOMMENDED</div>}
              <h4 className={classNames({ "recommended-text": isRecommended })}>
                {planName}
              </h4>

              <p
                className={classNames("plan-price", {
                  "recommended-text": isRecommended,
                })}
              >
                {planPrice}
              </p>
              <p className="plan-validity">/user/monthly</p>

              <div className="btn-container">
                <Btn btnText="Buy Now" btnType="btn-blue buy-now" />
                <Btn
                  btnText="14-Day Free Trial"
                  btnType="btn-white trial-btn"
                  btnSubText="No credit card required"
                />
              </div>

              <button
                className="accordion plan-deities"
                onClick={() => {
                  const refElement = accordionRefs[index].current;
                  if (refElement) {
                    refElement.classList.toggle("active");
                    if (refElement.classList.contains("panel")) {
                      refElement.classList.remove("panel");
                      refElement.classList.add("panel-active");
                    } else {
                      refElement.classList.add("panel");
                      refElement.classList.remove("panel-active");
                    }
                  }
                }}
              >
                {planDetailsTitle}
              </button>
              <div className="panel" ref={accordionRefs[index]}>
                {planDetails.map((description) => (
                  <p>{description}</p>
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};
