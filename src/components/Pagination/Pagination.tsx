import styles from './Pagination.module.css';
import cn from 'classnames';

export default function Pagination() {
  return (
    <div className={styles.pagination}>
      <button className={cn(styles.button, styles.prevNextButtons)}>Назад</button>
      <div className={styles.pages}>
        <button className={cn(styles.button, styles.pageButton, styles.active)}>1</button>
        <button className={cn(styles.button, styles.pageButton)}>2</button>
        <button className={cn(styles.button, styles.pageButton)}>3</button>
      </div>
      <button className={cn(styles.button, styles.prevNextButtons)}>Далее</button>
    </div>
  );
}
