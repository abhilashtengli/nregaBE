

// Helper function to format date
export const formatDate = (
    dateString: string
  ): { original: string; formatted: string } => {
    try {
      const parts = dateString.split("/");
      if (parts.length === 3) {
        const day = parts[0].padStart(2, "0");
        const month = parts[1].padStart(2, "0");
        const year = parts[2];
        return {
          original: `${day}/${month}/${year}`,
          formatted: `${day}/${month}/${year}`
        };
      }
      return { original: dateString, formatted: dateString };
    } catch (error) {
      return { original: dateString, formatted: dateString };
    }
  };