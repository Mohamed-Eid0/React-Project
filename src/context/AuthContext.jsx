import React, { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Load persisted user from localStorage (bonus persistence)
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("auth_user"));
    if (saved) setUser(saved);
  }, []);

  const login = (username, password) => {
    if (username === "admin" && password === "admin123") {
      const u = { username };
      setUser(u);
      localStorage.setItem("auth_user", JSON.stringify(u));
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("auth_user");
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
