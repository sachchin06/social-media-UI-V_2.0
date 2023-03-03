import './login.scss';
import {Link, useNavigate} from 'react-router-dom';
import { AuthContext } from '../../context/authContext';
import { useContext, useRef, useState } from 'react';


const Login = () => {
const { login } = useContext(AuthContext);
const usernameRef = useRef();
const passwordRef = useRef();

const [err, setErr] = useState(null);
 const navigate = useNavigate();

 const resetForm = () => {
    usernameRef.current.value = "";
    passwordRef.current.value = "";
  }

const handleLogin = async (event) => {
    event.preventDefault();

    const usernameValue = usernameRef.current.value;
    const passwordValue = passwordRef.current.value;

    const user = {
      username: usernameValue,
      password: passwordValue,
    };

    try {
       await login(user);
       resetForm();
       navigate('/', { replace: true });
    } catch (error) {
      setErr(error);
    }
  
}


  return (
    <div className='login'>
      <div className="card">
        <div className="left">
          <h1>Hello Again.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere delectus eum dignissimos expedita quaerat? Tenetur officiis eaque libero totam? Consequatur!</p>
          <span>Don't you have an account?</span>
          <Link to='/register'>
          <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form onSubmit={handleLogin}>
            <input type="text" ref={usernameRef} placeholder='Username' />
            <input type="password" ref={passwordRef}  placeholder='Password' />
            <button>Login</button>
          </form>

          {err && err}
        </div>
      </div>
    </div>
  )
}

export default Login