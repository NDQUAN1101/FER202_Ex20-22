import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { users } from '../data/usersData';

const UsersPage = () => {
  const { userId } = useParams();

  // If userId is provided, show the user details
  if (userId !== undefined && userId !== '') {
    const user = users.find((u) => u.id === parseInt(userId, 10));

    if (!user) {
      return (
        <div className="card user-detail-card">
          <h2>User Not Found</h2>
          <p>No user found with ID: {userId}</p>
          <Link to="/users" className="back-link">
            &larr; Back to users list
          </Link>
        </div>
      );
    }

    return (
      <div className="card user-detail-card">
        <div className="detail-header">
          <Link to="/users" className="back-link">
            &larr; Back to Users
          </Link>
        </div>
        <h1 className="user-detail-title">
          {user.firstName} {user.lastName} : {user.age}
        </h1>
        <div className="user-badge-info">
          <span>Resource ID: <strong>{userId}</strong></span>
          <span>Age: <strong>{user.age}</strong></span>
        </div>
      </div>
    );
  }

  // If no userId, show the list of users
  return (
    <div className="card users-list-card">
      <h2 className="section-title">Exercise 21.1 - Users List</h2>
      <p className="section-subtitle">Click on a user to view their details via route parameter <code>/users/:id</code></p>
      <ul className="users-list">
        {users.map((user) => (
          <li key={user.id} className="user-item">
            <Link to={`/users/${user.id}`} className="user-link">
              {user.firstName} {user.lastName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
