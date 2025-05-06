import React from 'react';

const ErrorMessage = () => {
    return (
        <div className='max-w-[1200px] mx-auto'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold text-red-600 m-4'>The page you’re looking for can’t be found.</h1>
        <p className='mb-3'>Oops! The page you are looking for is not found</p>
        
        <button 
          className='btn btn-primary mb-10'
         
        >
          View All Apps
        </button>
      </div>
    </div>
    );
};

export default ErrorMessage;