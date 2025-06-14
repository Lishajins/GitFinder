function SearchBar({username, setUsername,handleSearch}){
    return(
        <div className="search">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}>
        </input>
        <button onClick={handleSearch}>Search</button>
        </div>
    );
}
export default SearchBar