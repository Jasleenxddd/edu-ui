import React from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomeScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center min-h-screen bg-white px-4">
      {/* Card with margin from top */}
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-xl p-6 shadow-md text-center mt-48">
        <h1 className="text-xl font-semibold text-gray-900 mb-2">
          Welcome to PopX
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Lorem ipsum dolor sit amet, <br />
          consectetur adipiscing elit,
        </p>

        <div className="flex flex-col gap-3">
          <button
            className="bg-[#6C25FF] text-white font-semibold py-3 px-6 rounded-md"
            onClick={() => navigate('/register')}
          >
            Create Account
          </button>
          <button
            className="bg-[#F7F8F9] text-[#6C25FF] font-semibold py-3 px-6 rounded-md"
            onClick={() => navigate('/login')}
          >
            Already Registered? Login
          </button>
          <button
            className="bg-gray-100 text-gray-800 font-semibold py-3 px-6 rounded-md border border-gray-300"
            onClick={() => navigate('/account-settings')}
          >
            Go to Account Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
