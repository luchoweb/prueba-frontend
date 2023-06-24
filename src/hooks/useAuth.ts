import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../services/firebase/firebase";

const useAuth = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasLogged, setHasLogged] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setHasLogged(user ? true : false);
      setIsLoading(false);
    });
  }, []);

  return {
    isLoading,
    hasLogged,
  };
};

export default useAuth;
