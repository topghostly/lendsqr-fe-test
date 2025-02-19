"use client";

import { createContext, useState, useEffect, useActionState } from "react";
import { getUser } from "@/server/user-info";
import { userContextProps, UserDetailsProp } from "@/types/user";
import { ChildrenLayoutProp } from "@/types/layout";

export const UserContext = createContext<userContextProps | null>(null);

export const UserProvider: React.FC<ChildrenLayoutProp> = ({ children }) => {
  const [users, setUsers] = useState<UserDetailsProp[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [pageItems, setPageItems] = useState<UserDetailsProp[]>([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    console.log(currentPage, itemsPerPage, totalPages);
  }, [totalPages, currentPage, itemsPerPage]);

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
    if (users.length > 0) {
      setTotalPages(Math.ceil(users.length / itemsPerPage));
      setPageItems(
        users.slice(
          (currentPage - 1) * itemsPerPage,
          currentPage * itemsPerPage
        )
      );
    }
  }, [users, currentPage, itemsPerPage]);

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
        currentPage,
        setCurrentPage,
        itemsPerPage,
        setItemsPerPage,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
