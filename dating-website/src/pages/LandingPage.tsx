import React from 'react';
import { Link } from 'react-router-dom';
import profilesData from '../data/profiles.json';
import "../styleSheets/LandingPage.css"
import Logo from '../components/logo.png';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
       <img src={Logo} alt="Logo" style={{width: '250px', height: 'auto'}} />
      <h1 className="text-center my-4 fs-2">Welcome to Omutinda</h1>
      <p className="text-center my-4 fs-2">Hoping you will find the sukuma to your ugali ;)</p>

      <div className="row">
        {profilesData.map((profile) => (
          <div key={profile.id} className="col-md-4 mb-4">
            <div className="card shadow">
              <img src={profile.image} className="card-img-top" alt={profile.name} />
              <div className="card-body">
                <h5 className="card-title">{profile.name}</h5>
                <p className="card-text">{`${profile.age} years old, ${profile.location}`}</p>
                <Link to={`/profile/${profile.id}`} className="btn btn-primary">View Profile</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
