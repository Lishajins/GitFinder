import catLogo from '../assets/github-logo-png.png'

function Header(){
    return(
        <div className="header">
        <h1 className="title">GitFinder</h1>
         <img className="cat" src={catLogo}></img>
        </div>
    );
}
export default Header