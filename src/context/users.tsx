"use client";

import { createContext, useState, useEffect, useActionState } from "react";
import { getUser } from "@/server/user-info";
import {
  userContextProps,
  UserDetailsProp,
  userFilterProps,
} from "@/types/user";
import { ChildrenLayoutProp } from "@/types/layout";
import { formatDate } from "@/lib/util";

export const UserContext = createContext<userContextProps | null>(null);

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
      } catch (error: any) {
        console.log("Error", error);
        throw new Error("Error fetching users: " + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);
  useEffect(() => {
    let filtered = users.filter((user) => {
      return (
        (!filters.status ||
          user.kyc_status
            .toLowerCase()
            .includes(filters.status.toLowerCase())) &&
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
        (!filters.date ||
          user.date_joined.includes(formatDate(filters.date))) &&
        (!filters.phoneNumber ||
          user.phone_number.includes(filters.phoneNumber)) &&
        (!filters.status || user.kyc_status.includes(filters.status))
      );
    });

    setFilteredUsers(filtered);
  }, [users, filters]);

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
