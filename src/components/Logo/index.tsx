import { Link } from "react-router-dom";

import Logo from "../../assets/logo.png";
import "./styles.scss";

const AppLogo = ({ theme = "dark" }) => {
  const { VITE_APP_NAME: appName } = import.meta.env;

  return (
    <Link to="/" className={`logo logo--${theme}`}>
      <img src={Logo} alt={`Logo de ${appName}`} height={37} />
      <small className="ms-2">{appName}</small>
    </Link>
  );
};

export default AppLogo;
