import React from "react";
import "./profile.css";

const Profile = (props) => {
  console.log(props);

  /* DESTRUCTURING

  /* ILKEL YONTEM: 
    const avatar=props.avatar
    const name=props.name
    const location=props.location
    const shot=props.shot
    const followers=props.followers
    const following=props.following 

    Asagida süslülerin icinde props.avatar vs yazmak yerine direkt avatar yaziyoruz, props'lari kaldiriyoruz
    
    */
  /* PROFESYONEL YONTEM: */
  const { avatar, name, location, shot, followers, following } = props;

  return (
    <div className="person-card">
      <div className="person-bg" style={{ backgroundImage: `url(${avatar})` }}>
        <div className="person-bg transparent"></div>
      </div>
      <div className="content">
        <div className="avatar">
          <img src={avatar} alt="" />
        </div>
        <h3>{name}</h3>
        <h6>{location}</h6>
        <div className="stats">
          <div>
            {shot}
            <span>Shots</span>
          </div>
          <div>
            {followers}
            <span>Followers</span>
          </div>
          <div>
            {following}
            <span>Following</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
