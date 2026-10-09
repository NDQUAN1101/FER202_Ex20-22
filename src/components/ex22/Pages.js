import React from 'react';
import { useParams, Link } from 'react-router-dom';

export const Home = () => (
  <div align="center" className="py-5">
    <h2 className="display-6 fw-bold">Home Component</h2>
    <p className="text-secondary mt-2">Welcome to Exercise 22 Home Component rendered with Reactstrap Navbar.</p>
  </div>
);

export const About = () => (
  <div align="center" className="py-5">
    <h2 className="display-6 fw-bold">About Component</h2>
    <p className="text-secondary mt-2">This is the About Component routed via React Router DOM v6.</p>
  </div>
);

export const Contact = () => (
  <div align="center" className="py-5">
    <h2 className="display-6 fw-bold">Contact Component</h2>
    <p className="text-secondary mt-2">This is the Contact Component.</p>
  </div>
);

export const Profile = () => {
  const { id } = useParams();

  return (
    <div align="center" className="py-5">
      <h2 className="display-6 fw-bold">Profile Component</h2>
      {id ? (
        <div className="mt-3 alert alert-info d-inline-block px-4 py-2">
          Received Optional Parameter: <strong>ID = {id}</strong>
        </div>
      ) : (
        <div className="mt-3 alert alert-secondary d-inline-block px-4 py-2">
          No optional parameter passed (Path: <code>/profile</code>)
        </div>
      )}
      <div className="d-flex justify-content-center gap-3 mt-4">
        <Link to="/profile/123" className="btn btn-outline-info btn-sm">
          Test with Optional Parameter: /profile/123
        </Link>
        <Link to="/profile/alice" className="btn btn-outline-primary btn-sm">
          Test with Optional Parameter: /profile/alice
        </Link>
        <Link to="/profile" className="btn btn-outline-secondary btn-sm">
          Test without Parameter: /profile
        </Link>
      </div>
    </div>
  );
};
