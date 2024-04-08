import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { Link,useNavigate } from "react-router-dom";
import { login } from "../../redux/actions/authActions";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {auth} = useSelector(store=>store)


  const handleLogin = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const userData = {
      email: data.get("email"),
      password: data.get("password"),
    };

    console.log("login Data is : ",userData );

    dispatch(login(userData))
    .then(() => {
      navigate('/')
      window.location.reload();
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
    <div className="flex h-screen items-center justify-center bg-blue-200">
      {/* Image on the left (hidden on small screens) */}

      {/* Login section */}
      <div className="bg-[#f9f5ed] p-8 rounded-xl shadow-md md:w-[500px] w-full">
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
          </div>
          <button
            className="w-full bg-[#2F3C7E] text-gray-100 py-2 rounded hover:shadow-md focus:outline-none mb-4"
            type="submit"
          >
           {auth.isLoading?"loading...":"login"}
          </button>
          {
            auth.error && <div className=" text-red-700">{auth.error}</div>
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
