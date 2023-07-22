export interface SearchParams {
  limit?: number;
  page?: number;
  sort?: string;
  q?: string;
}

export const getPostsWithParams = (searchParams: SearchParams) => {
  const {limit, page, sort, q} = searchParams;
  const search = new URLSearchParams();
  if (!searchParams) {
    return search.toString();
  }

  if (limit && page) {
    search.set('_limit', limit.toString());
    search.set('_page', page.toString());
  }

  if (sort) {
    search.set('_order', 'asc');
    search.set('_sort', sort);
  }

  if (q) {
    search.set('q', q);
  }

  return `/posts?${search.toString()}`;
};
