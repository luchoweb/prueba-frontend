import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { router } from "./router";

import esTranslation from "./locales/es.json";

import "bootstrap/dist/css/bootstrap-reboot.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./index.scss";

i18n.use(initReactI18next).init({
  resources: {
    es: {
      translation: esTranslation,
    },
  },
  lng: "es",
  fallbackLng: "es",

  interpolation: {
    escapeValue: false,
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
