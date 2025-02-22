"use client";

import { useAuth } from "@/hooks/auth";
import React, { useEffect } from "react";

const Dashboard: React.FC = () => {
  const { logout } = useAuth();
  useEffect(() => {
    if (typeof window === "undefined") return; // Prevents running on the server for Hydration Errors
    const storedAuth: string | null = localStorage.getItem("auth_data");

    if (storedAuth) {
      const { isLoggedIn } = JSON.parse(storedAuth || "");
      if (!isLoggedIn) logout();
    } else {
      logout();
    }
  }, [logout]);
  return (
    <div className="main">
      {/* DASHBOARD MAIN CONTENT HEADER */}
      <div className="main__head">
        <h2 className="main__head-title">Dashboard</h2>
      </div>
    </div>
  );
};

export default Dashboard;
