"use client";

import { createContext, useState, useEffect } from "react";
import { getUser } from "@/server/user-info";
import {
  userContextProps,
  UserDetailsProp,
  userFilterProps,
} from "@/types/user";
import { ChildrenLayoutProp } from "@/types/layout";
import { formatDate } from "@/lib/util";

// Create Context for User Data
export const UserContext = createContext<userContextProps | null>(null);

/**
 * Filters the users based on the provided filter criteria.
 * @param users - The list of users.
 * @param filters - The applied filters.
 * @returns Filtered users.
 */
export const filterUsers = (
  users: UserDetailsProp[],
  filters: userFilterProps
) => {
  return users.filter((user) => {
    return (
      (!filters.status ||
        user.kyc_status.toLowerCase().includes(filters.status.toLowerCase())) &&
      (!filters.organization ||
        user.organisation_name
          .toLowerCase()
          .includes(filters.organization.toLowerCase())) &&
      (!filters.username ||
        user.full_name
          .toLowerCase()
          .includes(filters.username.toLowerCase())) &&
      (!filters.email ||
        user.email.toLowerCase().includes(filters.email.toLowerCase())) &&
      (!filters.date || user.date_joined.includes(formatDate(filters.date))) &&
      (!filters.phoneNumber || user.phone_number.includes(filters.phoneNumber))
    );
  });
};

// Context Provider Component
export const UserProvider: React.FC<ChildrenLayoutProp> = ({ children }) => {
  const [users, setUsers] = useState<UserDetailsProp[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<UserDetailsProp[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [totalUsers, setTotalUsers] = useState<number>(1);
  const [pageItems, setPageItems] = useState<UserDetailsProp[]>([]);
  const [filters, setFilters] = useState<userFilterProps>({
    organization: "",
    username: "",
    email: "",
    date: "",
    phoneNumber: "",
    status: "",
  });

  // Fetch user data from localStorage or API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const storedUsers = localStorage.getItem("usersData");
        let usersData: UserDetailsProp[] = [];

        if (storedUsers) {
          usersData = JSON.parse(storedUsers);
        } else {
          usersData = await getUser();
          localStorage.setItem("usersData", JSON.stringify(usersData));
        }
        setUsers(usersData);
      } catch (error) {
        console.log("Error", error);
        throw new Error("Error fetching users");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Apply filters to the user data
  useEffect(() => {
    setFilteredUsers(filterUsers(users, filters));
  }, [users, filters]);

  // Handle pagination updates
  useEffect(() => {
    if (filteredUsers.length > 0) {
      setTotalUsers(filteredUsers.length);
      setTotalPages(Math.ceil(filteredUsers.length / itemsPerPage));
      setPageItems(
        filteredUsers.slice(
          (currentPage - 1) * itemsPerPage,
          currentPage * itemsPerPage
        )
      );
    } else {
      setTotalUsers(0);
      setTotalPages(0);
      setPageItems([]);
    }
  }, [users, currentPage, itemsPerPage, filteredUsers]);

  // Reset current page when total pages change
  useEffect(() => {
    setCurrentPage(1);
  }, [totalPages]);

  return (
    <UserContext.Provider
      value={{
        users,
        loading,
        pageItems,
        totalPages,
        totalUsers,
        currentPage,
        setCurrentPage,
        itemsPerPage,
        setItemsPerPage,
        setFilters,
        filters,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
