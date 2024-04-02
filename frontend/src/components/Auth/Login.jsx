import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { Link,useNavigate } from "react-router-dom";
import { loginUser } from "../../redux/reducer/userSlice";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {loading, error} = useSelector((state)=>state.user); 

  const handleLogin = (event) => {
    // Add your login logic here
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const userData = {
      email: data.get("email"),
      password: data.get("password"),
    };

    
    console.log(
      "login Data is : ",userData
    );

    dispatch(loginUser(userData)).then((result)=>{
      if(result.payload){
        setEmail('');
        setPassword('');
        navigate('/');
      }
    })
  };

  const handleGoogleLogin = () => {
    // Add your Google login logic here
    console.log("Logging in with Google");
  };

  return (
    <div className="flex items-center justify-center bg-blue-200">
      {/* Image on the left (hidden on small screens) */}
      <div className="hidden md:block md:w-1/2">
        <img
          src="../src/assets/shopping.png" // Replace with your image path
          alt="Shopping Icon"
          className="w-full h-[510px] object-cover object-top"
        />
      </div>

      {/* Login section */}
      <div className="bg-[#f9f5ed] p-8 rounded shadow-md md:w-1/2 w-full">
        <form onSubmit={handleLogin}>
          <h2 className="text-2xl font-extrabold mb-6 text-[#2F3C7E]">
            Login.
          </h2>
          <div className="mb-4">
            <label htmlFor="email" className="block text-[#2F3C7E]">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="w-full px-4 py-2 border rounded mt-1 focus:outline-none focus:border-[#2F3C7E]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4 relative">
            <label htmlFor="password" className="block text-[#2F3C7E]">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="w-full px-4 py-2 border rounded mt-1 focus:outline-none focus:border-[#2F3C7E]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="absolute top-1/2 right-4 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "👁️" : "👁️‍🗨️"}
            </button>
          </div>
          <button
            className="w-full bg-[#2F3C7E] text-gray-100 py-2 rounded hover:shadow-md focus:outline-none mb-4"
            type="submit"
          >
           {loading?"loading...":"login"}
          </button>
          {
            error && <div className=" text-red-700">{error}</div>
          }
        </form>
        <div className="mb-4">
          <a href="#" className="text-gray-500 hover:underline">
            Forgot password?
          </a>
        </div>
        <div className="mb-4 text-[#2F3C7E]">
          Don't have an account?{" "}
          <Link to="/registration" className="text-gray-500 hover:underline">
            Register here
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
              src="../src/assets/google.png" // Replace with your Google icon image path
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

export default Login;
