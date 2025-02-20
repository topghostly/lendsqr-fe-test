import React from "react";
import DashboardMatrics from "@/components/dashboard/dashboard-matrics";
import DashboardTable from "@/components/dashboard/dashboard-table";

const Users: React.FC = () => {
  return (
    <div className="main">
      <div className="main__head">
        <h2 className="main__head-title">Users</h2>
      </div>
      <div>
        <DashboardMatrics />
        <DashboardTable />
      </div>
    </div>
  );
};

export default Users;
