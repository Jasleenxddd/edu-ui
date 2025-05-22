import React from 'react';

const LoginScreen = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-white px-4">
      {/* Card Container with border, padding, rounded edges */}
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-xl p-6 shadow-md mt-48">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Signin to your <br /> PopX account
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,
        </p>

        <form className="space-y-4">
          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-[#6C25FF] mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-[#6C25FF]"
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-[#6C25FF] mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-[#6C25FF]"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-gray-300 text-white font-semibold py-3 rounded-md"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
