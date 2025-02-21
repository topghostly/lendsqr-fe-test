"use server";

export async function getUser() {
  const res = await fetch(
    process.env.MOCK_API_URL ||
      "https://run.mocky.io/v3/3a92325a-b21c-44ad-9df3-25f0809c9473"
  );

  if (!res.ok) throw new Error("Failed to fetch users information");

  const usersData = await res.json();

  return usersData;
}
