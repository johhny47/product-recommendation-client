import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import AuthContext from "../context/AuthContext/AuthContext";
import bgimg from "../assets/LoginImg.png";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState();
  const { handleGoogleLogin, handleLogin } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    handleLogin(email, password)
      .then(res => {
        Swal.fire({
          title: 'Successful!',
          text: 'Successfully logged in',
          icon: 'success',
          confirmButtonText: 'ok'
        });
        navigate("/");
      })
      .catch(err =>
        Swal.fire({
          title: 'Error!',
          text: `${err.message}`,
          icon: 'error',
          confirmButtonText: 'ok'
        })
      );
    if (password.length < 6) {
      setError("Password must contain at least 6 characters");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one lowercase letter");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter");
      return;
    }
    if (error) {
      setError("");
      e.target.reset();
    }
  };

  useEffect(() => {
    document.title = "Recomify | Login";
  }, []);

  return (
    <div className="hero min-h-screen mt-16 flex items-center justify-center bg-[#cce8f4]">
      <div className="hero-content flex flex-col md:flex-row items-center w-full max-w-screen-xl">
      
        <div className="hidden md:block w-1/2" >
        <img src={bgimg} alt="" />
        </div>

    
        <div className="w-full max-w-sm shrink-0 shadow-2xl p-6 bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
              <button onClick={handleGoogleLogin} className="btn mt-2">
                <div className="flex">Login with Google</div>
              </button>
            </div>
            <p>Already have an account? Please <Link to="/registration"><span className="text-blue-700">Register</span></Link> </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
