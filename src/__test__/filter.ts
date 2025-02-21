import { filterUsers } from "../path-to-your-file"; // Adjust the import
import { formatDate } from "../path-to-utils"; // Adjust import if needed

describe("filterUsers function", () => {
  const mockUsers = [
    {
      full_name: "John Doe",
      email: "johndoe@example.com",
      phone_number: "1234567890",
      kyc_status: "verified",
      organisation_name: "Acme Corp",
      date_joined: "2023-02-17",
    },
    {
      full_name: "Jane Smith",
      email: "janesmith@example.com",
      phone_number: "9876543210",
      kyc_status: "pending",
      organisation_name: "Tech Inc",
      date_joined: "2023-05-21",
    },
  ];

  test("returns all users when filters are empty", () => {
    const filters = {};
    const result = filterUsers(mockUsers, filters);
    expect(result).toEqual(mockUsers);
  });

  test("filters by username", () => {
    const filters = { username: "John" };
    const result = filterUsers(mockUsers, filters);
    expect(result).toEqual([mockUsers[0]]);
  });

  test("filters by email", () => {
    const filters = { email: "janesmith" };
    const result = filterUsers(mockUsers, filters);
    expect(result).toEqual([mockUsers[1]]);
  });

  test("filters by kyc status", () => {
    const filters = { status: "verified" };
    const result = filterUsers(mockUsers, filters);
    expect(result).toEqual([mockUsers[0]]);
  });

  test("filters by organization name", () => {
    const filters = { organization: "Tech" };
    const result = filterUsers(mockUsers, filters);
    expect(result).toEqual([mockUsers[1]]);
  });

  test("filters by phone number", () => {
    const filters = { phoneNumber: "1234567890" };
    const result = filterUsers(mockUsers, filters);
    expect(result).toEqual([mockUsers[0]]);
  });

  test("filters by date joined", () => {
    const filters = { date: "2023-05-21" };
    const result = filterUsers(mockUsers, filters);
    expect(result).toEqual([mockUsers[1]]);
  });

  test("filters by multiple criteria", () => {
    const filters = { username: "Jane", organization: "Tech" };
    const result = filterUsers(mockUsers, filters);
    expect(result).toEqual([mockUsers[1]]);
  });

  test("returns an empty array when no users match", () => {
    const filters = { username: "Nonexistent" };
    const result = filterUsers(mockUsers, filters);
    expect(result).toEqual([]);
  });
});
