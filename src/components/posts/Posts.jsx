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
      img: "https://images.pexels.com/photos/9799708/pexels-photo-9799708.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
      img: "https://images.pexels.com/photos/7251585/pexels-photo-7251585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
     {
      id: 4,
      name: "sachchin ram",
      userId: 2,
      profilePic: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia reiciendis voluptatum corporis, error excepturi',
      img: "https://images.pexels.com/photos/10520764/pexels-photo-10520764.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
     {
      id: 5,
      name: "sachchin ram",
      userId: 2,
      profilePic: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia reiciendis voluptatum corporis, error excepturi',
      img: "https://images.pexels.com/photos/6364452/pexels-photo-6364452.jpeg?auto=compress&cs=tinysrgb&w=600"
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