"use client";

import React, { useEffect, useState } from "react";
import styles from "../../styles/components/dashboard/_dashboard-matrics.module.scss";
import { ChildrenLayoutProp } from "@/types/layout";
import Image from "next/image";
import { useUsers } from "@/hooks/users";
import { UserDetailsProp } from "@/types/user";

const MatricsCard: React.FC<ChildrenLayoutProp> = ({ children }) => {
  return <div className="matrics__card">{children}</div>;
};

const DashboardMatrics = () => {
  const { users } = useUsers();

  const [activeUsers, setActiveUsers] = useState<number[]>([]);
  const [userWithSavings, setUserWithSavings] = useState<number[]>([]);
  const [userWithLoan, setUserWithLoan] = useState<number[]>([]);

  useEffect(() => {
    const active = users.filter((user: UserDetailsProp) => user.active);
    const savings = users.filter(
      (user: UserDetailsProp) => Number(user.savings) > 0
    );
    const loan = users.filter(
      (user: UserDetailsProp) => Number(user.active_loan.total_loan) > 0
    );
    setActiveUsers(active);
    setUserWithLoan(loan);
    setUserWithSavings(savings);
  }, [users]);
  return (
    <div className="matrics">
      <MatricsCard>
        <div className="matrics__card-image purple">
          <Image
            src={"/images/np_users_1248631_000000.svg"}
            alt="search icon"
            width={22}
            height={22}
            priority
          />
        </div>
        <div className="matrics__card-text">USERS</div>
        <div className="matrics__card-stat">{users.length}</div>
      </MatricsCard>
      <MatricsCard>
        <div className="matrics__card-image blue">
          <Image
            src={"/images/np_users_1977590_000000.svg"}
            alt="search icon"
            width={24}
            height={24}
            priority
          />
        </div>
        <div className="matrics__card-text">ACTIVE USERS</div>
        <div className="matrics__card-stat">{activeUsers.length || 0}</div>
      </MatricsCard>
      <MatricsCard>
        <div className="matrics__card-image orange">
          <Image
            src={"/images/np_loan_1243991_000000.svg"}
            alt="search icon"
            width={20}
            height={20}
            priority
          />
        </div>
        <div className="matrics__card-text">USERS WITH LOANS</div>
        <div className="matrics__card-stat">{userWithLoan.length || 0}</div>
      </MatricsCard>
      <MatricsCard>
        <div className="matrics__card-image red">
          <Image
            src={"/images/np_money_549109_000000.svg"}
            alt="search icon"
            width={18}
            height={18}
            priority
          />
        </div>
        <div className="matrics__card-text">USERS WITH SAVINGS</div>
        <div className="matrics__card-stat">{userWithSavings.length || 0}</div>
      </MatricsCard>
    </div>
  );
};

export default DashboardMatrics;
