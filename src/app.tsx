import { RouterProvider } from "react-router-dom";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { useSelector } from "react-redux";

import { router } from "./router";

import esLocale from "./locales/es.json";
import enLocale from "./locales/en.json";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./index.scss";

const App = () => {
  const lang = useSelector((state: any) => state.lang.lang || "es");

  i18n.use(initReactI18next).init({
    resources: {
      es: {
        translation: esLocale,
      },
      en: {
        translation: enLocale,
      },
    },
    lng: lang,
    fallbackLng: lang,

    interpolation: {
      escapeValue: false,
    },
  });

  return <RouterProvider router={router} />;
};

export default App;
