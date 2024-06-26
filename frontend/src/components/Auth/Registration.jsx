import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getUser, register } from "../../redux/actions/authActions";


const Registration = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem('jwt');
  const {auth}= useSelector(store=>store);
  

  useEffect(()=>{
    if(jwt){
      dispatch(getUser(jwt))
    }
  },[jwt])

  const handleRegistration = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const userData = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
    };

    console.log("userData in registration : ", userData);
    dispatch(register(userData))
    .then(() => {
      navigate('/')
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  
  

  const handleGoogleLogin = () => {
    // Add your Google login logic here
    console.log("Logging in with Google");
  };

  return (
    <div className="bg-blue-200 flex items-center justify-center h-screen">
      {/* Registration section */}
      <div className="bg-[#f9f5ed] p-8 rounded-xl shadow-md md:w-[500px] w-full h-fit m-auto">
        <form onSubmit={handleRegistration}>
          <h2 className="text-2xl font-extrabold mb-6 text-[#2F3C7E]">
            Register.
          </h2>
          <div className="flex justify-between gap-5">
            <div className="mb-4 w-full">
              <label htmlFor="firstName" className="block text-[#2F3C7E]">
                firstName
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="w-full px-4 py-2 border rounded mt-1 focus:outline-none focus:border-blue-500"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="mb-4 w-full">
              <label htmlFor="lastName" className="block text-[#2F3C7E]">
                lastName
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="w-full px-4 py-2 border rounded mt-1 focus:outline-none focus:border-blue-500"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-[#2F3C7E]">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border rounded mt-1 focus:outline-none focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4 relative">
            <label htmlFor="password" className="block text-[#2F3C7E]">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border rounded mt-1 focus:outline-none focus:border-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            
          </div>
          <button
            type="submit"
            className={`w-full  bg-[#2F3C7E] text-gray-100 py-2 rounded hover:shadow-md focus:outline-none mb-4`}
          >
            Register
          </button>
        </form>

        <div className="mb-4 text-[#2F3C7E]">
          Already have an account?{" "}
          <Link to="/login" className="text-gray-500 hover:underline">
            Login here
          </Link>
        </div>
        <div className="flex items-center justify-center my-4">
          <div className="w-full border-t border-gray-300"></div>
          <div className="mx-4 text-[#2F3C7E]">Or</div>
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="flex items-center bg-white text-royalblue-500 py-2 rounded-full hover:bg-gray-100 px-4"
            onClick={handleGoogleLogin}
          >
            <img
              src="../src/assets/google.png" 
              alt="Google Icon"
              className="mr-2 w-5 h-5"
            />
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registration;
