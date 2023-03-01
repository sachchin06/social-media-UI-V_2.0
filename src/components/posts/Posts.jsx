import "./posts.scss";
import Post from "./Post";
import { useQuery } from "react-query";
import { makeRequest } from "../../axios";
import Share from "../share/Share";

const Posts = () => {
  //dummy
  // const posts = [
  //   {
  //     id: 1,
  //     name: "sachchin ram",
  //     userId: 1,
  //     profilePic: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia reiciendis voluptatum corporis, error excepturi',
  //     img: "https://images.pexels.com/photos/9799708/pexels-photo-9799708.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  //   },
  // ]

  // ====>>>> without any cutom config using axios
  //  const { isLoading, error, data } = useQuery(['posts'],  async () =>
  //   await axios.get('http://localhost:8080/api/posts')

  //  );

  const { isLoading, error, data } = useQuery(["posts"], () =>
    makeRequest.get("/posts").then((res) => {
      return res.data;
    })
  );

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
