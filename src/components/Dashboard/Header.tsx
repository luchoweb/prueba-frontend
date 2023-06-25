import { useTranslation } from "react-i18next";
import { logout } from "../../services/firebase/auth";

const Header = () => {
  const { t } = useTranslation();

  return (
    <div className="row align-items-center">
      <div className="col-7 col-md-6">
        <h5 className="m-0">
          <i className="bi bi-person-gear me-2"></i>
          <span>{t("dashboard-title")}</span>
        </h5>
      </div>
      <div className="col-5 col-md-6 text-end">
        <button className="button button--sm button--red" onClick={() => logout()}>
          <span>{t("logout")}</span>
          <i className="bi bi-box-arrow-right ms-1"></i>
        </button>
      </div>
    </div>
  );
};

export default Header;
