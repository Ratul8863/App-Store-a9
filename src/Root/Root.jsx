import React, { createContext, useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { auth } from '../Firebase/Firebase.config';
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { ToastContainer } from 'react-toastify';

export const Valuecontext = createContext();







const Root = () => {
  const [users, setusers] = useState(null);
  const [looading, setLooading] = useState(true);
  const navigate = useNavigate();
  // const navigation = useNavigation();
  const handlelogin = (email, password) => signInWithEmailAndPassword(auth, email, password);
  const handlesignup = (email, password) => createUserWithEmailAndPassword(auth, email, password);
  const handlesignout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        alert("Sign Out Successful");
        navigate('/Login');
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  const updateuser = (updated) => updateProfile(auth.currentUser, updated);
  const provider = new GoogleAuthProvider();
  const handlegoogle = () => signInWithPopup(auth, provider);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setusers(user);
      setLooading(false);
    });
    return () => unsubscribe();
  }, []);

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
  };

  return (
    <>
    <div className='max-w-[1200px] mx-auto'>
      <Valuecontext.Provider value={handlevalues}>
        <Navbar />
        
        {looading ? (
          <div className="flex justify-center items-center min-h-[60vh]">
            <span className="loading loading-spinner loading-lg text-blue-500"></span>
          </div>
        ) : (
          <Outlet />
        )}
        
        
        <ToastContainer></ToastContainer>
      </Valuecontext.Provider>
    </div>
    <Footer />
    </>
    
  );
};

export default Root;
