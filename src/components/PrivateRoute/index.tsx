import { useState, useEffect, ReactNode } from 'react';
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../services/firebase/firebase";
import { Loader } from '..';

const PrivateRoute = (props: { component: ReactNode }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        console.log("No user logged");
        navigate("/login");
      }

      setIsLoading(false);
    });
  }, []);

  return isLoading ? <Loader /> : props.component;
};

export default PrivateRoute;
