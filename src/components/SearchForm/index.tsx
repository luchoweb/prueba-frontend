import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./styles.scss";

const SearchForm = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [query, setQuery] = useState("");

  const searchImages = () => {
    if (query.length) navigate(`/images/${query}`);
  };

  return (
    <>
      <div className="search-form">
        <input
          className="search-form__input"
          type="text"
          placeholder={t("search-form-placeholder")}
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />

        <button className="search-form__button" onClick={() => searchImages()}>
          {t("search-form-btn")}
        </button>
      </div>
    </>
  );
};

export default SearchForm;
