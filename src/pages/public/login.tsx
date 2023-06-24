import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks";

import { Loader, LoginForm } from "../../components";

const LoginPage = () => {
  const navigate = useNavigate();
  const { isLoading, hasLogged } = useAuth();

  useEffect(() => {
    if (!isLoading && hasLogged) navigate("/admin");
  }, [isLoading]);

  return isLoading || !hasLogged ? <Loader /> : (
    <div className="container">
      <section className="login text-center">
        <LoginForm />
      </section>
    </div>
  );
};

export default LoginPage;
