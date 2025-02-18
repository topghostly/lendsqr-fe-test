import Navbar from "@/components/navbar";
import SideNav from "@/components/side-nav";
import React from "react";
import styles from "@/styles/modules/dashboard.module.scss";
import { ChildrenLayoutProp } from "@/types/layout";

const DashboardLayout: React.FC<ChildrenLayoutProp> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className={styles.dashboard}>
        <SideNav />
        <main className={styles.dashboard__main}>{children}</main>
      </div>
    </>
  );
};

export default DashboardLayout;
