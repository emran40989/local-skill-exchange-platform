import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div>
      <div className="bg-base-100 flex justify-center items-center min-h-[calc(100vh-280px)]">
          <div className="card bg-base-100 w-full max-w-sm shadow-2xl container mx-auto">
            <div className="card-body">
              <form action="">
                <fieldset className="fieldset">
                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <Link to="/forgot-password" className="link link-hover">Forgot password?</Link>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
                <div>
                  Create an Account? <Link to="/signup" className="link link-hover">Sign Up</Link>
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
