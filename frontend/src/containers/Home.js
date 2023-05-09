import React from 'react';
import { Link } from 'react-router-dom';


const Home = ({ children }) => (
  <div className='container'>
    <div className="jumbotron mt-5">
      <h1 className="display-4">Welcome to Auth System!</h1>
      <p className="lead">This is a Group IPT project </p>
      <hr className="my-4"/>
      <p>Members: Chua, Galasanay, Preciado, Yamba</p>
      <p className="lead">
        <Link className="btn btn-primary btn-lg" to="/login" role="button">Login</Link>
      </p>
    </div>
    {children}
  </div>
);

export default Home;
