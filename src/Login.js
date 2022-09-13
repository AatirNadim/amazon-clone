import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//useNavigate was formerly useHistory
import "./Login.css";
// import { getAuth } from "firebase/auth";
import {auth} from './Firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  //by default the value is empty
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  //never a null value, but maybe an empty string
  const [password, setPassword] = useState("");

  //   const handleLogin = () => {};
  //   function handleLogin() {}
  //are the same thing

  const signIn = (e) => {
    e.preventDefault();
    //some fancy firebase login shaattttt
    signInWithEmailAndPassword(auth, email, password)
    // .then(auth => ....) is also fine??
    //single parameter can be passed without brackets as well
    .then ((auth) => {
      alert('Logged in successfully');
      if(auth) navigate('/');
    })
    .catch((error) => alert(error.message))


  };

  const register = (e) => {
    e.preventDefault();
    // console.log('aatir')
    // console.log('aasasasasasa');
    // auth
    //   .createUserWithEmailAndPassword(email, password)
    //   .then((auth) => {
    //     //successfully registered a new user with password
    //     console.log(auth);
    //   })
    //   //in case of any error, flash the error message
    //   .catch((error) => alert(error.message));
    //here do some fancy firebase register
    // const auth = getAuth();
    
    createUserWithEmailAndPassword(auth, email, password)
    .then((auth) => {
        // console.log('successfully created ', auth);
        alert('Account created successfully')
        //if authentication is not empty
        if(auth) {
          navigate('/');
        }
    })
    .catch((error) => {
          // console.log('aatir')
          alert(error.message)
    })
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://cdn2.downdetector.com/static/uploads/logo/amazon.png"
          className="login__logo"
        ></img>
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>Email</h5>
          {/* here we find an intuitive way to grab the email id and store it in our variable */}
          {/* here, e is an event triggered on change, that is when a value is entered */}
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            // every time a new password is generated, like string s, s = s + "a";
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button
            type="submit"
            className="login__signInButton"
            onClick={signIn}
          >
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use
          &amp; Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button
          type="submit"
          className="login__registerButton"
          onClick={register}
        >
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;
