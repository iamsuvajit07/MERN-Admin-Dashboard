import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Total Products</h3>
          <p className="text-3xl">150</p>
        </div>
        <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Total Users</h3>
          <p className="text-3xl">1200</p>
        </div>
        <div className="bg-yellow-500 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Total Sales</h3>
          <p className="text-3xl">$5000</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
