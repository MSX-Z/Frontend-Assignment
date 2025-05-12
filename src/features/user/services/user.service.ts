import { API_URL } from "@/configs/configs";
import type { UserResponseData } from "@/features/user/types/user.type";

export const getUser = async (): Promise<UserResponseData> => {
  const res = await fetch(`${API_URL}/users`);
  if (!res.ok) throw new Error("Failed to fetch data");
  return await res.json();
}