import useBookedAppointments from "../../../Hooks/useBookedAppointments";
import DashboardTitle from "../../../components/DashboardTitle/DashboardTitle";
import PendingPayment from "../../../components/PendingPayment/PendingPayment";
import './DashboardHome.css'

const DashboardHome = () => {

    const [appointments] = useBookedAppointments();

    return (
        <div className="dashboard-home-container">
            <DashboardTitle title="Dashboard Home"/>
            
            { appointments.length > 0 &&
                <PendingPayment/>
            }

        </div>
    );
};

export default DashboardHome;