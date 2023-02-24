import "./profile.scss";

import Posts from "../../components/posts/Posts";

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          className="cover"
          src="https://images.pexels.com/photos/733767/pexels-photo-733767.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="cover"
        />
        <img
          className="profilePic"
          src="https://images.pexels.com/photos/2918513/pexels-photo-2918513.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="profile"
        />
      </div>
      <div className="info">
        <span>Sachchin Ram</span>
        <div className="address">
          <span>colombo | </span>
          <span>Sri Lanka</span>
        </div>
        <div className="follow">
          <button>
            <span>+</span> Following
          </button>
        </div>
      </div>
      <div className="profilePost">
        <Posts />
      </div>
    </div>
  );
};

export default Profile;
