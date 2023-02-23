import "./post.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="user">
        <div className="userInfo">
          <img src={post.profilePic} alt="profile" />
          <span>{post.name}</span>
          <p>a few min ago</p>
        </div>
        <MoreHorizIcon />
      </div>
      <div className="content">
        {post.img ? <img src={post.img} alt="post" /> : ""}
        <p>{post.desc}</p>
      </div>
      <div className="action">
        <div className="left">
          <FavoriteOutlinedIcon />
          <TextsmsOutlinedIcon />
        </div>
        <div className="right">
          <ShareOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Post;
