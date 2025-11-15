import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layout/MainLayout";


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
  }
])

const App = () => {
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
};

export default App;
