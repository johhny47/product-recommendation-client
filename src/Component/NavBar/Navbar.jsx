import { NavLink } from "react-router-dom";
import AuthContext from "../../context/AuthContext/AuthContext";
import { useContext } from "react";
import "./navbar.css"
import logo from "../.././assets/logo2.webp"


const Navbar = () => {
    const {user,handleLogout} =useContext(AuthContext)
   
    const link = <>
     <NavLink to="/" ><li><a>Home</a></li></NavLink>
     <NavLink to="/queries"><li><a>Queries</a></li></NavLink>
    
     {
              user ? <div className="lg:flex">
                 <NavLink to="/recommendationforme"><li><a>Recommendation For Me</a></li></NavLink>
                 <NavLink to="/myqueries"><li><a>My Queries</a></li></NavLink>
                 <NavLink to="/myrecommendation"><li><a>My Recommendation</a></li></NavLink>
                 <NavLink to="/login"><li><a onClick={handleLogout}>Logout</a></li></NavLink>
                 </div> : <NavLink to="/login" ><li><a>Login</a></li></NavLink>
             }
  

     </>
    return (
        <div className="navbar bg-sky-500">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {link}
            </ul>
          </div>
          <img src={logo} alt="" className="w-5 h-5 md:h-8 md:w-8 lg:h-10 lg:w-10 rounded-full items-center " />
          <a className="mx-2 text-xl md:text-xl lg:text-3xl font-bold text-white">Recomify</a>
        
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
        {link}
          </ul>
        </div>
        <div className="navbar-end">
       
         { user &&  <button className="mx-2">
        <img src= {user.photoURL} alt="" className="h-10 w-10 rounded-full border-2 border-red-500 " />
        </button>}
        </div>
      </div>
    );
};

export default Navbar;