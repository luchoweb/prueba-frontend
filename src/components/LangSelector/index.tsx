import { useDispatch, useSelector } from "react-redux";
import { changeLangAction } from "../../redux/slices/langSlice";

import "./styles.scss";

const LangSelector = () => {
  const lang = useSelector((state: any) => state.lang.lang);
  const dispatch = useDispatch();

  const handleChangeLang = ( newLang: string ) => {
    dispatch(changeLangAction(newLang))
  }

  return (
    <select
      data-testid="lang-selector"
      className="lang-selector form-select ms-2"
      onChange={(event) => handleChangeLang(event.target.value)}
    >
      <option value="es" selected={lang === "es"}>
        ES
      </option>
      <option value="en" selected={lang === "en"}>
        EN
      </option>
    </select>
  );
};

export default LangSelector;
