import "./profile.scss";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";

import Posts from "../../components/posts/Posts";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import EditProfile from "../profile/editProfile/index";
import { useQuery } from "react-query";
import { makeRequest } from "../../axios";
import { useLocation } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";

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
      },
    }
  );

  const { isLoading, error, data } = useQuery(["user"], () =>
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
            <img className="cover" src={data.coverPic} alt="cover" />
            <img className="profilePic" src={data.profilePic} alt="profile" />
          </div>
          <div className="info">
            <span>{data.name}</span>
            <div className="address">
              <span>{data.address}</span>
            </div>

            {userId === currentUser.id ? (
              !openEditProfile && (
                <BorderColorOutlinedIcon
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

          {openEditProfile && (
            <div className="editProfile">
              <EditProfile setopenEditProfile={setopenEditProfile} />
            </div>
          )}

          <div className="profilePost">
            <Posts />
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
