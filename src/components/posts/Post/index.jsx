import "./post.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import { Link } from "react-router-dom";

import Comments from "../../comments/Comments";
import { useState } from "react";

const Post = ({ post }) => {

  const [commentOpen, setCommentOpen] = useState(false);

  const liked = false;

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <Link
              to={`/profile/${post.userId}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="profileImg">
                <img src={post.profilePic} alt="profile" />

                <span>{post.name}</span>
              </div>
            </Link>
            <span>posted few min ago</span>
          </div>

          <MoreHorizIcon />
        </div>
        <div className="content">
           <p>{post.desc}</p>
          {post.img ? <img src={post.img} alt="post" /> : ""}
         
        </div>
        <div className="action">
          <div className="item">
           { liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
           12 Likes
           
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
             <TextsmsOutlinedIcon />
            5 Comments
          </div>
          <div className="item">
           <ShareOutlinedIcon />
            3 Share
          </div>
        </div>

        {commentOpen && <Comments />}
      </div>
    </div>
  );
};

export default Post;
