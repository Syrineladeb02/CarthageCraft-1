
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './Components/Both/NavigationBar';
import HIW from './Components/HIW';
import Advantages from './Components/Advantages';
import Home from './Components/Home';
import Register from './Components/Both/Register';
import Login from './Components/Both/Login';
import ArtisanDashboard from './Components/Artisan/ArtisanDashboard';

import ProductDetails from './Components/Artisan/ProductDetails';
import Order from './Components/Buyer/Order'; // Import your Order component
import ListOfProducts from './Components/Artisan/ListOfProducts';
import { products } from "./Components/Data";
import { useState } from "react";

function App() {
  
  const [product, setProduct] = useState(products);
  const [sum, setSum] = useState(0);

  const handleIncrement = (id) => {
    setProduct(
      product.map((elt) => {
        if (elt.id === id) {
          return { ...elt, qte: elt.qte + 1 };
        }
        return elt;
      })
    );
  };
  const handleDecrement = (id) => {
    setProduct(
      product.map((elt) => {
        if (elt.id === id && elt.qte > 0) {
          return { ...elt, qte: elt.qte - 1 };
        }
        return elt;
      })
    );
  };

  const handleDelete = (id) => {
    setProduct(product.filter((elt) => elt.id !== id));
  };

  const handleSumIncrement = (price) => {
    setSum(sum + price);
  };
  const handleSumDecrement = (article) => {
    if (article.qte > 0) {
      setSum(sum - article.price);
    }
  };

  const handleSumDelete = (article) => {
    setSum(sum - article.price * article.qte);
  };


return (
  <div >
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/advantages" element={<Advantages />} />
        <Route path="/how-it-works" element={<HIW />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<ArtisanDashboard />} />
        
       
        <Route path="/order" element={<Order />} />
       
      <Route
        path="/products"
        element={
          <ListOfProducts
            product={product}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            handleDelete={handleDelete}
            sum={sum}
            handleSumIncrement={handleSumIncrement}
            handleSumDecrement={handleSumDecrement}
            handleSumDelete={handleSumDelete}
          />
        }
      />
       <Route path= "/products/:id" element ={<ProductDetails product={product}  />}  />

        {/* The /products route can be removed or adjusted as needed */}
      </Routes>
    </Router>
  </div>
);
}

export default App;
