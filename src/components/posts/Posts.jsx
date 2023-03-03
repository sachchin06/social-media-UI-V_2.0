import "./posts.scss";
import Post from "./Post";
import { useQuery } from "react-query";
import { makeRequest } from "../../axios";
import Share from "../share/Share";
import { useEffect } from "react";

const Posts = ({ userId }) => {
 
  // ====>>>> without any cutom config using axios
  //  const { isLoading, error, data } = useQuery(['posts'],  async () =>
  //   await axios.get('http://localhost:8080/api/posts')

  //  );

  const { isLoading, error, data } = useQuery(["posts"], () =>
    makeRequest.get(`/posts?userId=${userId}`).then((res) => {
      return res.data;
    })
  );

    useEffect(() => {
  window.scrollTo(0,0)
},[])
  // console.log(data);
  return (
    <div className="posts">
      <Share />
      {error ? (
        "Something Went Wrong"
      ) : isLoading ? (
        "loading"
      ) : data.length ? (
        data.map((post) => <Post post={post} key={post.id} />)
      ) : (
        <h1 style={{ margin: "20px" }}>No Posts Yet</h1>
      )}
    </div>
  );
};

export default Posts;
