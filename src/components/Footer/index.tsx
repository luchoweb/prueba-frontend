import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import "./styles.scss";

const Footer = () => {
  const { t } = useTranslation();
  const { VITE_APP_NAME: appName } = import.meta.env;

  return (
    <footer className="footer pt-1 pb-2">
      <div className="container">
        <p className="m-0">
          <small>&copy; {`${new Date().getFullYear()} ${appName}`}</small>
        </p>
        <Link to="/admin" className="footer__link">
          <small>{t("access")}</small>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
