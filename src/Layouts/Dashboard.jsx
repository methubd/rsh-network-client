import { Outlet } from "react-router-dom";
import Aside from "../Pages/Dashboard/Aside/Aside";
import './Dashboard.css'
import Footer from "../Pages/Shared/Footer/Footer";


const Dashboard = () => {
    // https://www.instagram.com/mcgeewealth/ try this one as dashboard
    return (
        <div className="">
            <div className="dashboard-container">
            <Aside></Aside>
            <Outlet></Outlet>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Dashboard;