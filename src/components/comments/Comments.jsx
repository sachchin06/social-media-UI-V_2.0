import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import './comments.scss';


const  Comments = () => {
const { currentUser } = useContext(AuthContext)

    const comments = [
        {
            id: 1,
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut blanditiis reprehenderit  sed, dicta aliquam! Delectus, quia consectetur! Placeat?',
            name: 'Ram Kumar',
            userId: 2,
            profilePic: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',

        },
        {
            id: 2,
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut blanditiis reprehenderit  sed, dicta aliquam! Delectus, quia consectetur! Placeat?',
            name: 'Ravi Kumar',
            userId: 3,
            profilePic: 'https://images.pexels.com/photos/2918513/pexels-photo-2918513.jpeg?auto=compress&cs=tinysrgb&w=600',

        },
    ]
  return (
    <div className='comments'>
         <div className="write">
                <img src={currentUser.profilePic} alt="profile" />
                <input type="text" placeholder='write a comment' />
                <button>Send</button>

            </div>
        {
           
            comments.map((comment) => (
                <div className="comment">
                    <img src={comment.profilePic} alt="profile" />
                    <div className="commentInfo">
                        <span>{comment.name}</span>
                        <p>{comment.desc}</p>
                    </div>
                    <span className='date'>1 hour ago</span>
                </div>
            ))
        }
    </div>
  )
}

export default Comments