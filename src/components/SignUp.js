import { auth } from "./../firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignUp(){ 
  const [signUpSuccess, setSignUpSuccess] = useState(null);

  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setSignUpSuccess(`You've successfully signed up, ${userCredential.user.email}!`)
      })
      .catch((error) => {
        setSignUpSuccess(`There was an error signing up: ${error.message}!`)
      });
  }


  return (
    <React.Fragment>
        <h1>Sign Up</h1>
        {signUpSuccess}
        <form onSubmit={doSignUp}>
            <input
            type='text'
            name='email'
            placeholder='email' />
            <input
            type='password'
            name='password'
            placeholder='Password' />
            <button type='submit'>Sign up</button>
        </form>
        <br />
        <Link to="/snapNow"><button>Snap Now!</button></Link>
        </React.Fragment>
    );
}

export default SignUp