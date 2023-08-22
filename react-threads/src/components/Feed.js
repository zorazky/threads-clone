import Thread from './Thread';

const Feed = ({ user, filteredThreads, setOpenPopUp, getThreads }) => {
    return (
      <div className="feed">
      {filteredThreads?.map(filteredThread => 
        <Thread 
          key={filteredThread.id} 
          setOpenPopUp={setOpenPopUp}
          filteredThread={filteredThread} 
          user={user}
          getThreads={getThreads}
        />)}
      </div>
    );
  }
  
  export default Feed;
  