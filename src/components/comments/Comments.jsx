import { useContext, useRef } from "react";
import { AuthContext } from "../../context/authContext";
import "./comments.scss";
import { useQuery } from "react-query";
import { makeRequest } from "../../axios";
import moment from 'moment';
import { useMutation, useQueryClient } from "react-query";


const Comments = ({ postId }) => {
  const { currentUser } = useContext(AuthContext);
  const newCommentRef  = useRef()
  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery(["comments", postId], () =>
    makeRequest.get(`/comments/${postId}`).then((res) => {
      return res.data;
    })
  );

//   console.log(data);


  const addComment =async () => {
    const newComment = newCommentRef.current.value;
     mutation.mutate( { description: newComment} );
}

  // add post using Mutations
  const mutation = useMutation(
    (newComment) => {
      return makeRequest.post(`/comments/${postId}`, newComment);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["comments", postId]);
      },
    }
  );
  
  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="profile" />
        <input type="text" ref={newCommentRef} placeholder="write a comment" />
        <button onClick={addComment}>Send</button>
      </div>
      {error
        ? "Something Went Wrong"
        : isLoading
        ? "Loading Comments"
        : data.map((comment) => (
            <div key={comment.id} className="comment">
              <img src={comment.profilePic} alt="profile" />
              <div className="commentInfo">
                <span>{comment.name}</span>
                <p>{comment.description}</p>
              </div>
              <span className="date">{moment(comment.createdAt).fromNow()}</span>
            </div>
          ))}
    </div>
  );
};

export default Comments;
