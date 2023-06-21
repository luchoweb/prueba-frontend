import { useTranslation } from "react-i18next";

import SearchForm from "../SearchForm";

import HeroImage from "../../assets/hero-img.jpg";
import "./styles.scss";

const HomeHero = () => {
  const { t } = useTranslation();

  return (
    <section className="home-hero pt-4 pt-lg-0">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-7 home-hero__content pb-0 pb-md-4 pb-lg-0">
            <h1 className="mb-4">¡{t("hero-title")}!</h1>

            <p className="m-0 mb-4">
              {t("hero-text")}.
            </p>

            <SearchForm />
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
