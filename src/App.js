import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./component/auth/Login";
import ErrorPage from "./component/errorPage";
import Sidebar from "./component/Sidebar";
import View from "./component/pages/View";
import Add from "./component/pages/Add";
import Review from "./component/pages/Review";
import Myaccount from "./component/pages/Myaccount";
import Download from "./component/pages/Download";
import Check from "./component/pages/Check";
import SignUP from "./component/auth/SignUP";
import Start from "./component/pages/Start";
import ClientDashboard from "./component/pages/client-dashbord/Clientdashboard";



const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/signup",
      element: <SignUP />,
    },
    {
      path: "/clientdashboard",
      element: <ClientDashboard/>

    },
    {
      path: "/dashboard",
      element: <Sidebar />,
      children: [
        {
          path: "/dashboard",
          element: <Start />,
        },
        {
          path: "/dashboard/add",
          element: <Add />,
        },
        {
          path: "/dashboard/review",
          element: <Review />,
        },
        {
          path: "/dashboard/check",
          element: <Check />,
        },
        {
          path: "/dashboard/download",
          element: <Download />,
        },
        {
          path: "/dashboard/myaccount",
          element: <Myaccount />,
        },
        {
          path: "/dashboard/review",
          element: <Review />,
        },
        {
          path: "/dashboard/view",
          element: <View />,
        },
      ],
    },
    
  ]);

  return <RouterProvider router={router} />;
};

export default App;
