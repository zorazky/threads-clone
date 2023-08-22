import Thread from './Thread';

const Feed = ({ user, filteredThreads, setOpenPopUp, getThreads, setInteractingThread }) => {
    return (
      <div className="feed">
      {filteredThreads && filteredThreads.map(filteredThread => 
        <Thread 
          key={filteredThread.id} 
          setOpenPopUp={setOpenPopUp}
          filteredThread={filteredThread} 
          user={user}
          getThreads={getThreads}
          setInteractingThread={setInteractingThread}
        />
        )}
      </div>
    );
  }
   
  export default Feed;
  