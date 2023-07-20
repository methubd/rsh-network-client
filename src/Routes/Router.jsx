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
import UpdateProfile from "../Pages/Dashboard/UpdateProfile/UpdateProfile";
import Prescription from "../Pages/Dashboard/Prescription/Prescription";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import ManageAppointments from "../Pages/Dashboard/ManageAppointments/ManageAppointments";
import AddReview from "../Pages/Dashboard/AddReview/AddReview";
import BookHealthPackage from "../Pages/Home/HealthPackages/BookHealthPackage/BookHealthPackage";
import LiveChat from "../Pages/LiveChat/LiveChat";
import MyAppointments from "../Pages/Dashboard/MyAppointments/MyAppointments";
import ChatResponse from "../Pages/Dashboard/ChatResponse/ChatResponse";
import DoctorProfile from "../Pages/DoctorProfile/DoctorProfile";



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
          path: '/live-chat',
          element: <PrivateRoute> <LiveChat></LiveChat> </PrivateRoute>
        },
        {
            path: 'doctors',
            element: <AllDoctors></AllDoctors>
        },
        {
            path: 'doctor-profile/:id',
            element: <DoctorProfile></DoctorProfile>,
            loader: async ({params}) => {
              return fetch(`https://rsh-network-server.vercel.app/consultant/${params.id}`)
            }
        },
        {
            path: 'signin',
            element: <SignIn></SignIn>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
        },
        
        // Private Routes with ID
        {
          path: '/make-appointment/:id',
          element: <PrivateRoute> <MakeAppointment/> </PrivateRoute>,
          loader: ({params}) => `https://rsh-network-server.vercel.app/consultant/${params.id}`
        },
        {
          path: '/book-health-package/:id',
          element: <PrivateRoute> <BookHealthPackage/> </PrivateRoute>,
          loader: ({params}) => `https://rsh-network-server.vercel.app/health-packages/${params.id}`
          
        },        
      ]
    },

    // Dashboard Layout
    {
      path: '/dashboard',
      element: <PrivateRoute> <Dashboard></Dashboard> </PrivateRoute>,
      children: [
        
        // User Routes
        {
          path: '/dashboard/',
          element: <DashboardHome></DashboardHome>
        },

        {
          path: '/dashboard/pending-appointment',
          element: <PendingAppointment/>
        },
        {
          path: '/dashboard/update-profile',
          element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
        }, 
        {
          path: '/dashboard/prescription',
          element: <PrivateRoute><Prescription></Prescription></PrivateRoute>
        },
        {
          path: '/dashboard/payment-history',
          element: <PrivateRoute> <PaymentHistory></PaymentHistory> </PrivateRoute>
        }, 
        
        {
          path: '/dashboard/add-review',
          element: <PrivateRoute> <AddReview></AddReview> </PrivateRoute>
        },

        // Admin Routes
        {
          path: '/dashboard/manage-appointments',
          element: <PrivateRoute> <ManageAppointments></ManageAppointments> </PrivateRoute>
        }, 
        {
          path: '/dashboard/manage-users',
          element: <ManageUsers></ManageUsers>
        },
        {
          path: '/dashboard/manage-consultant',
          element: <ManageConsultant></ManageConsultant>
        }, 

        {
          path: '/dashboard/add-consultant/:id',
          element: <PrivateRoute><AddConsultant></AddConsultant></PrivateRoute>, 
          loader: async ({params}) => await `https://rsh-network-server.vercel.app/users/${params.id}`
        },

        // Doctor Routes
        {
          path: '/dashboard/my-appointments',
          element: <PrivateRoute> <MyAppointments></MyAppointments> </PrivateRoute>
        },
        
        // Chat Response Nested Routes
        {
          path: '/dashboard/chat-response',
          element: <PrivateRoute> <ChatResponse></ChatResponse> </PrivateRoute>
        },

      ]
    },

  ]);

export default router;