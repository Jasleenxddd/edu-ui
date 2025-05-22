import React from 'react';
import { useNavigate } from 'react-router-dom';
import image from '../images.jpeg'
const AccountSettings = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center min-h-screen bg-white px-4 py-10 sm:py-20">
      {/* Card Container */}
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-xl p-6 shadow-md">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 text-center">
          Account Settings
        </h2>

        {/* Profile Info */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-6">
          {/* Avatar with edit icon */}
          <div className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center bg-gray-100">
  <img
    src={image}
    alt="Avatar"
    className="w-full h-full object-cover"
  />
            <div className="absolute bottom-0 right-0 w-5 h-5 bg-[#6C25FF] rounded-full flex items-center justify-center">
              <svg
                className="text-white w-3 h-3"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M4 3a2 2 0 00-2 2v1h2V5h1V3H4zm0 4H2v8a2 2 0 002 2h8a2 2 0 002-2v-1h-2v1H4V7zm12-4h-3v2h1v1h2V5a2 2 0 00-2-2zM9 9a1 1 0 00-.707.293l-2 2A1 1 0 007 13h1v2h2v-2h1a1 1 0 00.707-1.707l-2-2A1 1 0 009 9z" />
              </svg>
            </div>
          </div>

          {/* User Info */}
          <div className="text-center sm:text-left">
            <p className="font-semibold text-gray-900">Marry Doe</p>
            <p className="text-sm text-gray-500 mb-2">Marry@Gmail.Com</p>
            <p className="text-sm text-gray-700">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam.
            </p>
          </div>
        </div>

        {/* Back Button */}
        <button
          className="w-full bg-[#6C25FF] text-white font-semibold py-3 rounded-md"
          onClick={() => navigate('/')}
        >
          Back to Welcome
        </button>
      </div>
    </div>
  );
};

export default AccountSettings;
