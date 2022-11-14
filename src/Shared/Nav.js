import React, { useContext, useEffect, useState } from 'react';import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
    Avatar,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import logo from '../img/logo.png'
import { AuthContext } from '../context/AuthProvider';

const Nav = () => {
  const {user, logOut} = useContext(AuthContext);
  
  const navList = <>
  <Typography
    as="li"
    variant="small"
    className="p-1 font-normal text-neutral-400"
  >
    <Link to='/' className="flex items-center">
      Home
    </Link>
  </Typography>
  <Typography
    as="li"
    variant="small"
    className="p-1 font-normal text-neutral-400"
  >
    <Link to="/items" className="flex items-center">
      All Items
    </Link>
  </Typography>
  {
    user?.uid && <Typography
    as="li"
    variant="small"
    className="p-1 font-normal text-neutral-400"
  >
    <Link to='/myreview' className="flex items-center">
      My Review
    </Link>
  </Typography>
  }
  <Typography
    as="li"
    variant="small"
    className="p-1 font-normal text-neutral-400"
  >
    <Link to='/additem' className="flex items-center">
      Add Item
    </Link>
  </Typography>
  <Typography
    as="li"
    variant="small"
    className="p-1 font-normal text-neutral-400"
  >
    <Link to='/blog' className="flex items-center">
      Blog
    </Link>
  </Typography>
</>

    const [openNav, setOpenNav] = useState(false);
 
    useEffect(() => {
        window.addEventListener(
        "resize",
        () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const handleLogOut = () =>{
        logOut()
        .then(()=>{})
        .catch(error => console.error(error))
    }
    return (
        <Navbar className="mx-auto bg-neutral-100 rounded-none px-4 py-2">
        <div className="container mx-auto flex items-center justify-between text-neutral-400">
            <div className='flex justify-center items-center'>
                <img src={logo} className='h-20' alt="" />
                <Link
                to='/'
                className="mr-4 cursor-pointer py-1.5 font-normal"
                >
                <span>KT Kitchen</span>
                </Link>
            </div>
            <div className="hidden lg:block">
            <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
              {navList}
            </ul>
            </div>
            {
              user?.uid ?
              <div className="flex gap-4">
                <Button onClick={handleLogOut} size="sm" className="hidden bg-cyan-400 lg:inline-block">
                <span>Logout</span>
                </Button>
                <Avatar className='w-10 h-10 hidden bg-slate-400 lg:inline-block' src={user.photoURL} alt="avatar" variant="circular" />
              </div>
              :
              <Link to='/login'>
              <Button size="sm" className="hidden bg-cyan-400 lg:inline-block">
              <span>Login</span>
              </Button>
              </Link>
            }
            <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
            >
            {openNav ? (
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                />
                </svg>
            ) : (
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                />
                </svg>
            )}
            </IconButton>
        </div>
        <MobileNav className='lg:hidden' open={openNav}>
            <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
              {navList}
            </ul>
            {
              user?.uid ?
              <Button onClick={handleLogOut} size="sm" className="bg-cyan-400 lg:inline-block">
                <span>Logout</span>
              </Button>
              :
              <Link to='/login'>
              <Button size="sm" className="bg-cyan-400 mb-2">
              <span>Login</span>
              </Button>
              </Link>
            }
            
        </MobileNav>
    </Navbar>
    );
};



export default Nav;