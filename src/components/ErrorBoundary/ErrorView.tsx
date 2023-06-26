import { useTranslation } from "react-i18next";

import { Logo } from "..";
import "./styles.scss";

type Props = {
  error?: Error | null ;
};

const ErrorView = ({ error }: Props) => {
  const { t } = useTranslation();

  return (
    <div className="error-boundary">
      <div className="container text-center text-light">
        <Logo theme="light" />
        <h3 className="mt-4">{t("error-boundery-title")}</h3>
        <p>{t("error-boundery-text")}</p>
        {error && (
          <div className="mt-5">
            <p className="m-0">{t("error-boundery-code-title")}</p>
            <div className="code-container bg-light text-start p-3">
              <code>
                <strong className="d-block mb-2">{error.name}: </strong>
                <span className="d-block">{error.message}</span>
              </code>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ErrorView;
