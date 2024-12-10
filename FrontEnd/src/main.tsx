import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Author } from "./pages/Author";
import { Home } from "./pages/Home/Home";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Register } from './pages/Register/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/Author",
    element: <Author />
  }, 
  {
    path: "/Register",
    element: <Register />
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
