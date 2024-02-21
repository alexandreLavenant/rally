import './profile.css';

const Profile = ({ team }) => {
  return (
    <div className="profile flex flex-1 center flex-column">
      <div className="picture">
        <img src="car.svg" alt="Car" className="profile-img"/>
      </div>
      <p className="bold mt-sm">{team.name}</p>
      <p className="bold mt-sm">n°1</p>
    </div>
  );
}

export default Profile;