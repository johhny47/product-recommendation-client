import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext/AuthContext";
import bgimg from "../assets/LoginImg.png";

const Registration = () => {
  const { handleRegister } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photoURL = e.target.photourl.value;
    console.log(name, email, password, photoURL);
    handleRegister(email, password);
  };

  useEffect(() => {
    document.title = "Recomify | Register";
  }, []);

  return (
    <div className="hero min-h-screen mt-16 flex items-center justify-center bg-[#cce8f4]">
      <div className="hero-content flex flex-col md:flex-row w-full max-w-screen-xl">
       
        <div
          className="hidden md:block w-1/2"
        >
          <img src={bgimg} alt="" />
        </div>

      
        <div className="w-full max-w-sm shrink-0 p-6 bg-base-100 shadow-2xl">
          <div className="text-center lg:text-left mb-6">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
              Register Now!
            </h1>
          </div>
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">PhotoURL</span>
              </label>
              <input
                type="text"
                name="photourl"
                placeholder="Photo URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary w-full">Register</button>
            </div>
            <p className="mt-4 text-center">
              Already have an account?{" "}
              <Link to="/login">
                <span className="text-blue-700">Login</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
