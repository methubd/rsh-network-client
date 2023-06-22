import { Outlet } from "react-router-dom";
import Aside from "../Pages/Dashboard/Aside/Aside";
import './Dashboard.css'

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <Aside></Aside>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;