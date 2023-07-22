import styles from './PostsList.module.css';
import {ReactComponent as ArrowIcon} from '../../assets/arrow.svg';
import {Post} from '../../types/post.types';

interface PostsListProps {
  posts: Post[];
}

export default function PostsList({posts}: PostsListProps) {
  return (
    <table className={styles.table} cellSpacing={'0'}>
      <thead className={styles.tableHeader}>
        <tr>
          <th tabIndex={0} className={styles.tableHeaderCell}>
            <div className={styles.tableHeaderCellWrapper}>
              <span>ID</span>
              <ArrowIcon />
            </div>
          </th>
          <th tabIndex={0} className={styles.tableHeaderCell}>
            <div className={styles.tableHeaderCellWrapper}>
              <span>Заголовок</span>
              <ArrowIcon />
            </div>
          </th>
          <th tabIndex={0} className={styles.tableHeaderCell}>
            <div className={styles.tableHeaderCellWrapper}>
              <span>Описание</span>
              <ArrowIcon />
            </div>
          </th>
        </tr>
      </thead>
      <tbody className={styles.tableBody}>
        {posts.map((post, i) => (
          <tr key={post.id}>
            <td className={styles.tableBodyCell}>{i + 1}</td>
            <td className={styles.tableBodyCellLeft}>{post.title}</td>
            <td className={styles.tableBodyCellLeft}>{post.body}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
