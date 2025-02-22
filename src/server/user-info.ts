"use server";

/**
 * Fetches user data from the provided mock API URL.
 * Uses an environment variable `MOCK_API_URL` if available, otherwise defaults to a fixed Mocky.io URL.
 *
 * @returns A Promise resolving to the user data.
 * @throws An error if the fetch request fails.
 */
export async function getUser() {
  try {
    const API_URL = process.env.MOCK_API_URL || "";

    const res = await fetch(API_URL, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch user data. Status: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw new Error("Unable to fetch users' information at this time.");
  }
}
