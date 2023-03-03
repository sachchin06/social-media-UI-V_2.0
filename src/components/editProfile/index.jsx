import { useState } from "react";
import { makeRequest } from "../../axios";
import { useMutation, useQueryClient } from "react-query";
import "./editProfile.scss";
import Image from "../../assets/img.png";

const EditProfile = ({ setopenEditProfile, user }) => {
  const [cover, setCover] = useState(null);
  const [profile, setProfile] = useState(null);
  const [texts, setTexts] = useState({
    name: user.name,
    email: user.email,
  });

  const queryClient = useQueryClient();

  // Mutations
  const mutation = useMutation(
    (userInfo) => {
      return makeRequest.put("/users", userInfo);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["user"]);
      },
    }
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    let coverUrl;
    let profileUrl;

    coverUrl = cover ? await updateImage(cover) : user.coverPic;
    profileUrl = profile ? await updateImage(profile) : user.profilePic;

    mutation.mutate({ ...texts, coverPic: coverUrl, profilePic: profileUrl });
    // mutation.mutate({ ...texts })
    setopenEditProfile(false);
  };

  const updateImage = async (file) => {
    try {
      const formData = new FormData();
      formData.append("image", file);
      const res = await makeRequest.post("/file/upload", formData);
      return res.data.imageUrl;
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setTexts((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  };
  return (
    <div className="editProfile">
      <h3>Update Profile</h3>
      <form>
        <div className="top">
          <div className="left">
            <div className="cover-wrapper">
              <label htmlFor="cover">
                <div className="item">
                  <img src={Image} alt="" />
                  <span>Change Cover</span>
                </div>
              </label>
              <div className="cover-img">
                 <img alt="" src={cover ? URL.createObjectURL(cover) : user.coverPic} />
              </div>
              <input
                id="cover"
                type="file"
                onChange={(e) => setCover(e.target.files[0])}
              />
            </div>
            <div className="profile-wrapper">
              <label htmlFor="profile">
                <div className="item">
                  <img src={Image} alt="" />
                  <span>Change Profile</span>
                </div>
              </label>

              <input
                id="profile"
                type="file"
                onChange={(e) => setProfile(e.target.files[0])}
              />
               <div className="cover-img">
                <img alt="" src={profile ? URL.createObjectURL(profile) : user.profilePic} />
              </div>
            </div>
          </div>
          <div className="right">
            <div className="item">
              <label htmlFor="email">Email : </label>
              <input
                value={user.email}
                type="text"
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className="item">
              <label htmlFor="email">Display Name: </label>
              <input
                value={user.name}
                type="text"
                name="name"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="bottom">
          <button onClick={handleSubmit}>Update</button>
        </div>
      </form>
      <button id="closeBtn" onClick={() => setopenEditProfile(false)}>
        x
      </button>
    </div>
  );
};

export default EditProfile;
