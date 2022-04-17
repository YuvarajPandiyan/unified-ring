import "./header.scss";

export const Header = () => {
  return (
    <nav className="header">
      <div className="header-container">
        <img
          src="/image/logo.svg"
          alt="unified ring brand logo"
          className="header-logo"
        />

        {/* phone */}
        <div className="header-phone">
          <img
            className="header-phone-icon"
            src="/image/phone-icon.svg"
            alt="phone icon"
          />
          <p>02034440000</p>
        </div>
      </div>
    </nav>
  );
};
