import React from 'react';
import "../style/NotFound.css"
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="not-found-container">
    <h1 className="not-found">404 - Not Found!</h1>
    <Link to="/">
      Go Home
    </Link>
  </div>
);

export default NotFound;