import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import "./Story.scss";
import { useQuery } from "react-query";
import { makeRequest } from "../../axios.js";
import UploadStory from "../uploadStory";
import { Link } from "react-router-dom";

const Stories = () => {
  const { currentUser } = useContext(AuthContext);
  const [openUpload, setOpenUpload] = useState(false);

  const { isLoading, data: stories } = useQuery(["stories"], () =>
    makeRequest.get("/stories").then((res) => res.data)
  );

  // console.log(stories);

  return (
    <div className="stories">
      {!openUpload && (
        <div className="story">
          <Link
            to={`/profile/${currentUser.id}`}
            style={{
              cursor: "pointer",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <img src={currentUser.profilePic} alt="story" />
          </Link>
          <div className="button-container">
            <button onClick={() => setOpenUpload(true)}>
              <span>+</span>
            </button>
          </div>
        </div>
      )}
      {openUpload && <UploadStory setOpenUpload={setOpenUpload} />}
      {!isLoading &&
        stories.map((story) => (
          <div key={story.id} className="story">
            <img src={story.image} alt="story" />
            <Link
              to={`/profile/${story.userId}`}
              style={{
                cursor: "pointer",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div className="storyInfo">
                <img src={story.profilePic} alt="story user" />
                <span>{story.name}</span>
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Stories;
