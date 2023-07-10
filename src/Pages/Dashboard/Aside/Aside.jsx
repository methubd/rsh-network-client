import { ArrowLeftIcon, HomeIcon, UserGroupIcon, UserCircleIcon, TableCellsIcon, BanknotesIcon, CurrencyBangladeshiIcon , Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

import { Link } from 'react-router-dom';
import './Aside.css'
import useAdmin from '../../../Hooks/useAdmin';
import useAuth from '../../../Hooks/useAuth';
import { useState } from 'react';

const Aside = () => {
    const {user} = useAuth();
    const [isAdmin] = useAdmin();
    const [dbMenu, setDBMenu] = useState(false);

    const handleMenu = () => {
        console.log('Clicked');
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
                    { user &&
                        
                    <>
                    <Link className='dashboard-btn btn-with-icon' to='/'> 
                    <HomeIcon className='dashboard-menu-icon'/> Home
                    </Link>
                    
                    <Link className='dashboard-btn btn-with-icon' to='/dashboard/'>
                    <TableCellsIcon className='dashboard-menu-icon'/> Prescription
                    </Link>

                    <Link className='dashboard-btn btn-with-icon' to='/dashboard/pending-appointment'>
                    <CurrencyBangladeshiIcon className='dashboard-menu-icon'/> Pending Service
                    </Link>

                    <hr className='hr-line' />

                    <Link className='dashboard-btn btn-with-icon' to='/dashboard/'> 
                    <BanknotesIcon className='dashboard-menu-icon'/> Payment History
                    </Link>

                    <hr className='hr-line' />
                    </>
                    
                    }
                    
                    {/* Admin Routes */}
                    {  isAdmin &&
                    <>
                        <Link className='dashboard-btn btn-with-icon' to='/dashboard/manage-users'>
                        <UserGroupIcon className='dashboard-menu-icon'/> Manage Users
                        </Link>

                        <Link className='dashboard-btn btn-with-icon' to='/dashboard/manage-consultant'>
                        <UserCircleIcon className='dashboard-menu-icon'/> Manage Consultants
                        </Link>
                        <hr className='hr-line' />
                    </>
                    }

                    <Link className='dashboard-btn btn-with-icon' to='/'> <ArrowLeftIcon className='dashboard-menu-icon'/> Logout  </Link>
                </aside>}
            </div>
            
    );
};

export default Aside;