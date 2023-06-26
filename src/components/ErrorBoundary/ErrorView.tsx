import { Logo } from "..";
import "./styles.scss";

type Props = {
  error?: Error | null ;
};

const ErrorView = ({ error }: Props) => {
  return (
    <div className="error-boundary">
      <div className="container text-center text-light">
        <Logo theme="light" />
        <h3 className="mt-4">¡Ha ocurrido un error inesperado!</h3>
        <p>Por favor refresque la ventana.</p>
        {error && (
          <div className="mt-5">
            <p className="m-0">Detalle técnico del error:</p>
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
