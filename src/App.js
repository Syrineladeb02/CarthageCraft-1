import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import NavigationBar from './Components/Both/NavigationBar';
import Home from './Components/Home';
import Advantages from './Components/Advantages';
import HIW from './Components/HIW';
import Register from './Components/Both/Register';
import Login from './Components/Both/Login';
import BuyerProfile from './Components/Buyer/BuyerProfile';
import ProductDetails from './Components/Artisan/ProductDetails';
import Order from './Components/Buyer/Order';
import ListOfProducts from './Components/Artisan/ListOfProducts';
import ArtisanRegistration from './Components/Artisan/ArtisanRegistration';
import BuyerRegistration from './Components/Buyer/BuyerRegistration';

import { products } from './Components/Data';

function App() {
  const [product, setProduct] = useState(products);
  const [sum, setSum] = useState(0);
  const [artisans, setArtisans] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8008/api/artisans")
      .then(res => {
        setArtisans(res.data.artisans);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  const handleIncrement = (id) => {
    setProduct(
      product.map((elt) => (elt.id === id ? { ...elt, qte: elt.qte + 1 } : elt))
    );
  };

  const handleDecrement = (id) => {
    setProduct(
      product.map((elt) => (elt.id === id && elt.qte > 0 ? { ...elt, qte: elt.qte - 1 } : elt))
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
          <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/order/:id" element={<Order />} />
          <Route path="/buyer-profile" element={<BuyerProfile/>} />
        <Route path="/buyer-registration" element={<BuyerRegistration />} />
        <Route path="/artisan-registration" element={<ArtisanRegistration />} />
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
          <Route
            path="/products/:id"
            element={
              <ProductDetails
                products={product}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
                handleSumIncrement={handleSumIncrement}
                handleSumDecrement={handleSumDecrement}
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
