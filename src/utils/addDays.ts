export const addDays = (dateString: string, daysToAdd: number): string => {
  // Parse the date string (assuming DD/MM/YY or DD/MM/YYYY format)
  const parts = dateString.split("/");
  if (parts.length !== 3) return dateString; // Return original if format is unexpected

  const day = parseInt(parts[0]);
  const month = parseInt(parts[1]);
  const year = parseInt(parts[2]);

  // Create a Date object (month is 0-indexed in JavaScript)
  const date = new Date(year < 100 ? 2000 + year : year, month - 1, day);

  // Add the specified number of days
  date.setDate(date.getDate() + daysToAdd);

  // Format back to DD/MM/YY or DD/MM/YYYY
  const newDay = date.getDate().toString().padStart(2, "0");
  const newMonth = (date.getMonth() + 1).toString().padStart(2, "0");
  const newYear =
    year < 100
      ? date.getFullYear().toString().slice(-2)
      : date.getFullYear().toString();

  return `${newDay}/${newMonth}/${newYear}`;
};

// Example usage:
// addDays("17/05/2025", 2) returns "19/05/2025"
// addDays("30/04/2025", 2) returns "02/05/2025"
// addDays("17/05/2025", 1) returns "18/05/2025"
