import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layouts = () => (
  <>
    <Navbar />
    <main className="container mx-auto px-4 mt-2 mb-2">
      <Outlet />
    </main>
  </>
);

export default Layouts;
