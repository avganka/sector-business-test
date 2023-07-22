import {ReactComponent as SearchIcon} from '../../assets/search.svg';
import styles from './Search.module.css';

interface SearchProps {
  search: string;
  setSearch: (search: string) => void;
}

export default function Search({search, setSearch}: SearchProps): JSX.Element {
  return (
    <div className={styles.search}>
      <input
        className={styles.searchInput}
        type='text'
        placeholder='Поиск'
        value={search}
        onChange={(evt) => setSearch(evt.target.value)}
      />
      <SearchIcon className={styles.searchButton} />
    </div>
  );
}
