import React, { useEffect, useState } from 'react';
import './App.css'; // Make sure your loader CSS is here or imported
import Loader  from './components/Loader';
import UserCard from './components/UserCard'

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); // initially true
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setUsers(data);
        setLoading(false); 
      } catch (error) {
        console.error("Error fetching users:", error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="container">
      <h1>User Profiles</h1>
      
      {loading ? (
        <Loader />
      ) : (
        <div className="user-list">
          {users.map(user => (
           <UserCard user={user} key={user.id}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
