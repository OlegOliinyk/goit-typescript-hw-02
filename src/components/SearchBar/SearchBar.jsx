import { useState } from "react";
import toast from "react-hot-toast";
import styles from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (query.trim() === "") {
      toast.error("Please enter a search query!");
      return;
    }
    onSubmit(query);
    setQuery("");
  };

  return (
    <header className={styles.searchHeader}>
      <form className={styles.searchForm} onSubmit={handleSubmit}>
        <input
          className={styles.searchInput}
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search images and photos"
          autoFocus="true"
        />
        <button className={styles.searchButton} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
