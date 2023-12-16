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

export const generatePagination = (currentPage: number, totalPages: number) => {
  // If the total number of pages is 7 or less,
  // display all pages without any ellipsis.
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // If the current page is among the first 3 pages,
  // show the first 3, an ellipsis, and the last 2 pages.
  if (currentPage <= 3) {
    return [1, 2, 3, '...', totalPages - 1, totalPages];
  }

  // If the current page is among the last 3 pages,
  // show the first 2, an ellipsis, and the last 3 pages.
  if (currentPage >= totalPages - 2) {
    return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
  }

  // If the current page is somewhere in the middle,
  // show the first page, an ellipsis, the current page and its neighbors,
  // another ellipsis, and the last page.
  return [
    1,
    '...',
    currentPage - 1,
    currentPage,
    currentPage + 1,
    '...',
    totalPages,
  ];
};
