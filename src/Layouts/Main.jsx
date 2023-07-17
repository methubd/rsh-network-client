import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";


const Main = () => {
    const location = useLocation()

    const noHeaderFooter = location.pathname.includes('/signup') || location.pathname.includes('/signin');

    const noFooter = location.pathname.includes('/make-appointment') || location.pathname.includes('/live-chat') ;

    return (
        <div>
            {noHeaderFooter ||  <Navbar></Navbar>}
            <Outlet></Outlet>
            {noHeaderFooter || noFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;