import './posts.scss';
import Post from './Post';

const Posts = () => {

  //dummy

  const posts = [
    {
      id: 1,
      name: "sachchin ram",
      userId: 1,
      profilePic: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia reiciendis voluptatum corporis, error excepturi',
      img: "https://images.pexels.com/photos/13465283/pexels-photo-13465283.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
     {
      id: 2,
      name: "sachchin ram",
      userId: 1,
      profilePic: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia reiciendis voluptatum corporis, error excepturi',
      
    },
     {
      id: 3,
      name: "sachchin ram",
      userId: 1,
      profilePic: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia reiciendis voluptatum corporis, error excepturi',
      img: "https://images.pexels.com/photos/13465283/pexels-photo-13465283.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
     {
      id: 4,
      name: "sachchin ram",
      userId: 2,
      profilePic: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia reiciendis voluptatum corporis, error excepturi',
      img: "https://images.pexels.com/photos/13465283/pexels-photo-13465283.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
     {
      id: 5,
      name: "sachchin ram",
      userId: 2,
      profilePic: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia reiciendis voluptatum corporis, error excepturi',
      img: "https://images.pexels.com/photos/13465283/pexels-photo-13465283.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
  ]

  return (
    <div className='posts'>
      {
        posts.map((post) => (
          <Post post={post} key={post.id} />
        ))
      }
    </div>
  )
}

export default Posts