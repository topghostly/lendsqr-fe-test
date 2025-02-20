import Navbar from "@/components/ui/navbar";
import SideNav from "@/components/dashboard/side-nav";
import React from "react";
import "@/styles/modules/dashboard.scss";
import { ChildrenLayoutProp } from "@/types/layout";

const DashboardLayout: React.FC<ChildrenLayoutProp> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="dashboard">
        <SideNav />
        <main className="dashboard__main">{children}</main>
      </div>
    </>
  );
};

export default DashboardLayout;
