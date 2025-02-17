import React from "react";
import styles from "../../styles/components/dashboard/_dashboard-matrics.module.scss";
import { ChildrenLayoutProp } from "@/types/layout";
import Image from "next/image";

const MatricsCard: React.FC<ChildrenLayoutProp> = ({ children }) => {
  return <div className={styles.holder__card}>{children}</div>;
};

const DashboardMatrics = () => {
  return (
    <div className={styles.holder}>
      <MatricsCard>
        <div className={styles.holder__card_image}>
          <Image
            src={"/images/np_users_1248631_000000.svg"}
            alt="search icon"
            width={22}
            height={22}
            priority
          />
        </div>
        <div className={styles.holder__card_text}>USERS</div>
        <div className={styles.holder__card_stat}>2,453</div>
      </MatricsCard>
      <MatricsCard>
        <div className={styles.holder__card_image}>
          <Image
            src={"/images/np_users_1977590_000000.svg"}
            alt="search icon"
            width={24}
            height={24}
            priority
          />
        </div>
        <div className={styles.holder__card_text}>ACTIVE USERS</div>
        <div className={styles.holder__card_stat}>2,453</div>
      </MatricsCard>
      <MatricsCard>
        <div className={styles.holder__card_image}>
          <Image
            src={"/images/np_loan_1243991_000000.svg"}
            alt="search icon"
            width={20}
            height={20}
            priority
          />
        </div>
        <div className={styles.holder__card_text}>USERS WITH LOANS</div>
        <div className={styles.holder__card_stat}>12,453</div>
      </MatricsCard>
      <MatricsCard>
        <div className={styles.holder__card_image}>
          <Image
            src={"/images/np_money_549109_000000.svg"}
            alt="search icon"
            width={18}
            height={18}
            priority
          />
        </div>
        <div className={styles.holder__card_text}>USERS WITH SAVINGS</div>
        <div className={styles.holder__card_stat}>102,453</div>
      </MatricsCard>
    </div>
  );
};

export default DashboardMatrics;
