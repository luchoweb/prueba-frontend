import AppLogo from "../Logo";
import "./styles.scss";

const Header = () => {
  return (
    <header className="d-flex align-items-center">
      <div className="container">
        <AppLogo />
      </div>
    </header>
  );
};

export default Header;
