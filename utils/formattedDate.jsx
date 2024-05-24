import React from "react";

const formattedDate = (date) => {
  const inputDate = new Date(date);
  const day = inputDate.getUTCDate();
  const month = inputDate.getUTCMonth() + 1; // Months are zero-based
  const year = inputDate.getUTCFullYear();

  const formattedDate = `${day}/${month}/${year}`;

  return formattedDate;
};

export default formattedDate;
