
const Header = ({ user, viewThreadsFeed, setViewThreadsFeed }) => {
    return (
        <header>
            <div className="info-container">
                <div className="user-info-container">
                    <h1>{user.name}</h1>
                    <p>{user.handle} <span className="threads-info">threads.net</span></p>
                </div>
                <div className="img-container">
                    <img src={user.img} alt="profile avatar" />
                </div>
            </div>
            <p>{user.bio}</p>
            <div className="sub-info-container">
                <p className="sub-text">{user.followers.length} followers • <a href={user.link}>link</a></p>
            </div>
            <button className="primer" onClick={() => navigator.clipboard.writeText("Im an url")}>
                Share Profiles
            </button>
            <div className="button-container">
                <button className={ viewThreadsFeed ? "current":null} onClick={() => setViewThreadsFeed(true)}>Threads</button>
                <button className={ !viewThreadsFeed ? "current":null} onClick={() => setViewThreadsFeed(false)}>Replies</button>
            </div>
        </header>
    );
  }
  
  export default Header;
  