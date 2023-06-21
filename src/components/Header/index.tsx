import { Link } from "react-router-dom";

import Logo from "../../assets/logo.png";
import "./styles.scss";

const Header = () => {
  const { VITE_APP_NAME: appName } = import.meta.env;

  return (
    <header className="pt-3 pb-3">
      <div className="container">
        <Link to="/" className="logo">
          <img src={Logo} alt={`Logo de ${appName}`} height={37} />
          <small className="ms-2">{appName}</small>
        </Link>
      </div>
    </header>
  );
};

export default Header;
