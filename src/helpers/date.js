export function getDateFormatted(date) {
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
}

// Adds number of days passed to today and returns it
export function getDateInFuture(days, formatted) {
  const date = new Date();
  date.setDate(date.getDate() + days);

  if (formatted) {
    return getDateFormatted(date);
  }
  
  return date;
}