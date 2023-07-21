import {ReactComponent as SearchIcon} from '../../assets/search.svg';
import styles from './Search.module.css';

export default function Search(): JSX.Element {
  return (
    <form className={styles.search}>
      <input className={styles.searchInput} type='text' placeholder='Поиск' />
      <button type='submit' className={styles.searchButton}>
        <SearchIcon />
      </button>
    </form>
  );
}
