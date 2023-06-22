import { Link, useNavigate } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import './Navbar.css'
import { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import { Toaster, toast } from 'react-hot-toast';

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const {user, logOut} = useAuth();
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
        .then(() => {
            toast.success('Successfully Sign Out!')
        })
        navigate('/signin')
    }
    
    const menuItems = <>
                    <Link className='menu-item' to='/'>Home</Link>
                    <Link className='menu-item' >Services</Link>
                    <Link className='menu-item' to='/doctors'>Doctors</Link>
                    <Link className='menu-item' >Departments</Link>
                    <Link className='menu-item' >Pricing</Link>
                    <Link className='menu-item' >Gallery</Link>
                    <Link className='menu-item' >Blog</Link>
                    <Link className='menu-item' >Contact</Link>
                    { user ?
                        <button className='menu-item' onClick={handleLogOut}>Sign out
                        </button>
                        :
                        <Link className='menu-item' to='signin' >Sign In</Link>
                    }
                    </>

    const handleExpandMenu = () => {
        return menuItems;
    }
    return (
        <nav>
            <Toaster/>

            <div className='logo-container'>
                <Link to='/'><img className='logo' src="https://i.ibb.co/k8qL7Jf/logo.png" alt="" /></Link>
            </div>

            <div className='menu-container'>
                {menuItems}
            </div>
                {/* Menu Toggle Btn */}
                { menu ?
                <XMarkIcon onClick={() => handleExpandMenu(setMenu(!menu))} className='menu-icon'/>
                :
                <Bars3Icon onClick={() => handleExpandMenu(setMenu(!menu))} className='menu-icon'/> 
                }                

            { menu ? 
            <div className='expanded-menu'>
                    {menuItems}
            </div> : " "
            }
        </nav>
    );
};

export default Navbar;