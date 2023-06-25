import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks";

import { Loader } from "..";

const PrivateRoute = (props: { component: ReactNode }) => {
  const { isLoading, hasLogged } = useAuth();

  return isLoading ? (
    <Loader />
  ) : !isLoading && !hasLogged ? (
    <Navigate to="/login" />
  ) : (
    props.component
  );
};

export default PrivateRoute;
