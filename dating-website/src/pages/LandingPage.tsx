import React from 'react';
import { Link } from 'react-router-dom';
import profilesData from '../data/profiles.json';
import '../styleSheets/LandingPage.css';
import Logo from '../components/logo.png';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <img src={Logo} alt="Logo" style={{width: '250px', height: 'auto'}} />
      <h1 className="text-center my-4 fs-2">Welcome to Omutinda</h1>
      <p className="text-center my-4 fs-2">Hoping you will find the sukuma to your ugali ;)</p>

      <div className="row">
        {/*This maps the different profiles based on their Id numbers from the Json file*/}
        {profilesData.map((profile) => (
          <div key={profile.id} className="col-md-4 mb-4">

            <div className="card shadow">
              {/*Display the profile photo and details of the specific profile */}
              <img src={profile.image} className="card-img-top" alt={profile.name} />

              <div className="card-body card-container">
                {/*This contains the person's information*/}
                <h5 className="card-title">{profile.name}</h5>
                <p className="card-text">{`${profile.age} years old`}</p>
                <p className="card-text"><i className="fas fa-location-pin"></i>{profile.location}</p>
                {/*This button when clicked will take you to the specific profile page of that person based on their id number*/}
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
