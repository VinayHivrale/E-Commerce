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
import { Outlet, Link,useNavigate } from "react-router-dom";
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
  const { auth } = useSelector((store) => store);
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
      name: "MEN",
      color: "blue",
    },
    {
      name: "WOMEN",
      color: "yellow",
    },
    {
      name: "KIDS",
      color: "red",
    },
    {
      name: "BEAUTY",
      color: "pink",
    },
  ];

  return (
    <header>
      <div
        className=" bg-white text-black w-full h-[80px] flex justify-between fixed top-0 z-10 lg:px-10 "
        onMouseLeave={handleLeave}
      >
        <div className="hidden my-auto lg:flex flex-shrink-0">
          <div className="lg:hidden my-auto text-center ml-5">
            <MenuIcon />
          </div>
          <img
            className="ml-5 w-20"
            src="https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoid2VhcmVcL2ZpbGVcL1B3WUJiODk0UEhoUHJuZjVZWTNaLnBuZyJ9:weare:IW04UAZrgvnUICRzsXQpMW9SVbdmPbMEWGthhvjvpLI?width=1700&height=966"
            alt=""
          />

          {isTrue && selectedCategory && (
            <Navbarhidden category={selectedCategory} Color={selectedColor} handleLeave={handleLeave} />
          )}
        </div>

        <div className="hidden lg:flex bg-white  justify-evenly align-middle w-[500px] font-sans">
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

        <div className="w-[550px] mr-5 hidden lg:block p-5">
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
        </div>

        <div className="Navbar-icons hidden lg:flex mt-[20px] items-center w-fit pb-[15px] font-sans">
          <div className=" text-center text-[12px] ">
            <div className="relative inline-block text-center text-[12px]">
              <div className=" cursor-pointer" onClick={toggleDropdown}>
                <Avatar
                  className="text-black"
                  sx={{
                    bgcolor: deepOrange[400],
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
                      onClick={auth.user?handleLogout:toggleDropdown}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      {auth.user ? "logout" : "login"}
                    </Link>
                    <Link
                      to="/profile"
                      onClick={auth.user ? handleLogout : toggleDropdown}
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
          <Link to="/cart-bag" className="no-underline mx-7">
            <div className="text-center text-[12px]">
              <ShoppingCartOutlinedIcon />
              <p className="p-0 m-0 font-bold">Bag</p>
            </div>
          </Link>
        </div>
      </div>

      <div className="lg:hidden w-full bg-white shadow-xl text-black fixed top-0 z-10 lg:px-10">
        <div className=" w-full h-[80px] flex justify-between ">
          <div className=" my-auto flex flex-shrink-0">
            <div
              onClick={handleSidebar}
              className=" cursor-pointer lg:hidden my-auto text-center ml-5"
            >
              <MenuIcon />
            </div>
            <img
              className="ml-5 w-20"
              src="https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoid2VhcmVcL2ZpbGVcL1B3WUJiODk0UEhoUHJuZjVZWTNaLnBuZyJ9:weare:IW04UAZrgvnUICRzsXQpMW9SVbdmPbMEWGthhvjvpLI?width=1700&height=966"
              alt=""
            />
          </div>

          <div className="Navbar-icons flex mt-[20px] items-center w-fit pb-[15px] font-sans">
            <div
              className={` text-center text-[12px] ${
                searchToggle ? "hidden" : ""
              } `}
            >
              <button onClick={handleSearchToggle}>
                <SearchIcon />
                <p className="p-0 m-0 font-bold">Search</p>
              </button>
            </div>

            <Link to="/profile" className="no-underline mx-4">
              <div className=" text-center text-[12px] ">
                <PersonOutlinedIcon />
                <p className="p-0 m-0 font-bold">Profile</p>
              </div>
            </Link>
          </div>
        </div>
        <div className={searchToggle ? "" : "hidden"}>
          {" "}
          {/* Use conditional class based on searchToggle */}
          <div className="bg-black w-full h-fit p-2 flex items-center">
            <button type="reset " onClick={handleSearchToggle}>
              <KeyboardBackspaceIcon sx={{ color: "white" }} />
            </button>

            <form
              className="w-full relative flex items-center ml-1 text-gray-400 focus-within:text-gray-800"
              action=""
              method="get"
            >
              <input
                className="w-full ml-1 pr-10 rounded-2xl focus:border-0 focus:ring-2 focus:ring-[#353535]"
                type="text"
                placeholder="Search..."
              />
              <button
                type="submit"
                onClick={handleSearchToggle}
                className="absolute right-3"
              >
                <SearchIcon />
              </button>
            </form>
          </div>
        </div>
      </div>

      {siderbar && <Sidebar handleSidebar={handleSidebar} />}
    </header>
  );
}