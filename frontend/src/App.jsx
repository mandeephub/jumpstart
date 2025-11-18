import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import '../src/index.css';
import Home from "./pages/Home";
import MainLayout from "./layout/MainLayout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,

    children:[
      {
        path: '/',
        element: <Home/>
      }
      
    ]
  },
  {
    path:'login',
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
])

const App = () => {
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
};

export default App;
