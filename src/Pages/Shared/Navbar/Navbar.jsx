import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import './Navbar.css'
import { useState } from 'react';

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const menuItems = <>
                    <Link className='menu-item' to='/'>Home</Link>
                    <Link className='menu-item' to='/appointment' >Appointments</Link>
                    <Link className='menu-item' >Services</Link>
                    <Link className='menu-item' >Contact</Link>
                    <Link className='menu-item' >Login</Link>
                    </>

    const handleExpandMenu = () => {
        console.log('btn clicked');
        console.log(menu);
        return menuItems;
    }
    return (
        <nav>
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