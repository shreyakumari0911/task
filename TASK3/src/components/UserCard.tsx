import React from 'react';

interface UserCardProps {
  name: string;
  email: string;
}

const UserCard: React.FC<UserCardProps> = ({ name, email }) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex items-center">
          <div className="h-12 w-12 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-xl text-white font-bold">
              {name.charAt(0).toUpperCase()}
            </span>
          </div>
          <div className="ml-4">
            <h2 className="text-xl font-bold text-gray-900">{name}</h2>
            <p className="text-gray-500">{email}</p>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex justify-between">
            <button className="text-blue-500 hover:text-blue-700">
              Contact
            </button>
            <button className="text-gray-500 hover:text-gray-700">
              View Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
