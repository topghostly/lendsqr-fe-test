"use client";

import React from "react";
import "../../styles/components/dashboard/_dashboard-table.scss";
import Image from "next/image";
import { useUsers } from "@/hooks/users";
import { UserDetailsProp } from "@/types/user";
import Pagination from "../../components/dashboard/pagination";
// const users = [
//   {
//     organization: "Lendsqr",
//     username: "Adedeji",
//     email: "adedeji@lendsqr.com",
//     phone: "08078903721",
//     dateJoined: "May 15, 2020 10:00 AM",
//     status: "Inactive",
//   },
//   {
//     organization: "Irorun",
//     username: "Debby Ogana",
//     email: "debby2@irorun.com",
//     phone: "08160780928",
//     dateJoined: "Apr 30, 2020 10:00 AM",
//     status: "Pending",
//   },
//   {
//     organization: "Lendstar",
//     username: "Grace Effiom",
//     email: "grace@lendstar.com",
//     phone: "07060780922",
//     dateJoined: "Apr 30, 2020 10:00 AM",
//     status: "Blacklisted",
//   },
//   {
//     organization: "Lendstar",
//     username: "Grace Effiom",
//     email: "grace@lendstar.com",
//     phone: "07060780922",
//     dateJoined: "Apr 30, 2020 10:00 AM",
//     status: "Blacklisted",
//   },
//   {
//     organization: "Lendstar",
//     username: "Grace Effiom",
//     email: "grace@lendstar.com",
//     phone: "07060780922",
//     dateJoined: "Apr 30, 2020 10:00 AM",
//     status: "Blacklisted",
//   },
//   {
//     organization: "Lendstar",
//     username: "Grace Effiom",
//     email: "grace@lendstar.com",
//     phone: "07060780922",
//     dateJoined: "Apr 30, 2020 10:00 AM",
//     status: "Blacklisted",
//   },
//   {
//     organization: "Lendstar",
//     username: "Grace Effiom",
//     email: "grace@lendstar.com",
//     phone: "07060780922",
//     dateJoined: "Apr 30, 2020 10:00 AM",
//     status: "Blacklisted",
//   },
//   {
//     organization: "Lendstar",
//     username: "Grace Effiom",
//     email: "grace@lendstar.com",
//     phone: "07060780922",
//     dateJoined: "Apr 30, 2020 10:00 AM",
//     status: "Blacklisted",
//   },
//   {
//     organization: "Lendstar",
//     username: "Grace Effiom",
//     email: "grace@lendstar.com",
//     phone: "07060780922",
//     dateJoined: "Apr 30, 2020 10:00 AM",
//     status: "Blacklisted",
//   },
//   {
//     organization: "Lendstar",
//     username: "Grace Effiom",
//     email: "grace@lendstar.com",
//     phone: "07060780922",
//     dateJoined: "Apr 30, 2020 10:00 AM",
//     status: "Blacklisted",
//   },
// ];
const DashboardTable: React.FC = () => {
  const { pageItems } = useUsers();

  return (
    <div className="table-container">
      <table className="user-table">
        {/* Table Header */}
        <thead>
          <tr>
            <th>
              <div className="th-holder">
                Organization
                <Image
                  src={"/images/filter-results-button.svg"}
                  alt="logo"
                  width={16}
                  height={16}
                  priority
                />
              </div>
            </th>
            <th>
              <div className="th-holder">
                Username
                <Image
                  src={"/images/filter-results-button.svg"}
                  alt="logo"
                  width={16}
                  height={16}
                  priority
                />
              </div>
            </th>
            <th>
              <div className="th-holder">
                Email
                <Image
                  src={"/images/filter-results-button.svg"}
                  alt="logo"
                  width={16}
                  height={16}
                  priority
                />
              </div>
            </th>
            <th>
              <div className="th-holder">
                Phone Number
                <Image
                  src={"/images/filter-results-button.svg"}
                  alt="logo"
                  width={16}
                  height={16}
                  priority
                />
              </div>
            </th>
            <th>
              <div className="th-holder">
                Date Joined
                <Image
                  src={"/images/filter-results-button.svg"}
                  alt="logo"
                  width={16}
                  height={16}
                  priority
                />
              </div>
            </th>
            <th>
              <div className="th-holder">
                Status
                <Image
                  src={"/images/filter-results-button.svg"}
                  alt="logo"
                  width={16}
                  height={16}
                  priority
                />
              </div>
            </th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {pageItems.map((user: UserDetailsProp, index: number) => (
            <>
              <tr key={index}>
                <td>{user.bvn}</td>
                <td>{user.full_name}</td>
                <td>{user.email}</td>
                <td>{user.phone_number}</td>
                <td>{user.loan_repayment}</td>
                <td>
                  {/* <span className={`status ${user.status.toLowerCase()}`}>
                    {user.status}
                  </span> */}
                </td>
              </tr>
              {/* <div className="seperator"></div> */}
            </>
          ))}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default DashboardTable;
