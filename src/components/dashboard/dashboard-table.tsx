"use client";

import React, { useState } from "react";
import "../../styles/components/dashboard/_dashboard-table.scss";
import Image from "next/image";
import { useUsers } from "@/hooks/users";
import { UserDetailsProp } from "@/types/user";
import Pagination from "../../components/dashboard/pagination";
import { useRouter } from "next/navigation";
import FilterForm from "./filter-dropdown";

const DashboardTable: React.FC = () => {
  const router = useRouter();
  const [showFilter, setShowFilter] = useState<boolean>(false);

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
                <button>
                  <Image
                    onClick={() => setShowFilter((prev) => !prev)}
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
            <th>
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
            <th>
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
            <th>
              <div className="th-holder">
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
      {showFilter && <FilterForm setShowFilter={setShowFilter} />}
    </div>
  );
};

export default DashboardTable;
