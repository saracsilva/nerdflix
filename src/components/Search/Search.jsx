import classes from "./Search.module.css";

function Search({ search, setSearch }) {
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  return (
    <div>
      <input
        className={classes.inputSearch}
        value={search}
        placeholder="Search for a Title"
        type="text"
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
