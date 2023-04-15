import React from "react";

const Login = () => {
  return (
    <div className="h-[100vh] ">
      <div className="flex flex-col items-center justify-center h-[100vh]">
        <h1 className="text-4xl font-bold">Login</h1>
        <div className="flex flex-col items-center justify-center mt-10">
          <input
            type="text"
            placeholder="Username"
            className="w-80 h-10 px-5 mb-5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-80 h-10 px-5 mb-5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
          <button className="w-80 h-10 px-5 mb-5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
