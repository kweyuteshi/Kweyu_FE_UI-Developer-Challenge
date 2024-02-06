import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import profilesData from '../data/profiles.json';

const ProfilePage: React.FC = () => {
  // Get the profile ID from the URL params
  const { id } = useParams<{ id?: string }>(); // Make id optional

  // Check if id is undefined, set a default value or handle it accordingly
  const profileId = id ? parseInt(id, 10) : 0; // Set a default value, for example, 0

  // Find the profile data with the matching ID
  const profile = profilesData.find((p) => p.id === profileId);

  if (!profile) {
    return <div>Profile not found</div>;
  }

  return (
    <div className="profile-page">
      <h1>Profile Details</h1>
      <div className="profile-card">
        <img src={profile.image} alt={profile.name}  />
        <h2 className="profile-details">{profile.name}</h2>
        <p className="profile-details">{`${profile.age} years old, ${profile.location}`}</p>
        <p className="profile-bio">{profile.bio}</p>
        <p>Interests: {profile.interests.join(', ')}</p>
        <p>Height: {profile.height}</p>
        <p>Relationship Status: {profile.relationshipStatus}</p>
        <p>Looking For: {profile.lookingFor}</p>

      </div>
    </div>
  );
};

export default ProfilePage;

