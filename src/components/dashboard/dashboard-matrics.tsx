"use client";

import React, { useEffect, useMemo, useState } from "react";
import styles from "../../styles/components/dashboard/_dashboard-matrics.module.scss";
import { MatricsCardProps } from "@/types/layout";
import Image from "next/image";
import { useUsers } from "@/hooks/users";
import { UserDetailsProp } from "@/types/user";

const MatricsCard: React.FC<MatricsCardProps> = ({
  icon,
  label,
  value,
  color,
}) => {
  return (
    <div className="matrics__card">
      <div className={`matrics__card-image ${color}`}>
        <Image src={icon} alt={label} width={22} height={22} />
      </div>
      <div className="matrics__card-text">{label}</div>
      <div className="matrics__card-stat">{value}</div>
    </div>
  );
};

const DashboardMatrics = () => {
  const { users } = useUsers();

  const activeUsers = useMemo(
    () => users.filter((user: UserDetailsProp) => user.active),
    [users]
  );

  const userWithSavings = useMemo(
    () => users.filter((user: UserDetailsProp) => Number(user.savings) > 0),
    [users]
  );

  const userWithLoan = useMemo(
    () =>
      users.filter(
        (user: UserDetailsProp) => Number(user.active_loan.total_loan) > 0
      ),
    [users]
  );

  const metrics = [
    {
      label: "USERS",
      value: users.length,
      icon: "/images/np_users_1248631_000000.svg",
      color: "purple",
    },
    {
      label: "ACTIVE USERS",
      value: activeUsers.length || 0,
      icon: "/images/np_users_1977590_000000.svg",
      color: "blue",
    },
    {
      label: "USERS WITH LOANS",
      value: userWithLoan.length || 0,
      icon: "/images/np_loan_1243991_000000.svg",
      color: "orange",
    },
    {
      label: "USERS WITH SAVINGS",
      value: userWithSavings.length || 0,
      icon: "/images/np_money_549109_000000.svg",
      color: "red",
    },
  ];

  return (
    <div className="matrics">
      {metrics.map((metric, index) => (
        <MatricsCard key={index} {...metric} />
      ))}
    </div>
  );
};

export default DashboardMatrics;

// const MatricsCard: React.FC<MatricsCardProps> = ({ icon, label, value, color }) => {
//   return (
//     <div className="matrics__card">
//       <div className=`matrics__card-image ${color}`>
//         <Image src={icon} alt={label} width={22} height={22} />
//       </div>
//       <div className="matrics__card-text">{label}</div>
//       <div className="matrics__card-stat">{value}</div>
//     </div>
//   );
// };

// interface MatricsCardProps {
//   icon: string;
//   label: string;
//   value: number;
//   color: string;
// }

// const metrics = [
//   { label: "USERS", value: users.length, icon: "/images/np_users_1248631_000000.svg", color: "purple" },
//   { label: "ACTIVE USERS", value: activeUsers.length || 0, icon: "/images/np_users_1977590_000000.svg", color: "blue" },
//   { label: "USERS WITH LOANS", value: userWithLoan.length || 0, icon: "/images/np_loan_1243991_000000.svg", color: "orange" },
//   { label: "USERS WITH SAVINGS", value: userWithSavings.length || 0, icon: "/images/np_money_549109_000000.svg", color: "red" }
// ];

// return (
//   <div className="matrics">
//     {metrics.map((metric, index) => (
//       <MatricsCard key={index} {...metric} />
//     ))}
//   </div>
// );
