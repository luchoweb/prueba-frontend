import { useTranslation } from "react-i18next";

import SocialLinks from "../../tests/mocks/social.json";

import AppLogo from "../Logo";
import "./styles.scss";

const Footer = () => {
  const { t } = useTranslation();
  const { VITE_APP_NAME: appName } = import.meta.env;

  return (
    <footer className="footer pt-4 pb-3">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 mb-4 mb-lg-0">
            <AppLogo theme="light" />
            <p className="mt-3 mb-2 pe-2">
              <strong>Somos la mejor empresa del mundo.</strong> Nuestros vendedores son los mejores en lo que hacen. Es por eso que te sorprenderemos siempre con las mejores imágenes.</p>
          </div>

          <div className="col-12 col-md-6 col-lg-4 mb-4 mb-md-0">
            <h5 className="mb-3">De intetés</h5>
            <p className="m-0 pe-2">Este es un reto técnico para el rol de Frontend Dev en Alegra. Se construyó con React + TypeScript, Firebase&reg; y la API de Pexels&reg;.</p>
          </div>

          <div className="col-12 col-md-6 col-lg-2">
            <h5 className="mb-3">{t("footer-follow-title")}</h5>

            <ul className="footer__social m-0 p-0 d-flex">
              {SocialLinks.map(link => (
                <li key={`link-${link.icon}`}>
                  <a href={link.href} target="_blank" rel="noopener" className="social__link">
                    <i className={`bi bi-${link.icon}`}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <hr />
        <p className="footer__copy m-0">
          <small>&copy; {`${new Date().getFullYear()} ${appName}`}</small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
