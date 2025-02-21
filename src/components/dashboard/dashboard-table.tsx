"use client";

import React, { useState } from "react";
import "../../styles/components/dashboard/_dashboard-table.scss";
import Image from "next/image";
import { useUsers } from "@/hooks/users";
import { UserDetailsProp } from "@/types/user";
import Pagination from "../../components/dashboard/pagination";
import { useRouter } from "next/navigation";
import FilterForm from "./filter-dropdown";
import { formatDateTime } from "@/lib/util";
import Dropdown from "../ui/dropdown";

const DashboardTable: React.FC = () => {
  const router = useRouter();
  const [showFilter, setShowFilter] = useState<boolean>(false);

  const LinkToDetails = (user: string) => {
    router.push(`/dashboard/users/details/${user}`);
  };

  const { pageItems } = useUsers() || {};

  const toggleFilter = () => setShowFilter((prev) => !prev);

  return (
    <div>
      <div className="table-container">
        <table className="user-table">
          {/* Table Header */}
          <thead>
            <tr>
              <th className="none-3">
                <div className="th-holder">
                  Organization
                  <button onClick={toggleFilter}>
                    <Image
                      src={"/images/filter-results-button.svg"}
                      alt="logo"
                      width={16}
                      height={16}
                      priority
                    />
                  </button>
                </div>
              </th>
              <th>
                <div className="th-holder">
                  Username
                  <button onClick={toggleFilter}>
                    <Image
                      src={"/images/filter-results-button.svg"}
                      alt="logo"
                      width={16}
                      height={16}
                      priority
                    />
                  </button>
                </div>
              </th>
              <th className="none-2">
                <div className="th-holder">
                  Email
                  <button onClick={toggleFilter}>
                    <Image
                      src={"/images/filter-results-button.svg"}
                      alt="logo"
                      width={16}
                      height={16}
                      priority
                    />
                  </button>
                </div>
              </th>
              <th className="none-2">
                <div className="th-holder">
                  Phone Number
                  <button onClick={toggleFilter}>
                    <Image
                      src={"/images/filter-results-button.svg"}
                      alt="logo"
                      width={16}
                      height={16}
                      priority
                    />
                  </button>
                </div>
              </th>
              <th className="none-1">
                <div className="th-holder ">
                  Date Joined
                  <button onClick={toggleFilter}>
                    <Image
                      src={"/images/filter-results-button.svg"}
                      alt="logo"
                      width={16}
                      height={16}
                      priority
                    />
                  </button>
                </div>
              </th>
              <th>
                <div className="th-holder">
                  Status
                  <button onClick={toggleFilter}>
                    <Image
                      src={"/images/filter-results-button.svg"}
                      alt="logo"
                      width={16}
                      height={16}
                      priority
                    />
                  </button>
                </div>
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {pageItems!.map((user: UserDetailsProp) => (
              <tr key={user.id}>
                <td className="none-3" onClick={() => LinkToDetails(user.id)}>
                  {user.organisation_name}
                </td>
                <td>{user.full_name}</td>
                <td className="none-2" onClick={() => LinkToDetails(user.id)}>
                  {user.email}
                </td>
                <td className="none-2" onClick={() => LinkToDetails(user.id)}>
                  {user.phone_number}
                </td>
                <td className="none-1" onClick={() => LinkToDetails(user.id)}>
                  {formatDateTime(user.date_joined)}
                </td>
                <td onClick={() => LinkToDetails(user.id)}>
                  {user.kyc_status === "Active" ? (
                    <div className="active tag">Active</div>
                  ) : user.kyc_status === "Blacklisted" ? (
                    <div className="blacklisted tag">Blacklisted</div>
                  ) : user.kyc_status === "Inactive" ? (
                    <div className="inactive tag">Inactive</div>
                  ) : user.kyc_status === "Pending" ? (
                    <div className="pending tag">Pending</div>
                  ) : null}
                </td>
                <td>
                  <div className="options">
                    <Dropdown
                      trigger={
                        <Image
                          src={"/images/table_options.svg"}
                          alt="logo"
                          width={20}
                          height={20}
                          priority
                        />
                      }
                    >
                      <ul>
                        <li>
                          <Image
                            src={"/images/np_view_1214519_000000.svg"}
                            alt="user details"
                            width={14}
                            height={14}
                            priority
                          />
                          View Details
                        </li>
                        <li>
                          <Image
                            src={"/images/np_delete-friend_3248001_000000.svg"}
                            alt="blacklist"
                            width={14}
                            height={14}
                            priority
                          />
                          Blacklist User
                        </li>
                        <li>
                          <Image
                            src={"/images/np_user_2995993_000000.svg"}
                            alt="logo"
                            width={14}
                            height={14}
                            priority
                          />
                          Activate User
                        </li>
                      </ul>
                    </Dropdown>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {showFilter && <FilterForm setShowFilter={setShowFilter} />}
      </div>
      <Pagination />
    </div>
  );
};

export default DashboardTable;
