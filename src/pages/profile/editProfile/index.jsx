import './editProfile.scss';

const EditProfile = ({ setopenEditProfile }) => {
  return (
    <div>
       <p>edit profile</p> 
       <button onClick={() => setopenEditProfile(false)}>close</button>
      </div>
  )
}

export default EditProfile