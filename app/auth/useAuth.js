import jwtDecode from "jwt-decode";
import { useContext } from "react";
import AuthContext from "./context";
import authstorage from "./storage";

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logIn = (authToken) => {
    const user = jwtDecode(authToken);
    setUser(user);
    authstorage.storeToken(authToken);
  };

  const logOut = () => {
    setUser(null);
    authstorage.removeToken();
  };

  return { user, logIn, logOut };
};
