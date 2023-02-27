import Image from "../../assets/img.png";
import Map from "../../assets/map.png";
import Friend from "../../assets/friend.png";
import "./share.scss";

import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { useState } from "react";

import { makeRequest } from "../../axios";
import { useMutation, useQueryClient } from "react-query";

const Share = () => {
  const { currentUser } = useContext(AuthContext);

  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");

  const queryClient = useQueryClient();

  // Mutations
  const mutation = useMutation(
    (newPost) => {
      return makeRequest.post("/posts", newPost);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["posts"]);
      },
    }
  );

  const uploadImagetoCloud = async () => {
    try {
      const formData = new FormData();
      formData.append("image", image);

      const res = await makeRequest.post("/file/upload", formData);
      return res.data.imageUrl;
    } catch (error) {
      console.log(error);
    }
  };

  const handleShare = async (e) => {
    e.preventDefault();
    let imageUrl = "";

    if (image) {
      imageUrl = await uploadImagetoCloud();
    }
    mutation.mutate({ description, image: imageUrl });
    setDescription("");
    setImage(null);
  };

  //axios
  // const handleShare =async (e) => {
  //     e.preventDefault();

  //     await axios.post('http://localhost:8080/api/posts', { description}, {withCredentials: true})

  // }

  return (
    <div className="share">
      <div className="container">
        <div className="top">
          <div className="left">
            <img src={currentUser.profilePic} alt="" />
            <input
              type="text"
              placeholder={`What's on your mind ${currentUser.name}?`}
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </div>
          <div className="right">
            {image && <img alt="" src={URL.createObjectURL(image)} />}
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <input
              type="file"
              id="file"
        
              onChange={(e) => setImage(e.target.files[0])}
            />
            <label htmlFor="file">
              <div className="item">
                <img src={Image} alt="" />
                <span>Add Image</span>
              </div>
            </label>

            <div className="item">
              <img src={Map} alt="" />
              <span>Add Place</span>
            </div>

            <div className="item">
              <img src={Friend} alt="" />
              <span>Tag Friends</span>
            </div>
          </div>
          <div className="right">
            <button onClick={handleShare}>Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
