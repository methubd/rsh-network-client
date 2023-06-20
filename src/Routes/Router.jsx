import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";

import AllDoctors from "../Pages/AllDoctors/AllDoctors";

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
            path: '/doctors',
            element: <AllDoctors></AllDoctors>
        }
      ]
    },
  ]);

export default router;