import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Books from './pages/Books';
import Categories from './pages/Categories';
import Layouts from './components/Layout';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layouts />}>
        <Route path="/books" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Route>
    </Routes>
  );
}

export default App;
