import { useState } from "react";
import Context from "./Context";

export type ProviderProps = {
  children: React.ReactNode;
}

export type ProviderValues = {
  onLogin: (username: string) => void;
  user: string;
  loading: boolean;
}

function Provider({ children }: ProviderProps) {
  const [user, setUser] = useState("");
  // const [favoritesSongs, setFavoritesSongs] = useState([]);
  const [loading, setLoading] = useState(false);

  const onLogin = (username: string) => {
    setUser(username);
  }

  const values: ProviderValues = {
    onLogin,
    user,
    loading,
  }

  return (
    <Context.Provider value={values}>
      {children}
    </Context.Provider>
  )
}

export default Provider;