function UserCard(userprops){
    return(
        <div className="card">
        <img id="profile" src={userprops.img} alt="Profilepicture"></img>
        <h4 id="username">{userprops.name}</h4>
        <p className="sub">Followers : {userprops.followers}</p>
        <p className="sub">Public repos : {userprops.repos}</p>
        <p id="gitlink"><a href={userprops.link} target="_blank">View Profile</a></p>
        </div>
    );
}
export default UserCard