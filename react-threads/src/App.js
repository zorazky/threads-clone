import { useEffect, useState } from "react";

import Nav from "./components/Nav";
import Header from "./components/Header"; 
import Feed from "./components/Feed";
import PopUp from "./components/PopUp";

const App = () => {
  const [ user, setUser ] =useState(null);
  const userId = "19045df1-10a8-4a0e-8e21-6063a9c8b9be";

  const getUser = async () => {
    try {
      const response = await fetch(`http://localhost:3000/users?user_uuid=${userId}`)
      const data = await response.json()
      setUser(data[0])
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  console.log(user);

  return (
   <>
    {user &&  <div className="app">
      <Nav url={user.instagram_url} />
      <Header />
      <Feed />
      {/*<PopUp /> */}
    </div>}
   </>
  );
}

export default App;
