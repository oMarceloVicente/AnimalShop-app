import { endpoints, fetcher } from "@/utils/axios";
import useSWR from "swr";

export interface User {
  id: string;
  email: string;
  name: string;
}

export function useUsers() {
  return useSWR<User[]>(endpoints.user.getUser, fetcher);
}
