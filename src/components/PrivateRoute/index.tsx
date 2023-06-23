import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../services/firebase/firebase";

const PrivateRoute = ({ component }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("user", user);
        //const uid = user.uid;
        setIsLoading(false);
      } else {
        console.log("No user logged");
        navigate("/login");
      }
    });
  }, []);

  return isLoading ? <p>Loading...</p> : component;
};

export default PrivateRoute;
