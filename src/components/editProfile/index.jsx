import { useState } from "react";
import { makeRequest } from "../../axios";
import { useMutation, useQueryClient } from "react-query";
import "./editProfile.scss";

const EditProfile = ({ setopenEditProfile, user }) => {
  const [cover, setCover] = useState(null);
  const [profile, setProfile] = useState(null);
  const [texts, setTexts] = useState({
    name: "",
    email: "",
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

    
    mutation.mutate({ ...texts, coverPic: coverUrl, profilePic: profileUrl })
    // mutation.mutate({ ...texts })
    setopenEditProfile(false);
  }

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
      <p>edit profile</p>
      <form>
        <input type="file" onChange={e=>setCover(e.target.files[0])} />
        <input type="file" onChange={e=>setProfile(e.target.files[0])} />
        <input type="text" name="email" onChange={handleChange} />
        <input type="text" name="name" onChange={handleChange} />
        <button onClick={handleSubmit}>Update</button>
      </form>
      <button onClick={() => setopenEditProfile(false)}>x</button>
    </div>
  );
};

export default EditProfile;
