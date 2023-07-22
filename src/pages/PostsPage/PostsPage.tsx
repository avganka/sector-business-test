import {useEffect, useState} from 'react';
import Container from '../../components/Container/Container';
import Pagination from '../../components/Pagination/Pagination';
import PostsList from '../../components/PostsList/PostsList';
import Search from '../../components/Search/Search';
import styles from './PostsPage.module.css';
import {fetchPosts} from '../../store/thunks';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {useAppSelector} from '../../hooks/useAppSelector';
import {usePagination} from '../../hooks/usePagination';
import Spinner from '../../components/Spinner/Spinner';

export default function PostsPage() {
  const dispatch = useAppDispatch();
  const {posts, loading, error, totalPosts} = useAppSelector((state) => state.posts);

  const {currentPage, goToPage, limit} = usePagination(1, 10);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');

  useEffect(() => {
    dispatch(
      fetchPosts({
        page: currentPage,
        limit: limit,
        q: search,
        sort: sort,
      })
    );
  }, [currentPage, search, limit, sort]);

  return (
    <Container>
      {loading && <Spinner />}
      <div className={styles.search}>
        <Search search={search} setSearch={setSearch} />
      </div>
      {error ? (
        <h1>{error}</h1>
      ) : (
        <>
          <PostsList posts={posts} onSort={setSort} />
          <Pagination
            totalPages={Math.round(totalPosts / limit)}
            currentPage={currentPage}
            setCurrentPage={goToPage}
          />
        </>
      )}
    </Container>
  );
}
