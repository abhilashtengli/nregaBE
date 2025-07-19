export const addDays = (dateInput: string | Date, daysToAdd: number): string => {
  let date: Date;

  if (dateInput instanceof Date) {
    // If it's already a Date object, use it directly
    date = new Date(dateInput);
  } else {
    // Parse the date string (assuming DD/MM/YY or DD/MM/YYYY format)
    const parts = dateInput.split("/");
    if (parts.length !== 3) return dateInput; // Return original if format is unexpected

    const day = parseInt(parts[0]);
    const month = parseInt(parts[1]);
    const year = parseInt(parts[2]);

    // Create a Date object (month is 0-indexed in JavaScript)
    date = new Date(year < 100 ? 2000 + year : year, month - 1, day);
  }

  // Add the specified number of days
  date.setDate(date.getDate() + daysToAdd);

  // Format back to DD/MM/YY or DD/MM/YYYY
  const newDay = date.getDate().toString().padStart(2, "0");
  const newMonth = (date.getMonth() + 1).toString().padStart(2, "0");
  
  // Determine year format based on original input
  let newYear: string;
  if (dateInput instanceof Date) {
    newYear = date.getFullYear().toString(); // Use full year for Date objects
  } else {
    const originalYear = parseInt(dateInput.split("/")[2]);
    newYear = originalYear < 100
      ? date.getFullYear().toString().slice(-2)
      : date.getFullYear().toString();
  }

  return `${newDay}/${newMonth}/${newYear}`;
};

// Example usage:
// addDays("17/05/2025", 2) returns "19/05/2025"
// addDays(new Date(2025, 4, 17), 2) returns "19/05/2025"
// addDays("30/04/25", 2) returns "02/05/25"