//render props method
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { reset_password } from '../actions/auth';
import { useParams } from 'react-router-dom';

const ResetPassword = ({ reset_password, render }) => {
  const [requestSent, setRequestSent] = useState(false);
  const { uid, token } = useParams();
  const [formData, setFormData] = useState({
    email: ''
  });

  const { email } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();

    reset_password(uid, token, email);
    setRequestSent(true);
  };

  if (requestSent) {
    return <Navigate to="/" />;
  }

  // Pass necessary data and functions as render props
  return render({
    email,
    onChange,
    onSubmit
  });
};

const ResetPasswordContainer = ({ reset_password }) => {
  return (
    <ResetPassword
      reset_password={reset_password}
      render={({ email, onChange, onSubmit }) => (
        <div className="container mt-5">
          <h1>Request Password Reset</h1>
          <form onSubmit={e => onSubmit(e)}>
            <div className="form-group">
              <input
                className="form-control"
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={e => onChange(e)}
                required
              />
            </div>
            <button className="btn btn-primary" type="submit">
              Reset Password
            </button>
          </form>
        </div>
      )}
    />
  );
};

export default connect(null, { reset_password })(ResetPasswordContainer);
