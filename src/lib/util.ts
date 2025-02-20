export const formatBalance = (amount: number): string => {
  return amount.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

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
