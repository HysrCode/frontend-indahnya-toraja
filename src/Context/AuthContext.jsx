// Context/AuthContext.jsx
import React, { createContext, useState, useEffect, useContext } from "react";
import { auth, onAuthStateChanged } from "../Utils/firebase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(true);
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoadingAuth(false);
      if (u) setShowLoginModal(false); // auto-close modal on login
    });
    return unsub;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loadingAuth,
        showLoginModal,
        setShowLoginModal,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
