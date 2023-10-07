import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo.png'

const Navbar = () => {
    const links = <div className=" flex flex-col lg:flex-row gap-4 text-xl ">
        <li><NavLink
            to='/'
            className={({ isActive }) =>
                isActive ? " underline" : " hover:text-yellow-400"
            }
        >Home
        </NavLink></li>
        <li><NavLink
            to='about'
            className={({ isActive }) =>
                isActive ? " underline" : "hover:text-yellow-400"
            } 
        >About
        </NavLink></li>
        <li><NavLink
            to='/contact'
            className={({ isActive }) =>
                isActive ? " underline" : "hover:text-yellow-400"
            }
        >Contact
        </NavLink></li>
        <li><NavLink
            to='/orders'
            className={({ isActive }) =>
                isActive ? "underline" : "hover:text-yellow-400"
            }
        >Orders
        </NavLink></li>
    </div>
    return (
        <div className=" sticky top-0 z-50 bg-white hover:bg-yellow-50">
            <div className="navbar max-w-6xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-32">
                            {links}
                            <button className=" bg-yellow-400 lg:px-8 py-2 rounded-2xl ">Sign Out</button>
                        </ul>
                    </div>
                    <div className=" ml-[220px] md:ml-[610px] lg:ml-0 w-[100%] lg:w-[140%]">
                        <div className="">
                            <img className="w-[100%] lg:w-[20%]" src={logo} alt="" />
                        </div>
                        <div className="w-[143%]">
                            <h2 className=" lg:w-[60%] font-bold text-xs lg:text-xl">SRS WEDDING</h2>
                        </div>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end opacity-0 lg:opacity-100">
                    <Link to='/login'><button className="hover:text-white bg-yellow-400 lg:px-8 py-2 rounded-2xl">Log In</button></Link>
                    <button className=" hover:text-white bg-yellow-400 lg:px-8 py-2 rounded-2xl ">Sign Out</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;