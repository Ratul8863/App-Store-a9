import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'
import { Valuecontext } from '../Root/Root';
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
const {handlesignout,users} = useContext(Valuecontext)

    const links = <>
    <NavLink to={"/"}>Home</NavLink>
               <NavLink onClick={window.scrollTo(0,0)} to={"/Apps"}>Apps</NavLink>
              
               <NavLink onClick={window.scrollTo(0,0)} to={"/UserProfile"}>My Profile</NavLink>
               
    </>



    return (
        <div className="navbar bg-base-90 -sm mb-4 ">
        <div className="navbar-start space-x-[-20px]">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
        
          <NavLink to='/' className="btn btn-ghost font-bold text-2xl flex">
          <img className='w-10 h-10 '  src="https://i.ibb.co.com/xQr2zTk/icons8-app-100.png" alt="" />
            <p className='text-sm md:text-2xl'>App-Store</p></NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {links}
          </ul>
          
        </div>
        <div className="navbar-end space-x-4">
        {users ? (
          <>
            <div className="tooltip tooltip-bottom" data-tip={users.displayName}>
              <Link to="/UserProfile">
                <img
                  src={users.photoURL}
                  alt="User"
                  className="w-10 h-10 rounded-full object-cover border-2 border-blue-500"
                />
              </Link>
            </div>
            <button
              onClick={handlesignout}
              className="btn btn-sm bg-[#176AE5] text-white hover:bg-blue-700 rounded-xl"
            >
              Logout
            </button>
          </>
        ) : (
          <div className='flex gap-2'>  
           <NavLink
          to="/Login"
        >
          <FaUserCircle size={30}/>
        </NavLink>
            <Link
          to="/Login"
          className="flex items-center gap-1 btn btn-sm bg-[#176AE5] text-white hover:bg-blue-700 rounded-xl"
        >
          
          Login/Register
        </Link></div>
         
        )}
      </div>
      </div>
    );
};

export default Navbar;