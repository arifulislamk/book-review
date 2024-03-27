import { NavLink } from "react-router-dom";

const Header = () => {

    const links = <>
        <li><NavLink className={({ isActive }) => isActive ?
            'font-semibold text-[#23BE0A] border border-[#23BE0A] rounded-md p-2' : ' text-[#131313CC]'}
            to="/">Home</NavLink></li>

        <li><NavLink className={({ isActive }) => isActive ?
            'font-semibold text-[#23BE0A] border border-[#23BE0A] rounded-md p-2' : ' text-[#131313CC]'}
            to="/listedBooks" >Listed Books</NavLink> </li>

        <li><NavLink className={({ isActive }) => isActive ?
            'font-semibold text-[#23BE0A] border border-[#23BE0A] rounded-md p-2' : ' text-[#131313CC]'}
            to="/pagesToRead">Pages to Read</NavLink> </li>

        <li><NavLink className={({ isActive }) => isActive ?
            'font-semibold text-[#23BE0A] border border-[#23BE0A] rounded-md p-2' : ' text-[#131313CC]'}
            to="/popularWriter">Writers</NavLink> </li>
        <li><NavLink className={({ isActive }) => isActive ?
            'font-semibold text-[#23BE0A] border border-[#23BE0A] rounded-md p-2' : ' text-[#131313CC]'}
            to="/popularBooks"> Popular Books</NavLink> </li>
    </>

    return (
        <div className=" font-work mt-2 navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost font-bold text-3xl">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className=" text-[18px] gap-4 menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end hidden md:flex">
                <a className="btn bg-[#23BE0A] text-[18px] text-white font-semibold mr-4 ">Sign In</a>
                <a className="btn bg-[#59C6D2] text-[18px] text-white font-semibold ">Sign Up</a>
            </div>
        </div>
    );
};

export default Header;