"use client";

import { AuthContextType } from "@/types/auth";
import { useRouter } from "next/navigation";
import React, { createContext, useState, useEffect, useContext } from "react";

const AUTH_KEY = "auth_data"; // Key for localStorage
const EXPIRATION_TIME = 10 * 60 * 1000; // Expires in 10 mins

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const router = useRouter();

  // Check login status on load
  useEffect(() => {
    const storedAuth = localStorage.getItem(AUTH_KEY);
    if (storedAuth) {
      const { isLoggedIn, expiresAt } = JSON.parse(storedAuth);
      console.log("Context log" + isLoggedIn);
      if (new Date().getTime() < expiresAt) {
        setIsLoggedIn(isLoggedIn);
      } else {
        localStorage.removeItem(AUTH_KEY);
      }
    }
  }, []);

  // Login function
  const login = () => {
    const expiresAt = new Date().getTime() + EXPIRATION_TIME;
    localStorage.setItem(
      AUTH_KEY,
      JSON.stringify({ isLoggedIn: true, expiresAt })
    );
    setIsLoggedIn(true);
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem(AUTH_KEY);
    router.replace("/auth/");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
