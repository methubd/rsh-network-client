import { Outlet } from "react-router-dom";
import Aside from "../Pages/Dashboard/Aside/Aside";
import './Dashboard.css'

const Dashboard = () => {
    // https://www.instagram.com/mcgeewealth/ try this one as dashboard
    return (
        <div className="dashboard-container">
            
            <Aside></Aside>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;