import React from "react";
import styles from "@/styles/components/dashboard/_dashboard-boilerplate.module.scss";

const Dashboard: React.FC = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboard__head}>
        <h2 className={styles.dashboard__head_title}>Dashboard</h2>
      </div>
    </div>
  );
};

export default Dashboard;
