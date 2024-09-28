import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthProvider";
import logo from '../image/swad.jpeg';
import Login from "./Login";
import Logout from "./Logout";

function Navbar() {
  const [authUser, setAuthUser] = useAuth();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [sticky, setSticky] = useState(false);
  const [profileImage, setProfileImage] = useState(localStorage.getItem('profileImage') || "https://st.depositphotos.com/1537427/3571/v/450/depositphotos_35717211-stock-illustration-vector-user-icon.jpg");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    if (authUser?.profileImage) {
      setProfileImage(authUser.profileImage);
    }
  }, [authUser]);

  useEffect(() => {
    const element = document.documentElement;
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const dropdownClasses = theme === "dark" ? "bg-gray-500 text-white" : "bg-base-100";
 

  const navItems = (
    <>
      <li><a href="/" className="text-lg">Home</a></li>
      <li tabIndex={0} className="dropdown relative">
  {/* Categories Button for both small and large screens */}
  <a
    href="#"
    className="lg:block block text-lg"
    onClick={toggleDropdown}
  >
    Categories
  </a>

  {/* Dropdown Content */}
  <ul
    className={`${
      dropdownOpen ? 'block' : 'hidden'
    } lg:absolute lg:shadow-lg lg:rounded-md lg:space-y-0 p-2 lg:p-0 rounded-md shadow-lg z-10 ${
      theme === "dark" ? 'bg-gray-700 text-white' : 'bg-white text-black'
    }`}
  >
    <li><a href="/breakfast" className="text-lg block px-4 py-2">Breakfast</a></li>
    <li><a href="/thali" className="text-lg block px-4 py-2">Thali</a></li>
    <li><a href="/roti" className="text-lg block px-4 py-2">Roti</a></li>
    <li>
      <a href="/drinks" className="text-lg block px-4 py-2">Drinks</a>
    </li>
    <li>
      <a href="/sweet" className="text-lg block px-4 py-2">Sweet</a>
    </li>
    <li>
      <a href="/custmization" className="text-lg block px-4 py-2">Customize</a>
    </li>
    <li>
      <a href="/all" className="text-lg block px-4 py-2">All</a>
    </li>
  </ul>
</li>

      <li><a href="/Contact" className="text-lg">Contact</a></li>
      <li><a href="/aboutus" className="text-lg">About Us</a></li>
    </>
  );

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = reader.result;
        setProfileImage(imageUrl);
        localStorage.setItem('profileImage', imageUrl);
        setAuthUser(prev => ({ ...prev, profileImage: imageUrl }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 max-w-screen-2xl mx-auto md:px-20 px-4 transition-all duration-300 ease-in-out ${
        sticky ? 'shadow-md' : ''
      } ${
        theme === "light"
          ? 'bg-[#4ade80] text-black'
          : 'bg-base-200 dark:bg-slate-700 dark:text-white'
      }`}
    >
      <div className="navbar">
        <div className="navbar-start flex items-center">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 ${dropdownClasses}`}>
              {navItems}
            </ul>
          </div>
          <nav className="flex items-center">
            <div className="h-10 w-10 sm:h-16 sm:w-16 flex items-center justify-center rounded-full border border-green-600 overflow-hidden">
              <img src={logo} alt="Gujju's Desi Swad Logo" className="h-full w-full object-cover" />
            </div>
          </nav>
        </div>
        <div className="navbar-end space-x-3 flex items-center">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItems}</ul>
          </div>
          <label className="swap swap-rotate">
            <input type="checkbox" className="theme-controller" />
            <svg
              className="swap-off fill-current w-7 h-7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
             <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            <svg
              className="swap-on fill-current w-7 h-7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
               <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
          {authUser ? (
            <>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost bg-green-800 text-white">
                  <div className="indicator">
                    🛒 food cart
                  </div>
                </label>
               
                <div tabIndex={0} className={`mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow ${dropdownClasses}`}>
                  <div className="card-body">
                    <div className="card-actions">
                      <button className="btn btn-primary btn-block">
                        <a href="/cart" className="flex items-center bg-dark-green text-white px-3 py-2 rounded-md duration-300 cursor-pointer space-x-2">
                          view cart
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-8 h-8 md:w-24 md:h-12 rounded-full overflow-hidden">
                    <img src={profileImage} alt="Profile" />
                  </div>
                </label>
                <ul tabIndex={0} className={`mt-3 p-2 shadow menu menu-sm dropdown-content rounded-box w-52 ${dropdownClasses}`}>
                  <li>
                    <a href="/userprofile" className="justify-between">
                      View Profile
                    </a>
                  </li>
                  <li>
                    <input type="file" onChange={handleImageUpload} className="hidden" id="fileInput" />
                    <label htmlFor="fileInput" className="justify-between">Change Profile Image</label>
                  </li>
                  <li><Logout /></li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <a
                className="bg-green-800 text-white px-3 py-2 rounded-md duration-300 cursor-pointer"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
                
              >
                Login
              </a>
              <Login />
              <a
                href="/user/signup"
                className="bg-green-800 text-white px-3 py-2 rounded-md duration-300 cursor-pointer"
              >
                SignUp
              </a>
            </>
          )}
         
        </div>
      </div>
    </div>
  );
}

export default Navbar;
