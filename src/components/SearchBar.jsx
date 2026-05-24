import styles from './SearchBar.module.css';

function SearchBar({ value, onChange, dateValue, onDateChange, placeholder }) {
  return (
    <div className={styles.searchBar}>
      <div className={styles.inputGroup}>
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
      <div className={styles.dateGroup}>
        <span className={styles.calendarIcon}>📅</span>
        <input
          type="date"
          className={styles.dateInput}
          value={dateValue}
          onChange={(e) => onDateChange(e.target.value)}
          id="date-search"
        />
        {dateValue && (
          <button className={styles.clearBtn} onClick={() => onDateChange('')} title="Очистити дату">
            ✕
          </button>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
