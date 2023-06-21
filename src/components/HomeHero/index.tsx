import { useTranslation } from "react-i18next";

import HeroImage from "../../assets/hero-img.jpg";
import "./styles.scss";

const HomeHero = () => {
  const { t } = useTranslation();

  return (
    <section className="home-hero pt-4 pt-lg-0 pb-3 pb-lg-0">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-7 home-hero__content">
            <h1 className="mb-4">{t("hero-title")}</h1>

            <p className="m-0 mb-4">
              {t("hero-text")}.
            </p>

            <div className="search-form">
              <input
                className="search-form__input"
                type="text"
                placeholder={t("hero-input-placeholder")}
              />

              <button className="search-form__button">Buscar</button>
            </div>

            <p className="m-0 mt-3 home-hero__disclaimer">
              Powered by Google&reg; Images API
            </p>
          </div>

          <div className="col-12 col-md-5 home-hero__image pt-4 pt-md-0">
            <img src={HeroImage} alt="image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
