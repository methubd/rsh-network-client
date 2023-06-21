import { ChatBubbleBottomCenterIcon, DocumentCheckIcon, BuildingStorefrontIcon } from "@heroicons/react/24/solid";
import './PremiumButtons.css'


const PremiumButtons = () => {

    return (
        <div className='premium-btn-container container'>

                <div className='single-btn-container'>
                    <button className='btn-premium-chat'> <ChatBubbleBottomCenterIcon className='btn-icons'/>LIVE CHAT<br />with Doctor</button>
                    <p className='btn-description'>20 Minute Consultation is Free, you may try your first Consultation</p>
                </div>

                <div className='single-btn-container'>
                    <button className='btn-premium-health'> <DocumentCheckIcon className='btn-icons'/>One Health Protections</button>
                    <p className='btn-description'>Including normal delivery, providing quality service.</p>
                </div>

                <div className='single-btn-container'>
                    <button className='btn-premium-medicine'> <BuildingStorefrontIcon className='btn-icons'/>On Health Pharmacy</button>
                    <p className='btn-description'>Order Medicine Anywhere from Dhaka City</p>
                </div>

            </div>
    );
};

export default PremiumButtons;