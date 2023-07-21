import styles from './PostsList.module.css';
import {ReactComponent as ArrowIcon} from '../../assets/arrow.svg';

export default function PostsList() {
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
        <tr>
          <td className={styles.tableBodyCell}>1</td>
          <td className={styles.tableBodyCellLeft}>
            sunt aut facere repellat provident occaecati excepturi optio reprehenderit
          </td>
          <td className={styles.tableBodyCellLeft}>
            quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit
            molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto
          </td>
        </tr>
      </tbody>
    </table>
  );
}
