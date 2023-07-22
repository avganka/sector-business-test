import styles from './PostsList.module.css';
import {ReactComponent as ArrowIcon} from '../../assets/arrow.svg';
import {Post} from '../../types/post.types';
interface PostsListProps {
  posts: Post[];
  onSort: (sortingFiled: string) => void;
}

export default function PostsList({posts, onSort}: PostsListProps) {
  return (
    <table className={styles.table} cellSpacing={'0'}>
      <thead className={styles.tableHeader}>
        <tr>
          <th tabIndex={0} className={styles.tableHeaderCell} onClick={() => onSort('id')}>
            <div className={styles.tableHeaderCellWrapper}>
              <span>ID</span>
              <ArrowIcon />
            </div>
          </th>
          <th tabIndex={0} className={styles.tableHeaderCell} onClick={() => onSort('title')}>
            <div className={styles.tableHeaderCellWrapper}>
              <span>Заголовок</span>
              <ArrowIcon />
            </div>
          </th>
          <th tabIndex={0} className={styles.tableHeaderCell} onClick={() => onSort('body')}>
            <div className={styles.tableHeaderCellWrapper}>
              <span>Описание</span>
              <ArrowIcon />
            </div>
          </th>
        </tr>
      </thead>
      <tbody className={styles.tableBody}>
        {posts.map((post) => (
          <tr key={post.id}>
            <td className={styles.tableBodyCell}>{post.id}</td>
            <td className={styles.tableBodyCellLeft}>{post.title}</td>
            <td className={styles.tableBodyCellLeft}>{post.body}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
