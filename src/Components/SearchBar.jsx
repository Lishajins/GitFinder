function SearchBar({username, setUsername,handleSearch}){
    return(
        <div className="search">
        <input className="searchitem"
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}>
        </input>
        <button className="searchitem" onClick={handleSearch}>Search</button>
        </div>
    );
}
export default SearchBar