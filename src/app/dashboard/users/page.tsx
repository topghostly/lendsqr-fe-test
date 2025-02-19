import React from "react";
import styles from "@/styles/components/dashboard/_dashboard-boilerplate.module.scss";
import DashboardMatrics from "@/components/dashboard/dashboard-matrics";
import DashboardTable from "@/components/dashboard/dashboard-table";

const Users: React.FC = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboard__head}>
        <h2 className={styles.dashboard__head_title}>Users</h2>
      </div>
      <div>
        <DashboardMatrics />
        <DashboardTable />
      </div>
    </div>
  );
};

export default Users;
