import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Signup = () => {
  const { registerwithEmailPassword } = useContext(AuthContext);

  const handlesubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    registerwithEmailPassword(email, password)
      .then((result) => {
        console.log("User created:", result.user);
      })
      .catch((error) => {
        console.log("Error:", error.message);
      });
  };

  return (
    <div>
      <div>
        <div className="bg-base-100 flex justify-center items-center min-h-[calc(100vh-280px)]">
          <div className="card bg-base-100 w-full max-w-sm shadow-2xl container mx-auto">
            <div className="card-body">
              <form onSubmit={handlesubmit}>
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input
                    name="email"
                    type="email"
                    className="input"
                    placeholder="your email adress"
                  />
                  <label className="label">Name</label>
                  <input
                    name="name"
                    type="text"
                    className="input"
                    placeholder="Your Full Name"
                  />
                  <label className="label">PhotoUrl</label>
                  <input
                    name="photourl"
                    type="text"
                    className="input"
                    placeholder="Place your photo url"
                  />
                  <label className="label">Password</label>
                  <input
                    name="password"
                    type="password"
                    className="input"
                    placeholder="Create a Strong Password"
                  />
                  <button className="btn btn-neutral mt-4">Sign Up</button>
                  <div>
                    Already have an Account?{" "}
                    <Link to="/login" className="link link-hover">
                      Login
                    </Link>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
