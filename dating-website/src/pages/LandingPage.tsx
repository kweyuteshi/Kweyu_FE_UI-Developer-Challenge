import React from 'react';
import { Link } from 'react-router-dom';
import ProfileCard from '../components/ProfileCard'; //Import the PofileCard component
import profilesData from '../data/profiles.json'; //Import the profiles data from the json file

const LandingPage: React.FC = () => {
  return (
    <div>
      <h1>Available Profiles</h1>
      {/*Container for displaying profile cards*/}
      <div className="card-container">

         {/* Map through the profiles data and create a ProfileCard component for each profile */}
        {profilesData.map((profile) => (

            //Linking the profile page with th eprofile's ID as part of the URL
          <Link key={profile.id} to={`/profile/${profile.id}`}>

            {/* Render the ProfileCard component with the profile data */}
            <ProfileCard profile={profile} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;