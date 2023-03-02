import "./uploadStory.scss";
import Image from "../../assets/img.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";

import { makeRequest } from "../../axios";
import { useMutation, useQueryClient } from "react-query";

const UploadStory = ({ setOpenUpload }) => {
  const { currentUser } = useContext(AuthContext);
  const [file, setFile] = useState(null);
  const queryClient = useQueryClient();

  const mutation = useMutation(
    (newStory) => {
      return makeRequest.post("/stories", newStory);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["stories"]);
      },
    }
  );

  const handleShare = async (e) => {
    e.preventDefault();
    let imageUrl = "";
    if (file) {
      imageUrl = await uploadImageToCloud();
    }

    // console.log({ image: imageUrl});
    mutation.mutate({ image: imageUrl });
    setFile(null);
  };

  const uploadImageToCloud = async () => {
    try {
      const formData = new FormData();
      formData.append("image", file);
      const res = await makeRequest.post("/file/upload", formData);
      return res.data.imageUrl;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="uploadStory">
      <div className="container">
        <div className="top">
          <img src={currentUser.profilePic} alt="profile" />
          <span>Hi!! {currentUser.name}. let me share your story </span>
        </div>
        <hr />
        <div className="bottom">
          <input
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label htmlFor="file">
            <div className="item">
              <img src={Image} alt="pic" />
              <span>Add Story</span>
            </div>
          </label>
          <button onClick={handleShare}>share</button>
        </div>
      </div>
      <button className="closeBtn" onClick={() => setOpenUpload(false)}>
        X
      </button>
    </div>
  );
};

export default UploadStory;
