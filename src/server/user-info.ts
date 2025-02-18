"use server";

export async function getUser() {
  const res = await fetch(
    "https://run.mocky.io/v3/965f6992-37c0-494d-a4a2-f192eee437f6"
  );

  if (!res.ok) throw new Error("Failed to fetch users information");

  return res.json();
}
