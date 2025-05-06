import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Valuecontext } from '../Root/Root';

import { FaGoogle } from 'react-icons/fa';
import { toast } from 'react-toastify';


const Register = () => {
  const navigate= useNavigate()
const {handlesignup,updateuser,setusers, handlegoogle} = useContext(Valuecontext)
const location = useLocation()
console.log(location)
const [er,seter] = useState('')
// console.log(value)

    const handlesubmit = (e)=> {
        e.preventDefault();
        const form =e.target;
        const email = form.email.value;
        const Password =form.Password.value;
        // const ConfirmPassword = form.ConfirmPassword.value
        const photo= form.photo.value;
        const name = form.name.value;
        console.log(email,Password,name,photo)


if (Password.length<6)
{
  toast.error("Password must have 6 character")
  seter('Password must have 6 character')
  return
}


// if (Password!== ConfirmPassword)
//   {
//     toast.error("Password and Confirm Password must be same")
//     seter('Password and Confirm Password must be same')
//     return
//   }
if (!/[a-z]/.test(Password))
  {
    toast.error("Password must have a lower case latter ")
    seter('Password must have a lower case latter')
    return
  }
if (!/[A-Z]/.test(Password))
  {
    toast.error("Password must have a upper case latter ")
    seter('Password must have a upper case latter')
    return
  }
if (!/[^a-zA-Z0-9]/.test(Password))
  {
    toast.error("Password must have at least one special character ")
    seter('Password must have at least one special character')
    return
  }

        
       handlesignup(email,Password).then(result => {
            const user = result.user;
            updateuser ({displayName : name , photoURL: photo})
            .then(()=>{
              setusers ({...user,displayName : name , photoURL: photo})
            })
            .catch((error)=>{
              console.log(error)
              setusers(user)
            })
            console.log(user)
             toast.success("Successfully Registered");
          })
          .catch(error => {
            console.log(error)
            
         
          });
       
          navigate(`${location.state ? location.state : "/"}`)


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


    return (
        <form onSubmit={handlesubmit} className="card bg-base-100  w-full max-w-sm mx-auto shrink-0 shadow-2xl mb-10">
      <div className="card-body">
        <h1 className='text-center text-xl py-2 font-bold text-[#403F3F]'>Register your account</h1>
        <fieldset className="fieldset space-y-2">

        <label className="font-bold text-[#403F3F]">Your Name</label>
        <input type="text" name='name' className="input" placeholder="Enter your name" />

          <label className="font-bold text-[#403F3F]">Email address</label>
          <input type="email" name='email' className="input" placeholder="Enter your email address" />

        <label className="font-bold text-[#403F3F]">Photo URL</label>
        <input type="text" name='photo' className="input" placeholder="Enter your Photo URL" />


          <label className="font-bold text-[#403F3F]">Password</label>
          <input type="password" name='Password' className="input" placeholder="Enter your Password"
         
           />

{/* <input type="password" name='ConfirmPassword' className="input" placeholder="Confirm Password"
         
         /> */}

{
            er && <p className='text-red-600 font-bold '>{er}</p>
          }



<div className="flex items-center w-full my-4">
		<hr  className="w-full dark:text-gray-600" />
		<p className="px-3 dark:text-gray-600">OR</p>
		<hr  className="w-full dark:text-gray-600" />
	</div>

   <button onClick={handleg} aria-label="Login with Google" type="button" className=" btn btn-outline btn-secondary flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
            <FaGoogle /> Login with Google
      </button>


            

          <div><a className="link link-hover">Forgot password?</a></div>
          <button type='submit' className="btn btn-neutral mt-4">Register</button>
        
          <p>Already Have An Account ? <Link className='text-secondary' to='/login'>Login</Link></p>
        </fieldset>
      </div>
    </form> 
    );
};

export default Register;