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

const DashboardTable: React.FC = () => {
  const router = useRouter();
  const [showFilter, setShowFilter] = useState<boolean>(false);

  const { pageItems } = useUsers();

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
                  <button onClick={() => setShowFilter((prev) => !prev)}>
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
                  <button onClick={() => setShowFilter((prev) => !prev)}>
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
                  <button onClick={() => setShowFilter((prev) => !prev)}>
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
                  <button onClick={() => setShowFilter((prev) => !prev)}>
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
                  <button onClick={() => setShowFilter((prev) => !prev)}>
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
                  <button onClick={() => setShowFilter((prev) => !prev)}>
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
            {pageItems.map((user: UserDetailsProp, index: number) => (
              <>
                <tr
                  key={index}
                  onClick={() =>
                    router.push(`/dashboard/users/details/${user.id}`)
                  }
                >
                  <td className="none-3">{user.organisation_name}</td>
                  <td>{user.full_name}</td>
                  <td className="none-2">{user.email}</td>
                  <td className="none-2">{user.phone_number}</td>
                  <td className="none-1">{formatDateTime(user.date_joined)}</td>
                  <td>
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
                      <Image
                        src={"/images/table_options.svg"}
                        alt="logo"
                        width={20}
                        height={20}
                        priority
                      />
                    </div>
                  </td>
                </tr>
              </>
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
