import Container from '../../components/Container/Container';
import Pagination from '../../components/Pagination/Pagination';
import PostsList from '../../components/PostsList/PostsList';
import Search from '../../components/Search/Search';
import styles from './PostsPage.module.css';

export default function PostsPage() {
  return (
    <Container>
      <div className={styles.search}>
        <Search />
      </div>
      <div>
        <PostsList />
      </div>
      <div>
        <Pagination />
      </div>
    </Container>
  );
}
