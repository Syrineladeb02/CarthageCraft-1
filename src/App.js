// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure to include the correct import statement for React Bootstrap CSS
import NavigationBar from './Components/Both/NavigationBar';
import HIW from './Components/HIW';
import Advantages from './Components/Advantages';
import Home from './Components/Home';
import Register from './Components/Both/Register';
import Login from './Components/Both/Login';
import ProductDetails from './Components/Artisan/ProductDetails';
import Order from './Components/Buyer/Order';
import ListOfProducts from './Components/Artisan/ListOfProducts';
import BuyerProfile from './Components/Buyer/BuyerProfile';

import axios from 'axios';

function App() {
  const [product, setProduct] = useState([]);
  const [sum, setSum] = useState(0);
  const [artisans, setArtisans] = useState([]);

  // Fetch artisans data once and store it in state
  useEffect(() => {
    axios
      .get('http://localhost:6006/api/artisans')
      .then((res) => {
        setArtisans(res.data.artisans);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

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
    <div>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/advantages" element={<Advantages />} />
          <Route path="/how-it-works" element={<HIW />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/buyerProfile" element={<BuyerProfile />} />

          {/* Updated Route for ProductDetails */}
          <Route
            path="/products/:id"
            element={
              <ProductDetails
                product={product}
                setProduct={setProduct}
                artisans={artisans}
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
                setProduct={setProduct}
                artisans={artisans}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
