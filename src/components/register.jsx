import React, { useState } from 'react';

const RegisterScreen = () => {
  const [isAgency, setIsAgency] = useState('yes');

  return (
    <div className="flex flex-col items-center min-h-screen bg-white px-4">
      {/* Card Container */}
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-xl p-6 shadow-md mt-10">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Create your <br /> PopX account
        </h2>

        <form className="space-y-4 mt-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-[#6C25FF] mb-1">
              Full Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              defaultValue="Marry Doe"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-[#6C25FF]"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-[#6C25FF] mb-1">
              Phone number<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              defaultValue="Marry Doe"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-[#6C25FF]"
            />
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-sm font-medium text-[#6C25FF] mb-1">
              Email address<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              defaultValue="Marry Doe"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-[#6C25FF]"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-[#6C25FF] mb-1">
              Password<span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              defaultValue="Marry Doe"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-[#6C25FF]"
            />
          </div>

          {/* Company Name */}
          <div>
            <label className="block text-sm font-medium text-[#6C25FF] mb-1">
              Company name
            </label>
            <input
              type="text"
              defaultValue="Marry Doe"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-[#6C25FF]"
            />
          </div>

          {/* Are you an Agency? */}
          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">
              Are you an Agency?<span className="text-red-500">*</span>
            </p>
            <div className="flex gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="agency"
                  value="yes"
                  checked={isAgency === 'yes'}
                  onChange={() => setIsAgency('yes')}
                  className="accent-[#6C25FF] w-4 h-4"
                />
                <span className="text-sm text-gray-800">Yes</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="agency"
                  value="no"
                  checked={isAgency === 'no'}
                  onChange={() => setIsAgency('no')}
                  className="accent-[#6C25FF] w-4 h-4"
                />
                <span className="text-sm text-gray-800">No</span>
              </label>
            </div>
          </div>

          {/* Create Account Button */}
          <button
            type="submit"
            className="w-full bg-[#6C25FF] text-white font-semibold py-3 rounded-md mt-2"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterScreen;
