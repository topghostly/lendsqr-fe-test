import React from "react";

export interface UserDetailsProp {
  id: string;
  full_name: string;
  phone_number: string;
  email: string;
  bvn: string;
  bank: {
    name: string;
    acct_number: string;
  };
  gender: "Male" | "Female";
  marital_status: "Single" | "Married";
  children: number | null;
  type_of_residence: "Own's Apartment" | "Parent's Apartment";
  education_level: "HND" | "Diploma" | "M.Sc" | "B.Sc" | "M.Sc";
  employment_status: string;
  sector_of_employment: string;
  duration_of_employment: number;
  office_email: string;
  organisation_name: string;
  monthly_income: string;
  loan_repayment: number;
  socials: {
    twitter: string;
    facebook: string;
    instagram: string;
  };
  guarantor: {
    full_name: string;
    phone_number: string;
    email_address: string;
    relationship: string;
  };
  savings: number;
  date_joined: string;
  kyc_status: "Active" | "Blacklisted" | "Inactive" | "Pending";
  user_tier: number;
  profile_image: string;
  active_loan: {
    total_loan: number;
  };
}

export interface userContextProps {
  users: UserDetailsProp[] | null;
  loading: boolean;
  pageItems: UserDetailsProp[] | null;
  totalPage: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  itemsPerPage: number;
  setItemsPerPage: React.Dispatch<React.SetStateAction<number>>;
}
