import AddUser from "./AddUser";
import React, {useState} from 'react'
import List from "./List";

function App() {
  const [users, setAddUsers]= useState([])

  const addUser = user => setAddUsers([...users, user])

  return (
    <div className="App">
      <AddUser addUserProp={addUser}/>
      {
        users.map(user=>
          <List 
          key={user.id}
          newUser={user} />)
      }
      
    </div>
  );
}

export default App;
