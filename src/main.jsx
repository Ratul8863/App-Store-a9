import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { RouterProvider } from 'react-router-dom';
import { router } from './Router/Router';

import { Toaster } from 'react-hot-toast'; // ✅ Import toast provider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <RouterProvider router={router} />
      <Toaster position="top-right" reverseOrder={false} /> {/* ✅ Add Toaster here */}
    </>
  </StrictMode>
);
