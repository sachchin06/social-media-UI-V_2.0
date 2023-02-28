import "./post.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import Comments from "../../comments/Comments";
import { useContext, useState } from "react";
import moment from "moment";
import { AuthContext } from "../../../context/authContext";

import { useQuery } from "react-query";
import { makeRequest } from "../../../axios";
import { useMutation, useQueryClient } from "react-query";

const Post = ({ post }) => {
  const { currentUser } = useContext(AuthContext);
  const [commentOpen, setCommentOpen] = useState(false);
  const queryClient = useQueryClient();

  const {
    isLoading: isLikesLoding,
    error: likesErr,
    data: likes,
  } = useQuery(["likes", post.id], () =>
    makeRequest.get(`/likes?postId=${post.id}`).then((res) => {
      return res.data;
    })
  );

  const {
    isLoading: isCommentLoading,
    error: commentsErr,
    data: comments,
  } = useQuery(["getComments", post.id], () =>
    makeRequest.get(`/comments/${post.id}`).then((res) => {
      return res.data;
    })
  );

  const Mutation = useMutation(
    (liked) => {
      // console.log(liked);
      if (liked) return makeRequest.delete(`/likes?postId=${post.id}`);
      return makeRequest.post('/likes', {postId: post.id});
    },
    {
      onSuccess: () => {
        //Invalidate and refetch
        queryClient.invalidateQueries(["likes", post.id]);
      },
    }
  );

  // likes.find((like) => like.userId === currentUser.id)

  const handleLike = () => {
    Mutation.mutate(likes.includes(currentUser.id));
  };

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
            <span>{moment(post.createdAt).fromNow()}</span>
          </div>

          <MoreHorizIcon />
        </div>
        <div className="content">
          <p>{post.description}</p>
          {post.image ? <img src={post.image} alt="post" /> : ""}
        </div>
        <div className="action">
          {isLikesLoding ? (
            "likes..."
          ) : (
            <div className="item">
              {likes.includes(currentUser.id) ? (
                <FavoriteOutlinedIcon onClick={handleLike} />
              ) : (
                <FavoriteBorderOutlinedIcon onClick={handleLike} />
              )}
              {likes.length} Likes
            </div>
          )}

          {isCommentLoading ? (
            "Comments .."
          ) : (
            <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
              <TextsmsOutlinedIcon />
              {comments.length} Comments
            </div>
          )}
          <div className="item">
            <ShareOutlinedIcon />3 Share
          </div>
        </div>

        {commentOpen && <Comments postId={post.id} />}
      </div>
    </div>
  );
};

export default Post;
