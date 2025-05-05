import React, { createContext, useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.config';
import Footer from '../Components/Footer';
export const Valuecontext = createContext()
const Root = () => {

    const [users,setusers]=useState(null);
    const [looading,setLooading]= useState(true)
    const navigate=useNavigate()

const handlelogin = (email,password) =>
{
    return signInWithEmailAndPassword(auth,email,password);
    
}
const handlesignup = (email,password) =>
    {
        return createUserWithEmailAndPassword(auth,email,password);
        
    }

    useEffect (()=>{
        const unsubscribe =  onAuthStateChanged(auth, (user) => {
            console.log(user)
            setusers(user)
            setLooading(false)
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
            //   const uid = user.uid;
              // ...
            } else {
              // User is signed out
              // ...
            }
          });

          return  ()=>
          {
            unsubscribe()
          }
     
         
     
     },[])

     const handlesignout = () =>
     {
        const auth = getAuth();
signOut(auth).then(() => {
 alert("Sign Out Successfull")
navigate('/Login')
 
}).catch((error) => {
  // An error happened.
  console.log(error)
});

     }






     const updateuser = (updated) => {
      return updateProfile(auth.currentUser,updated)
     }




     const provider = new GoogleAuthProvider();


const handlegoogle = ()=>
{
  return signInWithPopup(auth, provider)
  
}


    



    const handlevalues = {
        handlelogin,
        handlesignup,
        users,
        handlesignout,
        looading,
        setLooading,
        updateuser,
        setusers,
        handlegoogle,

    }




    return (
        <div className='max-w-[1200px] mx-auto'>
           <Valuecontext.Provider value={handlevalues}>
           <Navbar></Navbar>
           <Outlet></Outlet>
           <Footer></Footer>
           </Valuecontext.Provider>
           
      
            
        </div>
    );
};

export default Root;