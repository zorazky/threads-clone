
const ThreadInput = ({ user, text, setText, postThread }) => {
    return (
      <>
        <p>{user.handle}</p>
        <input value={text} onChange={e => setText(e.target.value)} />
        <button className="primer" onClick={postThread}>Post</button>
      </>
    );
  }
  
  export default ThreadInput;
  