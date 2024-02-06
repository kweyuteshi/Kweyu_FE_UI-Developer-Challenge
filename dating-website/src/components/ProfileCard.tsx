import React from "react";

// This defines the interface for the props that ProfileCard component expects
interface ProfileCardProps{

    // Defining the structure of the profile object
    profile: {
        id: number;
        name: string;
        age: number;
        location: string;
        image: string; 
        bio: string;
    };

    onClick?: () => void;
}

//This is the ProfileCard component that takes ProfileCardProps as its props
const ProfileCard: React.FC<ProfileCardProps> = ({profile, onClick}) =>{
    return(

        //Card container with the onClick event handler if provided
        <div className="card" onClick={onClick}>

            {/*Display the profile image*/}
      <img src={profile.image} alt={profile.name} className="card-img-top" />

       {/*Card body containing the profile info*/}
      <div className="card-body">

        <h5 className="card-title">{profile.name}</h5>

        <p>{`${profile.age} years old, ${profile.location}`}</p>
        
        <p className="card-text">{profile.bio}</p>
        </div>
    </div>
    );
};

//Export the profileCard component
export default ProfileCard;