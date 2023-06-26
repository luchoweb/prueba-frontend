import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Layout from "../layout";

import ImageError from "../../assets/error-404.png";

const Error404Page = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <section className="not-found pt-5 pb-5 d-flex flex-column align-items-center justify-content-center">
        <picture className="not-found__image">
          <img src={ImageError} alt="not found" height={150} />
        </picture>
        <h2 className="mt-4 mb-2">Página no encontrada</h2>
        <p className="m-0">La página que intentas ver no existe o fue eliminada.</p>
        <p className="m-0 mb-4">Por favor vuelve al inicio e intentalo nuevamente.</p>
        <Link to="/" className="button button--dark">{t("back")}</Link>
      </section>
    </Layout>
  );
};

export default Error404Page;
