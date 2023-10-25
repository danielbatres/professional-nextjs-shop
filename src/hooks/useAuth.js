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

    if (access_token) {
      const token = access_token.access_token;

      Cookies.set('token', token, { expires: 5 });

      axios.defaults.headers.Authorization = `Bearer ${token}`;
      const { data: user } = await axios.get(endPoints.auth.profile);

      console.log(user);
      setUser(user);
    }
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