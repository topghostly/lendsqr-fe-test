"use client";

import React from "react";
import styles from "@/styles/components/dashboard/_dashboard-boilerplate.module.scss";
import Link from "next/link";
import Image from "next/image";
import Button from "../../../../../components/Button";
import UserInfo from "@/components/dashboard/dashboard-user-info";

function UserDetails() {
  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboard__back}>
        <Link href={"#"}>
          <Image
            src={"/images/np_back_3007750_000000.svg"}
            alt="back"
            width={30}
            height={30}
            priority
          />
          Back to Users
        </Link>
      </div>
      <div className={styles.dashboard__head}>
        <h2 className={styles.dashboard__head_title}>Users Details</h2>
        <div className={styles.dashboard__head_action}>
          <Button
            variant="outline"
            type="button"
            onClick={() => {}}
            customClass={{
              color: "rgba(228, 3, 59, 1)",
              border: "solid 1px rgba(228, 3, 59, 1)",
              fontFamily: "Work Sans",
              fontWeight: 600,
            }}
          >
            BLACKLIST USER
          </Button>
          <Button
            variant="outline"
            type="button"
            onClick={() => {}}
            customClass={{
              color: "rgba(57, 205, 204, 1)",
              border: "solid 1px rgba(57, 205, 204, 1)",
              fontFamily: "Work Sans",
              fontWeight: 600,
            }}
          >
            ACTIVATER USER
          </Button>
        </div>
      </div>
      <UserInfo />
    </div>
  );
}

export default UserDetails;
