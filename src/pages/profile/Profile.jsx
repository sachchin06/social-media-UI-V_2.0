import "./profile.scss";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";

import Posts from "../../components/posts/Posts";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { useQuery } from "react-query";
import { makeRequest } from "../../axios";
import { useLocation } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import EditProfile from '../../components/editProfile/index'

const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  const [openEditProfile, setopenEditProfile] = useState(false);
  const userId = parseInt(useLocation().pathname.split("/")[2]);
  const queryClient = useQueryClient();

 
 const handleFollow = () => {
  
    Mutation.mutate(relationshipData.includes(userId));
  }

  const Mutation = useMutation(
    (followed) => {
    
      if (followed) return makeRequest.delete(`/relationships?followedUserId=${userId}`);
      return makeRequest.post('/relationships', {followedUserId: userId});
    },
    {
      onSuccess: () => {
        //Invalidate and refetch
        queryClient.invalidateQueries(["relationships"]);
        queryClient.invalidateQueries(["posts"]);
      },
    }
  );

  const { isLoading, error, data: user } = useQuery(["user"], () =>
    makeRequest.get(`/users/find/${userId}`).then((res) => {
      return res.data;
    })
  );

   const { isLoading: isRLoading, error: rError, data: relationshipData } = useQuery(["relationships"], () =>
    makeRequest.get(`/relationships`).then((res) => {
      return res.data;
    })
  );


  return (
    <div className="profile">
      {isLoading ? (
        "loading"
      ) : (
        <>
          <div className="images">
            <img className="cover" src={user.coverPic} alt="cover" />
            <img className="profilePic" src={user.profilePic} alt="profile" />
          </div>
          <div className="info">
            <span>{user.name}</span>
            <div className="address">
              <span>{user.address}</span>
            </div>

            {userId === currentUser.id ? (
              !openEditProfile && (
                <BorderColorOutlinedIcon className="editBtn"
                  onClick={() => setopenEditProfile(true)}
                />
              )
            ) : (
              <div className="follow">
                <button onClick={handleFollow}>
                  + {!isRLoading && relationshipData.includes(userId) ? 'UnFollow' : 'Follow'}
                </button>
              </div>
            )}
          </div>

         

          <div className="profilePost">
            <Posts />
          </div>
        </>
      )}

       {openEditProfile && (
            <div className="update">
              <EditProfile setopenEditProfile={setopenEditProfile} user={user} />
            </div>
          )}
    </div>
  );
};

export default Profile;
