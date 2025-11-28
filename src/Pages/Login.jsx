import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useContext } from "react";
import { Link } from "react-router";
import { auth } from "../Firebase/firebase.config";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {

  const {setUser, user} = useContext(AuthContext)

  const handleSubmit = (e)=>{
    e.preventDefault();
    const email = e.target.email.value; 
    const pass = e.target.password.value;

    signInWithEmailAndPassword(auth, email, pass)
    .then((userCredential) =>{
      const user = userCredential.user;
      setUser(user);

    })
    .catch((error) => {
      console.log(error);      
    });
  }

  console.log(user);
  

  return (
    <div>
      <div className="bg-base-100 flex justify-center items-center min-h-[calc(100vh-280px)]">
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl container mx-auto">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <fieldset className="fieldset">
                <label className="label text-sm font-semibold">Email : </label>
                <input
                  name="email"
                  type="email"
                  className="input"
                  placeholder="your email adress"
                />
                <label className="label  text-sm font-semibold">
                  Password :
                </label>
                <input
                  name="password"
                  type="password"
                  className="input"
                  placeholder="Write your password"
                />
                <div>
                  <Link to="/forgot-password" className="link link-hover">
                    Forgot password?
                  </Link>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
                <div>
                  Create an Account?{" "}
                  <Link to="/signup" className="link link-hover">
                    Sign Up
                  </Link>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
