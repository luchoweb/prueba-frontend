import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../hooks";

import AppLogo from "../Logo";
import "./styles.scss";

const Header = () => {
  const { hasLogged } = useAuth();
  const { t } = useTranslation();
  return (
    <header className="bg-light pt-3 pb-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-7 col-md-6">
            <AppLogo />
          </div>
          <div className="col-5 col-md-6 text-end">
            {!hasLogged && <Link to="/login" className="button button--sm button--dark">{t("login")}</Link>}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
