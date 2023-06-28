import React from 'react';

const ProfilePage = () => {
  return (
    <div className="profile-container">
      <h1>User Profile</h1>
      <img src="profile-picture.jpg" alt="Profile Picture" className="profile-picture" />
      <div className="profile-info">
        <label>Name:</label>
        <span>John Doe</span>
      </div>
      <div className="profile-info">
        <label>Email:</label>
        <span>johndoe@example.com</span>
      </div>
      <div className="profile-info">
        <label>Location:</label>
        <span>New York, USA</span>
      </div>
      <div className="profile-info">
        <label>Bio:</label>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu elit sit amet diam fringilla efficitur. Aenean sit amet dapibus leo, non faucibus sem. Vivamus aliquam aliquet semper.</p>
      </div>
      <div className="profile-info">
        <label>Website:</label>
        <a href="https://www.example.com">https://www.example.com</a>
      </div>
    </div>
  );
};

export default ProfilePage;
