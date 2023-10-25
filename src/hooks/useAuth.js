import Cookies from "js-cookie";
import axios from "axios";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

function ProviderAuth({ children }) {
  const auth = useProviderAuth();

  return (
    <AuthContext.Provider
      value={auth}
    >
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => {
  return useContext(AuthContext);
}

function useProviderAuth() {
  const [user, setUser] = useState(null);

  const signIn = async (email, password) => {
    setUser("login");
  }

  return {
    user,
    signIn
  }
}

export { 
  ProviderAuth, 
  useProviderAuth, 
  useAuth 
}