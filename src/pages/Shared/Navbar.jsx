import { Link } from "react-router-dom";

const Navbar = () => {
    const navItems = <>
        <li><Link to='/' className="uppercase font-bold">Home</Link></li>
        <li><Link to='/our-menu' className="uppercase font-bold">Our Menu</Link></li>
    </>

    return (
            <div className="navbar bg-black fixed z-10 bg-opacity-40 text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl uppercase h-full">
                        <div>
                            <span className="font-bold block">bistroboss</span>
                            <span className="">restaurant</span>
                        </div>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Get started</a>
                </div>
            </div>
    );
};

export default Navbar;