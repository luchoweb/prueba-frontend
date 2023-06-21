import { Link } from "react-router-dom";

import Logo from "../../assets/logo.png";
import "./styles.scss";

const Header = () => {
  const { VITE_APP_NAME: appName } = import.meta.env;

  return (
    <header className="pt-3 pb-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-8">
            <Link to="/" className="logo">
              <img src={Logo} alt={`Logo de ${appName}`} height={37} />
              <small className="ms-2">{appName}</small>
            </Link>
          </div>
          <div className="col-4 d-flex justify-content-end">
            <Link to="/admin" className="btn btn--blue">
              <small>Acceso</small>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
