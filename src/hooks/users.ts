import { UserContext } from "@/context/users";
import { useContext } from "react";

export function useUsers() {
  return useContext(UserContext);
}
