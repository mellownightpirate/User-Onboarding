import React from "react";



export default function UsersData(props) {
  console.log(props);

  return (
    <div>
      <h1>New Users Data:</h1>

      <div className="users-added">
        {props.users.map((user) => {
          return <p>{user.username} {user.password}</p>;
        })}
      </div>
    </div>
  );
}