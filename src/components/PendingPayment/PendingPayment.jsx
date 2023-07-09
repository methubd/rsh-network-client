import { Link } from "react-router-dom";
import './PendingPayment.css'

const PendingPayment = () => {    
    
    return (
        <div className="pending-payment-container fade-in">
            <h6>Warning</h6>
            <p>You have a pending payment, please pay the bill to make sure the desired service: </p>
            <Link to='/dashboard/pending-appointment' className="pending-payment-btn">Check Now</Link>
        </div>
    );
};

export default PendingPayment;