import React from "react";
import DashboardMatrics from "@/components/dashboard/dashboard-matrics";
import DashboardTable from "@/components/dashboard/dashboard-table";

const Users: React.FC = () => {
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
