import { Card } from "../card/card";
import "./benefits.scss";
import { CARD_DATA } from "../../data/benifits";
export const Benefits = () => (
  <>
    <div className="benefits-container">
      <h2 className="heading">Unlimited business benefits with UnifiedRing</h2>

      <p className="sub">Manage virtual teams with maximum efficiency.</p>
    </div>
    <div className="card-fold">
      {CARD_DATA.map(({ imgPath, cardTitle }) => (
        <Card imgPath={imgPath} cardTitle={cardTitle} />
      ))}
    </div>
  </>
);
