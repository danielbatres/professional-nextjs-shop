import Cookies from "js-cookie";
import axios from "axios";
import { createContext, useContext, useState } from "react";
import { endPoints } from "@services/api";

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
    const options = {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json'
      }
    }

    const { data: access_token } = await axios.post(endPoints.auth.login, { email, password }, options);

    console.log(access_token);
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