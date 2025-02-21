import { filterUsers } from "@/context/users";
import { UserDetailsProp } from "@/types/user";
import { describe, expect, test } from "@jest/globals";
import { formatDate } from "@/lib/util";

describe("filterUsers function", () => {
  const mockUsers: UserDetailsProp[] = [
    {
      id: "N4D1OKCC4I",
      full_name: "Chinedu Okafor",
      phone_number: "07043146463",
      email: "chinedu.okafor@gmail.com",
      bvn: "62353860102",
      gender: "Male",
      marital_status: "Single",
      children: "None",
      type_of_residence: "Own's Apartment",
      education_level: "HND",
      employment_status: "Employed",
      sector_of_employment: "Retail",
      duration_of_employment: "8",
      office_email: "chinedu@insuranceco.ng",
      monthly_income: "226439 - 569781",
      loan_repayment: "57492",
      socials: {
        twitter: "@aisha_786",
        facebook: "Tunde Alabi",
        instagram: "@emeka.official51",
      },
      guarantor: {
        full_name: "Musa Lawal",
        phone_number: "07088714775",
        email_address: "musa@gmail.com",
        relationship: "Friend",
      },
      savings: "130125",
      kyc_status: "Pending",
      user_tier: "2",
      profile_image: "",
      active_loan: {
        total_loan: "496777",
      },
      bank: {
        name: "EcoBank",
        acct_number: "5315689683",
        user_balance: "382986",
      },
      organisation_name: "Insuranceco",
      date_joined: "26-05-2019 08:34PM",
      active: true,
    },
    {
      id: "C4Q73OR3T4",
      full_name: "Tunde Chukwu",
      phone_number: "07028357139",
      email: "tunde.chukwu@gmail.com",
      bvn: "18821429349",
      gender: "Female",
      marital_status: "Single",
      children: "2",
      type_of_residence: "Own's Apartment",
      education_level: "HND",
      employment_status: "Employed",
      sector_of_employment: "Healthcare",
      duration_of_employment: "1",
      office_email: "tunde@fintechafrica.ng",
      monthly_income: "132073 - 556371",
      loan_repayment: "91742",
      socials: {
        twitter: "@chinedu_376",
        facebook: "Bola Adeyemi",
        instagram: "@kunle.crypto31",
      },
      guarantor: {
        full_name: "Musa Lawal",
        phone_number: "07021238613",
        email_address: "musa@gmail.com",
        relationship: "Sister",
      },
      savings: "0",
      kyc_status: "Blacklisted",
      user_tier: "1",
      profile_image: "",
      active_loan: {
        total_loan: "1133204",
      },
      bank: {
        name: "UBA",
        acct_number: "9770823717",
        user_balance: "299780",
      },
      organisation_name: "Fintechafrica",
      date_joined: "26-05-2018 01:50AM",
      active: false,
    },
    {
      id: "U5V9VTLGGU",
      full_name: "Emeka Alabi",
      phone_number: "07080767004",
      email: "emeka.alabi@gmail.com",
      bvn: "87955503586",
      gender: "Male",
      marital_status: "Married",
      children: "3",
      type_of_residence: "Own's Apartment",
      education_level: "Diploma",
      employment_status: "Employed",
      sector_of_employment: "Agriculture",
      duration_of_employment: "1",
      office_email: "emeka@techhub.com",
      monthly_income: "167996 - 989658",
      loan_repayment: "25508",
      socials: {
        twitter: "@tunde_294",
        facebook: "Yusuf Osho",
        instagram: "@fatima.ng45",
      },
      guarantor: {
        full_name: "Patricia Nwankwo",
        phone_number: "07087495835",
        email_address: "patricia@gmail.com",
        relationship: "Uncle",
      },
      savings: "0",
      kyc_status: "Pending",
      user_tier: "2",
      profile_image: "",
      active_loan: {
        total_loan: "596596",
      },
      bank: {
        name: "Zenith Bank",
        acct_number: "3550032867",
        user_balance: "463050",
      },
      organisation_name: "Techhub",
      date_joined: "20-11-2023 11:06PM",
      active: false,
    },
    {
      id: "K3HCHKFGV1",
      full_name: "Fatima Eze",
      phone_number: "07027011567",
      email: "fatima.eze@gmail.com",
      bvn: "86671658645",
      gender: "Female",
      marital_status: "Single",
      children: "1",
      type_of_residence: "Own's Apartment",
      education_level: "HND",
      employment_status: "Employed",
      sector_of_employment: "Agriculture",
      duration_of_employment: "6",
      office_email: "fatima@insuranceco.ng",
      monthly_income: "221806 - 646264",
      loan_repayment: "95589",
      socials: {
        twitter: "@fatima_655",
        facebook: "Fatima Ibrahim",
        instagram: "@yusuf.africa12",
      },
      guarantor: {
        full_name: "Samuel Adekunle",
        phone_number: "07048616012",
        email_address: "samuel@gmail.com",
        relationship: "Friend",
      },
      savings: "393869",
      kyc_status: "Pending",
      user_tier: "3",
      profile_image: "",
      active_loan: {
        total_loan: "730167",
      },
      bank: {
        name: "Sterling Bank",
        acct_number: "5605909419",
        user_balance: "446024",
      },
      organisation_name: "Insuranceco",
      date_joined: "28-06-2021 02:25AM",
      active: false,
    },
  ];

  test("should return all users when no filter is selected", () => {
    const filters = {
      organization: "",
      username: "",
      email: "",
      date: "",
      phoneNumber: "",
      status: "",
    };
    const result = filterUsers(mockUsers, filters);
    expect(result).toEqual(mockUsers);
  });

  test("should return filter with username", () => {
    const filters = {
      organization: "",
      username: "Tunde",
      email: "",
      date: "",
      phoneNumber: "",
      status: "",
    };
    const result = filterUsers(mockUsers, filters);
    expect(result).toEqual([mockUsers[1]]);
  });

  test("should return filter with email", () => {
    const filters = {
      organization: "",
      username: "",
      email: "chinedu.okafor@gmail.com",
      date: "",
      phoneNumber: "",
      status: "",
    };
    const result = filterUsers(mockUsers, filters);
    expect(result).toEqual([mockUsers[0]]);
  });

  test("should return filter with status", () => {
    const filters = {
      organization: "",
      username: "",
      email: "",
      date: "",
      phoneNumber: "",
      status: "pending",
    };
    const result = filterUsers(mockUsers, filters);
    expect(result).toEqual([mockUsers[0], mockUsers[2], mockUsers[3]]);
  });

  test("should return filter with organization name", () => {
    const filters = {
      organization: "Fintechafrica",
      username: "",
      email: "",
      date: "",
      phoneNumber: "",
      status: "",
    };
    const result = filterUsers(mockUsers, filters);
    expect(result).toEqual([mockUsers[1]]);
  });

  test("should return filter with phone number", () => {
    const filters = {
      organization: "",
      username: "",
      email: "",
      date: "",
      phoneNumber: "07043146463",
      status: "",
    };
    const result = filterUsers(mockUsers, filters);
    expect(result).toEqual([mockUsers[0]]);
  });

  test("should return filter with date joined", () => {
    const filters = {
      organization: "",
      username: "",
      email: "",
      date: "2019-05-26",
      phoneNumber: "",
      status: "",
    };
    const result = filterUsers(mockUsers, filters);
    expect(result).toEqual([mockUsers[0]]);
  });

  test("should return filter with multiple criteria", () => {
    const filters = {
      organization: "Insuranceco",
      username: "Chinedu",
      email: "",
      date: "",
      phoneNumber: "",
      status: "",
    };
    const result = filterUsers(mockUsers, filters);
    expect(result).toEqual([mockUsers[0]]);
  });

  test("should return empty array when no users match", () => {
    const filters = {
      organization: "Loyal",
      username: "",
      email: "",
      date: "",
      phoneNumber: "",
      status: "",
    };
    const result = filterUsers(mockUsers, filters);
    expect(result).toEqual([]);
  });
});
