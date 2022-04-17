import { Btn } from "../button/btn";
import "./hero-section.scss";
export const HeroSection = () => (
  <div className="hero-container">
    <div className="hero-container-sub">
      <h1 className="heading">Best VoIP Phone Systems for Small Businesses</h1>
      <div className="cta-align">
        <Btn btnText="14-Day Free Trial" btnType="btn-purple" />
        <Btn btnText="Plan Purchase" btnType="btn-white" />
      </div>
    </div>
  </div>
);
