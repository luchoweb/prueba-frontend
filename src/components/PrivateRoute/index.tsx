import { useEffect, ReactNode } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../hooks';

import { Loader } from '..';

const PrivateRoute = (props: { component: ReactNode }) => {
  const navigate = useNavigate();
  const { isLoading, hasLogged } = useAuth();

  useEffect(() => {
    if (!isLoading && !hasLogged) {
      console.log("No user logged");
      navigate("/login");
    }
  }, [hasLogged]);

  return isLoading ? <Loader /> : props.component;
};

export default PrivateRoute;
