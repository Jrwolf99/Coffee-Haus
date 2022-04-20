import { useEffect, useState } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "../context/AuthContext";

//TODO: Create a working cleanup function

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setError(null);
    setIsPending(true);

    //sign the user out
    try {
      const response = await projectAuth.signInWithEmailAndPassword(
        email,
        password
      );

      //dispatch logout option
      dispatch({ type: "LOGIN", payload: response.user });

      setError(null);
      setIsPending(false);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
      setIsPending(false);
    }
  };

  return { login, error, isPending };
};
