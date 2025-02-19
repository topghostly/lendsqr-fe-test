"use server";

export async function getUser() {
  const res = await fetch(process.env.MOCK_API_URL || "");

  if (!res.ok) throw new Error("Failed to fetch users information");

  const usersData = await res.json();

  return usersData;
}
