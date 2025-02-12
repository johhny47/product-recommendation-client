import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../context/AuthContext/AuthContext";
import { useContext } from "react";
import "./navbar.css";
import logo from "../../assets/logo2.webp";

import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
const Navbar = () => {
  const { user, handleLogout } = useContext(AuthContext);

  const link = (
    <>
    

      {user ? 
        <div className="lg:flex">
          <NavLink to="/">
        <li>
          <a>Home</a>
        </li>
      </NavLink>
      <NavLink to="/queries">
        <li>
          <a>Queries</a>
        </li>
      </NavLink>
          <NavLink to="/recommendationforme">
            <li>
              <a>Recommendation For Me</a>
            </li>
          </NavLink>
          <NavLink to="/myqueries">
            <li>
              <a>My Queries</a>
            </li>
          </NavLink>
          <NavLink to="/myrecommendation">
            <li>
              <a>My Recommendation</a>
            </li>
          </NavLink>
        
        </div>: <div className="lg:flex">
        <NavLink to="/">
        <li>
          <a>Home</a>
        </li>
      </NavLink>
      <NavLink to="/queries">
        <li>
          <a>Queries</a>
        </li>
      </NavLink>
        </div>
     }
    </>
  );

  return (
    <div className="bg-primary w-full fixed top-0 left-0 z-50">
    
      <div className="navbar max-w-7xl mx-auto px-4">
      
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[40] mt-3 w-52 p-2 shadow  font-bold text-black"
            >
              {link}
            </ul>
          </div>
          <Link to="/">
            <div className="flex items-center">
              <img
                src={logo}
                alt="Logo"
                className="w-5 h-5 md:h-8 md:w-8 lg:h-10 lg:w-10 rounded-full"
              />
              <a className="mx-2 text-xl md:text-xl lg:text-3xl font-bold text-white">
                Recomify
              </a>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal ml-10 text-white font-bold">
            {link}
          </ul>
        </div>
        <div className="navbar-end text-white font-bold">
        {
      user ?  <div className="flex md:order-2 gap-4 items-center">   <ul><NavLink to="/"><li ><a className="flex items-center gap-1" onClick={handleLogout} ><h1><span className="hidden md:flex">Logout</span></h1> <FaSignOutAlt ></FaSignOutAlt></a></li>  </NavLink></ul>
      <img
                src={user.photoURL}
                alt="User"
                className="h-10 w-10 rounded-full border-2 white"
              /></div> : <div>
                <ul>
                <NavLink to="/login"><li><a className="flex items-center gap-1"> <FaSignInAlt></FaSignInAlt> Login</a></li></NavLink>
                </ul>
                   
              </div>
     
      
     }
     
        </div>
      </div>
    </div>
  );
};

export default Navbar;
