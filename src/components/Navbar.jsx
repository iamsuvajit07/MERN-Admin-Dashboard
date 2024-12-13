import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-gray-900 text-white p-4 sticky top-0 z-10 flex justify-between items-center">
      <h1 className="text-xl">Admin Panel</h1>
      <div>
        <button className="px-4 py-2 bg-blue-600 rounded">Profile</button>
      </div>
    </div>
  );
};

export default Navbar;
