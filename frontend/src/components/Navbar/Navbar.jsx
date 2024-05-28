import React, { useState, useEffect } from "react";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Navbarhidden from "./Navbarhidden";
import Sidebar from "../Sidebar/Sidebar";
import { getUser, logout } from "../../redux/actions/authActions";
import { Avatar } from "@mui/material";
import "./Navbar.css";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { deepOrange } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";

export default function Navbar() {
  const [isTrue, setIsTrue] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedColor, setSelectedColor] = useState("");
  const [searchToggle, setSearchToddle] = useState(false);
  const [siderbar, setSiderbar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const jwt = localStorage.getItem("jwt");
  const dispatch = useDispatch();
  const { auth, cart } = useSelector((store) => store);
  const navigate = useNavigate();

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    console.log(user);
  };

  const handleLogout = () => {
    dispatch(logout());
    setIsOpen(false);
    navigate('/');
    window.location.reload();
    console.log(auth);
  };

  function handleOver(category, color) {
    setIsTrue(true);
    setSelectedColor(color);
    setSelectedCategory(category);
  }

  function handleLeave() {
    setIsTrue(false);
    setSelectedCategory(null);
  }

  function handleSearchToggle() {
    setSearchToddle(!searchToggle);
  }
  function handleSidebar() {
    setSiderbar(!siderbar);
  }

  const quickLinks = [
    {
      name: "Men",
      color: "blue",
    },
    {
      name: "Women",
      color: "yellow",
    },
    {
      name: "Kids",
      color: "red",
    },
    {
      name: "Beauty",
      color: "pink",
    },
  ];

  return (
    <header>
      <div
        className=" bg-gray-50 text-black w-full h-[80px] flex justify-between fixed top-0 z-10 lg:px-10 "
        onMouseLeave={handleLeave}
      >
        <div className="flex">
          <div className="my-auto flex flex-shrink-0">
            <img
              className="ml-5 w-16"
              src=""
              alt=""
            />

            {isTrue && selectedCategory && (
              <Navbarhidden
                category={selectedCategory}
                Color={selectedColor}
                handleLeave={handleLeave}
              />
            )}
          </div>

          <div className="flex  justify-evenly align-middle w-[500px] font-sans">
            {quickLinks.map((links) => (
              <div
                key={links.name}
                className="flex  w-[80px] h-[80px]  justify-center"
                onMouseOver={() => handleOver(links.name, links.color)}
                style={{
                  borderBottom:
                    selectedCategory === links.name
                      ? `2px solid ${links.color}`
                      : "",
                }}
              >
                <a
                  className="text-sm no-underline m-auto text-[#333] font-bold block p-[10px]"
                  href="#"
                >
                  {links.name}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="w-[550px] mr-5 hidden lg:block p-5">
          <form
            className="w-full relative flex items-center text-gray-400 focus-within:text-gray-800"
            action=""
            method="get"
          >
            <input
              className="w-full ml-1 pr-10 rounded-xl  focus:border-0 focus:ring-2 focus:ring-[#353535]"
              type="text"
              placeholder="Search..."
            />
            <button type="submit" className="absolute right-3">
              <SearchIcon />
            </button>
          </form>
        </div> */}

        <div className="Navbar-icons flex mt-[20px] items-center  pb-[15px] font-sans">
          <div className=" text-center text-[12px] mx-7">
            <div className="relative inline-block text-center text-[12px]">
              <div className=" cursor-pointer" onClick={toggleDropdown}>
                <Avatar
                  className="text-black"
                  sx={{
                    bgcolor: "#f06292",
                    color: "black",
                    cursor: "pointer",
                  }}
                >
                  {auth.user?.firstName[0].toUpperCase()}
                </Avatar>
              </div>
              {isOpen && (
                <div className="absolute top-14 -left-10 z-10 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <Link
                      to={auth.user ? "/" : "/login"}
                      onClick={auth.user ? handleLogout : toggleDropdown}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      {auth.user ? "logout" : "login"}
                    </Link>
                    <Link
                      to="/profile"
                      onClick={toggleDropdown}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Account
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
          <Link className="no-underline mx-7">
            <div className="text-center text-[12px] ">
              <FavoriteBorderIcon />
              <p className="p-0 m-0 font-bold">Wishlist</p>
            </div>
          </Link>
          <Link to="/cart" className="no-underline mx-7">
            <div className="text-center text-[12px] relative">
              <ShoppingCartOutlinedIcon />
              <p className="p-0 m-0 font-bold">Cart</p>
              {
                auth.user && cart.cart?.totalItem && <span class=" absolute -top-3 -right-3 -z-10 inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">{cart.cart?.totalItem}</span>
              }
           </div>
          </Link>
        </div>
      </div>

      {siderbar && <Sidebar handleSidebar={handleSidebar} />}
    </header>
  );
}
