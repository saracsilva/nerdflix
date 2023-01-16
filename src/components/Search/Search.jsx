function Search({ search, setSearch }) {
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  return (
    <div>
      <label>Search</label>
      <input value={search} type="text" onChange={handleSearch} />
    </div>
  );
}

export default Search;
