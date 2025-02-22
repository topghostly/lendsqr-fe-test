/**
 * Formats a number into a currency balance with commas and two decimal places
 * @param amount - The numerical amount to format
 * @returns A formatted string like "20,000.00"
 */
export const formatBalance = (amount: number): string => {
  return amount.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

/**
 * Converts a date-time string from "15-05-2020 10:00AM" to "May 15, 2020 10:00 AM"
 * @param dateTimeString - The date-time string in "DD-MM-YYYY HH:MMAM/PM" format
 * @returns Formatted date-time string like "May 15, 2020 10:00 AM"
 */
export const formatDateTime = (dateTimeString: string): string => {
  const dateParts = dateTimeString.split(" ");
  const [day, month, year] = dateParts[0].split("-").map(Number);
  const time = dateParts[1];
  const date = new Date(year, month - 1, day);

  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  return `${formattedDate} ${time}`;
};

/**
 * Converts a date string to the format "DD-MM-YYYY"
 * @param dateString - A valid date string
 * @returns Formatted string like "15-05-2020"
 */
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
};
