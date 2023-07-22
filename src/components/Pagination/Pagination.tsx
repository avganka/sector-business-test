import styles from './Pagination.module.css';
import cn from 'classnames';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  setCurrentPage: (newPage: number) => void;
}

export default function Pagination({totalPages, currentPage, setCurrentPage}: PaginationProps) {
  return (
    <div className={styles.pagination}>
      <button
        className={cn(styles.button, styles.prevNextButtons)}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Назад
      </button>
      <div className={styles.pages}>
        {Array(totalPages)
          .fill(0)
          .map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={cn(styles.button, styles.pageButton, {
                [styles.active]: currentPage === i + 1,
              })}
            >
              {i + 1}
            </button>
          ))}
      </div>
      <button
        className={cn(styles.button, styles.prevNextButtons)}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Далее
      </button>
    </div>
  );
}
