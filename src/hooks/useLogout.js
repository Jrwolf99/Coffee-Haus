import { useState } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "../context/AuthContext";

export const useLogout = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const logout = async () => {
    setError(null);
    setIsPending(true);

    //sign the user out
    try {
      await projectAuth.signOut();

      //dispatch logout option
      dispatch({ type: "LOGOUT" });

      setError(null);
      setIsPending(false);
    } catch (error) {
      setError(error);
      setIsPending(false);
    }
  };

  return { logout, error, isPending };
};
