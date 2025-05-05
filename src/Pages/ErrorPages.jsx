import React from 'react';
import Navbar from './../Components/Navbar';
import { useNavigate } from 'react-router';


const ErrorPages = () => {

    const navigate =useNavigate()
    //   const use = useParams()
    
    const ha = () =>
    {
        navigate('/')
    }
//   const use = useParams()
    return (
        <div className='max-w-[1200px] mx-auto' >
            <Navbar></Navbar>

            <div className='text-center  '>
                <h1 className='text-4xl font-bold text-red-600 m-4'>404 Page Not Found</h1>
                <p className='mb-3'>Oops! The page you are looking for is not found</p>
                
                <button className='btn btn-primary mb-10' onClick={ha}>View All Apps</button>
            </div>

        </div>
    );
};

export default ErrorPages;