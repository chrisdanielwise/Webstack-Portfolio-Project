import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../commons/auth";
import logo from "../../assets/HomeHub.jpeg";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function NavLinks({ auth, handleLogout }) {
  return (
    <nav className="flex items-center">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-[#74c69d] block p-3 text-lg navlink"
            : "block p-3 text-lg navlink"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive
            ? "text-blue-500 block p-3 text-lg navlink"
            : "block p-3 text-lg navlink"
        }
      >
        About
      </NavLink>
      <NavLink
        to="/property"
        className={({ isActive }) =>
          isActive
            ? "text-[#74c69d] block p-3 text-lg navlink"
            : "block p-3 text-lg navlink"
        }
      >
        Property
      </NavLink>
      {/* <NavLink
        to="/agent"
        className={({ isActive }) =>
          isActive
            ? "text-[#74c69d] block p-3 text-lg navlink"
            : "block p-3 text-lg navlink"
        }
      >
        Agent
      </NavLink> */}
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive
            ? "text-blue-500 block p-3 text-lg navlink"
            : "block p-3 text-lg navlink"
        }
      >
        Contact
      </NavLink>
      {/* <NavLink
        to="/blog"
        className={({ isActive }) =>
          isActive
            ? "text-[#74c69d] block p-3 text-lg navlink"
            : "block p-3 text-lg navlink"
        }
      >
        Blog
      </NavLink> */}
      <button className="bg-[#74c69d] hover:bg-[#5a8e71]">
        {!auth.user ? (
          <NavLink to="/userForm">Get Started</NavLink>
        ) : (
          <NavLink to="/agentDashboard">{auth.user}</NavLink>
        )}
      </button>
      {auth.user ? (
        <div className="block p-3 text-lg navlink text-gray-300" onClick={handleLogout}>
          Logout
        </div>
      ) : null}
    </nav>
  );
}



function Header() {
  const auth = useAuth();
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };

  return (
    <div className="Header bg-[#29434e] text-[#FFFFFF] w-full">
      <div className="max-w-[1440px] mx-auto py-6 px-10 flex justify-between">
        <div>
          <NavLink to="/">
            <img
              className="h-50 w-[50px] ml-16"
              src={logo}
              alt="Housify logo"
            ></img>
          </NavLink>
        </div>
        <div className="hidden lg:flex">
          <NavLinks auth={auth} handleLogout={handleLogout} />
        </div>

        <div
          onClick={handleNav}
          className="block lg:hidden mr-0 p-2 rounded-2xl hover:bg-purple-700 duration-300"
        >
          {nav ? (
            <AiOutlineClose size={30} className="" />
          ) : (
            <AiOutlineMenu size={30} className="" />
          )}
        </div>

        <div
          className={
            nav
              ? "w-full left-0 flex justify-center text-center bg-zinc-900 top-[80px] absolute z-10"
              : "absolute left-[-100%]"
          }
        >
          <NavLinks auth={auth} handleLogout={handleLogout} />
        </div>
      </div>
    </div>
  );
}

export default Header;