import React from "react";
import MaxWidthContainer from "../components/mmw";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";

const Login = () => {
  return (
    <div className="bg-hero-pattern h-full">
      <MaxWidthContainer>
        <div className="container  flex flex-col lg:flex-row bg-white rounded-xl justify-between items-center">
          {/* Left section: Login Form */}
          <div className="flex flex-col justify-center items-center lg:w-1/2 w-full p-4 h-full">
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6 text-center ">
              LOGIN
            </h1>
            {/* Username and password inputs */}
            <input
              type="text"
              placeholder="Username"
              className="border border-gray-300 font-semibold rounded-lg px-4 py-2 mb-4 w-1/2 bg-button-color"
            />
            <input
              type="password"
              placeholder="Password"
              className="border border-gray-300 rounded-lg px-4 py-2 mb-6 w-1/2 bg-button-color"
            />
            {/* Login button */}
            <button className="bg-blue-600 text-white py-2 rounded-lg w-1/4 shadow-lg hover:bg-blue-700">
              Login Now
            </button>

            {/* Social Login Options */}
            <div className="text-center text-gray-500 mt-6">or Login with</div>
            <div className="flex justify-center space-x-4 mt-4">
              <button className="bg-red-500 text-white py-2 w-24 px-4 h-12 flex justify-center items-center rounded-lg hover:bg-red-600">
                <FaGoogle size={30} />
              </button>
              <button className="bg-blue-700 text-white py-2 px-4 w-24 h-12 flex justify-center items-center rounded-lg hover:bg-blue-800">
                <FaFacebookF size={30} />
              </button>
            </div>
          </div>

          {/* Right section: Image and Info */}
          <div className="hidden lg:flex lg:w-1/2 justify-center items-center p-8 bg-hero-dark">
            <div className="text-center bg-bg-rect bg-no-repeat bg-contain">
              <h2 className="text-4xl p-10 font-semibold text-white text-left">
                Access to Care, <br /> Anywhere You Are
              </h2>
              <img
                src="/img/avatar.png"
                alt="Doctor"
                className="h-full z-10 w-auto mb-6"
              />
            </div>
          </div>
        </div>
      </MaxWidthContainer>
    </div>
  );
};

export default Login;
