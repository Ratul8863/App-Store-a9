import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { RouterProvider } from 'react-router-dom';
import { router } from './Router/Router';

import { Toaster } from 'react-hot-toast'; // ✅ Import toast provider
import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(

  
  <StrictMode>

    
     <HelmetProvider>
     <RouterProvider router={router} />
     <Toaster position="top-right" reverseOrder={false} />
     <ToastContainer></ToastContainer>
     </HelmetProvider>
 
  </StrictMode>
);
