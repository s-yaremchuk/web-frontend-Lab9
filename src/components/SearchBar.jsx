import styles from './SearchBar.module.css';

function SearchBar({ value, onChange, placeholder }) {
  return (
    <div className={styles.searchContainer}>
      <span className={styles.searchIcon}>🔍</span>
      <input
        type="text"
        className={styles.searchInput}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder || 'Пошук потягів...'}
        id="train-search"
      />
    </div>
  );
}

export default SearchBar;
