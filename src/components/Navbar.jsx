import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="flex px-14 gap-2 bg-white shadow-md w-full h-20">
    <div className="flex align-middle h-20">
      <h1 className="m-auto w-60 h-9 font-bold text-3xl text-center text-sky-600">Bookstore CMS</h1>
    </div>
    <div className="w-60 mt-6 mr-0 mb-0 mx-0">
      <ul className="flex gap-2 mt-1">
        <li className="nav-link">
          <NavLink className=" text-sm text-black hover:text-gray-600 active:bg-gray-200" to="/books">BOOKS</NavLink>
        </li>
        <li className="nav-link">
          <NavLink className=" text-sm  text-black hover:text-gray-600 active:bg-gray-200" to="/categories">CATEGORIES</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);
export default Navbar;
