"use client";

import Navbar from "@/components/ui/navbar";
import SideNav from "@/components/dashboard/side-nav";
import React, { useState } from "react";
import "@/styles/modules/dashboard.scss";
import { ChildrenLayoutProp } from "@/types/layout";

const DashboardLayout: React.FC<ChildrenLayoutProp> = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  return (
    <>
      <Navbar setOpenSidebar={setOpenSidebar} />
      <div className="dashboard">
        <SideNav openSidebar={openSidebar} />
        <main className="dashboard__main">{children}</main>
      </div>
    </>
  );
};

export default DashboardLayout;
