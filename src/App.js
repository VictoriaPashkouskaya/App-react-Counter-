import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CountersPage from './component/CountersPage';
import Greeting from './component/Greeting';
import Header from './component/Header';
import Home from './component/Home';
import NavButtons from './component/NavButtons';

const App = () => {
  const dishes = [
    { id: 1, name: 'plato 1', description: 'Este es el plato 1', price: 10 },
    { id: 2, name: 'plato 2', description: 'Este es el plato 2', price: 20 },
    { id: 3, name: 'plato 3', description: 'Este es el plato 3', price: 15 },
  ];

  return (
    <Router>
      <div>
        <NavButtons />
        <Routes>
          <Route path="/counters" element={<CountersPage />} />
          <Route path="/greeting" element={<Greeting name="Euralio" />} />
          <Route path="/restaurant" element={<><Header /><Home dishes={dishes} /></>} />
          <Route path="/" element={<h1>Welcome to the React Exercises</h1>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
