import { useRef } from "react"
const SearchBar = ({ placeholder = "Search...", onSearch }) => {
  const inputRef = useRef(null);

  const handleClick = () => {
    if (onSearch) onSearch(inputRef.current?.value ?? "");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleClick();
  };

  return (
    <div className="pill-search-wrapper" role="search" aria-label={placeholder}>
      <input
        ref={inputRef}
        className="pill-search-input"
        type="search"
        placeholder={placeholder}
        onKeyDown={handleKeyDown}
        aria-label={placeholder}
      />

      <button
        type="button"
        className="pill-search-btn"
        onClick={handleClick}
        aria-label={`Search ${placeholder}`}
      >

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="pill-search-icon"
          width="20"
          height="20"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="6" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <path d="M20 20 L16.65 16.65" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;