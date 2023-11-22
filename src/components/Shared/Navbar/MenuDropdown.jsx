import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import avatarImg from "../../../assets/images/placeholder.jpg";

const MenuDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        {/* Become A Host btn */}
        <div className="hidden  md:flex gap-6">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending
                ? "btn btn-sm font-medium btn-ghost"
                : isActive
                ? "btn btn-sm px-2 rounded-md font-medium text-white hover:text-black bg-indigo-950"
                : "btn btn-sm font-medium btn-ghost"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
              isPending
                ? "btn btn-sm font-medium btn-ghost"
                : isActive
                ? "btn btn-sm font-medium text-white hover:text-black px-2 rounded-md  bg-indigo-950"
                : "btn btn-sm font-medium btn-ghost"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/appointment"
            className={({ isActive, isPending }) =>
              isPending
                ? "btn btn-sm font-medium btn-ghost"
                : isActive
                ? "btn btn-sm font-medium text-white hover:text-black px-2 rounded-md  bg-indigo-950"
                : "btn btn-sm font-medium btn-ghost"
            }
          >
            Appointment
          </NavLink>
          <NavLink
            to="/reviews"
            className={({ isActive, isPending }) =>
              isPending
                ? "btn btn-sm font-medium btn-ghost"
                : isActive
                ? "btn btn-sm font-medium text-white hover:text-black px-2 rounded-md  bg-indigo-950"
                : "btn btn-sm font-medium btn-ghost"
            }
          >
            Reviews
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive, isPending }) =>
              isPending
                ? "btn btn-sm  btn-ghost"
                : isActive
                ? "btn btn-sm  text-white hover:text-black px-2 rounded-md  bg-indigo-950"
                : "btn btn-sm font-medium btn-ghost"
            }
          >
            Contact
          </NavLink>
        </div>
        {/* Dropdown btn */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            {/* Avatar */}
            <img
              className="rounded-full"
              referrerPolicy="no-referrer"
              src={user && user.photoURL ? user.photoURL : avatarImg}
              alt="profile"
              height="30"
              width="30"
            />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            <Link
              to="/"
              className="block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"
            >
              Home
            </Link>

            <Link
              to="/login"
              className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuDropdown;
