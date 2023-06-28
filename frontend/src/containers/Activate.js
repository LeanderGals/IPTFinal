//command design pattern
import React, { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { verify } from '../actions/auth';

// Command
class VerifyCommand {
  constructor(verify, uid, token) {
    this.verify = verify;
    this.uid = uid;
    this.token = token;
  }

  execute() {
    return this.verify(this.uid, this.token);
  }
}

function Activate({ verify }) {
  const [verified, setVerified] = useState(false);
  const { uid, token } = useParams();

  const verify_account = (e) => {
    console.log(`uid: ${uid}, token: ${token}`);

    const command = new VerifyCommand(verify, uid, token);

    command
      .execute()
      .then(() => {
        setVerified(true);
      })
      .catch((error) => {
        console.log(error);
        // handle any errors that occur during verification
      });
  };

  if (verified) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container">
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ marginTop: '200px' }}
      >
        <h1>Verify your Account</h1>
        <button
          onClick={verify_account}
          style={{ marginTop: '50px' }}
          type="button"
          className="btn btn-primary"
        >
          Verify
        </button>
      </div>
    </div>
  );
}

export default connect(null, { verify })(Activate);
