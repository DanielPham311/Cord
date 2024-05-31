import React from 'react';
import '../index.css'
import cordLogo from '../assets/cord.png'
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800 loginPageContainer">
      <img alt='Cord Logo' src={cordLogo} className="absolute top-4 left-4 w-28 h-28"></img>
      <div className="w-full max-w-md bg-gray-800 text-white p-8 rounded-lg">
        <h1 className="text-2xl font-bold text-center mb-2 ">Create An Account</h1>
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-bold text-gray-300 font-mono">EMAIL *</label>
            <input
              type="email"
              id="email"
              required
              className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="displayName" className="block text-sm font-bold text-gray-300 font-mono">DISPLAY NAME</label>
            <input
              type="text"
              id="displayName"
              className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="username" className="block text-sm font-bold text-gray-300 font-mono">USERNAME *</label>
            <input
              type="text"
              id="username"
              required
              className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-bold text-gray-300 font-mono">PASSWORD *</label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="dob" className="block text-sm font-bold text-gray-300 font-mono">DATE OF BIRTH *</label>
            <input
              type="date"
              id="dob"
              className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Continue
            </button>
            <p className="font-extralight text-gray-400 text-sm mt-1">By registering, you agree to Cord's <Link to="#" className="font-light text-indigo-600 hover:text-indigo-500">Terms of Service</Link> and <Link to="#" className="font-light text-indigo-600 hover:text-indigo-500">Privacy Policy</Link></p>
          </div>
        </form>
        <div className="mt-6 text-center">
          <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
            Already have an account?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
