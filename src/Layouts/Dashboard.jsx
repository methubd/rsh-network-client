import { Suspense, lazy } from 'react';
import { Outlet } from "react-router-dom";
const AsideBar = lazy(() => import("../Pages/Dashboard/Aside/Aside"))
import './Dashboard.css'

import Loading from '../components/Loading/Loading';


const Dashboard = () => {
    return (
        <div className="">
            <div className="dashboard-container">
            {/* Lazy Load */}
            <Suspense fallback={<Loading />}>
            <AsideBar/>
            <Outlet></Outlet>
            </Suspense>

            </div>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Dashboard;