"use client";

import { createContext, useState, useEffect } from "react";
import { getUser } from "@/server/user-info";
import { userContextProps, UserDetailsProp } from "@/types/user";
import { ChildrenLayoutProp } from "@/types/layout";

export const UserContext = createContext<userContextProps | null>(null);

export const UserProvider: React.FC<ChildrenLayoutProp> = ({ children }) => {
  const [users, setUsers] = useState<UserDetailsProp[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);

  let totalPage: any;
  let pageItems: any;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const storedUsers = localStorage.getItem("usersData");
        if (storedUsers) return setUsers(JSON.parse(storedUsers));
        const usersData = await getUser();

        /* HANDLE PAGINATION */
        totalPage = Math.ceil(users.length / itemsPerPage);
        pageItems = users.slice(
          (currentPage - 1) * itemsPerPage,
          currentPage * itemsPerPage
        );
        setUsers(usersData);
        localStorage.setItem("usersData", JSON.stringify(usersData));
      } catch (error: any) {
        console.log("Error", error);
        throw new Error("Error fatching users: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <UserContext.Provider
      value={{
        users,
        loading,
        pageItems,
        totalPage,
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
