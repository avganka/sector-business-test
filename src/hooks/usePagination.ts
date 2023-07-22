import {useState} from 'react';

export const usePagination = (initailPage = 1, initailItemsPerPage = 10) => {
  const [currentPage, setCurrentPage] = useState(initailPage);
  const [limit, setLimit] = useState(initailItemsPerPage);

  const goToPage = (page: number) => setCurrentPage(page);
  const setItemsLimit = (count: number) => setLimit(count);

  return {
    currentPage,
    limit,
    goToPage,
    setItemsLimit,
  };
};
