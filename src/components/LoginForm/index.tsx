import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { signIn } from "../../services/firebase/auth";
import { emailValidation } from "../../utils/regex";
import { Logo } from "..";

import "./styles.scss";

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasErrors, setErrors] = useState(false);

  const handleLogin = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();

    if (!email || !password || !emailValidation(email)) {
      setErrors(true);
      return;
    }

    setErrors(false);

    signIn(email, password)
      .then((user) => {
        if (user.uid) return navigate("/admin");
      })
      .catch(() => {
        setErrors(true);
      });
  };

  return (
    <div className="form-container">
      <Logo />

      {hasErrors && (
        <div className="alert alert-danger mt-4">
          <p className="m-0">
            <i className="bi bi-exclamation-circle me-2"></i>
            <span>Verifique los datos ingresados.</span>
          </p>
        </div>
      )}

      <form className="form-login p-4 text-start mt-4">
        <div className="form-group mb-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            data-testid="email"
            className="form-control mt-1"
            placeholder="nombre@email.com"
            required
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            className="form-control mt-1"
            placeholder="P45Sw0rd"
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <button
          className="button button--dark w-100"
          onClick={(event) => handleLogin(event)}
        >
          Ingresar
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
