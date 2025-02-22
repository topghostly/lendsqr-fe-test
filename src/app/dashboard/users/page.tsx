"use client";

import React, { useEffect } from "react";
import DashboardMatrics from "@/components/dashboard/dashboard-matrics";
import DashboardTable from "@/components/dashboard/dashboard-table";
import { useAuth } from "@/hooks/auth";

const Users: React.FC = () => {
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
  }, []);
  return (
    <div className="main">
      {/* DASGBOARD HEADER TITLE */}
      <div className="main__head">
        <h2 className="main__head-title">Users</h2>
      </div>
      <div>
        {/* DASHBOARD MATRICS CARD COMPONENT */}
        <DashboardMatrics />
        {/* DASHBOARD USER LIST TABLE COMPONENT */}
        <DashboardTable />
      </div>
    </div>
  );
};

export default Users;
