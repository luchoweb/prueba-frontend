import { useTranslation } from "react-i18next";

import "./styles.scss";

const HomeHero = () => {
  const { t } = useTranslation();

  return (
    <section className="home-hero pb-5">
      <div className="container">
        <h1 className="m-0">{t("hero-title")}</h1>
      </div>
    </section>
  )
}

export default HomeHero;
