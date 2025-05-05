import React, { useContext, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Valuecontext } from '../Root/Root';
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const navigate= useNavigate()
const  [erroemsg , seterrormsg] = useState();
const {handlelogin,handlegoogle} = useContext(Valuecontext)
// console.log(value)

const location = useLocation()
const state=location.state
console.log(location,state)
    const handlesubmit = (e)=> {
        e.preventDefault();
        const form =e.target;
        const email = form.email.value;
        const Password =form.Password.value;
        console.log(email,Password)
        
        handlelogin(email,Password)
        .then(result => {
            const user = result.user;
            console.log(user)
          navigate(`${location.state ? location.state : "/"}`)
            
          })
          .catch(error => {
            const errorc=error.message;
            console.log(errorc)
            seterrormsg(errorc)

            alert("Invalid email or password")
         
          });
    
    }
    const handleg =() =>
      {
     
       handlegoogle()
       .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // The signed-in user info.
        // const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        
        navigate(`${location.state ? location.state : "/"}`)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.customData.email;
        // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        alert("Invalid email or password")
       
      });
      

      }
        
console.log(erroemsg)


    return (
        <form onSubmit={handlesubmit} className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl mb-10">
        <div className="card-body">
          <h1 className='text-center text-xl py-2 font-bold text-[#403F3F]'>Login your account</h1>

          <button onClick={handleg} aria-label="Login with Google" type="button" className=" btn btn-outline btn-secondary flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
          <FaGoogle /> Login with Google
		</button>

    <div className="flex items-center w-full my-4">
		<hr  className="w-full dark:text-gray-600" />
		<p className="px-3 dark:text-gray-600">OR</p>
		<hr  className="w-full dark:text-gray-600" />
	</div>
          <fieldset className="fieldset space-y-2">
            <label className="font-bold text-[#403F3F]">Email address</label>
            <input type="email" name='email'
             className="input" 
             placeholder="Enter your email address" 
              required />
  
            <label  className="font-bold text-[#403F3F]">Password</label>
  
            <input type="password" name='Password'
             className="input" 
             placeholder="Enter your Password" 
             required />
  
            <div><a className="link link-hover">Forgot password?</a></div>

  <button type='Submit' className="btn btn-neutral mt-4">Login</button>

          
            <p>Dont’t Have An Account ? <Link state={location.state} className='text-secondary' to='/Register'>Register</Link></p>
          </fieldset>
        </div>
      </form>
    );
};

export default Login;