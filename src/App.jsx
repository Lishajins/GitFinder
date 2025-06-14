import React, {useState} from 'react';


import Header from './Components/Header.jsx'
import SearchBar from './Components/SearchBar.jsx'
import UserCard from './Components/UserCard.jsx'



function App(){

   const [username, setUsername] = useState("");
   const [userData, setUserData] = useState(null);
   const [error, setError] = useState(null);

   const handleSearch = async () => {
      if(username.trim() === ''){
         setError("Please enter a username");
         setUserData(null);
         return;
      }
      try {
         const response = await
         fetch(`https://api.github.com/users/${username}`);
         if(!response.ok){
            throw new Error('User not found');
         }
         const data = await response.json();
         setUserData(data);
         setError('');
      }
      catch(err){
         setUserData(null);
         setError(err.message);
      }
   };


   return(
    <>
    <div className="view">
    <Header></Header>
    <SearchBar
    username={username}
    setUsername={setUsername}
    handleSearch={handleSearch}>
    </SearchBar>
    {error && <p className="error">{error}</p>}

    {userData && (
      <UserCard 
        img={userData.avatar_url}
        name={userData.name}
        followers={userData.followers}
        repos={userData.public_repos}
        link={userData.html_url}
      />
    )}
    </div>
    </>
   );
}
export default App
