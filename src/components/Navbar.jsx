import React from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="flex px-14 gap-2 bg-white shadow-md w-full h-20">
    <div className="flex align-middle h-20">
      <h1 className="m-auto w-60 h-9 font-bold text-3xl text-center text-sky-600">Bookstore CMS</h1>
    </div>
    <div className="w-60 mt-6 mr-0 mb-0 mx-0">
      <ul className="flex justify-center gap-2 mt-1">
        <li className="nav-link">
          <NavLink className=" text-md text-black hover:text-gray-600 active:bg-gray-300" to="/books">BOOKS</NavLink>
        </li>
        <li className="nav-link">
          <NavLink className=" text-md  text-black hover:text-gray-600 active:bg-gray-300" to="/categories">CATEGORIES</NavLink>
        </li>
      </ul>
    </div>
    <BsPersonCircle className="absolute right-0 top-0 mt-6 mr-12 text-blue-400 mb-0 mx-0 hover:cursor-pointer" size="2em" />
  </nav>
);
export default Navbar;
