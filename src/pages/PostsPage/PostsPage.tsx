import {useEffect} from 'react';
import Container from '../../components/Container/Container';
import Pagination from '../../components/Pagination/Pagination';
import PostsList from '../../components/PostsList/PostsList';
import Search from '../../components/Search/Search';
import styles from './PostsPage.module.css';
import {fetchPosts} from '../../store/thunks';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {useAppSelector} from '../../hooks/useAppSelector';

export default function PostsPage() {
  const dispatch = useAppDispatch();
  const {posts, loading, error} = useAppSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <Container>
      <div className={styles.search}>
        <Search />
      </div>
      {loading && <h1>Загрузка...</h1>}
      {error && <h1>{error}</h1>}
      <PostsList posts={posts} />
      <Pagination />
    </Container>
  );
}
