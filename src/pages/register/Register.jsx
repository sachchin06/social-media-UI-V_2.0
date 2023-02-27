import "./register.scss";
import { Link } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";
import { useState } from "react";

const Register = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();

  const [err, setErr] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nameValue = nameRef.current.value;
    const emailValue = emailRef.current.value;
    const usernameValue = usernameRef.current.value;
    const passwordValue = passwordRef.current.value;

    const user = {
      name: nameValue,
      email: emailValue,
      username: usernameValue,
      password: passwordValue,
    };

    try {
      console.log(user);
      await axios.post("http://localhost:8080/api/auth/register", user);
    } catch (error) {
      setErr(error.response.data);
    }
  };

  console.log(err);
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>
            <input type="text" ref={nameRef} placeholder="Display Name" />
            <input type="email" ref={emailRef} placeholder="Email" />
            <input type="text" ref={usernameRef} placeholder="Username" />
           <input type="password" ref={passwordRef} placeholder="Password" />
            <button>Register</button>

            {err && err}
          </form>
        </div>

        <div className="right">
          <h1>Hello User.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            delectus eum dignissimos expedita quaerat? Tenetur officiis eaque
            libero totam? Consequatur!
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
