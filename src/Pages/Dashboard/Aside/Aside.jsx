import { ArrowLeftIcon, HomeIcon, UserGroupIcon, UserCircleIcon, TableCellsIcon, BanknotesIcon, CurrencyBangladeshiIcon , Bars3Icon, XMarkIcon, HandThumbUpIcon, ChatBubbleBottomCenterIcon } from '@heroicons/react/24/solid'

import { Link } from 'react-router-dom';
import './Aside.css'
import useAdmin from '../../../Hooks/useAdmin';
import useAuth from '../../../Hooks/useAuth';
import { useState } from 'react';
import useDoctor from '../../../Hooks/useDoctor';

const Aside = () => {
    const {user, logOut} = useAuth();
    const [isAdmin] = useAdmin();
    const [isDoctor] = useDoctor();

    const [dbMenu, setDBMenu] = useState(false);

    const handleMenu = () => {}

    const handleLogout = () => {
        logOut()
    }

    return (
                   
            <div>

                <div className='dashboard-menu-expand'>                    
                    {                    
                    dbMenu ?
                    <XMarkIcon onClick={() => handleMenu(setDBMenu(!dbMenu))} className='dashboard-expand-icon'/> 
                        :
                    <Bars3Icon onClick={() => handleMenu (setDBMenu(!dbMenu))} className='dashboard-expand-icon'/>                    
                    }
                </div>

                {dbMenu &&
                    <aside> 

                    {/* User Routes */}
                    { user && isAdmin || isDoctor ||                        
                    <>
                        <Link className='dashboard-btn btn-with-icon' to='/'> 
                        <HomeIcon className='dashboard-menu-icon'/> Home
                        </Link>
                        
                        <Link className='dashboard-btn btn-with-icon' to='/dashboard/prescription'>
                        <TableCellsIcon className='dashboard-menu-icon'/> Prescription
                        </Link>

                        <Link className='dashboard-btn btn-with-icon' to='/dashboard/pending-appointment'>
                        <CurrencyBangladeshiIcon className='dashboard-menu-icon'/> Pending Service
                        </Link>

                        <hr className='hr-line' />

                        <Link className='dashboard-btn btn-with-icon' to='/dashboard/payment-history'> 
                        <BanknotesIcon className='dashboard-menu-icon'/> Payment History
                        </Link>

                        <Link className='dashboard-btn btn-with-icon' to='/dashboard/update-profile'> 
                        <UserCircleIcon className='dashboard-menu-icon'/>Update Profile
                        </Link>

                        <Link className='dashboard-btn btn-with-icon' to='/dashboard/add-review'> 
                        <HandThumbUpIcon className='dashboard-menu-icon'/>Add your Review
                        </Link> 

                        <Link className='dashboard-btn btn-with-icon' to='/live-chat'> 
                        <ChatBubbleBottomCenterIcon className='dashboard-menu-icon'/>Live Chat
                        </Link> 

                        <hr className='hr-line' />
                    </>
                    
                    }

                    {/* Doctor Routes */}
                    { isDoctor &&
                    
                    <>
                        <Link className='dashboard-btn btn-with-icon' to='/'> 
                        <HomeIcon className='dashboard-menu-icon'/> Home
                        </Link>

                        <Link className='dashboard-btn btn-with-icon' to='/dashboard/my-appointments'>
                        <TableCellsIcon className='dashboard-menu-icon'/>My Appointments
                        </Link>

                        <Link className='dashboard-btn btn-with-icon' to='/dashboard/update-profile'> 
                        <UserCircleIcon className='dashboard-menu-icon'/>Update Profile
                        </Link>

                        <Link className='dashboard-btn btn-with-icon' to='/dashboard/chat-response'> 
                        <ChatBubbleBottomCenterIcon className='dashboard-menu-icon'/>Chats
                        </Link>
                    </>
                    }
                    
                    
                    {/* Admin Routes */}
                    {  isAdmin &&
                    <>
                        <Link className='dashboard-btn btn-with-icon' to='/'> 
                        <HomeIcon className='dashboard-menu-icon'/> Home
                        </Link>

                        <Link className='dashboard-btn btn-with-icon' to='/dashboard/update-profile'> 
                        <ChatBubbleBottomCenterIcon className='dashboard-menu-icon'/>Chats
                        </Link>

                        <Link className='dashboard-btn btn-with-icon' to='/dashboard/manage-appointments'>
                        <UserGroupIcon className='dashboard-menu-icon'/>Manage Appointments
                        </Link>

                        <Link className='dashboard-btn btn-with-icon' to='/dashboard/manage-appointments'>
                        <UserGroupIcon className='dashboard-menu-icon'/>Add Health Package
                        </Link>

                        <Link className='dashboard-btn btn-with-icon' to='/dashboard/manage-consultant'>
                        <UserCircleIcon className='dashboard-menu-icon'/>Manage Consultants
                        </Link>

                        <Link className='dashboard-btn btn-with-icon' to='/dashboard/manage-users'>
                        <UserGroupIcon className='dashboard-menu-icon'/>Manage Users
                        </Link>

                        <hr className='hr-line' />
                    </>
                    }

                    <Link onClick={handleLogout} className='dashboard-btn btn-with-icon' to='/signin'> <ArrowLeftIcon className='dashboard-menu-icon'/> Logout  </Link>
                </aside>}
            </div>
            
    );
};

export default Aside;