//template method design pattern
import React from 'react';
import { Link } from 'react-router-dom';

class HomeComponent extends React.Component {
  renderHeader() {
    return (
      <div className="jumbotron mt-5">
        <h1 className="display-4">Welcome to Aut
        h System!</h1>
        <p className="lead">This is a Group IPT project</p>
        <hr className="my-4" />
        <p>Members: Chua, Galasanay, Preciado, Yamba</p>
      </div>
    );
  }

  renderContent() {
    // Placeholder for subclasses to provide specific content
    return null;
  }

  render() {
    return (
      <div className="container">
        {this.renderHeader()}
        <p className="lead">
          <Link className="btn btn-primary btn-lg" to="/login" role="button">
            Login
          </Link>
        </p>
        {this.renderContent()}
      </div>
    );
  }
}

export default HomeComponent;
