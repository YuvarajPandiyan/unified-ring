import "./footer.scss";
import { FOOTER_DATA } from "../../data/footer";
export const Footer = () => (
  <footer className="footer-container">
    <img src="image/logo.svg" alt="" className="brand-icon"/>

    <div className="social-media order-three">
      {FOOTER_DATA.map((svgName) => (
        <img
          src={`image/footer/${svgName}.svg`}
          alt={svgName}
          className="social-media-icon"
        />
      ))}
    </div>

    <p>2020 UnifiedRing. All rights reserved</p>
  </footer>
);
