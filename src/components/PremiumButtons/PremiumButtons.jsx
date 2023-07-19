import { ChatBubbleBottomCenterIcon, DocumentCheckIcon, BuildingStorefrontIcon, HeartIcon } from "@heroicons/react/24/solid";
import './PremiumButtons.css'
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import Loading from "../Loading/Loading";


const PremiumButtons = () => {
    const {user, loading} = useAuth();

    if(loading){
        return <Loading/>
    }

    const handleCreateChatBox = () => {
        const newMessageBox = {
            senderEmail: user?.email, 
            senderName: user?.displayName,
            content: []
        }
        
        // for undefine user barrigate
        if(user?.email){

            axios.post(`http://localhost:5000/chats/${user?.email}`, newMessageBox)
            .then(data => {
            if(data.data.success === 200){
                Swal.fire(`Hey, ${user?.displayName}, We are happy to see you again!`)
                return
            }
            else{
                Swal.fire(`Hey, ${user?.displayName}, Welcome to our Emergency Department`)
            }            
        })

        }
    }

    return (
        <div className='premium-btn-container container'>

                <div onClick={handleCreateChatBox} className='single-btn-container'>
                    <Link to='/live-chat' className="btn-text-style btn-premium-chat"> <ChatBubbleBottomCenterIcon className='btn-icons'/> LIVE CHAT<br />with Doctor</Link>
                    <p className='btn-description'>20 Minute Consultation is Free, you may try your first Consultation</p>
                </div>

                <div className='single-btn-container'>
                    <button className='btn-premium-health'> <DocumentCheckIcon className='btn-icons'/>One Medical Investigations</button>
                    <p className='btn-description'>Including normal delivery, providing quality service.</p>
                </div>

                <div className='single-btn-container'>
                    <button className='btn-premium-medicine'> <BuildingStorefrontIcon className='btn-icons'/>On Health Pharmacy</button>
                    <p className='btn-description'>Order Medicine Anywhere from Dhaka City</p>
                </div>

                <div className='single-btn-container'>
                    <button className='btn-premium-package'> <HeartIcon className='btn-icons'/>Senior Citizen <br /> Care</button>
                    <p className='btn-description'>Order Medicine Anywhere from Dhaka City</p>
                </div>

            </div>
    );
};

export default PremiumButtons;