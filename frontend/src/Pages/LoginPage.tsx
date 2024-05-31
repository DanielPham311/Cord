import React from 'react';
import '../index.css'
import cordLogo from '../assets/cord.png'
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800 loginPageContainer">
      <img alt='Cord Logo' src={cordLogo} className="absolute top-4 left-4 w-28 h-28"></img>
      <div className="w-full max-w-md bg-gray-800 text-white p-8 rounded-lg">
        <h1 className="text-2xl font-bold text-center mb-2">Welcome back!</h1>
        <h2 className="mb-8 text-center font-medium text-gray-500 text-base">We're so glad to see you here!</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="emailphonenumber" className="block text-sm font-medium text-gray-300 font-mono">EMAIL OR PHONE NUMBER *</label>
            <input
              type="text"
              id="emailphonenumber"
              required
              className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 font-mono">PASSWORD *</label>
            <input
              type="password"
              id="password"
              required
              className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <Link to="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot your password?
              </Link>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </div>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400">
            Need an account?{' '}
            <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
