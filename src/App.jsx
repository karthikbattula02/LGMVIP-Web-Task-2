import React, { useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    try {
      const response = await fetch("https://reqres.in/api/users?page=1");
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const jsonResponse = await response.json();
      setUsers(jsonResponse.data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  return (
    <>
      <h1 className='heading'>Web Application</h1>
      <button className="button" onClick={loadUsers}>Get Users</button>

      <h2>Users:</h2>
      <ul>
        {users.map(({ id, email, first_name, last_name, avatar}) => (
          <li key={id}>Email: {email} <br/> First Name : {first_name} <br/> Last Name : {last_name} <br/> <a href={avatar}>Avatar</a>           
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
