import React from "react";

export interface UserDetailsProp {
  id: number;
  full_name: string;
  email: string;
  kyc_status: "Active" | "Blacklisted" | "Inactive" | "Pending";
}

export interface userContextProps {
  users: UserDetailsProp[];
  setUsers: React.Dispatch<React.SetStateAction<UserDetailsProp[]>>;
  loading: boolean;
}
