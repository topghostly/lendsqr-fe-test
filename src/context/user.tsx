"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { getUser } from "@/server/user-info";
import { UserDetailsProp } from "@/types/user";
import { ChildrenLayoutProp } from "@/types/layout";

const UserContext = createContext(null);

export const UserProvider: React.FC<ChildrenLayoutProp> = ({ children }) => {
  const [users, setUsers] = useState<[UserDetailsProp]>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await getUser();
        setUsers(usersData);
      } catch (error: any) {
        throw new Error("Error fatching users: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <UserContext.Provider value={{ users, setUsers, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export function useUsers() {
  return useContext(UserContext);
}
