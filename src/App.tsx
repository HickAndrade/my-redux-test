import React from 'react';
import Header from './components/Header';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import ProductDetail from './components/ProductDetail';
import ProductListing from './components/ProductListing';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/product/:productId' element={ <ProductDetail /> } />
          <Route path='/' element={ <ProductListing/> } />
          <Route>Not Found</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
