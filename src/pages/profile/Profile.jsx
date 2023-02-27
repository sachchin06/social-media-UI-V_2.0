import "./profile.scss";

import Posts from "../../components/posts/Posts";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Profile = () => {

  const { currentUser } = useContext(AuthContext);

  return (
    <div className="profile">
      <div className="images">
        <img
          className="cover"
          src={currentUser.coverPic}
          alt="cover"
        />
        <img
          className="profilePic"
          src={currentUser.profilePic}
          alt="profile"
        />
      </div>
      <div className="info">
        <span>{currentUser.username}</span>
        <div className="address">
          {/* <span>colombo | </span> */}
          <span>{currentUser.address}</span>
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
