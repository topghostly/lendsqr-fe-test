import Navbar from "@/components/navbar";
import SideNav from "@/components/side-nav";
import React from "react";
import DashboardMain from "@/components/dashboard-main";
import styles from "@/styles/modules/dashboard.module.scss";

const Dashboard: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className={styles.dashboard}>
        <SideNav />
        <DashboardMain />
      </div>
    </>
  );
};

export default Dashboard;
