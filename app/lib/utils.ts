export const formatDate = (date: Date) => {
  // create options for formatting date
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  // format the date
  const formattedDate = date.toLocaleDateString('en-US', options)

  // add suffix
  const dayWithSuffix = date.getDate() +
    (date.getDate() % 10 === 1 && date.getDate() !== 11
      ? 'st'
      : date.getDate() % 10 === 2 && date.getDate() !== 12
        ? 'nd'
        : date.getDate() % 10 === 3 && date.getDate() !== 13
          ? 'rd'
          : 'th');

  const formattedDateWithSuffix = formattedDate.replace(
    /(\d+)([ ,]+)/,
    `${dayWithSuffix}$2`
  );

  return formattedDateWithSuffix;
}