import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";

import AllDoctors from "../Pages/AllDoctors/AllDoctors";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";
import DashboardHome from "../Pages/Dashboard/DashboardHome/DashboardHome";
import Dashboard from "../Layouts/Dashboard";
import AddConsultant from "../Pages/Dashboard/AddConsultant/AddConsultant";
import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";
import PrivateRoute from "./PrivateRoute";
import ManageConsultant from "../Pages/Dashboard/ManageConsultant/ManageConsultant";
import PendingAppointment from "../Pages/Dashboard/PendingAppointment/PendingAppointment";
import MakeAppointment from "../Pages/Dashboard/PendingAppointment/MakeAppointment/MakeAppointment";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'doctors',
            element: <AllDoctors></AllDoctors>
        },
        {
            path: 'signin',
            element: <SignIn></SignIn>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
        },
        
        // Private Route with ID
        {
          path: '/make-appointment/:id',
          element: <PrivateRoute> <MakeAppointment/> </PrivateRoute>,
          loader: ({params}) => `http://localhost:5000/consultant/${params.id}`
        },
        
      ]
    },
    {
      path: '/dashboard',
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: '/dashboard/',
          element: <DashboardHome></DashboardHome>
        },
        {
          path: '/dashboard/add-consultant/:id',
          element: <PrivateRoute><AddConsultant></AddConsultant></PrivateRoute>, 
          loader: async ({params}) => await `http://localhost:5000/users/${params.id}`
        },
        {
          path: '/dashboard/pending-appointment',
          element: <PendingAppointment/>
        },

        {
          path: '/dashboard/manage-users',
          element: <ManageUsers></ManageUsers>
        },
        {
          path: '/dashboard/manage-consultant',
          element: <ManageConsultant></ManageConsultant>
        }
      ]
    }
  ]);

export default router;