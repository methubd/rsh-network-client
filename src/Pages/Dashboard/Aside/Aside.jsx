import { ArrowLeftIcon, HomeIcon, UserGroupIcon, UserCircleIcon, TableCellsIcon, BanknotesIcon, CurrencyBangladeshiIcon  } from '@heroicons/react/24/solid'

import { Link } from 'react-router-dom';
import './Aside.css'
import useAdmin from '../../../Hooks/useAdmin';
import useAuth from '../../../Hooks/useAuth';

const Aside = () => {
    const {user} = useAuth();
    const [isAdmin] = useAdmin();

    return (
        <aside>
            
            {/* <button>Hide</button> */}
            
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
            <CurrencyBangladeshiIcon className='dashboard-menu-icon'/> Pending Appointments
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
        </aside>
    );
};

export default Aside;