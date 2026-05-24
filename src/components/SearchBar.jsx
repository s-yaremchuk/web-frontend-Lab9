function SearchBar({ value, onChange, placeholder }) {
  return (
    <div className="searchContainer">
      <span className="searchIcon">🔍</span>
      <input
        type="text"
        className="searchInput"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder || 'Пошук потягів...'}
        id="train-search"
      />
    </div>
  );
}

export default SearchBar;
