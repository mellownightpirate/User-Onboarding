import React, { useState } from "react";
import Form from "./Components/Form";
import UsersData from "./Components/UsersData";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  console.log(users)

  return (
    <div className="App">
      <Form users={users} />
      <UsersData users={users} setUsers={setUsers} />
    </div>
  );
}

export default App;
