export const getExpirence = (startDate: Date, endDate: Date) => {
  const years = endDate.getFullYear() - startDate.getFullYear();
  endDate.setFullYear( endDate.getFullYear() - years );
  const months = endDate.getMonth() - startDate.getMonth(); 

  return ` (${years}y, ${months}m)`;
};
