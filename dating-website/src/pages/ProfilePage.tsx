import React from 'react';
import { useParams } from 'react-router-dom';
import profilesData from '../data/profiles.json';
import "../styleSheets/ProfilePage.css"
import Logo from '../components/logo.png';

const ProfilePage: React.FC = () => {
  // Get the profile ID from the URL params
  const { id } = useParams<{ id?: string }>(); // Make id optional

  // Check if id is undefined, set a default value or handle it accordingly
  const profileId = id ? parseInt(id, 10) : 0; // Set a default value, for example, 0

  // Find the profile data with the matching ID
  const profile = profilesData.find((p) => p.id === profileId);

  if (!profile) {
    return <div className="container py-4 text-center">Profile not found</div>;
  }

  return (
    
    <div className="profile-page">
        <img src={Logo} alt="Logo" style={{width: '200px', height: 'auto'}} />
      <div className="profile-card bg-light p-4 rounded shadow">
        <img src={profile.image} className="card-img-top" alt={profile.name} style={{ maxWidth: '500px', height: 'auto', borderRadius: '10px' }} />
        <div className="card-body">
          <h5 className="card-title fs-4">{profile.name}</h5>
          <p className="profile-details mb-4 fs-5" style={{ color: '#333' }}>{`${profile.age} years old, ${profile.location}`}</p>
          <p className="profile-bio mb-4" style={{ color: '#555' }}>{profile.bio}</p>
          <p className="card-text">Interests: {profile.interests.join(', ')}</p>
          <p className="card-text">Height: {profile.height}</p>
          <p className="card-text">Relationship Status: {profile.relationshipStatus}</p>
          <p className="card-text">Looking For: {profile.lookingFor}</p>
          <button className="btn btn-primary like-button mt-4">Like</button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
