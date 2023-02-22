import './register.scss';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
     <div className='register'>
      <div className="card">
        
        <div className="left">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder='Display Name' />
            <input type="email" placeholder='Email' />
            <input type="text" placeholder='Username' />
            <input type="password" placeholder='Password' />
            <button>Register</button>
          </form>
        </div>

        <div className="right">
          <h1>Hello User.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere delectus eum dignissimos expedita quaerat? Tenetur officiis eaque libero totam? Consequatur!</p>
          <span>Do you have an account?</span>
          <Link to='/login'>
          <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  )
  
}

export default Register