
import { AiOutlineShoppingCart } from "react-icons/ai";
import love_img from '../../assets/love.png';
import cart from '../../assets/cart.png';
import { NavLink, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  const links=<>
      <li className="font-bold"> <NavLink to="/">Home</NavLink></li>
      <li className="font-bold"> <NavLink to="/statitics">Statistics</NavLink> </li>
      <li className="font-bold"><NavLink to="/dashboard">Dashboard</NavLink> </li>
  </>
  const location=useLocation();
 const isHomePage = location.pathname === "/";

  return (
    <div className={isHomePage? "navbar bg-[#9538E2] text-white rounded-t-lg": "navbar bg-base-100"}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {
              links
            }
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Gadget Heaven</a>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 lg:flex gap-3 ">
          {links}
        </ul>
      </div>
      <div className="navbar-end flex gap-3">
       
        <Link to="/dashboard"> <button className="btn btn-circle"><img className="w-5 h-5" src={cart} alt="" /></button></Link>
        <Link to="/dashboard"> <button className="btn btn-circle"><img className="w-5 h-5" src={love_img} alt="" /></button></Link>
        
      </div>
    </div>
  );
};

export default Navbar;
