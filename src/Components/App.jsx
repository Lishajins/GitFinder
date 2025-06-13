import Header from './Header.jsx'
import SearchBar from './SearchBar.jsx'
import UserCard from './UserCard.jsx'



function App(){
   return(
    <>
    <div className="view">
    <Header></Header>
    <SearchBar></SearchBar>
    <UserCard img="./GitFinder/src/assets/images.jpg" name="Lisha Jins" followers={500} repos={3} link="" ></UserCard>
    </div>
    </>
   );
}
export default App
