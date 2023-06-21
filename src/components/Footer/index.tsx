import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import "./styles.scss";

const Footer = () => {
  const { t } = useTranslation();
  const { VITE_APP_NAME: appName } = import.meta.env;

  return (
    <footer className="footer pt-3 pb-3">
      <div className="container">
        <p className="m-0">
          <small>&copy; {`${new Date().getFullYear()} ${appName}`}</small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
