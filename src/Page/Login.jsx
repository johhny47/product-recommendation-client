import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import AuthContext from "../context/AuthContext/AuthContext";




const Login = () => {
  const navigate = useNavigate()
  const [error,setError] = useState()
  const {handleGoogleLogin,handleLogin} = useContext(AuthContext);
  const handleSubmit =(e)=>{
    e.preventDefault();
    const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        handleLogin(email,password)
        .then(res=>{
          Swal.fire({
            title: 'Successful!',
            text: 'Successfully logged in',
            icon: 'success',
            confirmButtonText: 'ok'
          })
          navigate("/")
         
        })
        .catch(err=>
         
          Swal.fire({
            title: 'Error!',
            text: `${err.message}`,
            icon: 'error',
            confirmButtonText: 'ok'
          })
       
      )
        if(password.length < 6){
          setError("password must contain at least 6 charcter")
          return;
     }
      if(!/[a-z]/.test(password)){
          setError("password must contain at least one lowercase")
          return;
     }
      if(!/[A-Z]/.test(password)){
          setError("password must contain at least one Uppercase")
           return;
      }
      if(error){
        setError("")
        e.target.reset()
      }
      else{
       
       
       }}

      

    return (
        <div className="hero bg-base-200 min-h-screen ">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login Now!</h1>
            
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit}  className="card-body">
             
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
             
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" name="password" placeholder="password" className="input input-bordered" required />
              
              
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
                <button onClick={handleGoogleLogin} className="btn  mt-2"> <div className='flex'  >Login with Google</div></button>
              </div>
              <p>Already have account? please <Link to="/registration"><span className="text-blue-700">Register</span></Link> </p>
            </form>
           
          
          </div>
         
        </div>
      </div>
    );
};

export default Login;