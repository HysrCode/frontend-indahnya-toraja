// src/Hooks/useRequireAuth.jsx
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function useRequireAuth() {
  const { user, loadingAuth, setShowLoginModal } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loadingAuth && !user) {
      setShowLoginModal(true); // Tampilkan modal login jika belum login
    }
  }, [user, loadingAuth, setShowLoginModal]);

  return { user, loadingAuth };
}
