"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Button from "@/components/ui/button";
import UserInfo from "@/components/dashboard/dashboard-user-info";
import { useParams } from "next/navigation";

function UserDetails() {
  const { id } = useParams() as { id: string };

  const router = useRouter();

  const buttonStyles = {
    blacklist: {
      color: "rgba(228, 3, 59, 1)",
      border: "solid 1px rgba(228, 3, 59, 1)",
      fontFamily: "Work Sans",
      fontWeight: 600,
    },
    activate: {
      color: "rgba(57, 205, 204, 1)",
      border: "solid 1px rgba(57, 205, 204, 1)",
      fontFamily: "Work Sans",
      fontWeight: 600,
    },
  };

  return (
    <div className="main">
      <div className="main__backbutton">
        <button onClick={() => router.push("/dashboard/users/")}>
          <Image
            src={"/images/np_back_3007750_000000.svg"}
            alt="back"
            width={30}
            height={30}
            priority
          />
          Back to Users
        </button>
      </div>
      <div className="main__head">
        <h2 className="main__head-title">Users Details</h2>
        <div className="main__head-action">
          <Button
            variant="outline"
            type="button"
            onClick={() => {}}
            customClass={buttonStyles.blacklist}
          >
            BLACKLIST USER
          </Button>
          <Button
            variant="outline"
            type="button"
            onClick={() => {}}
            customClass={buttonStyles.activate}
          >
            ACTIVATER USER
          </Button>
        </div>
      </div>
      <UserInfo currentUserID={id} />
    </div>
  );
}

export default UserDetails;
